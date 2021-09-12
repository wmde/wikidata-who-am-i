<template>
  <div class="secrets">
    <img :src="url" v-for="{ id, url } in images" :key="id" :alt="id"/>
  </div>
</template>

<script>
import { SPARQLQueryDispatcher } from "./SPARQLQueryDispatcher";

const endpointUrl = 'https://query.wikidata.org/sparql';
const queryDispatcher = new SPARQLQueryDispatcher( endpointUrl );

export default {
  name: 'Secrets',
  props: [ 'listOfPossibleSecrets' ],
  data() {
    return { images : [] }
  },
  async created() {
    this.images = ( await queryDispatcher.query(
        `SELECT ?thumb ?item WHERE {
        VALUES ?item { ${ this.listOfPossibleSecrets.map( i => 'wd:' + i ).join( ' ' ) } }
        ?item wdt:P18 ?image .

        # hacky way to get a thumbnail from commons per https://stackoverflow.com/a/67332685
        BIND(REPLACE(wikibase:decodeUri(STR(?image)), "http://commons.wikimedia.org/wiki/Special:FilePath/", "") as ?fileName) .
        BIND(REPLACE(?fileName, " ", "_") as ?safeFileName)
        BIND(MD5(?safeFileName) as ?fileNameMD5) .
        BIND(CONCAT("https://upload.wikimedia.org/wikipedia/commons/thumb/", SUBSTR(?fileNameMD5, 1, 1), "/", SUBSTR(?fileNameMD5, 1, 2), "/", ?safeFileName, "/650px-", ?safeFileName) as ?thumb)
      }`
    ) ).results.bindings.map( ( row ) => {
      return {
        id: row.item.value,
        url: row.thumb.value,
      };
    } );
  }
}
</script>

<style scoped>
img{
  height: 50px;
  padding: 5px;
}
</style>

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
        `SELECT ?image ?item WHERE {
        VALUES ?item { ${ this.listOfPossibleSecrets.map( i => 'wd:' + i ).join( ' ' ) } }
        ?item wdt:P18 ?image .
      }`
    ) ).results.bindings.map( ( row ) => {
      return {
        id: row.item.value,
        url: row.image.value,
      };
    } );
  }
}
</script>

<style scoped>
img{
  width: 50px;
  height: 50px;
  padding: 5px;
}
</style>

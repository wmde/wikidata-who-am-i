<template>
  <div class="secrets">
    <img :src="image" v-for="( image, i) in images" :key="i" alt="fdgf"/>
  </div>
</template>

<script>
import {SPARQLQueryDispatcher} from "./SPARQLQueryDispatcher";

export default {
  name: "Secrets",
  props: [ 'listOfPossibleSecrets' ],
  data(){
    return { images : [] }
  },
  async created() {
     this.images = await Promise.all(this.listOfPossibleSecrets.map( async (item) => {
           const response = await queryDispatcher.query(`SELECT ?img WHERE { wd:${item} wdt:P18 ?img }`);
           return response.results.bindings[0].img.value;
         }
     ));
  }
}

const endpointUrl = 'https://query.wikidata.org/sparql';
const queryDispatcher = new SPARQLQueryDispatcher( endpointUrl );

</script>

<style scoped>
img{
  width: 50px;
  height: 50px;
  padding: 5px;
}
</style>

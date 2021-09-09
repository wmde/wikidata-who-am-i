<template>
  <div id="app">
    <Question />
  </div>
</template>

<script>
import Question from './components/Question';
import '@wmde/wikit-vue-components/dist/wikit-vue-components.css';

const listOfPossibleSecrets = [
    'Q42', // Douglas Adams
    'Q937', // Albert Einstein
    'Q567', // Angela Merkel
    'Q52', // Wikipedia
    'Q10943' // cheese
]

export default {
  name: 'App',
  components: {
    Question,
  },
  created() {
    this.secret = listOfPossibleSecrets[Math.floor(Math.random() * listOfPossibleSecrets.length)]
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

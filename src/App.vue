<template>
	<div id="app">
    <h1>Wikidata Who am I?</h1>
    A secret item has been generated. Ask the right questions to find out who you are!
		<Question @evaluate="evaluateQuestion"/>
		<Answer
			:secret="secret"
			:property="answer.property"
			:value="answer.value"
			v-for="( answer, i ) in answers"
			:key="i"
		/>
	</div>
</template>

<script>
import Question from './components/Question';
import '@wmde/wikit-vue-components/dist/wikit-vue-components.css';
import Answer from './components/Answer';

const listOfPossibleSecrets = [
    'Q42', // Douglas Adams
    'Q937', // Albert Einstein
    'Q567', // Angela Merkel
    'Q10943' // cheese
]

export default {
	name: 'App',
	data: () => {
		return {
			answers: [],
		}
	},
	components: {
		Answer,
		Question,
	},
	created() {
		this.secret = listOfPossibleSecrets[ Math.floor( Math.random() * listOfPossibleSecrets.length ) ]
	},
	methods: {
		evaluateQuestion( { property, value } ) {
			this.answers.push( { property, value } );
		},
	},
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

<template>
	<div id="app">
    <h1>Wikidata Who am I?</h1>
    A secret item has been generated. Ask the right questions to find out who you are!
    <Secrets
        :listOfPossibleSecrets = "listOfPossibleSecrets"
    ></Secrets>
		<Question @evaluate="addPropValueAnswer" @evaluateSparql="addSparqlAnswer" />
		<Guess class="guess" @guess="addGuessAnswer" v-if="questions.length > 0" />
		<div
			v-for="( question, i ) in reversedQuestions"
			:key="i"
		>
			<Answer
				v-if="question.type === 'normal'"
				:secret="secret"
				:property="question.property"
				:value="question.value"
			/>
			<SparqlAnswer
				v-if="question.type === 'sparql'"
				:secret="secret"
				:sparql="question.sparql"
			/>
			<GuessAnswer
				v-if="question.type === 'guess'"
				:secret="secret"
				:guess="question.guess"
			/>
		</div>
	</div>
</template>

<script>
import Secrets from "./components/Secrets";
import Question from './components/Question';
import Answer from './components/Answer';
import '@wmde/wikit-vue-components/dist/wikit-vue-components.css';
import Guess from './components/Guess';
import SparqlAnswer from './components/SparqlAnswer';
import GuessAnswer from './components/GuessAnswer';

export default {
	name: 'App',
	data: () => {
		return {
			listOfPossibleSecrets: [
				'Q42', // Douglas Adams
				'Q1744', // Madonna
				'Q937', // Albert Einstein
				'Q7810', // Homer Simpson
				'Q567', // Angela Merkel
				'Q79015', // Superman
				'Q692', // Shakespeare
				'Q7259', // Ada Lovelace
				'Q10943', // cheese
				'Q5383', // David Bowie
			],
			questions: [],
		}
	},
	components: {
		GuessAnswer,
		SparqlAnswer,
		Secrets,
		Guess,
		Answer,
		Question,
	},
	created() {
		this.secret = this.listOfPossibleSecrets[ Math.floor( Math.random() * this.listOfPossibleSecrets.length ) ]
	},
	computed: {
		reversedQuestions() {
			return [ ...this.questions ].reverse();
		},
	},
	methods: {
		addPropValueAnswer( { property, value } ) {
			this.questions.push( { type: 'normal', property, value } );
		},
		addSparqlAnswer( sparql ) {
			this.questions.push( { type: 'sparql', sparql } );
		},
		addGuessAnswer( guess ) {
			this.questions.push( { type: 'guess', guess } );
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

.guess {
	margin-bottom: 20px;
}

.answer {
	padding-left: 10%;
	padding-right: 10%;
	padding-bottom: 5px;
	font-weight: bold;
}
</style>

<template>
	<div class="answer">
		<Message :type="answerMessageType">
			<code>{{ sparql }}</code>
		</Message>
	</div>
</template>

<script>
import { Message } from '@wmde/wikit-vue-components';
import { SPARQLQueryDispatcher } from "./SPARQLQueryDispatcher";

const endpointUrl = 'https://query.wikidata.org/sparql';
const queryDispatcher = new SPARQLQueryDispatcher( endpointUrl );

export default {
	name: 'SparqlAnswer',
	components: { Message },
	props: [ 'sparql', 'secret' ],
	data() {
		return {
			isCorrect: null,
		};
	},
	created() {
		const query = `ASK {
		BIND( wd:${ this.secret } AS ?secret )
		${ this.sparql } .
		}`;

		queryDispatcher.query( query ).then( ( { boolean } ) => {
			this.isCorrect = boolean;
		} );
	},

	computed: {
		answerMessageType() {
			if ( this.isCorrect === null ) {
				return 'notice';
			}

			return this.isCorrect ? 'success' : 'error';
		},
	}
}
</script>

<style scoped>
</style>

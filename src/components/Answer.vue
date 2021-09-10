<template>
	<div class="answer">
		<Message :type="answerMessageType">
			{{ property.label }} {{ value.label }}
		</Message>
	</div>
</template>

<script>
import { Message } from '@wmde/wikit-vue-components';
import { SPARQLQueryDispatcher } from "./SPARQLQueryDispatcher";

const endpointUrl = 'https://query.wikidata.org/sparql';
const queryDispatcher = new SPARQLQueryDispatcher( endpointUrl );

export default {
	name: 'Answer',
	components: { Message },
	props: [ 'property', 'value', 'secret' ],
	data() {
		return {
			isCorrect: null,
		};
	},
	created() {
		const query = `ASK {
		BIND( wd:${ this.secret } AS ?secret )
		?secret wdt:${ this.property.id } wd:${ this.value.id } .
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

<template>
	<div class="answer">
    <div :class= "{ 'is-true': isCorrect, 'is-false': isCorrect === false }">
    <Message :type="notice">
      {{ property.label }} {{ value.label }}
    </Message>
	</div>
  </div>

</template>

<script>

import { Message } from '@wmde/wikit-vue-components';

class SPARQLQueryDispatcher {
	constructor( endpoint ) {
		this.endpoint = endpoint;
	}

	query( sparqlQuery ) {
		const fullUrl = this.endpoint + '?query=' + encodeURIComponent( sparqlQuery );
		const headers = { 'Accept': 'application/sparql-results+json' };

		return fetch( fullUrl, { headers } ).then( body => body.json() );
	}
}

const endpointUrl = 'https://query.wikidata.org/sparql';

const queryDispatcher = new SPARQLQueryDispatcher( endpointUrl );

export default {
	name: 'Answer',
  components: { Message },
	props: ['property', 'value', 'secret'],
	data() {
		return {
			isCorrect: null,
		};
	},
	created() {
		const query = `ASK {
		BIND( wd:${this.secret} AS ?secret )
		?secret wdt:${this.property.id} wd:${this.value.id} .
		}`;

		queryDispatcher.query( query ).then( ( { boolean } ) => {
			this.isCorrect = boolean;
		} );
	},
}
</script>

<style scoped>

.answer {
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5px;
  font-weight: bold;
}

.is-true {
	background: greenyellow;

}
.is-false {
	background: coral;
}
</style>

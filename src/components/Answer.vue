<template>
	<div :class="{ 'is-true': isCorrect, 'is-false': isCorrect === false }">
		{{ property.label }} {{ value.label }}
	</div>
</template>

<script>

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
.is-true {
	background: #0f0;
}
.is-false {
	background: #f00;
}
</style>

<template>
	<Lookup class="entity-selector"
			:label="label"
			:search-input.sync="search"
			:valuel="value"
			@input="$emit( 'input', $event )"
			:menu-items="entities"
	>
		<template v-slot:no-results>
			No match was found
		</template>
	</Lookup>
</template>

<script>
import { Lookup } from '@wmde/wikit-vue-components';

export default {
	name: 'EntitySelector',
	props: [ 'label', 'type' ],
	data() {
		return {
			search: '',
			value: null,
			entities: []
		}
	},
	watch: {
		async search( search ) { // TODO debounce
			const searchResults = await ( await fetch(
				`https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&search=${ search }&language=en&limit=10&origin=*&type=${ this.type }`
			) ).json();

			this.entities = searchResults.search;
		},
	},
	components: {
		Lookup,
	}
}
</script>

<style>
.entity-selector {
	text-align: left;
}
</style>

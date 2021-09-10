<template>
	<Lookup class="entity-selector"
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
	data() {
		return {
			search: '',
			value: null,
			entities: []
		}
	},
	watch: {
		async search( newSearchString ) { // TODO debounce
			const searchResults = await ( await fetch( `https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&search=${ newSearchString }&language=en&limit=10&origin=*` ) ).json();

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

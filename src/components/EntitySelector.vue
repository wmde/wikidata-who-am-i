<template>
	<Lookup class="entity-selector"
			:label="label"
      :placeholder="placeholder"
			:search-input.sync="search"
			:value="value"
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
import debounce from 'debounce';

export default {
	name: 'EntitySelector',
	props: [ 'label', 'type', 'value', 'placeholder' ],
	data() {
		return {
			search: '',
			entities: []
		}
	},
	watch: {
		search: debounce(async function ( search ) {
			const searchResults = await ( await fetch(
				`https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&search=${ search }&language=en&limit=10&origin=*&type=${ this.type }`
			) ).json();

			this.entities = searchResults.search;
		}, 200 ),
		value( value ) {
			if ( value === null ) { // empty the input when the value is cleared
				this.search = '';
			}
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

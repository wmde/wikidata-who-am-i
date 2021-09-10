<template>
	<div class="question">
		<div class="form" v-if="!expertMode">
			<Dropdown class="form-element"
				v-model="property"
				label="Property"
				:menu-items="properties"
				placeholder="select a property"
			>
			</Dropdown>
			<Lookup class="form-element"
					label="Value"
					:search-input.sync="search"
					v-model="value"
					:menu-items="items"
					placeholder="enter an item"
			>
				<template v-slot:no-results>
					No match was found
				</template>
			</Lookup>

			<Button class="form-element button"
					variant="primary"
					type="progressive"
					@click.native="evaluate"
					:disabled="!property || !value"
			>
				? ? ?
			</Button>
			<div>
				<small><a href="#" @click.prevent="expertMode = true">👽️</a></small>
			</div>
		</div>
		<div class="form" v-else>
			<TextInput
				label="SPARQL"
				placeholder="?secret wdt:P123 wd:Q123"
				v-model="sparql"
				/>
			<Button variant="primary" type="progressive" class="button" @click.native="evaluateSparql">ASK!</Button>
			<div>
				<small><a href="#" @click.prevent="expertMode = false">😭️️</a></small>
			</div>
		</div>
	</div>
</template>

<script>
import { Button, Dropdown, Lookup, TextInput } from '@wmde/wikit-vue-components';

export default {
  name: 'Question',
  components: { TextInput, Button, Dropdown, Lookup },
  data: () => {
    return {
      property: null,
      search: '',
      value: null,
      properties: [
          { label: "is", id: 'P31' },
          { label: "occupation", id: 'P106' }
      ],
      selectedItem: null,
      expertMode: false,
      sparql: '',
    }
  },
  computed: {
    items() {
      // API things with this.search
      // wbsearchentities

      const predefinedItems = [
        { id: 'Q5', label: 'human' },
        { id: 'Q901', label: 'scientist' },
        { id: 'Q95074', label: 'fictional character' },
        { id: 'Q82955', label: 'politician' },
        { id: 'Q2095', label: 'food' },
      ];

      return predefinedItems.filter( ( item ) => item.label.includes( this.search ) );
    }
  },
	methods: {
		evaluate() {
			this.$emit( 'evaluate', { property: this.property, value: this.value } )
			this.value = null;
			this.search = '';
			this.property = null;
		},
		evaluateSparql() {
			this.$emit( 'evaluateSparql', this.sparql )
			this.sparql = '';
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form {
	display: flex;
	justify-content: center;
	padding-top: 10px;
	padding-bottom: 10px;
	gap: 20px;
}

.button {
	align-self: flex-end;
}

a {
	text-decoration: none;
}
</style>

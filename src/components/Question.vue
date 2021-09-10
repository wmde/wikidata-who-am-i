<template>
	<div class="question">
		<div class="form" v-if="!expertMode">
			<EntitySelector class="form-element"
				label="Property"
				type="property"
				@input="property = $event"
			/>
			<EntitySelector class="form-element"
					label="Value"
					type="item"
					@input="value = $event"
			>
			</EntitySelector>

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
import { Button, TextInput } from '@wmde/wikit-vue-components';
import EntitySelector from './EntitySelector';

export default {
	name: 'Question',
	components: { EntitySelector, TextInput, Button },
	data: () => {
		return {
			property: null,
			value: null,
			expertMode: false,
			sparql: '',
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

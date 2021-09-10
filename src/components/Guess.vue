<template>
	<div class="guess">
		<Button v-if="!ready" @click.native="ready = true">I'm ready to guess!</Button>
		<div class="enter-guess" v-else>
			<EntitySelector label="Item" @input="guess = $event" type="item" />
			<Button
				variant="primary"
				type="progressive"
				@click.native="evaluateGuess"
				:disabled="!guess"
			>
				Make a guess!
			</Button>
		</div>
	</div>
</template>

<script>
import { Button } from '@wmde/wikit-vue-components';
import EntitySelector from './EntitySelector';

export default {
	name: 'Guess',
	data() {
		return {
			ready: false,
			guess: null,
		}
	},
	methods: {
		evaluateGuess() {
			this.$emit( 'guess', this.guess );
		},
	},
	components: {
		EntitySelector,
		Button,
	},
};
</script>

<style scoped>
.guess {
	display: flex;
	justify-content: center;
}
.enter-guess {
	display: flex;
	gap: 20px;
	align-items: flex-end;
}
</style>

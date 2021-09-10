<template>
	<div class="guess">
		<Button v-if="!ready" @click.native="ready = true">I'm ready to guess!</Button>
		<div class="enter-guess" v-else>
			<EntitySelector @input="guess = $event" />
			<Button
				variant="primary"
				type="progressive"
				@click.native="evaluateGuess"
				:disabled="!guess"
			>
				Guess!
			</Button>
		</div>
	</div>
</template>

<script>
import { Button } from '@wmde/wikit-vue-components';
import EntitySelector from './EntitySelector';

export default {
	name: 'Guess',
	props: [ 'secret' ],
	data() {
		return {
			ready: false,
			guess: null,
		}
	},
	methods: {
		evaluateGuess() {
			if ( this.guess.id === this.secret ) {
				alert( `Correct! You're ${ this.guess.label }!! 🎉️🎉️🎉️` );
			} else {
				alert( 'Nope, that\'s not who you are. Keep guessing!' );
				this.ready = false;
			}
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
	align-items: center;
}
</style>

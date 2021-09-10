<template>
	<div class="answer">
		<Message v-if="guess.id === secret" type="success">
			Correct! You are {{ guess.label }}!! 🎉️🎉️🎉️
		</Message>
		<Message v-else type="error">
			Nope, you're not {{ guess.label }}. Keep guessing!
		</Message>
	</div>
</template>

<script>
import { Message } from '@wmde/wikit-vue-components';

export default {
	name: 'GuessAnswer',

	components: { Message },

	props: ['secret', 'guess'],

	data() {
		return {
			isCorrect: null,
		};
	},
}
</script>

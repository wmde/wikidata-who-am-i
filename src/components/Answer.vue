<template>
	<div>
		{{ property.label }} {{ value.label }}
	</div>
</template>

<script>
export default {
	name: 'Answer',
	props: ['property', 'value', 'secret'],
}
</script>

<style scoped>

</style>

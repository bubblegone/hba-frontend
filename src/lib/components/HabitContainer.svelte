<script lang="ts">
	import { habitData, habitStatus, habitType } from '$lib/ts/interfaces';

	import HabitPopUp from './HabitPopUp.svelte';

	export let showHabitForm: boolean;
	export let data: habitData = {
		name: '',
		motivation: '',
		status: habitStatus.NONE,
		stats: {
			score: 0,
			streak: 0,
			bestStreak: 0
		},
		type: habitType.POSITIVE
	};
	export let headerText: string;
</script>

<div id="container">
	<slot />
	{#if showHabitForm}
		<HabitPopUp bind:habitWindowVisible={showHabitForm} bind:data bind:headerText />
	{/if}
</div>

<style lang="scss">
	@use '../scss/variables';

	#container {
		justify-content: center;
		flex-direction: column;

		@extend %big-400;

		min-width: 9.5rem;

		display: inline-flex;
		flex-direction: column;
		gap: 0.4rem;

		margin: 2rem 2rem 0 0;
		padding: 0.75rem;

		border: variables.$black solid 1px;
		border-radius: 5px;
	}
</style>

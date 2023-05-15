<script lang="ts">
	import { onMount } from 'svelte';
	import Habit from '$components/Habit.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import HabitContainer from '$lib/components/HabitContainer.svelte';
	import HabitPopUp from '$lib/components/HabitPopUp.svelte';

	const endpoint = '/mock.json';
	let data = [];
	onMount(async function () {
		const response = await fetch(endpoint);
		data = await response.json();
		console.log(data);
	});

	let showNewHabitPopUp = false;
</script>

<Nav inlineStyle="position: relative; margin: 0.75rem 0; top: 0" />

<main>
	{#each data as habit_data}
		<Habit data={habit_data} />
	{/each}
	<HabitContainer bind:showHabitForm={showNewHabitPopUp} headerText={'New Habit'}>
		<button id="add-habit" on:click={() => (showNewHabitPopUp = true)}>
			<img id="add-habit-img" src="plus.svg" alt="" />
		</button>
	</HabitContainer>
</main>

<style>
	#add-habit {
		background-color: white;
	}
	#add-habit-img {
		width: 100%;
	}
</style>

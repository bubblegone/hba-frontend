<script lang="ts">
	import { habitData, habitStatus } from '$ts/interfaces';
	import { habitType } from '$ts/interfaces';
	import HabitContainer from './HabitContainer.svelte';

	export let data: habitData;

	let showEditHabitForm = false;

	$: buttonTextFromType = data.type === habitType.POSITIVE ? 'done' : 'failed';
	$: buttonTypeFromStatus = data.status === habitStatus.NONE ? 'secondary' : 'primary';
	$: buttonColorFromType = data.type === habitType.POSITIVE ? 'green' : 'red';

	const changeStatus = () => {
		data.status = data.status === habitStatus.DONE ? habitStatus.NONE : habitStatus.DONE;
	};
</script>

<HabitContainer bind:showHabitForm={showEditHabitForm} bind:data headerText={'Edit Habit'}>
	<h4>{data.name}</h4>
	<div id="button-container">
		<button
			id="completion-button"
			class={`button--${buttonTypeFromStatus}--small--${buttonColorFromType}`}
			on:click={() => changeStatus()}
		>
			{buttonTextFromType}
		</button>
		<button
			id="edit-button"
			class="button--secondary--small"
			on:click={() => (showEditHabitForm = true)}
		>
			<img src="/md-create.svg" alt="edit" />
		</button>
	</div>
	<button />
	<p>Score: {data.stats.score}</p>
	<p>Streak: {data.stats.streak}</p>
	<p>Best streak: {data.stats.bestStreak}</p>
</HabitContainer>

<style lang="scss">
	@use '../scss/variables';

	#button-container {
		display: flex;
		gap: 0.5rem;
	}

	#completion-button {
		flex-grow: 1;
	}

	#edit-button {
		width: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	img {
		height: 1.5rem;
	}
</style>

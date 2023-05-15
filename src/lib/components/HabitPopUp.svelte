<script lang="ts">
	import { habitData, habitType } from '$lib/ts/interfaces';

	import PopUpContainer from './PopUpContainer.svelte';

	export let habitWindowVisible: boolean;
	export let data: habitData;
	export let headerText: string;
</script>

<PopUpContainer bind:windowVisible={habitWindowVisible}>
	<form on:submit|preventDefault={() => console.log('submit')}>
		<h5>{headerText}</h5>
		<input type="text" placeholder="Habit name" bind:value={data.name} />
		<textarea placeholder="Motivation" rows="4" bind:value={data.motivation} />
		<div class="two-button-container">
			<button
				type="button"
				on:click={() => (data.type = habitType.POSITIVE)}
				class={(data.type === habitType.POSITIVE && 'button--primary--small') ||
					'button--secondary--small'}
			>
				Positive
			</button>
			<button
				type="button"
				on:click={() => (data.type = habitType.NEGATIVE)}
				class={(data.type === habitType.NEGATIVE && 'button--primary--small') ||
					'button--secondary--small'}
			>
				Negative
			</button>
		</div>

		<div class="two-button-container">
			<button type="submit" class="button--primary--small"> Submit </button>
			<button
				type="button"
				on:click={() => (habitWindowVisible = false)}
				class="button--secondary--small"
			>
				Cancel
			</button>
		</div>
	</form>
</PopUpContainer>

<style lang="scss">
	.two-button-container {
		display: flex;
		gap: 1rem;

		* {
			// flex-grow: 1;
			width: 100%;
		}
	}
</style>

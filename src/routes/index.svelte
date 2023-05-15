<script>
	import SignUpForm from '$components/SignUpForm.svelte';
	import Nav from '$components/Nav.svelte';
	import AccountPopUp from '$components/AccountPopUp.svelte';

	var accountWindowVisible = false;
</script>

<Nav>
	<div>
		<button class="button--primary" on:click={() => (accountWindowVisible = true)}>Account</button>
	</div>
	{#if accountWindowVisible}
		<AccountPopUp bind:accountWindowVisible />
	{/if}
</Nav>

<main>
	<div id="left-section">
		<h1>Habit train</h1>
		<p>Accessible, simple, minimalistic app to help you build and strenthen habits</p>
	</div>
	<div id="right-section">
		<h3>Create an account</h3>
		<SignUpForm />
	</div>
</main>

<style lang="scss">
	@use '../lib/scss/variables';

	main {
		flex-grow: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 25rem;

		> * {
			margin: auto 0;
		}
	}

	#left-section {
		display: flex;
		flex-direction: column;
		margin-inline-start: auto;

		p {
			@include variables.font-lato(700);

			text-align: center;
			width: 0;
			min-width: calc(100% - 1rem);

			margin-inline: 0.5rem;
		}
	}

	#right-section {
		display: flex;
		flex-direction: column;

		margin-inline-end: auto;
		gap: 2rem;

		h3 {
			padding-inline: 1rem;
		}
	}
</style>

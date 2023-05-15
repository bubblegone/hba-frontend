<script lang="ts">
	import SignUpForm from '$components/SignUpForm.svelte';
	import SignInForm from '$components/SignInForm.svelte';
	import ForgotPasswordForm from './ForgotPasswordForm.svelte';
	import { selectedAction } from '$lib/ts/enums';
	import PopUpContainer from './PopUpContainer.svelte';

	export var accountWindowVisible: boolean;
	var state = selectedAction.SIGNIN;
</script>

<PopUpContainer bind:windowVisible={accountWindowVisible}>
	{#if state !== selectedAction.RESET_PASSWORD}
		<div id="action-selector">
			<button
				on:click={() => (state = selectedAction.SIGNIN)}
				class={state == selectedAction.SIGNIN && 'selected'}>Sing In</button
			>
			<button
				on:click={() => (state = selectedAction.SINGUP)}
				class={state == selectedAction.SINGUP && 'selected'}>Sing Up</button
			>
		</div>
	{/if}
	{#if state === selectedAction.SIGNIN}
		<SignInForm bind:state />
	{:else if state === selectedAction.SINGUP}
		<SignUpForm />
	{:else}
		<ForgotPasswordForm bind:state />
	{/if}
	<img
		src="md-close.svg"
		alt="close-button"
		id="close-button"
		on:click={() => (accountWindowVisible = false)}
	/>
</PopUpContainer>

<style lang="scss">
	@use '../scss/variables';

	#action-selector {
		display: flex;
		justify-content: center;
		gap: 1rem;

		button {
			@include variables.font-nunito(700);
			font-size: 1.5rem;

			color: variables.$gray;
			background-color: variables.$white;

			padding: 0 1rem 1rem 1rem;
			transition: color 0.1s;

			&.selected {
				color: variables.$black;
				text-decoration: underline;
			}
		}
	}

	#close-button {
		position: absolute;
		width: 1.5rem;
		top: 0.5rem;
		right: 0.5rem;
		stroke: variables.$color-primary;
	}
</style>

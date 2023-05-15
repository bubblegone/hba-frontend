<script lang="ts">
	import { selectedAction } from '$lib/ts/enums';

	export let state: selectedAction;
</script>

<form action="">
	<h4>Reset password</h4>
	<div>
		<input type="email" name="email-field" id="email-field" placeholder="Email" required />
		<p class="error-message">Please enter valid email</p>
	</div>
	<div id="forgot-password-buttons">
		<button class="button--primary">Submit</button>
		<button class="button--primary" on:click={() => (state = selectedAction.SIGNIN)}>Go back</button
		>
	</div>
</form>

<style lang="scss">
	#forgot-password-buttons {
		display: flex;
		gap: 1rem;

		button {
			flex-grow: 1;
		}
	}
</style>

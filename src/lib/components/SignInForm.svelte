<script lang="ts">
	import { selectedAction } from '$lib/ts/enums';

	export let state: selectedAction;
</script>

<form action="">
	<input type="text" name="username-field" id="username-field" placeholder="Username" required />
	<div>
		<input
			type="password"
			name="password-field"
			id="password-field"
			placeholder="Password"
			required
		/>
		<a on:click={() => (state = selectedAction.RESET_PASSWORD)} id="forgot-password"
			>Forgot password?</a
		>
	</div>

	<button class="button--primary">Sign In</button>
</form>

<style lang="scss">
	@use '../scss/variables';

	#forgot-password {
		display: block;
		@extend %regular-400;
		position: absolute;
		cursor: pointer;
	}
</style>

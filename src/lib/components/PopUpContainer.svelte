<script lang="ts">
	export var windowVisible: boolean;
</script>

<div id="cover" on:click|stopPropagation={() => (windowVisible = false)}>
	<div id="popup" on:click|stopPropagation>
		<slot />
	</div>
</div>

<style lang="scss">
	@use '../scss/variables';

	#cover {
		position: fixed;
		height: 100vh;
		width: 100vw;

		left: 0;
		top: 0;

		background-color: rgba(0, 0, 0, 0.75);
	}

	#popup {
		position: absolute;
		top: 32%;
		left: 50%;
		transform: translate(-50%);

		width: 20rem;

		border-radius: 5px;
		padding: 1.5rem;

		background-color: variables.$white;
	}
</style>

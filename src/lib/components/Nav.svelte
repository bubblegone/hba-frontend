<script lang="ts">
	export let inlineStyle = '';
</script>

<nav style={inlineStyle}>
	<img src="logo.svg" alt="" />
	<slot />
</nav>

<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/logo.svg" />
	<title>AI-verktyg — Daily Wins Workshop</title>
	<meta name="description" content="Resurser och information om AI-verktyg som Lovable, Replit, Bolt, Cursor och Claude Code. Från Daily Wins workshop." />
</svelte:head>

{@render children()}

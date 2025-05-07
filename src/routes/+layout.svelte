<script lang="ts">
	import "../app.css";

	let { children } = $props();
</script>

<div
	class="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-800/20 to-purple-800/20"
>
	{@render children()}
</div>

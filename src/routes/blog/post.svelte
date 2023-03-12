<script lang="ts">
	export let title;
	export let description;
</script>

<svelte:head>
	<title>Matt Johnson's Blog - {title}</title>
	<meta name="description" content="Matt Johnson's Blog - {description}" />
</svelte:head>

<article class="blog">
	<slot />
</article>

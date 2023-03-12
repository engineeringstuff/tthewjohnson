<script lang="ts">
	import siteMetaData from '$lib/siteMetaData';
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Matt Johnson's' Blog" />
</svelte:head>

<div class="content">
	<h1>Blog</h1>
	<ul class="blog-posts">
		{#each siteMetaData.blog as { title, url, datePublished, description }, i}
			<li>
				<a href={url}>
					{title}
				</a>
				<time>{datePublished}</time>
				<p>{description}</p>
			</li>
		{/each}
	</ul>
</div>

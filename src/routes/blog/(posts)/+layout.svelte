<script lang="ts">
	import siteMetaData from '$lib/siteMetaData';
	import InlineSVG from 'svelte-inline-svg';
	const svgSize = { class: 'pr-2 w-8' };
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Matt Johnson" />
</svelte:head>

<div class="md:w-1/3 p-0 md:p-2 md:flex md:justify-center">
	<div class="md:fixed">
		<div class="md:block flex justify-center items-center">
			<img
				src={siteMetaData.author_image}
				loading="lazy"
				alt="me"
				class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full"
			/>
			<div class="mb-2 mx-7 mt-4 justify-center items-center">
				<h1 class="md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100 text-left">
					{siteMetaData.author}
				</h1>
				<div class="md:text-lg text-gray-600 dark:text-blue-100">
					{siteMetaData.slogan}
				</div>
				<a
					href="mailto:{siteMetaData.email}"
					class="text-gray-600 md:hidden mt-1 dark:text-blue-100"
				>
					{siteMetaData.email}
				</a>
			</div>
		</div>

		<div class="mx-7 hidden md:block">
			<div class="my-2 text-gray-600 flex dark:text-blue-100">
				<InlineSVG src="/icon/mail.svg" {...svgSize} />
				<a href="mailto:{siteMetaData.email}">{siteMetaData.email}</a>
			</div>
			<div class="my-2 text-gray-600 flex dark:text-blue-100">
				<InlineSVG src="/icon/linkeding.svg" {...svgSize} />
				<a target="_blank" rel="noreferrer" href={siteMetaData.linkedin}>LinkedIn</a>
			</div>
			<div class="my-2 text-gray-600 flex dark:text-blue-100">
				<InlineSVG src="/icon/github_new.svg" {...svgSize} />
				<a target="_blank" rel="noreferrer" href={siteMetaData.github}>@engineeringstuff</a>
			</div>
		</div>
	</div>
</div>
<div class="md:w-2/3 sm:px-8 px-2">
	<slot />
</div>
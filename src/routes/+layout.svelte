<script lang="ts">
	import '../app.css';
	import siteMetaData from '$lib/siteMetaData';
	import { fly } from 'svelte/transition';
 	import { cubicIn, cubicOut } from 'svelte/easing';

	export let data
	const svgSize = { class: 'w-8 h-8' };
</script>

<div class="app">
	<section class="w-full px-6 pb-12 antialiased bg-white dark:bg-gray-900">
		<div class="mx-auto max-w-8xl">
			<nav class="header">
				<div>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/blog">Blog</a>
						</li>
						<li>
							<a href="/about">About Me</a>
						</li>
					</ul>
				</div>
			</nav>
			<section>
				<div class="dark:bg-gray-900 mt-6">
					{#key data.pathname}
						<div
							class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900"
							in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
							out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
							>
							<slot />
						</div>
					{/key}
				</div>
			</section>
			<footer>
				<div>
					<div class="media-icons">
						<a target="_blank" rel="noreferrer" href={siteMetaData.github}>
							<span class="sr-only">github</span>
							<img {...svgSize} src="/icon/github_new.svg" alt="GitHub" />
						</a>
						<a target="_blank" rel="noreferrer" href={siteMetaData.linkedin}>
							<span class="sr-only">Linkedin</span>
							<img {...svgSize} src="/icon/linkeding.svg" alt="LinkedIn" />
						</a>
						<a target="_blank" rel="noreferrer" href="mailto:{siteMetaData.email}">
							<span class="sr-only">mail</span>
							<img {...svgSize} src="/icon/mail.svg" alt="Email" />
						</a>
					</div>
					<div class="copyright">
						<div>Copyright © {new Date().getFullYear()}</div>
						<div>•</div>
						<a href="/">{siteMetaData.author}'s blog - {siteMetaData.slogan}</a>
					</div>
				</div>
			</footer>
		</div>
	</section>
</div>

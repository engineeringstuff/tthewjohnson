# https://ma.tthewjohnson.com
This repository holds the source code to my blog (hosted at the URI above).

## Getting started
1. Clone this repository
1. Run `yarn` to install the dependencies
1. Run `yarn dev` to start the website locally
1. Run `yarn build` to generate the assets/files to be deployed
1. Run `yarn deploy` to deploy to CloudFlare Pages
    * You may also need to set the environment variable `CLOUDFLARE_API_TOKEN` or configure `wrangler` to authenticate your terminal session with the CloudFlare API

## What's the stack?
1. Hosted on [CloudFlare Pages](https://pages.cloudflare.com/)
    * **why?** CloudFlare Pages is an incredibly low-cost hosting provider and because of its distributed nature (CloudFlare is a [CDN](https://en.wikipedia.org/wiki/Content_delivery_network)) it serves the content from a location/cache closest to the user
1. Built with [SvelteKit](https://kit.svelte.dev/)
    * **why?** [Svelte](https://svelte.dev/) is a great framework for building websites, it has intuitive in-built support for animations, transitions and other modern web-design paradigms. SvelteKit has an adapter to build production content to CloudFlare pages as a  [JamStack](https://en.wikipedia.org/wiki/Jamstack) application.
1. Styled with [Tailwind CSS](https://tailwindcss.com/)
    * **why?** Tailwind CSS is a simple, intuitive, modern framework for styling websites, I find it easy to use and better than similar libraries such as [Bootstrap](https://getbootstrap.com/)
1. [TypeScript](https://www.typescriptlang.org/)
    * **why?** there's very little code in this blog, but wherever there is code I choose to use TypeScript whenever possible because it is a strongly-typed language capable of achieving multiple programming paradigms
1. [Markdown](https://en.wikipedia.org/wiki/Markdown)
    * **why?** Markdown is a an excellent format for writing content without the distractions of writing HTML directly. This repository uses a library ([MDsveX](https://github.com/pngwn/MDsveX)) to convert Markdown files into HTML
---
title: 'What is the Supercloud?'
description: 'Exploring the concept of the Supercloud and its implications for modern web applications.'
---

24th May 2023

# What is the Supercloud?

The Supercloud was originally a term coined by Carnegie Mellon University in their paper "[The Supercloud Vision](https://dl.acm.org/doi/10.1145/3132038)" which discusses a sort of meta-cloud on top of a multi-cloud (or multi-region) infrastructure. But I think that terminology is evolving, especially after some of the recent product offerings from Fly.io and Cloudflare - where [they add some more weight to the definition of what the Supercloud is](https://blog.cloudflare.com/welcome-to-the-supercloud-and-developer-week-2022/). In either case, it has positive implications for building modern web applications. While new technologies can be overwhelming to learn, the aim of the Supercloud is to simplify the developer experience and improve the user experience. In this article, I will primarily talk about my experience with Cloudflare's take on the Supercloud, but there are other providers with similarly mature offerings such as fly.io and section.io.

## Cloudflare's Offering

The Cloudflare offering of the Supercloud is wrapped up in a few different packages:

- **Pages**: A static document hosting service, similar to Vercel, Netlify, GitHub Pages, etc.
- **Workers**: A compute service, mostly NodeJS-based, but you can bring your own image since it's based on Firecracker, allowing the use of any programming language.
- **R2**: Blob storage, similar to AWS S3.
- **KV**: A globally distributed key-value database.
- **D1**: SQL. It's a SQLite implementation built on top of KV.
- **Constellation**: AI. Runs machine learning models at the edge using Workers.
- **CDN** (Content Delivery Network): Cloudflare provides a best-in-class CDN, which is an industry leader with edge nodes in 285 locations globally at the time of writing.

The real stars of the show are Workers, KV, R2, and the CDN service (other providers have equivalent offerings) because they can host data and serve compute "at the edge."

While I'm gushing about Cloudflare, it's worth mentioning that they don't charge egress fees, and their offering is very competitively priced, favoring startups and lone hackers.

## It's All at the Edge

Why is being "at the edge" such a big deal? It means we no longer have to select which "Region" or "Availability Zone" to move data and compute to because the provider will automatically move our data and compute around their network to wherever the demand from the user is, with some caveats. This ensures that users are served content quickly, and computation is done physically closer to the user. Additionally, data will be hosted closer to the user. This architecture eliminates the need for computation to go back to "the origin," avoiding compound latency effects that slow down the user experience.

To illustrate, a user in Shanghai using an application would have compute and data physically close to them, resulting in a fast user experience. Similarly, a user in London would also have an equivalent user experience with compute and data physically close to them. Even if our user from Shanghai goes on a business trip to London, their compute would happen nearby, and their data would move over to London within minutes, ensuring a consistent user experience regardless of their location.

## A Very Easy On-Ramp

While the previous section may not sound particularly groundbreaking, consider that it is all done just using developer tooling, without requiring DevOps or system administrator involvement. For example, deploying to the Supercloud can be as simple as pushing to a GitHub repository and doesn't require VPC setup, subnets, routing tables, bastions, or SSH'ing. Just one push from a developer machine can immediately deploy to a preview website or production.

The low overhead of providing an immediately fast, consistent, and global service is very appealing to startups and lone developers. It means that your team can spend less time on infrastructure and more time shipping. You'll have a service offering that is immediately competitive with FAANG-level tech organizations, but without the hassle.

## How Does This Change Application Architecture?

The biggest change is the FaaS-style (Functions as a Service) approach to handle compute. Depending on the technologies you use, you might never notice that your application has been decomposed into a fleet of workers. Some tooling can silently handle this during the build and deployment steps. For example, with Svelte, I can run the entire web application locally as a server-side-rendered monolith and deploy it to the Supercloud, knowing that it will be decomposed into many functions and run as a globally distributed Progressive Web App (PWA), which is quite liberating when thinking of scaling and costs ([Similar tooling is available for most frameworks](https://developers.cloudflare.com/pages/framework-guides/)).

---

By exploring the Supercloud and its offerings, developers can leverage the benefits of edge computing, simplified deployment, and improved user experiences. Cloudflare, along with other providers, provides a powerful set of tools and services that enable the development of modern web applications. Embracing this paradigm shift allows startups and developers to focus more on building and less on infrastructure.

Keep an eye on the Supercloud as it continues to evolve and reshape the landscape of web application development.

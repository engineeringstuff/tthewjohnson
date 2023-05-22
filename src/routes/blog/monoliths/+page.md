---
title: 'Monoliths are good, but not that good'
description: 'Exploring the limitations of monolithic architectures in modern systems engineering.'
---

22nd May 2023

# Monoliths Are Good, but Not That Good

[Martin Fowler's sage advice](https://martinfowler.com/bliki/MonolithFirst.html) to start with a monolith when designing software has been widely followed for years. Even during the heyday of microservices, I found myself adhering to this approach. However, there are now established and emerging paradigms where this rule-of-thumb no longer fits.

## Amazon's Shift

A recent article from [the Amazon Prime Video services team](https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90), detailing their switch from a Cloud Native solution to a monolith, sparked a lot of speculation and discussion in technical circles. The primary reason behind their shift was that processing speed wasn't initially a critical requirement for them. They learned from their initial implementation, improved it, and eventually moved to a monolith because it better aligned with their needs.

## Paradigms That Don't Fit Monolith-First

Let's explore some scenarios where a monolith-first approach may not be suitable:

1. **NodeJS**: By default, NodeJS is single-threaded due to `libuv`. While this isn't generally a limitation, it can have disastrous consequences within a monolithic context if not managed carefully. When processor-intensive code blocks the event loop, it will cause delays for **all** consumers of the monolith's services. Although there are good monolithic frameworks for NodeJS, caution is required, and the available approaches may not be as immediately obvious or idiomatic as those in Ruby on Rails, Java, Django, and similar frameworks.

2. **SaaS Businesses**: While there are cases where a monolith can work fine for a SaaS business, it's important to ensure that the architecture supports the notion of a tenant or customer account as a first-class object. In a monolith running within a single process and sharing memory, the guardrails to prevent data leakage are primarily provided by the language used to build the monolith. Shared memory still exists, and in theory, a bad actor in one tenancy might find a way to access data from another tenant. Although this risk exists in microservices and other paradigms, it is generally more difficult to leak data through shared memory, and the API boundaries for idempotency are clearer.

3. **Defense in depth**: Microservices and other non-monolithic approaches can provide multiple layers of indirection to an attacker and therefore offer an easily obtainable defense-in-depth approach if required. Different components of an architecture can exist within different enclaves with varying levels of security.

4. **Cloud Native Solutions**: Gone are the days of over-provisioning co-located servers in data centers and deploying big monoliths to them. Modern approaches leverage Cloud Native solutions to avoid over-provisioning. While it's still possible to deploy a large monolith to a FaaS-style compute layer, most cloud providers have limitations that will likely be encountered. As we rely more on Cloud Native services, the need for breaking up monoliths tends to increase.

5. **Modern Hosted Solutions**: Services like AWS Lambda, Fly.io, and CloudFlare Workers take Cloud Native to the next level by offering distributed compute using fast, short-lived containers (e.g., AWS Firecracker). This approach effectively solves over-provisioning problems and addresses other infrastructure challenges but at the cost of breaking up the monolith and managing state more carefully from the outset.

6. **When support is important**: A monolithic approach naturally has an extra level of indirection when debugging. In simplistic terms, when we encounter an issue in `monolith.exe`, it may not be immediately obvious to the engineers dealing with support calls where the problem is. Alternatively, in a microservices approach, if there's an issue in `TicketService.exe`, it's self-explanatory where the problem is, and it can be dealt with by the appropriate team. Providing additional error data in a monolith likely requires additional instrumentation with error-monitoring tools or additional parsing of error messages.

7. **"Spikey" or "Lumpy" Demand**: Monoliths can scale out using orchestration tools like Kubernetes, HashiCorp Nomad, and others, but handling state and ensuring idempotency become critical considerations depending on routing and session handling configurations. Obviously, in scenarios where the monolith cannot scale out, scalability issues arise.

## Conclusion

It becomes clear that monoliths are suitable for certain paradigms but not for others, especially in modern systems engineering. If you choose to build a monolith, it's essential to understand the trade-offs involved. While a team may initially move quickly, technical debt will accumulate and eventually slow down progress or hinder the business. Even the Amazon Prime Video services team acknowledges the limitations of their chosen monolithic approach, which they plan to address in the future.

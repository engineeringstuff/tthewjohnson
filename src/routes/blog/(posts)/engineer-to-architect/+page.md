---
title: 'Engineer to architect'
description: '.'
---

16th June 2023

# What makes an architect?

While some organizations may treat architecture as an inherent ability of their engineering team, it is crucial to recognize that architecture requires specific skills and expertise. I want to dig into the distinct skill set that sets architecture apart from pure engineering, encompassing various classifications such as Enterprise Architect, Solutions Architect, Business Architect, and Technical Architect. Keep in mind that your organization may define these distinctions based on its size and structure.

## Tests for Architecture Thinking
There are a number of tests below that can be applied to a role to see if it is also one that expects Technical Architecture capabilities:

1. **Big O** - this is keeping an eye on performance generally, and good engineers will know and understand this too. Performance bottlenecks can be implemented as algorithms in application logic or database logic (e.g. SQL). Architects need to be able to understand the code and the interaction of multiple overlapping and interacting components to build a picture of aggregate performance in the system. This is more than just choosing the right sorting algorithm, it's understanding the performance profiles of code, components, services and systems - together.
1. **Compound latency** - the above point talks about performance generally, but even the fastest system may experience problems when communicating over-the-wire in any form. This can take many shapes; from reviewing the call-graph of GraphQL layer 7 comms, to understanding the intricacies of UDP over TCP as the means of transport for some aspect of your system... or not at all if performance is of no concern. Different communications technologies have different performance profiles and capabilities - we can't always lean on the crutch of RESTful APIs.
1. **Language features** - in some cases it's important to understand the intricacies of language features, because of the risks of "undefined behavior" or some poor-performance behavior in an uncommon production scenario, but this is shared-territory with engineers and the rest of the team.
1. **Modelling for complexity** - architects model systems to visually represent them in ways that are digestible to non-technical people, meaningful to technical people, but also to highlight and resolve complexity in an architecture.
1. **Planning for simplicity** - because complex systems breed complex problems, it's necessary to plan to make the system simpler - otherwise it might become unmaintainable. A good architect is always looking to make the overall system simpler so that it can be extended with predictable ease.
1. **Parallelizing work** - thinking about how to divide up a business requirement into many small chunks of work that can be delivered in parallel by multiple engineers at the same time, identifying the critical-path, resolving (architectural) blockers to velocity. You may call this Ticket Elaboration or Backlog Grooming, and your team may do this already - but without calling it out explicitly then you are likely to revisit work that hasn't been planned well, tickets will take longer, scope will creep.
1. **Compute** - Architects must think about where and how code will run in production, can it scale-out? Can it scale-up? Is there a locally available equivalent? Do we need a test environment? Are there limitations on error-reporting and/or logging based on where the code runs in production? And many more questions need to be answered and thought about in detail. The earlier the better.
1. **Persistance** - Similar to the above point, how will it run in production? What are the characteristics of it running in production? How are they different from running it locally? Can we run it locally? Do we have suitable dummy-data to hydrate a test-system with? Should engineers have access to production data? Is that a GDPR-violation? etc. Data is often a complex thing to think about since it can be persisted and sharded in many different ways for many different reasons - we need to think about time-series, event-driven, row-oriented, column-oriented databases, their trade-offs and more.
1. **IPC/RPC/connectivity** - Similar to the above two points regarding the characteristics of connectivity between services in Production, locally and in test-systems, but also the suitability of transport layers and transport technologies to achieve certain outcomes.
1. **Security** - Security is absolutely the responsibility of everybody in the team, but easy on-ramps can be integrated into a greenfield architecture to make the implementation more secure and less painful to audit. It's fine to use some static-analysis in your CI pipeline for additional security but decisions on things like transport technologies, signed-data timeouts, session-lifetimes etc. are all outside of what is normally an engineers role, and understanding the long-term impacts are equally important - e.g. how does key-rotation work? can we manually revoke tokens? etc.
1. **Constraints** - All systems have constraints and it's worth knowing them, sharing them, and planning around them. Constraints run all throughout the system and everyday engineers will unconsciously be adding more constraints, for example; a `for` loop bound to the length of a list is commonplace, but if it's a single-thread system then it may suddenly become a bottleneck. This runs true for every little thing in the system, it could be the compute-provide, the database, the rate-limit on an API gateway etc...
1. **Assumptions** - Everyone makes assumptions about how things might run, or how they should run. But in reality (in Production) those assumptions can bite hard - it's important to map those assumptions so that we can plan for them when they don't pan out e.g. that production Postgres will behave the same as local Postgres
1. **Wider business strategy** - Product Managers, VPs and C-level people all have different expectations and consequently if the team delivers something different than what some level of the org expects then it could spell trouble. Similarly, managers throughout the organization make assumptions about the capabilities of whatever is delivered e.g. some group of users might see that a new feature is delivered, but are disappointed that it doesn't integrate with the sales system.
1. **Communication** - an architecture must be explainable to a non-technical person, ideally the person should self-serve so that it is useful to explain a system to stakeholders and to new team-members too. This requires a skill in articulation and visual-representation of complex topics.
1. **Compliance** - the organization may have compliance requirements, and if so then they should be considered throughout the build of the system. Even if the organization doesn't currently have compliance requirements then it's likely that they will at some point in time, these are the types of constraints that quickly make a greenfield system a brownfield one
1. **Governance** - decision-making for all of the above reasons is very important, it's important to log them and it's important to ensure that when viewed objectively that the decisions seemed correct at the time - this is generally called Governance and it's something most teams dislike
1. **Cost** - although you may not explicitly be responsible for the overall cost of the system, small technical decisions can sometimes be made that have large cost-ramifications. Most organizations cannot tolerate runaway costs so understanding the cost implications of technical decisions is important, even at a very low technical level. For example, it might be trivial to query all partitions of data now, but as the system grows then that practice could become prohibitively expensive
1. **Risks** - all of the above points identify, or manage, some element of risk. Some organizations keep a "risk-register", and some very responsible organizations also keep a "Technical Risk Register" - this is one of the best ways of crystallizing whether some technical-debt needs to be addressed or not, especially in financially tight situations. For example; if migrating from GCP to Azure is low on a risk register, but adding instrumentation for better error-logging is high on the risk register, then do the instrumentation first.

Becoming an architect requires a unique set of skills that go beyond the typical responsibilities of a software engineer or manager. By taking a proactive approach on the items listed above the team can keep velocity high, and technical-debt low whilst ensuring the system is secure and compliant - your systems will have a lower Total Cost of Ownership with architecture input.
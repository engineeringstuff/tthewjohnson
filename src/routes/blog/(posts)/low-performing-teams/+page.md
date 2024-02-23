---
title: 'On Low Performing Teams'
description: '.'
---

23rd June 2023

# On Low Performing Teams

A few too many times I've seen a team that's been struggling with a problem for approximately 6 months or so, only for the problem to be trivially resolved in a few days when given the correct technical direction. It shocks me that organizations can tolerate low-performing teams at all and that they struggle to identify them, and even worse, tolerate the slow pace of delivery. Even though team-members feel like things can be faster everyone goes through the motions of planning sprints, gazing at Gantt charts and promising deliverables for timelines that have already been missed without addressing the source of the issue. This tends to culminate in a culture of anticipated mediocrity, and learned-helplessness from those outside of the engineering teams, whilst also fostering a culture of mistrust in leadership from the technical teams who feel like they might be pulled in too many different directions to deliver anything meaningful.

## Identifying Low Performing Teams

Like boiling-frogs, it can be difficult to objectively identify a low performing team when you're within the team/context/setting so an outside perspective can be helpful. But there is no framework for identifying a team that is struggling to deliver in a quantitative way, e.g. there's no way of equating how many how many hours worked should result in so many lines of code. My personal preference is to look at the impact of the team on the business; a high-impact team should be obvious, they'll regularly deliver things that move the needle on the performance of the overall business and they'll have good relations with product people and teams in the wider business, their deliverables will be well-understood by those outside of the team.

In contrast, a low performing team will have little impact on the wider business, this might materialize as refactoring-work or addressing technical-debt which are both examples of inward-facing deliverables that are unlikely to support important business outcomes. Similarly if the team is tasked with something where there is technical or architectural complexity that can't be easily overcome the team might choose to spend time doing many proofs of concepts (PoC) to figure out the problem. There's nothing inherently wrong with the characteristics described here to identify low performing teams if the work is recognized by the wider organization as being important and impactful.

Some smells around low performing teams:

1. **Low Business Impact** - As described above, a team with a low-impact might be doing self-invented work instead
1. **The team chooses to do lots of technical work, despite a need for product work** - This could be another case of self-invented work, a poor-relationship with product people or evidence of premature optimization
1. **Lots of revisiting work that should already be completed** - In this case something is wrong with ticket readiness or QA processes
1. **The team runs lots of PoCs for a technical solution, but there's no clear winner** - Evidence of either a lack of experience or in-fighting within the team or unclear requirements
1. **They never demo** - The team may have something to hide or they may feel that their work is too technical to demo
1. **They don't want non-technical people involved** - Very little work these days is a purely technical endeavour, non-technical people bring valuable objectivity and perspective to the deliverable
1. **Deadlines are promised, but constantly missed** - This is a sign that the team are uncertain in what they're doing

## Fixing Low Performing Teams

There are some reasonable explanations and edge-cases to the points described above, sometimes a team will describe scenarios and explanations that justify a slow pace of delivery, such as working with legacy systems, working with undocumented APIs, poor requirements and guesswork, in some cases absurdly slow CI pipelines can explain slow delivery.

1. **Strong technical leadership** - In some cases I've seen managers trying to manage low/mid-skill engineers and delivery throughput can be painfully slow as a result because lots of steps and processes in the SDLC are missing due to a lack of experience. In these cases you need to hire people that can provide strong experienced technical leadership.
1. **Promote a team member** - In some cases I've seen very smart people with very sensible proposals, but they're just not given the platform or authority needed to lead - it can be helpful to promote them to give them ownership and the confidence to take their proposals forward.
1. **Build a relationship with product people** - In some cases I've seen a complete breakdown in trust between product and technical people - I don't even think there should be a distinction between the two since they're on the same side trying to achieve the same things.
1. **Demo** - You don't have to work to Agile/Scrum to demo, and you don't have to wait until the end of a sprint to demo either - all feedback is good feedback and the sooner you can get it, the sooner you can either fail-fast or deliver.
1. **Stop doing purely technical stuff** - Unless there's a really good use-case for it and you can demonstrate a lower Total Cost of Ownership amortized over a period of time it probably isn't worth it - most re-writes and technical-debt work falls into this category.
1. **Learn when to buy, not build** - If something is needed and it's technically complicated then you need to evaluate when it should be bought and not built. As a rule of thumb there's a spectrum from high-specialization to high-commodity, a particle-accelerator operating system is high-specialization so you build it, a word-processor is high-commodity so you buy it. For example if you need a custom forms generator then buy WuFoo or Survey Monkey or something, do not try to build it unless your company is specifically selling a custom forms generation product. Your team may spend a long time building something that is a sub-par clone of a commodity product.
1. **Remove middle-managers** - Flat structures are touted as increasing a teams creativity and productivity, this happens primarily because there are no barriers to communications. In most cases middle managers are barriers to communication even if you think you have already have a flat-structure

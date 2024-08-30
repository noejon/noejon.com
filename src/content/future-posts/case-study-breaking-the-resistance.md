---
title: "Breaking the resistance: Transforming Legacy Systems with Test Automation - Case Study #1"
pubDate: 2024-08-22
description: "Case Study #1: Transforming a legacy system with test automation when test automation is met with resistance by the engineering team"
author: "Jonathan Noé"
tags: ["case study", "leadership"]
---

## Context

As a team lead, the team you are leading is working on a legacy application that is core to the business. Maintaining and enhancing this complex codebase is becoming harder by the day. Test coverage is almost inexistent. This is driven by the software engineers reluctance to integrate test automation to their workflow, relying heavily on manual test from QA engineers.

There are three main challenges:

The first challenge is the reliance on manual testing among the developers in the team. Little awareness and consideration are given to test automation. The test automation topic is usually met with resistance, which stops its adoption.

The second challenge comes with resistance to change. The team is experienced and the software developers on the team have a long tenure with the company. They show apprehension towards test automation, raising how their current workflow might be affected by introducing time-consuming, complex and disruptive test automation. There is also this belief in the team that everything test related is in the realm of QA.

The third and last challenge is the application they are working on. The codebase complexity, its lack of structure, modularity and proper documentation makes it hard to introduce test automation for existing functionality.

## Challenges

The situation presents several challenges:

- A complex codebase
- An outdated vision of quality assurance
- A human factor: the comfort zone

### A complex codebase

The codebase the team is working on is a highly complex monolith.

The lack of modularity in the codebase makes it difficult to isolate components for testing.

A highly complex legacy codebase is likely to have its fair share of tech debt. Refactoring such a codebase and introducing tests can seems daunting for the team working on it.

The lack of modularity along with the tech debt could also be detrimental to feature development. Some parts of the code are a danger zone the developers are afraid to touch. That means that introducing new features could be met with resistance.

Poor documentation is an aggravating factor. It makes it difficult for someone to understand the codebase, that someone being the developer who wrote the file 6 months ago or someone new to the team. A codebase that is not easily understandable is not easily testable.

In summary a poorly documented complex codebase is problematic on two different level:

- Implementing test automation is challenging
- Introducing new features could also be met with resistance.

This poses a risk in the following ways:

- It becomes increasingly difficult to add new features to the codebase
- Slower development cycle and feature delivery
- Low morale of the team as a result of the previous point
- A culture of us vs them with product. Product wondering why features are met with resistance and why they are slow to release.

The other culture of us vs them between software engineers and QA that is visible.

### An outdated vision of Quality Assurance

The team is relying on the QA engineers to run manual tests. There is siloed mentality that testing, quality assurance, is QA's responsibility, when quality assurance is everyone's responsibility.

Without automation in place, Quality Assurance is a criteria that is no longer met when dealing with a highly complex codebase. Manual regression testing does not scale with complexity: it is time consuming and error-prone.

The QA team usually ends up being overwhelmed with the amount of manual regression tests to run. There is too much to cover, and not all regression tests can be possibly run. As a result, more bugs are introduced to production.

That causes a dichotomy between software and QA engineers, each group putting the blame on the other when bugs are introduced.

The main risk here is a high turnover in the QA team.

### A human factor: the comfort zone

The last piece of this puzzle is the human factor, the software engineers themselves and the comfort zone they are in.

They have their routine and feel secure in this context. Novelties, such as test automation, are seen as disruption to this routine.

Being comfortable in the status-quo clouds their judgment when identifying or evaluating new approaches, as they develop a preference for maintaining their current condition.

That is translated to minimal awareness and appreciation for test automation as well as resistance to adopting it.

The team does not see the value of test automation seeing it as an unnecessary burden rather than a strategic enhancement. They most likely have little to no exposure to modern testing frameworks and best practices.

The risks here are:

- The visible lack of innovation being comfortable in the status-quo
- This translates in lack personal growth and beneficial changes in their work environment.

### A summary of the risks

Here are the all risks associated with the challenges:

- It becomes increasingly difficult to add new features to the codebase
- Slower development cycle and feature delivery
- Low morale of the team
- A culture of us vs them
- A high turnover in the QA team
- The visible lack of innovation being comfortable in the status-quo
- This translates in lack personal growth and beneficial changes in their work environment.

Next is the strategy to introduce test automation followed by a plan to address developer's resistance

## Introduce test automation

### An engineer led strategy

The proposed strategy is one of collaboration between the software and QA engineers.

Automated tests require two things:

- Being a purposeful test
- Implementation of the test

This is where collaboration is important. The QA engineer is responsible for the why and the what for tests, best practices. The software engineer is responsible for the how, the code.

Often the QA engineer will have some notions about the code and the testing framework. But ultimately code is code and is owned by the software engineers.

How to promote ownership of the code to software engineers?

- Let them drive the automation process.
- Let them choose the tools framework they are the most comfortable with.
- Expected outcomes and goals are clearly defined to help them navigate towards success.
- Have a plan that enables early success (more on this in the next section), as early success will give a boost to the sense of ownership.

Next is a plan to enables early success.

The key concept for the plan is to start small. Small team and small project.

It starts with setting up a cross-functional team, with a software engineer and a test engineer. If possible find volunteers in each team. The less reluctant software engineer with a QA engineer who has experience with automated testing.

After setting up the team, defined together what the pilot project looks like. Here are some criteria to take into consideration:

- What are the most time consuming manual tests
- What are the manual tests that are run the most often
- Check for intersections with the two last points

From this, derive together the key feature where automated test is introduced.

With the plan in place, the last element of the strategy is knowledge sharing. Not only amongst the team, but also with the QA team or other development teams.

Encourage pair programming to promote sharing the knowledge.

The team lead's role in this strategy:

- Ensure the team has enough room for the pilot project to be a success.
- Facilitate cross collaborative meetings for that team.
- Liaise with other team leads in the company regarding their experience and exchange knowledge.

The strategy is in place, but could still be met with resistance. Next is a plan to overcome the resistance.

### Addressing developer's resistance

While it is important for the Software Engineers to understands the risks associated with not having automation tests, forcing them into doing test automation is likely to have a negative effect on their productivity.

The first step to addressing the developers' resistance to introducing test automation is to clearly outline the goals of such endeavour:

- Removing the human-error from the equation. Manual tests on a complex codebase are error-prone. If possible have an example to showcase
- Less bugs introduced to production as a result.
- With less time spent on bug fixes, there is more time to work on features.
- Faster development and release cycles.
- Improved team morale.
- Set a quality assurance mindset. It is everyone who is involved in building the software's responsibility.
- For the company this also means happier customers as their experiences will be seamless.
- Avoid a massive overhaul of current processes.

Outlining those goals is a good start, but this is not going to be enough to convince the software engineers. Those goals will still seem daunting and something outside of their comfort zone.  

This is where the small pilot strategy comes into play. Making the pilot small enough that a software and a QA engineer working together can release a proof of concept in a short time is crucial.

Exposing such a plan is more likely to get traction amongst the developers, especially if it is raised as an innovation. The exposed plan is the plan as outlined in the [previous  section](#an-engineer-led-strategy).

The goals for the pilot project:

- Removing the human-error on a small part of the project
- Get early feedback on the efficiency of the introduced test automation. The human being tends to believe only what they see. This will allow the team to relate, and will help pushing towards adoption.
- Document the choices, the processes and how further test automation can fit the current workflow.

The team lead's role:

- Gauge what is likely to give a fast feedback loop, making sure that the pilot project is a success.
- Celebrate and showcase successes
- Find the right team to start innovating on automation, showcasing the benefits early.

## Uplifting the legacy codebase

Uplifting the legacy codebase is a task that needs to take a few factors into consideration:

- This codebase is central to the company's operation
- It is highly complex

With that in mind, a prudent approach is advisable when it comes to uplifting the codebase. To mitigate the risks, refactoring should happen gradually and in conjunction with some test integration.

This aligns with the team's reluctance to disruption in their workflow. By doing this, the disruption is minimal and the chances it is well received by developers is higher.

The initial step is to identify the critical parts of the code that would benefit the most from refactoring. Then define what refactoring looks like keeping in mind that it should not disrupt the existing workflow, features and maintenance work can still be implemented.

Are there a well known design pattern that can be leveraged to achieve a smooth refactoring?

Would feature flags be beneficial?

While refactoring, regressions should be caught early, so reliance on unit tests and integration tests is primordial.

The project is currently poorly documented, so the documentation also needs uplifting. The following should be well documented:

- The code is written in a way it is self documenting.
- Unit and integration tests serve as ways to detect regressions, but not only. They are written in a way that it documents what the code does.
- Document the refactoring process. What went well, what can be improved.
- Create and improve an architecture diagram.

The team lead's role:

- Ensure that the workflow is not disrupted
- Facilitate the meetings to define what refactoring looks like

## Expected outcomes and benefits

The expected outcomes for introducing automated tests and refactoring the codebase are multiple:

- A more stable, maintainable and scalable codebase, through an improved code structure and modularity, making it easier to understand and test.
- A better quality assurance culture
- A boosted morale in the team

## Success measure and metrics

### More stable, maintainable and scalable codebase

This can be measured with different metrics:

- Development cycle and feature release speed
- Less production defects, fewer customer complaints
- Improved documentation for the codebase

### A better quality assurance culture

This can be measured with the following metrics:

- Is the QA team able to work on exploratory testing rather than manual testing
- Are automated tests added during feature work
- Are the tests helpful to help the team catch and fix issues early
- Are the tests flaky

One metric that is often used and that I would not promote is code coverage. It is a metric that is easily manipulated.

### A boosted morale in the team

Tracking the morale could be a bit harder to do, but here are some solutions

- Morale metrics is often visible during sprint ceremonies. Is the team interacting and raising issues. Are these issues discussed?
- Company wide or more specifically crafter surveys. A survey before/after introducing test automation would be a good metric.
- Team health checks

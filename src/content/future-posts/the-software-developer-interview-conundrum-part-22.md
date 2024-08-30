---
title: "The software developer interview conundrum"
pubDate: 2024-08-28
description: "Interviewing someone for a software developer position is not easy. There is no streamlined process. This is my take on this issue"
author: "Jonathan Noé"
tags: ["interviews", "leadership"]
---

G'day Internet

In the past four years, I have conducted my fair share of interviews for ranging from junior to senior software developers to technical lead. I think our hiring process is not bad but it could be improved.

In the past four years, I have conducted my fair share of interviews for ranging from junior to senior software developers to technical lead. I think our hiring process is not bad but it could be improved.

Today, we're diving into the perplexing, frustrating, but always interesting world of software developing interviews. We will explore the good, the bad, and the "wait, why am I re-implementing redux using context, again?" of tech interviews.

I will share some of my opinions about those types of interviews and will share my take on what is a nice interview process.

## A wide range of interview styles

There is a wide range of interview styles in the software industry and each company has their way of interviewing. The bigger the company the more rounds of interviews you can expect. The most common types of interviews are the following

- Leetcode-based interviews
- Live Coding interviews
- Pair Programming session
- Take home assignment
- Technical knowledge questions
- System Design

The type of interviews below are less common in the industry, but could still be encountered.

- Debugging interviews
- Code review interviews
- Case Study

There is no perfect solution to the software developer interview conundrum. The approach that I am suggesting at the end of this article is just my point of view and is most likely not going to be perfect and might not be suitable for you. Each person and each company that interviews will have their preferred style which makes it a difficult area to navigate for software developers.

Next we'll dive into these interview styles, discussing pros and cons and I'll add my vision on those tests.

## The Big Four (Six actually but for some reason it's always a Big Four) of Software Interviews

### 1. LeetCode-based Interviews: Trie hard or go home

Ah, LeetCode – where your ability to invert a binary tree determines your worth as a software developer. (Just kidding... mostly.)

Pros:

- Tests for problem-solving skills and algorithmic thinking.
- Allows a standardised way to assess candidates.
- Is good indicator of a candidate's ability to learn.

Cons:

- Feels disconnected from real-world problems. How often did you actually need to invert that binary tree in your career?
- Will be a stressful interview for interviewees who don't practice leetcode.
- As opposed to the above point, it will favour interviewees who specifically train for this kind of interviews...
- ... and this does not accurately reflect a candidate's ability to write clean and maintainable code.

I might sound a bit negative about leetcode interviews, but I have recently started to do a bit of leetcode myself. First of all, university me would be ashamed of 2024 me... I actually think it's quite fun to solve the problems. And inverting a binary tree is not that hard 😉.

I can understand why big tech goes with this kind of interviews, but I also think that they are are be missing out on great developers more often.

### 2. Live Coding Interviews

The software developer writes code in real time, either in an online editor or sharing their screen. Same as your day to day... but with an audience... assessing you. No pressure, right?

Pros:

- Allows interviewers to see your thought process in real-time. It's like a live-action debugging show!
- Tests your ability to code under pressure. A useful skill, especially when that critical bug pops up five minutes before deployment on a Friday evening (we all deploy on Friday right?)
- Provides an opportunity to showcase communication skills while coding
- Can reveal how candidates handle feedback and collaborate in real-time

Cons:

- Can be nerve-wracking, potentially hindering performance. Sweaty palms, anyone?
- May not account for different working styles or the benefits of quiet contemplation. Some of us need our rubber ducks!
- Time constraints can lead to rushed solutions that don't represent a candidate's best work

I might be just slightly biased on disliking this kind of interviews because I am the type of person who has legendary mental hiccups during coding interviews:

- I once forgot how to use javascript arrays. Something that I literally use every day.
- I once forgot about `event.target.value` which is also something that I use often.
- I once forgot even the name of the native javascript `fetch` function.

And as soon as a mental hiccup happens, I loose all my momentum and it usually all snowballs the wrong way.

I prefer very similar but very different types of interviews, the pair programming interview.

### 3. Pair Programming: Coding Tango

A pair programming interview is also a real time coding interview where the candidate works on a task collaboratively with the interviewers .Let's see how well you can dance with a stranger!

Pros:

- Simulates real-world collaboration scenarios. Get ready for a "You code, I'll watch" adventure!
- Tests both technical skills and teamwork abilities. Can you code AND make small talk?
- Allows candidates to demonstrate their communication and problem-solving skills.
- Provides an insight into how candidates might work within the team.

Cons:

- Can be uncomfortable if pairing styles are different. It's all fun and games until someone insists on using NeoVim. (yeah yeah, I am just jealous, I know)
- Might be challenging to assess individual contributions. Who wrote that piece of art code? The world may never know.
- Candidates might feel inhibited or overshadowed by their pairing partner.
- The quality of the interview depends heavily on the interviewer's own pairing skills.

As I have alluded before, this is among my favourite type of interviews... IF it is an actual pairing interview and not a disguised Live coding interview.

It does not suit all interviewers though, as there is some magic to operating a good pairing session. But mostly, if you have the candidate's best interest in mind, it should go smoothly.

### 4. Take-Home Assignments: The Homework You Didn't Know You Missed

Candidates complete a coding project or task in their own time, usually over several days. Remember when you used to complain about homework? SURPRISE!

Pros:

- Allows interviewees to work in a more realistic and familiar environment. Pajamas and massage chair included!
- Provides insight into how they approach larger tasks and manage their time.
- Gives them a chance to showcase their best work without the pressure of live coding.
- Checks a broader set of skills, including project organisation and documentation.

Cons:

- Can be time-consuming, especially for interviewees juggling multiple interviews. Who needs a weekend anyway?
- It becomes difficult to ensure fairness due to varying time availability among candidates. Some have kids, some don't.
- May not reflect a candidate's ability to work under time constraints or collaborate with others.
- Risk of candidates receiving external help or using AI tools, rigging the assessment.

Take home test is also among my favourite types of interviews. Both as an interviewer and an interviewee. It allows interviewees to work on tasks at their own pace.

Be mindful of the length of the interview though. Expecting four hours is already too long. One would want to show their best self in the task try to make the code as good as it gets regardless of the advice to spend only X hours on it. They'll most likely spent X + some (lots?) extra time! That is similarly unfair to the person who then spends only X hours on it and delivers a less polished solution.

### 5. Technical Knowledge Questions: The Pop Quiz

Focused on assessing a candidate's understanding of specific technologies, concepts, or best practices. Hope you've been studying your textbooks!

Pros:

- Helps assessing depth of knowledge in specific areas. Finally you'll be able to show your [weird javascript](https://jsisweird.com/) skills: `[] + []` = `""`!
- Useful for how familiar candidates are with required technologies. "So, tell me about your relationship with COBOL..."
- Allows a standardised way to assess candidates.
- Can help identify candidates who keep up with industry trends and best practices.

Cons:

- Feels like an exam on theory rather than an assessment of practical skills. "What is a Virtual DOM again?"
- Often does not reflect the qualities needed for the job. You can be a great react developer without knowing how the virtual DOM works.
- Can be discouraging for strong coders who struggle recalling from memory under pressure.
- Does not accurately test a candidate's problem-solving abilities or creativity.

This is another type of test that I struggle with. By setting up this type of interview you are basically giving people disguised homework, asking them to prepare for an exam.

Candidates then google the usual "what are the SOLID principles", "20 most asked react questions" etc... spending time memorising those answers.

While I think it is nice to have a some good knowledge about the technologies you are using, you can be a great developer and teammate without such knowledge.

### 6. System Design Interviews: Architecting the Future

Time to put your brain to work on an architecture puzzles, designing a software system!

Pros:

- Assesses the candidate's ability to design scalable and maintainable systems. Welcome to "Building [X.com](https://x.com/le_noejon) in 30 Minutes or Less"!
- Reflects real-world challenges faced by senior developers. Yes, someone will need to figure out how to handle billions of cat video uploads.
- Lets interviewees demonstrate their understanding of trade-offs in system architecture
- Shows the ability to communicate complex ideas effectively

Cons:

- Can be vague and subjective in evaluation. One developer's microservice is another developer's monolith
- It's a very short time frame to design what has taken years to build.
- May disadvantage candidates from smaller companies or those with less experience in large-scale systems

A system design interview also has its place in the software developer hiring process. I might also be biased because System Design is something that I have always enjoyed. That said, there is a time and a place for it.

I would not throw a system design interview at everyone. I would not, for example, put a junior to mid-level software developer to the task. And for a senior it probably depends on how senior you want that person to be. Definitely would do one for tech lead, staff and principal developers.

That's it for the Big Four (Six), let's move on to the not so common type of interviews.

## The Small Three (term coined by me just now) of Software Interviews

### 7. Debugging Interviews: Inspector Gadget: Code Edition

Time to put on your detective hat and solve Dr Claw's Malevolent And Destructive (M.A.D) bugs! Here the interviewee is presented with a codebase full of bugs. Their mission: stop M.A.D. before they release the code to production! This message will self-destruct!

Pros:

- Tests practical problem-solving skills. Reveal the Penny Gadget in you!
- Reflects real-world challenges faced by developers. Let's not lie to ourselves, we spend half our time debugging anyway.
- Assesses the interviewee's ability to understand and work with an existing codebase.

Cons:

- May not fully assess a candidate's ability to write good code. Finding bugs is one thing, preventing them is another.
- Could be stressful, especially if the bug is particularly hard to find. "It works on my machine" won't save you here!
- Might favor candidates familiar with specific debugging tools or environments

Disclaimer: I have never actually interviewed or been interviewed on a debugging interview. I have just recently read an interesting article about them (looked for the link, could not find it, sorry!) and decided to add them to the list.

While I like the concept of this type of interview, the fact that it does not help checking how well an interviewee writes code is a factor that I would consider.

That said, there could be a place for it, or part of it. If your team misses someone who excels at debugging and you are missing that, I would probably tailor the usual interview to integrate this kind of challenges. I would not make it a full hour, probably 15 to 20 minutes.

### 8. Code Review Interviews: Judgment Day

Skynet has taken over the world. It would not have happened with some good review on the code quality, efficiency and best practices. Candidates are presented with a codebase they need to judge. And they are judged on how well they judge. Told you it was judgment day.

Pros:

- Checks for knowledge of best practices and code quality. Why are there five levels of nested ternary operators?
- Simulates an important day to day task for many development teams. Because code doesn't review itself... yet!
- Reveals a candidate's attention to detail and ability to provide constructive feedback

Cons:

- Code reviews can be subjective, depending on the reviewer's preferences. Tabs vs. spaces is still a thing in 2024!
- Does not capture a candidate's ability to write code from scratch.
- Puts candidates more experienced in writing code than reviewing it at disadvantage.

I have had to do this type of interview once at the very beginning of my career. In fact I did not really know what a code review was back then. I got the job and I actually am not sure why...

I think it is too narrow of an interview to reveal enough of what you are looking for in a candidate.

And code review is something that can be learned from following the same process as the team. I've seen heaps of software developers pick code review up within a few weeks.

### 9. Case Study Interviews: Welcome to my TED Talk

Time to dust off those public speaking skills!

Pros:

- Tests analytical thinking and communication skills.
- Shows if candidates showcase their understanding of broader business contexts. Because sometimes it's not just about the code
- Assesses the interviewee's ability to break down complex problems and explain solutions clearly
- Provides insight into a candidate's presentation skills, important for client-facing or leadership roles

Cons:

- Can be time-consuming to prepare for. And your mirror might get annoyed at seeing you repeating the same thing over and over.
- Could advantage those who are naturally gifted public speakers.
- Does not assess day-to-day coding abilities

I have done this type of interview once and I quite enjoyed it. The preparation as well as the interview itself.

That said, it's probably not suitable all that much for a software developer. While those are good skills to have, they are probably skills that you expect from higher positions such as tech lead, staff and principal developers.

Individually, each type of interview has their pros and cons. None of them is perfect and some type of interviews will be more suitable to you, your team, your business, than others.

So now is the moment you all waited for! My take as to what makes a good software developer interview.

## What do you think is a good approach Jon?

Before I discuss what I think is a good interview process, let me tell you what I look for in a candidate:

- is the person I am interacting a human being that I want to spend most of my day with in the foreseeable future?
- does the person fit in the team and the culture?
- are they technical enough for the advertised position?

With this in mind, here is the approach that helps me find candidates that meet those criteria.

The job market is ever changing, one day it's a employer-driven market and the other it is an employee-driven market. Interview processes tend to be more cumbersome during an employer-driven market, with more and more rounds.

In general I like to keep the interview process short and fast. A person who gets their first interview on a Friday can expect to get an offer the Friday after. That is the typical speed at which I like to go, but again, with respect to the candidate, if they want to take it a bit more slowly, I respect that and keep it slow!

But Jon, how can you assess someone within a week? Good question!

First there is the behavioural interview. This is where I think my process could be improved. I ask the usual suspects when it comes to behavioural questions. Tell me a time etc etc. While those questions can help you understand a person, often they might have not "prepared" those specific questions and are caught off-guard. Or they might not have a time when.

The fact that a candidate needs to "prepare" for an interview is something I somewhat disagree with. First it takes more of their time. Second the story is usually embellished, or not their story at all. Honest Jon here, I often use stories from someone else when I don't have anything meaty to say. Basically I prepare potential answer to questions to tick the box if they are asked. Do they know more about me? Probably not. I could make it all up and they would know.

One of the best interview I had on the interviewee side is someone who simply asked me to talk about myself. I started off with the usual.

> I am a software developer with 7 years in the industry.

They interrupted me and actually asked to talk about myself. So I went on and talked about myself. We then had a one hour discussion, suggesting each other books and exchanging tips. Eventually we discussed about work and the position, but it was just a natural flow. This is something I definitely want to experiment in the future, being in the interviewer side this time.

If the initial interview goes well, I offer two options:

- A simple take home test, who should not take more than 4 hours (done in 2 by most interviewee)
- OR sending over a codebase/project the worked on and they are proud of

In that next step invitation, they are also told upfront about the next step after the coding challenge, a pairing session. An actual one.

So we ask them to leave in the readme what they would have improved in the codebase if they had more time, or if there is a feature that they would add.

On our end when we receive the challenge or codebase, we review it well. Also identifying areas where the code could be improved and we prepare what feature we'll work on during the pair programming session.

In the pairing session, I make sure the candidate is at ease, actually trying to collaborate with them towards a solution. You most likely won't implement the full feature within the 45 minutes, but it is fine. Technical skills were assessed when reviewing the code. The pairing session allows us to make sure that this is actually their code, that they understand it and are able to extend it.

The pair programming session is to see if the person collaborates, communicates and takes feedback well. It is also to show the interviewee what they can expect when they start working with the team.

After the pairing session each interviewer debriefs on their own, defining hire or no hire, then gather to discuss the outcome.

At this point depending on the seniority of the position I would add a design system interview if the interview is for a technical lead, staff or principal software engineer.

Similarly after the system design interview, if there is one, each interviewer individually debriefs, decide on hire/no hire and come together to discuss the decision.

At this point, if it is a hire, the person will get an offer on the table on the same day or on the next day.

But Jon, with this little amount of interviews, how can you make sure a 100% that the person is or is not a right fit? Well, in both ways you can't... You will still miss out on extraordinary engineers because they had a bad day. Or hire someone who was not a good fit. But more often than not you'll get the right person.

Thank you for reading my solution to the interview conundrum!

That's all folks!

Jon

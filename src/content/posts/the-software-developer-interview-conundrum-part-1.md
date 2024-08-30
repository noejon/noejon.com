---
title: "The software developer interview conundrum - Part 1"
pubDate: 2024-08-30
description: "Interviewing someone for a software developer position is not easy. There is no streamlined process. In this article we are going through the different type of interviews explaining their pros and cons"
author: "Jonathan Noé"
tags: ["interviews", "leadership"]
---

G'day Internet

Today, we're diving into the perplexing, frustrating, but always interesting world of software developing interviews.

We will explore the good, the bad, and the "wait, why am I re-implementing redux using context, again?" of the software developer interviews conundrum.

This is part 1 of a set of 3 articles about the software developer interview conundrum:

- [Part 1: The world of software developing interviews](./the-software-developer-interview-conundrum-part-1.md)

## The world of software developing interviews

There is a wide range of interview styles in the software industry and each company has their way of interviewing.

The bigger the company the more rounds of interviews you can expect. The most common types of interviews are the following

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

There is no perfect solution to the software developer interview conundrum.

Each person and each company that interviews have their preferred style, which makes it a difficult area to navigate for software developers.

Next we'll dive into these interview styles, discussing pros and cons. I will add my vision on those tests.

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

I might sound a bit negative about leetcode interviews, but I have recently started to do a bit of leetcode myself.

First of all, university me would be ashamed of 2024 me... I actually think it's quite fun to solve the problems.

And inverting a binary tree is not that hard 😉.

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

As I have alluded before, this is among my favourite types of interviews...

... if it is an actual pairing interview and not a disguised live coding interview.

It does not suit all interviewers though, as there is some magic to operating a good pairing session.

But mostly, if you have the candidate's best interest in mind, it should go smoothly.

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

Be mindful of the length of the interview though. Expecting four hours is already too long.

One would want to show their best self in the task try to make the code as good as it gets regardless of the advice to spend only X hours on it.

They'll most likely spent X + some (lots?) extra time! That is similarly unfair to the person who then spends only X hours on it and delivers a less polished solution.

Note on the use of AI.

While in the real-world using AI to help with development is becoming common, it can also build the full feature from scratch. In this case you assess an AI and not the candidate.

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

A system design interview also has its place in the software developer hiring process.

I might also be biased because System Design is something that I have always enjoyed. That said, there is a time and a place for it.

I would not throw a system design interview at everyone.

I would not, for example, put a junior to mid-level software developer to the task.

And for a senior it probably depends on how senior you want that person to be.

Definitely would do one for tech lead, staff and principal developers.

That's it for the Big Four (Six), let's move on to the not so common type of interviews.

## The Small Three (term coined by me just now) of Software Interviews

### 7. Debugging Interviews: Inspector Gadget: Code Edition

Time to put on your detective hat and solve Dr Claw's Malevolent And Destructive (M.A.D) bugs!

Here the interviewee is presented with a codebase full of bugs.

Their mission: stop M.A.D. before they release the code to production! This message will self-destruct!

Pros:

- Tests practical problem-solving skills. Reveal the Penny Gadget in you!
- Reflects real-world challenges faced by developers. Let's not lie to ourselves, we spend half our time debugging anyway.
- Assesses the interviewee's ability to understand and work with an existing codebase.

Cons:

- May not fully assess a candidate's ability to write good code. Finding bugs is one thing, preventing them is another.
- Could be stressful, especially if the bug is particularly hard to find. "It works on my machine" won't save you here!
- Might favor candidates familiar with specific debugging tools or environments

Disclaimer: I have never actually interviewed or been interviewed on a debugging interview.

I have just recently read an interesting article about them (looked for the link, could not find it, sorry!) and decided to add them to the list.

While I like the concept of this type of interview, the fact that it does not help checking how well an interviewee writes code is a factor that I would consider.

That said, there could be a place for it, or part of it.

If your team misses someone who excels at debugging and you are missing that, I would probably tailor the usual interview to integrate this kind of challenges.

I would not make it a full hour, probably 15 to 20 minutes.

### 8. Code Review Interviews: Judgment Day

Skynet has taken over the world. It would not have happened with some good review on the code quality, efficiency and best practices.

Candidates are presented with a codebase they need to judge. And they are judged on how well they judge.

Told you it was judgment day.

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

## Conclusion

Individually, each type of interview has their pros and cons. None of them is perfect and some type of interviews will be more suitable to you, your team, your business, than others.

In Part 2 of this series of articles, I'll add my take as to what makes a good software developer interview process. Stay tuned!

That's all folks!

Jon

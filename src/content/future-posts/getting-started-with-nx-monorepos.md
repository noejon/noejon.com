---
title: "Getting started with NX monorepos"
pubDate: 2024-09-25
description: "How to setup a project using NX monorepo"
author: "Jonathan Noé"
tags: ["tech", "software", "nx", "monorepo", "node"]
---

nx typescript react express

## Pre-requisites

Make sure you have at least `npm` installed. (it is installed when installing [node.js](https://nodejs.org/en/download/package-manager)).

For this tutorial I use [pnpm](https://pnpm.io/installation#using-other-package-managers) that can be installed by running:

```zsh
npm install -g pnpm
```

You can mostly follow along with just `npm`, I'll explain any `pnpm` command that is not straight forward.

## Project Setup

Create your project folder:

```zsh
mkdir monorepo-playground
cd monorepo-playground
```

Now let's initialise our nx workspace using [create-nx-workspace](https://nx.dev/nx-api/nx/documents/create-nx-workspace) using a `typescript` preset:

```zsh
pnpm dlx create-nx-workspace . --preset=ts
```

I use github selected `github actions` as my `CI/CD` pipeline.

Our monorepo is now initialised. It's time to create our application.

## Creating applications

For this example we will create a full stack application with a backend and a frontend, as well as a database to store the information.

### Frontend

For the frontend we'll use a react application

First install the `@nx/react` plugin:

```zsh
pnpm dlx @nx/react
```

Using the [nx generate](https://nx.dev/nx-api/nx/documents/generate) command we then generate the application:

```zsh
pnpm dlx nx generate @nx/react:app frontend 
```

```zsh
? Which stylesheet format would you like to use? … 
CSS
```

```zsh
Would you like to add React Router to this application? Y
```

```zsh
? Which E2E test runner would you like to use? … 
playwright
```

```zsh
? Which bundler do you want to use to build the application? … 
vite
```

This will initialise the `frontend` and `frontend-e2e` folders.

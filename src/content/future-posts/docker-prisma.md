---
title: "Integrating Prisma with Docker and Postgres"
pubDate: 2024-09-22
description: "How to setup a project with docker running postgres and prisma"
author: "Jonathan Noé"
tags: ["Docker", "prisma", "JavaScript", "tech", "software", "local dev", "postgres", "node"]
---

G'day Internet,

Today we're going to create a [postgres](https://www.postgresql.org/) database in [Docker](https://www.docker.com/) and use [prisma](https://www.prisma.io/) to create some tables.

## Pre-requisites

### Installing docker

If you have not done it before, install the latest version of the [docker desktop](https://www.docker.com/products/docker-desktop/) app.

It will install the desktop application as well as the Docker CLI and Docker Compose.

## Setting up the project

Our first step is to create the project directory:

```zsh
mkdir docker-prisma
cd docker-prisma
```

### Creating a Postgres database in Docker

#### The `compose.yaml` file

We'll use [Docker Compose](https://docs.docker.com/compose/) to start our database container.

First create a `compose.yaml` (`docker-compose.yaml` is [for backwards compatibility](https://docs.docker.com/compose/compose-application-model/#:~:text=Compose%20also%20supports-,docker%2Dcompose.yaml,.,-You%20can%20use))

```zsh
touch compose.yaml
```

Next we'll populate the file with the following

```yaml
services:
  db:
    container_name: docker-prisma-db
    environment:
      POSTGRES_DB: docker-prisma
      POSTGRES_PASSWORD: example
      POSTGRES_USER: superjon
    image: postgres:latest
    ports:
      - "4300:5432"
    volumes:
      - postgresdata:/var/lib/postrgesql/data

volumes:
  postgresdata:
```

Next is an explanation about the file

#### Explaining the fields

`image` defines the Docker image from which the container will be run. In our case the latest [postgres image](https://hub.docker.com/_/postgres).

`container_name` specifies a name for the container. Docker gives it a default name otherwise. The main reason I do it here is to make it easier to follow the tutorial.

`environment` is used to set up important environment variables for postgres to be able to run:

- `POSTGRES_USER`: Filed used to create a user with admin privileges.
- `POSTGRES_DB`: This is an optional field that defaults to `POSTGRES_USER`. We use it to define the database name.
- `POSTGRES_PASSWORD`: Sets the password for the admin account

`ports` is used to map the container port `5432` (the default port on which postgres runs) to port `4300` when accessing it from outside of the docker container.

`volumes` is used to persist the data even if the container is taken down.

#### Running the container

With our `compose.yaml` file now complete, let's run it using:

```zsh
docker-compose up
```

The output should end with something like:

```zsh
db  | [SOME TIMESTAMO] UTC [1] LOG:  database system is ready to accept connections
```

Check the details of the running containers by running:

```zsh
docker ps
```

Access the `psql` command line by running the following in a new terminal:

```zsh
# cd docker-prisma if your new terminal is not started there
docker exec -it -u postgres db psql
```

The terminal should show

```zsh
postgres=# 
```

You can run a query that checks the answer to the ultimate question of life, the universe and everything:

```zsh
postgres=# select 42;
 ?column? 
----------
       42
(1 row)
```

And just like this you now have postgres running locally quite easily.

In the next step we will setup up a project with prisma, to then connect prisma to the Docker postgres database.

### Creating a prisma project

I use [pnpm](https://pnpm.io/), I will explain non self-explanatory commands that are different from `npm` or `yarn`

Let's start with initialising the project

#### Initialise a prisma project

##### Initialise Node

```zsh
pnpm init
```

Then add all the dependencies

```zsh
pnpm add -D prisma typescript ts-node @types/node
```

You should now have a `package.json` with the packages above as devDependencies.

You've seen we have also added typescript so let's initialise that

##### Initialise TypeScript

```zsh
pnpm --package=typescript dlx tsc --init
```

`pnpm dlx` is the equivalent of `npx`.

To finish the setup, we'll initialise prisma.

##### Initialise Prisma

```zsh
pnpm dlx prisma init
```

This creates two items:

- a `.env` file that is pre-populated with a dummy prisma connection string

```
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

- a `prisma` directory containing a `schema.prisma` file that contains the information necessary to make a connection to the SQL Server

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

`url` here references the `DATABASE_URL` present in the generated `.env` file. Let's modify this file to allow it to communicate with the docker contained database.

### Connecting Prisma to the postgres instance

#### Update the Prisma connection string

Her we'll use the `env` variables used to generate the docker files as follows

```text
DATABASE_URL="postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@localhost:{ports}/{POSTGRES_DB}?schema=public"
```

When populated with our values

```text
DATABASE_URL="postgresql://superjon:example@localhost:4300/docker-prisma?schema=public"
```

#### Test the connection

To test that the connection works we'll use the prisma [db pull](https://www.prisma.io/docs/orm/prisma-schema/introspection#the-prisma-db-pull-command) command

```zsh
pnpm dlx prisma db pull
```

You should now see a successful error `P4001` message

```zsh
Prisma schema loaded from prisma/schema.prisma
Environment variables loaded from .env
Datasource "db": PostgreSQL database "devdb", schema "public" at "127.0.0.1:4300"

✖ Introspecting based on datasource defined in prisma/schema.prisma
Error: 
P4001 The introspected database was empty:

prisma db pull could not create any models in your schema.prisma file and you will not be able to generate Prisma Client with the prisma generate command.
```

Why successful? Because the error message is actually telling us that the database is empty. So a successful connection to the database has happened.

That concludes this small tutorial about connecting Prisma to a Docker Postgres container.

That's all folks!

Jon

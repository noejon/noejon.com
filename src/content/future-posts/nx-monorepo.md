## A title

## Pre-requisites

### Nodejs

If you don't have node.js installed choose your preferred way to install it [here](https://nodejs.org/en/download/package-manager) 

### pnpm

If you don't have [pnpm](https://pnpm.io/) installed:

```zsh
npm install -g pnpm
```

## Application Mono-repo

There are two types of mono repo:

- application driven
- package driven

We'll do an application driven mono repo with:

- a preact frontend
- a hono backend

## pnpm workspaces

Create a project folder for our mono-repo;

```zsh
mkdir monorepo-project
cd monorepo-project
```

Next we want to create a `package.json` file:

```zsh
pnpm init
```

TODO GIT or NO GIT? gitignore

First lets create the two folders, one for the our applications and one for our packages:

```zsh
mkdir apps
mkdir packages
```

Next let's create the `pnpm-workspace.yaml` file:

```zsh
touch pnpm-workspace.yaml
```

Edit the file as follows:

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

Now that folders are created let's create our apps, starting with the `preact` application.

### Client application

We will boringly name our client application... `client`:

```zsh
cd apps
pnpm create preact
```

```text
◇  Project directory:
│  client
◆  Project language:
│  ● TypeScript
◆  Use router?
│  ● Yes
◆  Prerender app (SSG)?
│  ● No
◆  Use ESLint?
│  ● No
```

The newly created `package.json` doesn't contain a `name` attribute so we need to add

```json
"name": "client
```

Let's start the project making sure it runs:

```zsh
cd client
pnpm dev
```

You should now be able to access <http://localhost:5173/> and see our bootstrapped preact application.

Before we start working on the `nest.js` backend, let's first see how components can be easily shared in our `packages` folder

```zsh
cd packages
mkdir not-found
```

Here again we create a `package.json` file:

```zsh
pnpm init
```

TODO WHEN COMING BACK TO THIS ARTICLE

### Server

Using hono

Create a new folder server

```zsh
cd apps
mkdir server
```

We'll now initialise the application using

```zsh
pnpm create hono@latest
```

You should now be able to run the server

```zsh
pnpm dev
```

Now we don't really want to cd into each of our folders each time we want to run dev. This is where pnpm workspaces will help us.

### Running applications from the root folder

`pnpm` has a [filter flag] allowing us to run applications from the root folder:

```zsh
pnpm --filter <package_selector> <command>
```

In our case if we wanted to start the client it would look something like:

```zsh
pnpm --filer client dev
```

Similarly to start the server run:

```zsh
pnpm --filter server dev
```

## Project configuration

### ESLint + prettier

Install at root an run. Might not work when opening individual folders, in VS Code. For now don't bother

### Husky in monorepo

```zsh
pnpm add -D husky -w
```

Then initialise husky by running 

```zsh
pnpm dlx husky init
```

This creates the following folder at the root of the project;

```txt
[ .husky ]
│-[ _ ] # This folder contains some scripts that husky needs to run
│- "pre-commit" # File that contains the scripts to run before a commit
```

Because we are using a monorepo we'll use the monorepo tools at our dispositions, as husky cannot run hooks from different sub-folders. 

`git` allows one and only one directory for git hooks, so we need to run all our scripts from this hook.

For our example, the `pre-commit` file in `.husky` would look something like the following:

```zsh
pnpm --filter "@apps/*' --parallel lint 
```

This will run lint on all the packages on the repository.

While this is OK it does not scale well with the addition of apps

One other thing that usually runs in pre-commit hooks is unit tests

### Unit testing using vitest

```zsh
pnpm --filter "@apps/*" add -D vitest@latest
```

In `package.json` add:

```json
"scripts": {
  "test": "vitest",
  "test:watch" : "vitest run"
}
```

After this we need to manually work on each package.

The client package has a `vite.config.ts` file that we can leverage to set our testing up. The server package does not have that and we'll need to add a `vitest.config.ts` file.

The client package will also need a different `testSetup` file to load [preact-testing-library](https://preactjs.com/guide/v10/preact-testing-library/).

First let's install the dependency:

```zsh
pnpm --filter client add -D @testing-library/preact @testing-library/jest-dom jsdom
```

And now let's create the `testSetup.ts` file

```zsh
cd apps/client
touch testSetup.ts
```

Then populate it with:

```zsh
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/preact';
import { afterEach } from 'vitest';

afterEach(function () {
  cleanup();
});
```

`import '@testing-library/jest-dom/vitest';` loads the `jest-dom` [matchers](https://github.com/testing-library/jest-dom?tab=readme-ov-file#custom-matchers) for our tests.
`cleanup();` will unmount preact trees that have been loaded with the [render function](https://testing-library.com/docs/react-testing-library/api#render)

Next we'll update `vite.config.ts` as follows:

```ts
/// <reference types="vitest" />
import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './testSetup.js',
  },
});
```

`/// <reference types="vitest" />`: tells the vite config file that it should be extended with the vitest configs.
`globals: true` will set all the `beforeEach/all`, `it/test` as global variables rather than having to import them in each of our test files
`environment: 'jsdom'` allows us to run tests while using browser APIs. Preact testing library will need that.
`setupFiles` are files that will be called before each run test. Next let's create those setup files.

Next let's also update our `apps/client/tsconfig.json` file:

```json
"compilerOptions": {
  ...
  "types": [
    "vitest/globals",
    "@testing-library/jest-dom/vitest"
  ]
  ...
}
```

This lets TypeScript know that those types are added to our globals.

Now let's write a quick test to check that our setup is working as expected.

Replace the code in `Home.tsx` as follows:

```tsx
export function Home() {
  return <p>Hello World!</p>;
}
```

and in the same folder create `Home.test.ts`

```tsx
import { render, screen } from '@testing-library/preact';
import { Home } from './home';

describe('Given I render the home component', () => {
  test('then greet with hello world!', () => {
    render(<Home />);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
```

Now back to our root folder run

```zsh
pnpm --filter client test
```

You should see one passed test.

Now let's setup testing in our `server` folder, starting with the vitest config

```zsh
cd apps/server
touch vitest.config.ts
```

Populate it as follows:

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
  },
});
```

You can not here that we don't need a setup file as opposed to the client.

Here also `globals:true` will set all the `beforeEach/all`, `it/test` as global variables rather than having to import them in each of our test files.

`environment: 'node'` tells vitest that we are testing on a node runtime.

In `tsconfig.json` add:

```json
"compilerOptions" : {
  ...
  "types": [
    "node",
    "vitest/globals",
  ],
  ...
}
```

Here again it is to tell typescript that the `it`/`test`/`beforeEach`/`beforeAll` are global. "node" is there from Hono's initialisation.

Once again to check that our setup works let's just create a few files to run our tests on.

```zsh
mkdir controller
cd controller
touch hello.ts
touch hello.test.ts
```

Populate `hello.ts` with

```zsh
import { Context } from 'hono';

export function Hello(context: Context) {
  return context.text('Hello World!');
}
```

and the `hello.test.ts` as follows:

```zsh
import { Context } from 'hono';
import { helloController } from './hello';

describe('Given I call the hello controller', () => {
  const mockContext: Context = {
    text: vi.fn(),
  } as unknown as Context;

  test('then Hello World! is returned as text', () => {
    helloController(mockContext);
    expect(mockContext.text).toHaveBeenCalledWith('Hello World!');
  });
});
```

Check that the test runs with 

```zsh
pnpm --filter server test
```

And we're done with setting up for unit testing.

In the next part we'll work on containerising our project with Docker

### Dockerising the application

### Creating a base image for the monorepo

It is best practice when building a docker image to use the lockfile to build the image. This comes with many benefits (TODO: populate the benefits when writing the article)

It is also best practice to keep the Dockerfiles within their own packages/apps.

This is where `pnpm-worspaces` is not that friendly, as there is only one lockfile located at the root of the workspace.

One solution could be to set the [shared-workspace-lockfile](https://pnpm.io/next/npmrc#shared-workspace-lockfile) flag to false. But this will then remove the benefits to have workspaces in the first place as it removes the symlinks between the children `node_modules` and the root `node_modules` which will make the monorepo much slower.

The solution I am proposing right now is (IMHO) the most elegant one. It consists in creating a base Dockerfile with the lock file and reuse that base Dockerfile to generate individual application packages.

### Creating a database and run migration with Prisma

That's all folks!

Jon
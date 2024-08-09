# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
bun c svelte@latest

# create a new project in my-app
bun c svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `bun i`, start a development server:

```bash
bun dev

# or start the server and open the app in a new browser tab
bun dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

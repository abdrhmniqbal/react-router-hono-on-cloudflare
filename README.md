# React Router Hono on Cloudflare

Basic template to run [React Router](https://reactrouter.com) with [Hono](https://hono.dev) on Cloudflare Workers. Implementation of [React Router Hono Server](https://github.com/rphlmr/react-router-hono-server).

## Features

* Typesafe environment variables.
* Serving static files on development mode.
* [Flat routes](https://github.com/kiliman/remix-flat-routes) implementation.
* Custom load context bindings examples.
* Content Security Policy examples.
* API route on Hono example.

## Getting Started

You can quickly create a new React Router application from this templates using the create-react-router CLI.

```bash
npx create-react-router@latest --template abdrhmniqbal/react-router-hono-on-cloudflare
```

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

Deployment is done using the Wrangler CLI.

To deploy directly to production:

```sh
npx wrangler deploy
```

To deploy a preview URL:

```sh
npx wrangler versions upload
```

You can then promote a version to production after verification or roll it out progressively.

```sh
npx wrangler versions deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

## Authors

Iqbal Abdurrahman <https://github.com/abdrhmniqbal>

Built with ❤️ using React Router and Hono.
/// <reference types="vite/client" />
import { reactRouter } from '@react-router/dev/vite'
import { cloudflareDevProxy } from '@react-router/dev/vite/cloudflare'
import { reactRouterDevTools } from 'react-router-devtools'
import { reactRouterHonoServer } from 'react-router-hono-server/dev'
import { defineConfig } from 'vite';
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    cloudflareDevProxy(),
    reactRouterHonoServer({
      runtime: 'cloudflare',
      serverEntryPoint: './server/index.ts',
    }),
    reactRouterDevTools(),
    reactRouter(),
    tsconfigPaths(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
})
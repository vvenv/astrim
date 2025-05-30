// @ts-check
import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import node from '@astrojs/node'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import graphql from '@rollup/plugin-graphql'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  site: process.env.CLOUDFLARE
    ? 'https://astrim.pages.dev'
    : process.env.VERCEL
      ? 'https://astrim.vercel.app'
      : 'http://localhost:4321',

  integrations: [
    mdx(),
    sitemap(),
    react(),
    UnoCSS({
      injectReset: true,
    }),
  ],

  output: 'server',

  adapter: process.env.CLOUDFLARE
    ? cloudflare()
    : process.env.VERCEL
      ? vercel()
      : node({
          mode: 'standalone',
        }),

  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
      fallbackType: 'redirect',
    },
  },

  vite: {
    plugins: [graphql()],
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: process.env.CLOUDFLARE
        ? {
            'react-dom/server': 'react-dom/server.edge',
          }
        : undefined,
    },
    ssr: {
      external: [
        'node:buffer',
        'node:fs',
        'node:path',
        'node:stream',
        'node:util',
      ],
    },
    build: {
      minify: !process.env.CLOUDFLARE,
    },
    optimizeDeps: {
      exclude: ['chromium-bidi', 'fsevents'],
    },
  },
})

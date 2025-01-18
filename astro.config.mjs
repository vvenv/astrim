// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import graphql from "@rollup/plugin-graphql";
import UnoCSS from "unocss/astro";

export default defineConfig({
  site: "https://astrim.vercel.app",

  integrations: [
    mdx(),
    sitemap(),
    react(),
    UnoCSS({
      injectReset: true,
    }),
  ],

  output: "server",

  adapter: process.env.VERCEL
    ? vercel()
    : node({
        mode: "standalone",
      }),

  vite: {
    plugins: [graphql()],
  },
});

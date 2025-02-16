// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import graphql from "@rollup/plugin-graphql";
import UnoCSS from "unocss/astro";

import reactI18next from "astro-react-i18next";

export default defineConfig({
  site: "https://astrim.vercel.app",

  integrations: [
    mdx(),
    sitemap(),
    react(),
    UnoCSS({
      injectReset: true,
    }),
    reactI18next({
      defaultLocale: "en",
      locales: ["en", "zh"],
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

  // i18n: {
  //   locales: ["en", "zh"],
  //   defaultLocale: "en",
  //   routing: "manual",
  // },

  // redirects: {
  //   "/": "/en/",
  // },
});

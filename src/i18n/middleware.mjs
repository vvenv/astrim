// @ts-check
import { defineMiddleware } from "astro:middleware";
import i18n from "./i18n.mjs";

export const onRequest = defineMiddleware(async (ctx, next) => {
  const locale = ctx.url.pathname.split("/")[1];
  i18n.language = locale || i18n.default;

  i18n.translations = await import(`./locales/${i18n.language}/common.json`)
    .then((module) => module.default)
    .catch(() => ({}));

  if (i18n.language !== locale) {
    return ctx.redirect(
      `/${i18n.language}${ctx.url.pathname}${ctx.url.search}${ctx.url.hash}`
    );
  }

  return next();
});

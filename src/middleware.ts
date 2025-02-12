import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (ctx, next) => {
  const { lang } = ctx.params;

  if (["en", "zh"].includes(lang!)) {
    return next();
  }

  return ctx.redirect("/en/");
});

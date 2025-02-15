import { defineMiddleware } from "astro:middleware";
import { l } from "@/store/l";

export const onRequest = defineMiddleware(async (ctx, next) => {
  const { lang } = ctx.params;

  if (!lang || !["en", "zh"].includes(lang)) {
    return ctx.redirect("/en/");
  }

  l.set(lang!);
  return next();
});

import { defineMiddleware } from 'astro:middleware'
import { d } from './i18n'

export const onRequest = defineMiddleware(async (ctx, next) => {
  const url = await d(ctx.url.pathname)

  return url ? ctx.redirect(url) : next()
})

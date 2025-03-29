import { detect } from '@/services/i18n'
import { defineMiddleware } from 'astro:middleware'

export const i18n = defineMiddleware(async (ctx, next) => {
  const url = await detect(ctx.url.pathname)

  return url ? ctx.redirect(url) : next()
})

import { defineMiddleware } from 'astro:middleware'
import i18n from './i18n'

export const onRequest = defineMiddleware(async (ctx, next) => {
  const segments = ctx.url.pathname.split('/')
  i18n.language = segments[1] || i18n.default

  i18n.translations = await import(`./locales/${i18n.language}.json`)
    .then(module => module.default)
    .catch(() => ({}))

  if (i18n.language !== segments[1]) {
    segments[1] = i18n.language
    return ctx.redirect(
      `${segments.join('/')}${ctx.url.search}${ctx.url.hash}`,
    )
  }

  return next()
})

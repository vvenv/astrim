const i18n: {
  default: string
  language: string
  locales: string[]
  translations: Record<string, string>
  t: (key: string, params?: Record<string, string | number | boolean>) => string
} = {
  default: 'en',
  language: 'en',
  locales: ['en', 'zh'],
  translations: {},
  t: (key: string, params?: Record<string, string | number | boolean>) => {
    const value: string = Object.hasOwn(i18n.translations, key)
      ? i18n.translations[key]
      : key

    if (!value || !params)
      return value

    return value.replace(/\{([^{}]+)\}/g, (_, k: string) =>
      Object.hasOwn(params, k) ? `${params[k]}` : `{${k}}`)
  },
}

if (typeof window !== 'undefined') {
  const segments = location.pathname.split('/')
  i18n.language = i18n.locales.includes(segments[1]) ? segments[1] : i18n.default
  i18n.translations = await import(`./locales/${i18n.language}.json`)
    .then(module => module.default)
    .catch(() => ({}))
  if (i18n.language !== segments[1]) {
    segments[1] = i18n.language
    location.replace(`${segments.join('/')}${location.search}${location.hash}`)
  }
}

export default i18n
export const t = i18n.t

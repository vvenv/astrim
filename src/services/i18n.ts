const i18n: {
  default: string
  language: string
  locales: string[]
  translations: Record<string, string>
  detect: (url: string) => Promise<string | void>
  t: (key: string, params?: Record<string, string | number | boolean>) => string
} = {
  default: 'en',
  language: 'en',
  locales: ['en', 'zh'],
  translations: {},
  detect: async (url: string) => {
    const segments = url.split('/')
    const detected = i18n.locales.includes(segments[1]) ? segments[1] : i18n.default
    if (detected !== segments[1]) {
      segments[1] = detected
      return segments.join('/')
    }
    else {
      i18n.language = detected
      i18n.translations = await import(`../locales/${detected}.json`)
        .then(module => module.default)
        .catch(() => ({}))
    }
  },
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

const detect = i18n.detect
const t = i18n.t
export { detect, i18n, t }

if (typeof window !== 'undefined') {
  await detect(location.href.slice(location.origin.length))
}

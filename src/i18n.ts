const i18n: {
  default: string
  language: string
  locales: string[]
  translations: Record<string, string>
  t: (key: string) => string
} = {
  default: 'en',
  language: 'en',
  locales: ['en', 'zh'],
  translations: {},
  t: (key: string) => i18n.translations[key] ?? key,
}

if (typeof window !== 'undefined') {
  const segments = location.pathname.split('/')
  i18n.language = segments[1] || i18n.default
  i18n.translations = await import(`./locales/${i18n.language}.json`)
    .then(module => module.default)
    .catch(() => ({}))
  if (i18n.language !== segments[1]) {
    segments[1] = i18n.language
    location.replace(`${segments.join('/')}${location.search}${location.hash}`)
  }
}

export default i18n

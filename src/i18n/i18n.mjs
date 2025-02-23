// @ts-check
/**
 * @typedef {object} i18n
 * @property {string} default The default locale
 * @property {string} language The current locale
 * @property {string[]} locales The supported locales
 * @property {Record<string, string>} translations The translations
 * @property {(key: string) => string} t Translate a key
 */
const i18n = {
  default: "en",
  language: "en",
  locales: ["en", "zh"],
  /**
   * @type {Record<string, string>}
   */
  translations: {},
  /**
   * @type {(key: string) => string}
   */
  t: (key) => i18n.translations[key] ?? key,
};

if (typeof window !== "undefined") {
  const locale = location.pathname.split("/")[1];
  i18n.language = locale || i18n.default;
  i18n.translations = await import(`./locales/${i18n.language}/common.json`)
    .then((module) => module.default)
    .catch(() => ({}));
  if (i18n.language !== locale) {
    location.replace(
      `/${i18n.language}${location.pathname}${location.search}${location.hash}`
    );
  }
}

export default i18n;

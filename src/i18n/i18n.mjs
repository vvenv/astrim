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

export default i18n;

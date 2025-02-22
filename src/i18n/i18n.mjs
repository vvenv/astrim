const i18n = {
  default: "en",
  language: "en",
  locales: ["en", "zh"],
  translations: {},
  t: (key) => i18n.translations[key] ?? key,
};

export default i18n;

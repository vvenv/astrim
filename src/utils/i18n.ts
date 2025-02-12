export const createT = async (lang = "en") => {
  const { default: translations } = await import(`../locales/${lang}.json`);
  return (key: string) => translations[key] || key;
};

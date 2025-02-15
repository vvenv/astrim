import { l } from "@/store/l";

export const createT = async (lang = l.get()) => {
  const { default: translations } = (await import(
    `../locales/${lang}.json`
  )) as { default: Record<string, string> };
  return (key: string) => translations[key] || key;
};

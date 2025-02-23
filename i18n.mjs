// @ts-check
const INTEGRATION_NAME = "i18n";

/**
 * @returns {import("astro").AstroIntegration}
 */
export default function I18nIntegration() {
  return {
    name: INTEGRATION_NAME,
    hooks: {
      "astro:config:setup": ({ addMiddleware, updateConfig }) => {
        addMiddleware({
          entrypoint: "@/i18n/middleware.mjs",
          order: "pre",
        });
        updateConfig({
          i18n: {
            locales: ["en", "zh"],
            defaultLocale: "en",
            routing: {
              prefixDefaultLocale: false,
              redirectToDefaultLocale: false,
              fallbackType: "redirect",
            },
          },
        });
      },
    },
  };
}

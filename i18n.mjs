const INTEGRATION_NAME = "i18n";

export default function I18nIntegration() {
  /**
   * @type {import("astro").AstroIntegration}
   */
  return {
    name: INTEGRATION_NAME,
    hooks: {
      "astro:config:setup": ({ addMiddleware, updateConfig }) => {
        addMiddleware({
          entrypoint: "@/i18n/middleware.mjs",
          order: "post",
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

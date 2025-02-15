import { l } from "@/store/l";
import { createT } from "@/utils/i18n";
import clsx from "clsx";
import { useEffect } from "react";

interface Props {
  country?: string;
  currency?: string;
}

const countries = [
  { name: "Algeria", country: "DZ", currency: "DZD", sign: "د.ج", flag: "🇩🇿" },
  { name: "Argentina", country: "AR", currency: "ARS", sign: "$", flag: "🇦🇷" },
  { name: "Australia", country: "AU", currency: "AUD", sign: "$", flag: "🇦🇺" },
  { name: "Brazil", country: "BR", currency: "CAD", sign: "$", flag: "🇧🇷" },
  { name: "Canada", country: "CA", currency: "CAD", sign: "$", flag: "🇨🇦" },
  { name: "China", country: "CN", currency: "CNY", sign: "¥", flag: "🇨🇳" },
  { name: "Egypt", country: "EG", currency: "EGP", sign: "ج.م", flag: "🇪🇬" },
  { name: "France", country: "FR", currency: "EUR", sign: "€", flag: "🇫🇷" },
  { name: "Germany", country: "DE", currency: "EUR", sign: "€", flag: "🇩🇪" },
  { name: "Italy", country: "IT", currency: "EUR", sign: "€", flag: "🇮🇹" },
  { name: "Mexico", country: "MX", currency: "CAD", sign: "$", flag: "🇲🇽" },
  {
    name: "New Zealand",
    country: "NZ",
    currency: "NZD",
    sign: "$",
    flag: "🇳🇿",
  },
  { name: "Nigeria", country: "NG", currency: "NGN", sign: "₦", flag: "🇳🇬" },
  {
    name: "Saudi Arabia",
    country: "SA",
    currency: "SAR",
    sign: "ر.س",
    flag: "🇸🇦",
  },
  { name: "Senegal", country: "SN", currency: "XOF", sign: "Fr", flag: "🇸🇳" },
  {
    name: "South Africa",
    country: "ZA",
    currency: "CAD",
    sign: "$",
    flag: "🇿🇦",
  },
  { name: "Spain", country: "ES", currency: "EUR", sign: "€", flag: "🇪🇸" },
  {
    name: "Switzerland",
    country: "CH",
    currency: "CHF",
    sign: "CHF",
    flag: "🇨🇭",
  },
  { name: "Türkiye", country: "TR", currency: "CAD", sign: "$", flag: "🇹🇷" },
  {
    name: "United Kingdom",
    country: "GB",
    currency: "GBP",
    sign: "£",
    flag: "🇬🇧",
  },
  {
    name: "United States",
    country: "US",
    currency: "USD",
    sign: "$",
    flag: "🇺🇸",
  },
];

export default async function Localization({ country, currency }: Props) {
  const current =
    countries.find((c) => c.country === country && c.currency === currency) ??
    countries[0];

  useEffect(() => {
    const closeLocalization = () => {
      document.querySelector("#localization")?.removeAttribute("open");
    };
    const clickOutside = (event: any) => {
      const el = document.querySelector("#localization-list");
      if (!el?.contains(event.target)) {
        closeLocalization();
      }
    };
    document.documentElement.addEventListener("click", clickOutside);
    document
      .querySelector("#localization-list-close")
      ?.addEventListener("click", closeLocalization);
    const localizationEl = document.querySelector("#localization")!;
    new MutationObserver(() => {
      document.body.classList.toggle(
        "overflow-hidden",
        localizationEl.hasAttribute("open")
      );
    }).observe(localizationEl, {
      attributes: true,
      attributeFilter: ["open"],
    });
  }, []);

  const t = await createT();

  return (
    <section className="flex flex-col items-center gap-2">
      <h2 className="">{t("Country/region")}</h2>
      <details className="group" id="localization">
        <summary
          className="flex cursor-pointer items-center gap-8 border border-default/50 px-5 py-3 text-default"
          aria-label="Select country/region"
        >
          <span className="flex items-center gap-1">
            <span>{current.flag}</span>
            <span>{current.name}</span>
          </span>
          <span className="flex items-center gap-1">
            <span>{current.currency}</span>
            <span>{current.sign}</span>
          </span>
          <i className="i-astrim:caret block size-3"></i>
        </summary>
        <section>
          <div className="fixed inset-0 z-20 bg-black/50 opacity-0 transition-opacity group-open:opacity-100"></div>
          <div
            className="fixed bottom-0 left-0 right-0 z-20 bg-default transition-transform -translate-y-full group-open:translate-y-0"
            id="localization-list"
          >
            <button
              className="absolute right-8 top-4 p-2 text-default transition-transform hover:scale-110"
              type="button"
              id="localization-list-close"
              aria-label="Close"
            >
              <i className="i-astrim:close block size-5"></i>
            </button>
            <ul className="mt-16 max-h-sm flex flex-col gap-2 overflow-auto px-4 pb-8">
              {countries.map(({ flag, country, currency, sign }) => (
                <li key={country} tabIndex={-1}>
                  <a
                    className="flex items-center justify-between gap-1 border border-default/0 py-2 pl-2 pr-8 transition-colors hover:border-default/50"
                    href={`/${l.get()}/${country}/${currency}`}
                  >
                    <span className="flex items-center gap-2">
                      <i
                        className={clsx([
                          "block i-astrim:check size-4",
                          current.country === country
                            ? "opacity-100"
                            : "opacity-0",
                        ])}
                      />
                      <span>{flag}</span>
                      <span>{country}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span>{currency}</span>
                      <span>{sign}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </details>
    </section>
  );
}

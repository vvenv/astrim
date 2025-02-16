import { useTranslation } from "react-i18next";
import { SITE_TITLE } from "../consts";

export default function HeaderLogo() {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <h2 className="flex flex-1 justify-center text-2xl">
      <a className="tracking-widest no-underline" href={`/${language}/`}>
        {SITE_TITLE}
      </a>
    </h2>
  );
}

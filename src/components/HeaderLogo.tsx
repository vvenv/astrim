import { SITE_TITLE } from "../consts";

export default function HeaderLogo() {
  return (
    <h2 className="flex flex-1 justify-center text-2xl">
      <a className="tracking-widest no-underline" href="/">
        {SITE_TITLE}
      </a>
    </h2>
  );
}

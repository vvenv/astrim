import { l } from "@/store/l";
import { createT } from "@/utils/i18n";
import clsx from "clsx";

type Props = {
  className?: string;
  iconOnly?: boolean;
};

export default async function AccountLogin({ className, iconOnly }: Props) {
  const t = await createT();

  return (
    <a
      className={clsx([
        className,
        "inline-flex gap-2 items-center text-default p-0.5",
      ])}
      href={`/${l.get()}/account/login`}
      aria-label="Log in"
    >
      <i className="i-astrim:account block size-5 cursor-pointer transition-transform hover:scale-110"></i>
      <span className={iconOnly ? "hidden" : "block"}>{t(`Log in`)}</span>
    </a>
  );
}

import { clsx } from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = ({ className, href, children, ...props }: Props) => {
  return href ? (
    <a
      className={clsx(
        "bg-primary px-8 py-3 text-primary-contrast hover:outline-1 hover:outline-primary hover:outline-solid",
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </a>
  ) : (
    <button
      className={clsx(
        "bg-primary px-8 py-3 text-primary-contrast hover:outline-1 hover:outline-primary hover:outline-solid",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

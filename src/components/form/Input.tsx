import type { InputHTMLAttributes, HTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  placeholder: string;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
  children?: ReactNode;
}

export const Input = ({
  id,
  placeholder,
  labelProps,
  children,
  ...props
}: Props) => {
  return (
    <fieldset className="relative">
      <input
        className="peer w-full border border-default/50 bg-transparent px-5 py-3 focus:pb-1 focus:pt-5 not-placeholder-shown:pb-1 not-placeholder-shown:pt-5 placeholder:opacity-0"
        id={id}
        placeholder={placeholder}
        {...props}
      />
      <label
        className="absolute left-5 top-3 text-base transition-all peer-focus:top-1.5 peer-not-placeholder-shown:top-1.5 peer-focus:text-xs peer-not-placeholder-shown:text-xs"
        htmlFor={id}
        aria-controls={id}
        {...labelProps}
      >
        {placeholder}
      </label>
      {children}
    </fieldset>
  );
};

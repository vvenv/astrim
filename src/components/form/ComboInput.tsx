import type { ReactNode } from 'react'
import { Field, Input } from '@base-ui-components/react'
import clsx from 'clsx'

interface Props extends Omit<Input.Props, 'as'> {
  label: string
  inputProps?: Input.Props
  labelProps?: Field.Label.Props
  children?: ReactNode
}

export function ComboInput({
  className,
  disabled,
  label,
  placeholder = '',
  inputProps,
  labelProps,
  children,
  ...props
}: Props) {
  return (
    <Field.Root className={clsx('relative', className)} disabled={disabled}>
      <Input
        className="peer w-full border border-default/50 bg-transparent px-5 py-3 focus:pb-1 focus:pt-5 not-placeholder-shown:pb-1 not-placeholder-shown:pt-5 placeholder:opacity-0 focus:placeholder:opacity-100"
        placeholder={placeholder}
        {...props}
        {...inputProps}
      />
      <Field.Label
        className="absolute left-5 top-3 text-base transition-all peer-focus:top-1.5 peer-not-placeholder-shown:top-1.5 peer-focus:text-xs peer-not-placeholder-shown:text-xs"
        {...labelProps}
      >
        {label}
      </Field.Label>
      {children}
    </Field.Root>
  )
}

import i18n from '@/i18n'
import clsx from 'clsx'

interface Props {
  desktopOnly?: boolean
  iconOnly?: boolean
}

export default function LoginEntry({ desktopOnly, iconOnly }: Props) {
  return (
    <a
      className={clsx([
        desktopOnly ? 'hidden md:inline-flex' : 'inline-flex',
        'gap-2 items-center text-default p-0.5',
      ])}
      href={`/${i18n.language}/account/login`}
      aria-label="Log in"
    >
      <i className="i-astrim:account block size-5 cursor-pointer transition-transform hover:scale-110"></i>
      <span className={iconOnly ? 'hidden' : 'block'}>{i18n.t(`Log in`)}</span>
    </a>
  )
}

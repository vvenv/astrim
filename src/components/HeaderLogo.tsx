import { i18n } from '@/services/i18n'
import { SITE_TITLE } from '../consts'

export function HeaderLogo() {
  return (
    <h2 className="flex flex-1 justify-center text-2xl">
      <a className="tracking-widest no-underline" href={`/${i18n.language}/`}>
        {SITE_TITLE}
      </a>
    </h2>
  )
}

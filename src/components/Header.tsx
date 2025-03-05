import { i18n } from '@/i18n'
import { HeaderLogo } from './HeaderLogo'
import { LoginEntry } from './LoginEntry'
import { MenuDrawer } from './MenuDrawer'
import { Search } from './Search'

export function Header() {
  return (
    <header className="sticky left-0 right-0 top-0 z-20 grid grid-cols-[100px_1fr_100px] items-center border-b border-default/8 bg-default px-6 py-2 md:grid-cols-[160px_1fr_160px]">
      <MenuDrawer />
      <HeaderLogo />
      <div className="flex items-center justify-end gap-2">
        <Search />
        <LoginEntry desktopOnly iconOnly />
        <a
          className="p-0.5 text-default"
          href={`/${i18n.language}/cart`}
          aria-label="View cart"
        >
          <i className="i-astrim:cart-empty block size-10 cursor-pointer transition-transform hover:scale-110"></i>
        </a>
      </div>
    </header>
  )
}

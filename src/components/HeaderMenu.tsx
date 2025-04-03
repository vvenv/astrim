import { i18n } from '@/services/i18n'

export function HeaderMenu() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center">
        <li>
          <a
            className="block px-4 py-2 hover:bg-invert/4"
            href={`/${i18n.language}/collections/men`}
          >
            Men
          </a>
        </li>
        <li>
          <a
            className="block px-4 py-2 hover:bg-invert/4"
            href={`/${i18n.language}/collections/women`}
          >
            Women
          </a>
        </li>
        <li>
          <a
            className="block px-4 py-2 hover:bg-invert/4"
            href={`/${i18n.language}/collections/unisex`}
          >
            Unisex
          </a>
        </li>
        <li>
          <a
            className="block px-4 py-2 hover:bg-invert/4"
            href={`/${i18n.language}/collections`}
          >
            Collections
          </a>
        </li>
      </ul>
    </nav>
  )
}

import { COLLECTIONS } from '@/consts'
import { CollectionMenu } from './CollectionMenu'

export function HeaderMenu() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center">
        {
          COLLECTIONS.map(({ title, links }) => (
            <li key={title}>
              <CollectionMenu
                title={title}
                links={links}
              />
            </li>
          ))
        }
        <li>
          <a
            className="block px-4 py-2 hover:bg-invert/4"
            href="/pages/lookbook-summer"
          >
            Lookbook
          </a>
        </li>
      </ul>
    </nav>
  )
}

import { t } from '@/i18n'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

interface Props {
  title: string
  links: { link: string, text: string }[]
}

export function CollectionDisclosure({ title, links }: Props) {
  return (
    <Disclosure>
      <DisclosureButton className="group w-full flex items-center justify-between px-8 py-3 hover:bg-invert/4">
        {t(title)}
        <i className="i-astrim-caret block size-3 transition-transform group-data-[open]:rotate-180"></i>
      </DisclosureButton>
      <DisclosurePanel className="origin-top-left transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0" transition>
        <ul tabIndex={-1}>
          {links.map(({ link, text }) => (
            <li key={link}>
              <a className="block px-12 py-3 hover:bg-invert/4" href={link}>
                {t(text)}
              </a>
            </li>
          ))}
        </ul>
      </DisclosurePanel>
    </Disclosure>
  )
}

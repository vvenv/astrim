import { t } from '@/i18n'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

interface Props {
  title: string
  links: { link: string, text: string }[]
}

export function CollectionMenu({ title, links }: Props) {
  return (
    <Popover>
      <PopoverButton className="group flex items-center gap-2 px-4 py-2 hover:bg-invert/4">
        {t(title)}
        <i className="i-astrim-caret block size-3 transition-transform group-data-[open]:rotate-180"></i>
      </PopoverButton>
      <PopoverPanel className="z-20 origin-top border border-default/8 bg-default transition ease-out data-[closed]:scale-95 data-[closed]:opacity-0" anchor="bottom start" transition>
        <ul className="flex flex-col" tabIndex={-1}>
          {links.map(({ link, text }) => (
            <li key={link}>
              <a className="block px-4 py-3 hover:bg-invert/4" href={link}>
                {t(text)}
              </a>
            </li>
          ))}
        </ul>
      </PopoverPanel>
    </Popover>
  )
}

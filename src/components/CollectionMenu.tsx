import { t } from '@/i18n'
import { Popover } from '@base-ui-components/react'

interface Props {
  title: string
  links: { link: string, text: string }[]
}

export function CollectionMenu({ title, links }: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger className="group flex items-center gap-2 px-4 py-2 hover:bg-invert/4">
        {t(title)}
        <i className="i-astrim-caret block size-3 transition-transform group-data-[popup-open]:rotate-180"></i>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner align="start">
          <Popover.Popup className="z-20 origin-top bg-default transition ease-out closed:scale-95 closed:opacity-0">
            <ul className="flex flex-col" tabIndex={-1}>
              {links.map(({ link, text }) => (
                <li key={link}>
                  <a className="block px-4 py-3 hover:bg-invert/4" href={link}>
                    {t(text)}
                  </a>
                </li>
              ))}
            </ul>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

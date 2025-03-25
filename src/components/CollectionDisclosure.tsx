import { t } from '@/i18n'
import { Collapsible } from '@base-ui-components/react'

interface Props {
  title: string
  links: { link: string, text: string }[]
}

export function CollectionDisclosure({ title, links }: Props) {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger className="group w-full flex items-center justify-between px-8 py-3 hover:bg-invert/4">
        {t(title)}
        <i className="i-astrim-caret block size-3 transition-transform group-data-[panel-open]:rotate-180"></i>
      </Collapsible.Trigger>
      <Collapsible.Panel className="origin-top-left transition duration-200 ease-out closed:scale-95 closed:opacity-0">
        <ul tabIndex={-1}>
          {links.map(({ link, text }) => (
            <li key={link}>
              <a className="block px-12 py-3 hover:bg-invert/4" href={link}>
                {t(text)}
              </a>
            </li>
          ))}
        </ul>
      </Collapsible.Panel>
    </Collapsible.Root>
  )
}

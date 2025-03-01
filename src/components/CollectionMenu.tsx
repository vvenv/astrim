interface Props {
  title: string
  links: { link: string, text: string }[]
}

export default function CollectionMenu({ title, links }: Props) {
  return (
    <details className="group/collection">
      <summary
        className="flex items-center justify-between gap-2 px-8 py-3 group-open/collection:flex-row-reverse group-open/collection:justify-end hover:bg-invert/4"
        role="button"
      >
        {title}
        <i className="i-astrim:arrow block transition-transform group-open/collection:rotate-180"></i>
      </summary>
      <section>
        <ul className="ml-6" tabIndex={-1}>
          {links.map(({ link, text }) => (
            <li key={link}>
              <a className="block px-8 py-3 hover:bg-invert/4" href={link}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </details>
  )
}

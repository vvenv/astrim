import clsx from 'clsx'

interface Props {
  className?: string
}

const socialMedia = [
  {
    link: 'https://x.com/shopify',
    iconClass: 'i-astrim:twitter',
    label: 'Twitter',
  },
  {
    link: 'https://facebook.com/shopify',
    iconClass: 'i-astrim:facebook',
    label: 'Facebook',
  },
  {
    link: 'https://instagram.com/shopify',
    iconClass: 'i-astrim:instagram',
    label: 'Instagram',
  },
  {
    link: 'https://tiktok.com/@shopify',
    iconClass: 'i-astrim:tiktok',
    label: 'TikTok',
  },
  {
    link: 'https://www.youtube.com/shopify',
    iconClass: 'i-astrim:youtube',
    label: 'YouTube',
  },
]

export default function SocialMedia({ className }: Props) {
  return (
    <ul className={clsx([className, 'flex gap-1 items-center'])}>
      {socialMedia.map(({ link, iconClass, label }) => (
        <li key={link}>
          <a className="block p-2" href={link} aria-label={label}>
            <i className={clsx([iconClass, 'block size-5'])} />
          </a>
        </li>
      ))}
    </ul>
  )
}

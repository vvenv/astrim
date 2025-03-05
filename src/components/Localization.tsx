import { i18n, t } from '@/i18n'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import clsx from 'clsx'

interface Props {
  seamless?: boolean
  country?: string
  currency?: string
}

const countries = [
  { name: 'Algeria', country: 'DZ', currency: 'DZD', sign: 'د.ج', flag: '🇩🇿' },
  { name: 'Argentina', country: 'AR', currency: 'ARS', sign: '$', flag: '🇦🇷' },
  { name: 'Australia', country: 'AU', currency: 'AUD', sign: '$', flag: '🇦🇺' },
  { name: 'Brazil', country: 'BR', currency: 'CAD', sign: '$', flag: '🇧🇷' },
  { name: 'Canada', country: 'CA', currency: 'CAD', sign: '$', flag: '🇨🇦' },
  { name: 'China', country: 'CN', currency: 'CNY', sign: '¥', flag: '🇨🇳' },
  { name: 'Egypt', country: 'EG', currency: 'EGP', sign: 'ج.م', flag: '🇪🇬' },
  { name: 'France', country: 'FR', currency: 'EUR', sign: '€', flag: '🇫🇷' },
  { name: 'Germany', country: 'DE', currency: 'EUR', sign: '€', flag: '🇩🇪' },
  { name: 'Italy', country: 'IT', currency: 'EUR', sign: '€', flag: '🇮🇹' },
  { name: 'Mexico', country: 'MX', currency: 'CAD', sign: '$', flag: '🇲🇽' },
  {
    name: 'New Zealand',
    country: 'NZ',
    currency: 'NZD',
    sign: '$',
    flag: '🇳🇿',
  },
  { name: 'Nigeria', country: 'NG', currency: 'NGN', sign: '₦', flag: '🇳🇬' },
  {
    name: 'Saudi Arabia',
    country: 'SA',
    currency: 'SAR',
    sign: 'ر.س',
    flag: '🇸🇦',
  },
  { name: 'Senegal', country: 'SN', currency: 'XOF', sign: 'Fr', flag: '🇸🇳' },
  {
    name: 'South Africa',
    country: 'ZA',
    currency: 'CAD',
    sign: '$',
    flag: '🇿🇦',
  },
  { name: 'Spain', country: 'ES', currency: 'EUR', sign: '€', flag: '🇪🇸' },
  {
    name: 'Switzerland',
    country: 'CH',
    currency: 'CHF',
    sign: 'CHF',
    flag: '🇨🇭',
  },
  { name: 'Türkiye', country: 'TR', currency: 'CAD', sign: '$', flag: '🇹🇷' },
  {
    name: 'United Kingdom',
    country: 'GB',
    currency: 'GBP',
    sign: '£',
    flag: '🇬🇧',
  },
  {
    name: 'United States',
    country: 'US',
    currency: 'USD',
    sign: '$',
    flag: '🇺🇸',
  },
]

export function Localization({ seamless, country, currency }: Props) {
  const current
    = countries.find(c => c.country === country && c.currency === currency)
      ?? countries[0]

  return (
    <Menu>
      <section className="flex flex-col items-center gap-2">
        {seamless ? null : <h2>{t('Country/region')}</h2>}
        <MenuButton
          className={clsx(
            'w-52 flex cursor-pointer items-center py-3 text-default',
            seamless ? 'gap-4' : 'gap-8 px-5 border border-default/50',
          )}
          aria-label="Select country/region"
        >
          <span className="flex items-center gap-1">
            <span>{current.flag}</span>
            <span>{current.name}</span>
          </span>
          <span className="flex items-center gap-1">
            <span>{current.currency}</span>
            <span>{current.sign}</span>
          </span>
          <i className="i-astrim-caret block size-3"></i>
        </MenuButton>
        <MenuItems className="h-52 w-52 overflow-auto border border-default/50 bg-default -translate-y-1" anchor="top start" transition>
          {countries.map(({ flag, country, currency, sign }) => (
            <MenuItem key={country}>
              <a
                className="flex items-center justify-between gap-1 border-b border-default/50 py-2 pl-2 pr-8 transition-colors last:border-b-none hover:bg-invert/4"
                href={`/${i18n.language}?=country=${country}`}
              >
                <span className="flex items-center gap-2">
                  <i
                    className={clsx([
                      'block i-astrim-check size-4',
                      current.country === country ? 'opacity-100' : 'opacity-0',
                    ])}
                  />
                  <span>{flag}</span>
                  <span>{country}</span>
                </span>
                <span className="flex items-center gap-2">
                  <span>{currency}</span>
                  <span>{sign}</span>
                </span>
              </a>
            </MenuItem>
          ))}
        </MenuItems>
      </section>
    </Menu>
  )
}

import type { CurrencyCode } from 'api.generated'
import { currencySign } from '@/services/currency'
import clsx from 'clsx'

interface Props {
  className?: string
  amount: string
  currency: CurrencyCode
}

export function ProductPrice({ className, amount, currency }: Props) {
  return (
    <p className={clsx(className, 'text-xl font-semibold')}>
      {currencySign[currency] ?? '$'}
      {amount}
      {currency}
    </p>
  )
}

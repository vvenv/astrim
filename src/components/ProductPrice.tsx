import type { CurrencyCode } from 'api.generated'
import { currencySign } from '@/services/currency'

interface Props {
  amount: string
  currency: CurrencyCode
}

export function ProductPrice({ amount, currency }: Props) {
  return (
    <p className="text-xl font-semibold">
      {currencySign[currency] ?? '$'}
      {amount}
      {currency}
    </p>
  )
}

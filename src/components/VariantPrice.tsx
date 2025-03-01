import type { GetProductQuery } from 'api.generated'
import ProductPrice from '@/components/ProductPrice'
import { selectedOptions } from '@/store/selectedOptions'
import { useStore } from '@nanostores/react'
import { useMemo } from 'react'

interface Props {
  variants: NonNullable<
    NonNullable<NonNullable<GetProductQuery>['product']>['variants']
  >['nodes']
}

export default function VariantPrice({ variants }: Props) {
  const $selectedOptions = useStore(selectedOptions)

  const selectedVariant = useMemo(() => {
    return variants.find(({ selectedOptions }) =>
      selectedOptions.every(({ name, value }) => {
        return $selectedOptions[name] === value
      }),
    )
  }, [variants, $selectedOptions])

  return selectedVariant?.price
    ? (
        <ProductPrice
          amount={selectedVariant.price.amount as string}
          currency={selectedVariant.price.currencyCode}
        />
      )
    : null
}

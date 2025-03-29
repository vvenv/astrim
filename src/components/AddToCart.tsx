import type { GetProductQuery } from 'api.generated'
import { t } from '@/services/i18n'
import { selectedOptions } from '@/store/selectedOptions'
import { Field, Input } from '@base-ui-components/react'
import { useStore } from '@nanostores/react'
import { useMemo, useState } from 'react'

interface Props {
  variants: NonNullable<
    NonNullable<NonNullable<GetProductQuery>['product']>['variants']
  >['nodes']
}

export function AddToCart({ variants }: Props) {
  const $selectedOptions = useStore(selectedOptions)

  const [quantity, setQuantity] = useState(1)

  const selectedVariant = useMemo(() => {
    return variants.find(({ selectedOptions }) =>
      selectedOptions.every(({ name, value }) => {
        return $selectedOptions[name] === value
      }),
    )
  }, [variants, $selectedOptions])

  const disabled = !selectedVariant?.availableForSale

  return (
    <section className="my-8 flex flex-col items-start gap-5">
      <Field.Root className="relative" disabled={disabled}>
        <button
          className="absolute left-0 h-full px-5"
          type="button"
          disabled={quantity <= 1}
          onClick={() => {
            setQuantity(quantity - 1)
          }}
          aria-label="Decrease quantity"
        >
          <i className="i-astrim-minus block size-2"></i>
        </button>
        <Input
          className="border border-primary/10 bg-transparent px-4 py-3 text-center"
          type="number"
          pattern="[0-9]*"
          value={quantity}
          min={1}
        />
        <button
          className="absolute right-0 h-full px-5"
          type="button"
          onClick={() => {
            setQuantity(quantity + 1)
          }}
          aria-label="Increase quantity"
        >
          <i className="i-astrim-plus block size-2"></i>
        </button>
      </Field.Root>
      <button
        className="w-full btn-primary"
        type="button"
      >
        {t('Add to cart')}
      </button>
    </section>
  )
}

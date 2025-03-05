import type { GetProductQuery } from 'api.generated'
import { t } from '@/i18n'
import { selectedOptions } from '@/store/selectedOptions'
import { Button, Field, Input } from '@headlessui/react'
import { useStore } from '@nanostores/react'
import { useEffect, useMemo, useState } from 'react'

interface Props {
  variants: NonNullable<
    NonNullable<NonNullable<GetProductQuery>['product']>['variants']
  >['nodes']
}

export function AddToCart({ variants }: Props) {
  const $selectedOptions = useStore(selectedOptions)

  const [disabled, setDisabled] = useState(true)
  const [quantity, setQuantity] = useState(1)

  const selectedVariant = useMemo(() => {
    return variants.find(({ selectedOptions }) =>
      selectedOptions.every(({ name, value }) => {
        return $selectedOptions[name] === value
      }),
    )
  }, [variants, $selectedOptions])

  useEffect(() => {
    setDisabled(!selectedVariant?.availableForSale)
  }, [selectedVariant?.availableForSale])

  return (
    <section className="my-8 flex flex-col items-start gap-5">
      <Field className="relative" disabled={disabled}>
        <Button
          className="absolute left-0 h-full px-5"
          disabled={quantity <= 1}
          onClick={() => {
            setQuantity(quantity - 1)
          }}
        >
          <i className="i-astrim-minus block size-2"></i>
        </Button>
        <Input
          className="border border-primary/10 bg-transparent px-4 py-3 text-center"
          type="number"
          pattern="[0-9]*"
          value={quantity}
          min={1}
        />
        <Button
          className="absolute right-0 h-full px-5"
          onClick={() => {
            setQuantity(quantity + 1)
          }}
        >
          <i className="i-astrim-plus block size-2"></i>
        </Button>
      </Field>
      <Button
        className="w-full btn-primary"
      >
        {t('Add to cart')}
      </Button>
    </section>
  )
}

import type { GetProductQuery } from 'api.generated'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { selectedOptions } from '@/store/selectedOptions'
import { useStore } from '@nanostores/react'
import { useMemo } from 'react'

interface Props {
  featuredImage: NonNullable<
    NonNullable<GetProductQuery>['product']
  >['featuredImage']
  variants: NonNullable<
    NonNullable<NonNullable<GetProductQuery>['product']>['variants']
  >['nodes']
}

export function MediaGallery({ featuredImage, variants }: Props) {
  const $selectedOptions = useStore(selectedOptions)

  const selectedVariant = useMemo(() => {
    return variants.find(({ selectedOptions }) =>
      selectedOptions.every(({ name, value }) => {
        return $selectedOptions[name] === value
      }),
    )
  }, [variants, $selectedOptions])

  return (
    <ResponsiveImage
      src={
        (selectedVariant?.image?.url as string)
        ?? (featuredImage?.url as string)
        ?? ''
      }
      alt=""
    />
  )
}

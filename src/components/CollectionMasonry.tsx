import type { GetCollectionQuery } from 'api.generated'
import getCollection from '@/graphql/collection.gql'
import { i18n } from '@/services/i18n'
import request from 'graphql-request'
import { Masonry, useInfiniteLoader } from 'masonic'
import { useEffect, useState } from 'react'
import { ProductPrice } from './ProductPrice'
import { ResponsiveImage } from './ResponsiveImage'

type Item = NonNullable<GetCollectionQuery['collection']>['products']['nodes'][number]

export function CollectionMasonry({ handle }: { handle: string }) {
  const [items, setItems] = useState<Item[]>([])
  const [after, setAfter] = useState<string | null>(null)
  const maybeLoadMore = useInfiniteLoader(async () => {
    if (after === '') {
      return
    }
    const { collection } = await request<GetCollectionQuery>('https://mock.shop/api', getCollection, {
      handle,
      after,
    })

    const {
      products: {
        nodes: products,
        pageInfo: { hasNextPage, endCursor },
      },
    } = collection!

    setItems(current => [...current, ...products])
    setAfter(hasNextPage ? endCursor! : '')
  }, {
    isItemLoaded: (index, items) => !!(items?.[index] ?? false),
  })

  useEffect(() => {
    maybeLoadMore(0, 10, [])
  }, [maybeLoadMore])

  return (
    <Masonry
      items={items}
      columnGutter={20}
      render={({ index, data: {
        handle,
        title,
        featuredImage,
        variants: {
          nodes: [
            {
              price: { amount, currencyCode },
            },
          ],
        },
      } }) => (
        <div key={index} className="group relative">
          <ResponsiveImage src={featuredImage!.url as string} alt={title} />
          <h3 className="mt-2 text-xl">
            <a
              className="after:absolute after:inset-0 after:z-10 after:cursor-pointer hover:underline after:content-empty"
              href={`/${i18n.language}/products/${handle}`}
            >
              {title}
            </a>
          </h3>
          <ProductPrice amount={amount as string} currency={currencyCode} />
        </div>
      )}
      onRender={maybeLoadMore}
    />
  )
}

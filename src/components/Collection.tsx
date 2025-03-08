import type { GetCollectionQuery } from 'api.generated'
import { i18n, t } from '@/i18n'
import { Button } from '@headlessui/react'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductImage } from './ProductImage'
import { ProductPrice } from './ProductPrice'

import 'swiper/css'

interface Props {
  handle: string
  title: string
  products: NonNullable<
    NonNullable<
      NonNullable<GetCollectionQuery['collection']>['products']
    >['nodes']
  >
}

export function Collection({ handle, title, products }: Props) {
  return (
    <section className="flex flex-col items-center gap-5">
      <h2 className="text-3xl">{title}</h2>
      <Swiper
        className="group w-full"
        tag="ul"
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        rewind
        navigation={{
          enabled: true,
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {products.map(
          ({
            handle,
            featuredImage,
            title,
            variants: {
              nodes: [
                {
                  price: { amount, currencyCode },
                },
              ],
            },
          }) => (
            <SwiperSlide key={handle} tag="li">
              <a
                key={handle}
                className="group/slide relative"
                href={`/${i18n.language}/products/${handle}`}
              >
                <ProductImage src={featuredImage!.url as string} alt={title} />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-default/60 p-2 opacity-0 transition-all group-hover/slide:translate-y-0 group-hover/slide:opacity-100">
                  <h3
                    className="text-xl group-hover/slide:underline"
                  >
                    {title}
                  </h3>
                  <ProductPrice amount={amount as string} currency={currencyCode} />
                </div>
              </a>
            </SwiperSlide>
          ),
        )}
        <div className="swiper-button-prev absolute left-0 top-1/2 z-10 opacity-0 transition-opacity group-hover:opacity-100">
          <i className="i-astrim-caret block size-10 rotate-90 text-invert" />
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 z-10 opacity-0 transition-opacity group-hover:opacity-100">
          <i className="i-astrim-caret block size-10 text-invert -rotate-90" />
        </div>
      </Swiper>
      <Button
        className="group inline-flex items-center gap-2 btn-primary"
        as="a"
        href={`/${i18n.language}/collections/${handle}`}
      >
        {t('View collection')}
        <i className="i-astrim-caret size-3 transition-transform group-hover:translate-x-2 -rotate-90" />
      </Button>
    </section>
  )
}

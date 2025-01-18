import type { GetCollectionQuery } from "api.generated";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";

type Props = {
  handle: string;
  title: string;
  products: NonNullable<
    NonNullable<
      NonNullable<GetCollectionQuery["collection"]>["products"]
    >["nodes"]
  >;
};

export default function Collection({ handle, title, products }: Props) {
  return (
    <section className="flex flex-col items-start gap-5">
      <h2 className="text-2xl">{title}</h2>
      <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
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
            <li key={handle} className="relative">
              <ProductImage src={featuredImage!.url as string} alt={title} />
              <h3>
                <a
                  className="after:absolute after:inset-0 after:z-10 hover:underline after:content-empty"
                  href={`/products/${handle}`}
                >
                  {title}
                </a>
              </h3>
              <ProductPrice amount={amount as string} currency={currencyCode} />
            </li>
          )
        )}
      </ul>
      <a
        className="bg-primary px-4 py-2 text-primary-contrast hover:outline-1 hover:outline-primary hover:outline-solid"
        href={`/collections/${handle}`}
      >
        View collection
      </a>
    </section>
  );
}

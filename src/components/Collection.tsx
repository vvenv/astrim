import type { GetCollectionQuery } from "api.generated";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import { l } from "@/store/l";
import { createT } from "@/utils/i18n";

type Props = {
  handle: string;
  title: string;
  products: NonNullable<
    NonNullable<
      NonNullable<GetCollectionQuery["collection"]>["products"]
    >["nodes"]
  >;
};

export default async function Collection({ handle, title, products }: Props) {
  const t = await createT();

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
                  href={`/${l.get()}/products/${handle}`}
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
        href={`/${l.get()}/collections/${handle}`}
      >
        {t("View collection")}
      </a>
    </section>
  );
}

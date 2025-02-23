import type { GetCollectionQuery } from "api.generated";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import i18n from "@/i18n";
import { Button } from "./form/Button";

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
                  href={`/${i18n.language}/products/${handle}`}
                >
                  {title}
                </a>
              </h3>
              <ProductPrice amount={amount as string} currency={currencyCode} />
            </li>
          )
        )}
      </ul>

      <Button href={`/${i18n.language}/collections/${handle}`}>
        {i18n.t("View collection")}
      </Button>
    </section>
  );
}

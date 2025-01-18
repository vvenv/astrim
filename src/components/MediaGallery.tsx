import type { GetProductQuery } from "api.generated";
import { useMemo } from "react";
import { useStore } from "@nanostores/react";
import ProductImage from "@/components/ProductImage";
import { selectedOptions } from "@/store/selectedOptions";

type Props = {
  featuredImage: NonNullable<
    NonNullable<GetProductQuery>["product"]
  >["featuredImage"];
  variants: NonNullable<
    NonNullable<NonNullable<GetProductQuery>["product"]>["variants"]
  >["nodes"];
};

export default function MediaGallery({ featuredImage, variants }: Props) {
  const $selectedOptions = useStore(selectedOptions);

  const selectedVariant = useMemo(() => {
    return variants.find(({ selectedOptions }) =>
      selectedOptions.every(({ name, value }) => {
        return $selectedOptions[name] === value;
      })
    );
  }, [variants, $selectedOptions]);

  return (
    <ProductImage
      src={
        (selectedVariant?.image?.url as string) ??
        (featuredImage?.url as string) ??
        ""
      }
      alt=""
    />
  );
}

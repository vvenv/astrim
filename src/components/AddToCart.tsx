import type { GetProductQuery } from "api.generated";
import { useEffect, useMemo, useState } from "react";
import { useStore } from "@nanostores/react";
import { selectedOptions } from "@/store/selectedOptions";
import i18n from "@/i18n/i18n.mjs";

type Props = {
  variants: NonNullable<
    NonNullable<NonNullable<GetProductQuery>["product"]>["variants"]
  >["nodes"];
};

export default function AddToCart({ variants }: Props) {
  const $selectedOptions = useStore(selectedOptions);

  const [disabled, setDisabled] = useState(true);

  const selectedVariant = useMemo(() => {
    return variants.find(({ selectedOptions }) =>
      selectedOptions.every(({ name, value }) => {
        return $selectedOptions[name] === value;
      })
    );
  }, [variants, $selectedOptions]);

  useEffect(() => {
    setDisabled(!selectedVariant?.availableForSale);
  }, [selectedVariant?.availableForSale]);

  return (
    <section className="my-8 flex flex-col items-start gap-5">
      <input
        className="border border-primary/10 bg-transparent px-4 py-3"
        type="number"
        pattern="[0-9]*"
        defaultValue="1"
        disabled={disabled}
      />
      <button
        className="block w-full cursor-pointer bg-primary px-8 py-3 text-primary-contrast disabled:cursor-not-allowed disabled:bg-primary/50 disabled:text-primary-contrast/50 hover:outline-1 hover:outline-primary hover:outline-solid disabled:outline-none"
        disabled={disabled}
      >
        {i18n.t("Add to cart")}
      </button>
    </section>
  );
}

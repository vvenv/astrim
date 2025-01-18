import type { GetProductQuery } from "api.generated";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { selectedOptions } from "@/store/selectedOptions";

type Props = {
  options: NonNullable<NonNullable<GetProductQuery>["product"]>["options"];
  initialSelectedOptions: NonNullable<
    NonNullable<
      NonNullable<GetProductQuery>["product"]
    >["selectedOrFirstAvailableVariant"]
  >["selectedOptions"];
};

export default function VariantSwatch({
  options,
  initialSelectedOptions,
}: Props) {
  const $selectedOptions = useStore(selectedOptions);

  useEffect(() => {
    selectedOptions.set(
      initialSelectedOptions.reduce(
        (acc, { name, value }) => ({ ...acc, [name]: value }),
        {}
      )
    );
  }, [initialSelectedOptions]);

  return (
    <section className="grid grid-cols-1 my-8 gap-5" id="options">
      {options.map(({ name, optionValues }) => (
        <fieldset key={name} className="grid grid-cols-1 gap-2">
          <legend className="contents">{name}</legend>
          <ul className="flex flex-wrap gap-2">
            {optionValues.map((value) => (
              <li key={value.name}>
                <input
                  className="peer sr-only"
                  type="radio"
                  name={name}
                  id={value.id}
                  value={value.name}
                  checked={$selectedOptions[name] === value.name}
                  onChange={() => {
                    selectedOptions.set({
                      ...$selectedOptions,
                      [name]: value.name,
                    });
                  }}
                />
                <label
                  className="block cursor-pointer border border-secondary-contrast/10 bg-secondary px-3 py-1.5 text-secondary-contrast hover:border-secondary-contrast peer-checked:bg-primary peer-checked:text-primary-contrast"
                  htmlFor={value.id}
                >
                  {value.name}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      ))}
    </section>
  );
}

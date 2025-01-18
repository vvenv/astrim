import type { CurrencyCode } from "api.generated";
import { currencySign } from "@/utils/currency";

type Props = {
  amount: string;
  currency: CurrencyCode;
};

export default function ProductPrice({ amount, currency }: Props) {
  return (
    <p className="text-xl font-semibold">
      {currencySign[currency] ?? "$"}
      {amount}
      {currency}
    </p>
  );
}

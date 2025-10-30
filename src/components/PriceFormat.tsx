import { twMerge } from "tailwind-merge";

interface Props {
  amount?: number;
  className?: string;
  //fromCurrency?: CurrencyCode;
}
const PriceFormat = ({ amount, className }: Props) => {
  return <span className={twMerge(className, "font-bold")}>{amount}</span>;
};

export default PriceFormat;

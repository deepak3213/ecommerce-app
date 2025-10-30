import { useSelector } from "react-redux";
import { StateType } from "../../type";
import PriceFormat from "./PriceFormat";

const ProductPrice = ({ product, regularPrice, discountedPrice }: any) => {
  const { cart } = useSelector((state: StateType) => state?.shopy);
  const existingProduct = cart?.find((item) => item.id === product.id);
  return (
    <div className="flex items-center gap-2">
      <PriceFormat
        amount={
          existingProduct
            ? discountedPrice * existingProduct?.quantity!
            : discountedPrice
        }
        className="flex items-center gap-2"
      />
      <PriceFormat
        className="text-gray-500 line-through font-normal"
        amount={
          existingProduct
            ? regularPrice * existingProduct?.quantity!
            : regularPrice
        }
      />
    </div>
  );
};
export default ProductPrice;

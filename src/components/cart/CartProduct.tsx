import Link from "next/link";
import { ProductType } from "../../../type";
import { IoClose } from "react-icons/io5";
import AddToCartButton from "../AddToCartButton";
import PriceFormat from "../PriceFormat";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/shofySlice";
import toast from "react-hot-toast";

const CartProduct = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  const handleRemoveProduct = () => {
    dispatch(removeFromCart(product?.id));
    toast.success(`${product?.title.substring(0, 20)} deleted successfully!`);
  };
  return (
    <div className="bg-white/10 py-6 sm:py-10 flex ">
      <Link
        href={{
          pathname: `/products/${product?.id}`,
          query: { id: product?.id },
        }}
        className=" h-25 w-24 sm:h-48 sm:w-48 border border-sky-color/30 hover:border-sky-color overflow-hidden flex items-center justify-center rounded-md"
      >
        <img
          src={product.images[0]}
          className="h-full w-full p-2 rounded-md object-contain bg-[#f7f7f7] hover:scale-110 duration-200"
        />
      </Link>
      {/* details */}
      <div className="ml-5 relative flex-1">
        <div>
          <h3 className="text-base font-semibold w-full">{product?.title}</h3>
          <p className="text-xs">
            Brand: <span className="font-medium">{product?.brand}</span>
          </p>
          <p className="text-xs">
            Category: <span className="font-medium">{product?.category}</span>
          </p>
          <div className="flex gap-6 mt-2 items-center">
            <PriceFormat
              amount={product?.price * product?.quantity!}
              className="text-base"
            />
            <AddToCartButton product={product} />
          </div>
          {/* close button */}
          <div className="mt-4 sm:mt-0 sm:pr-9">
            <div className="absolute right-0 top-0">
              <button
                className="p-1 flex items-center justify-center bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 rounded-md border transition-all duration-200 "
                onClick={handleRemoveProduct}
              >
                <IoClose className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div>
          {product?.availabilityStatus && (
            <p className="mt-4 flex space-x-2 text-sm tex-gray-700">
              <FaCheck className="text-lg text-green-500" />
              <span>In Stock</span>
            </p>
          )}
          <p className="text-sm">
            You are saving{" "}
            <PriceFormat
              className="text-semibold text-green-500"
              amount={
                product?.price *
                (product?.discountPercentage / 100) *
                product.quantity!
              }
            />{" "}
            upon purchase
          </p>
        </div>
      </div>
    </div>
  );
};
export default CartProduct;

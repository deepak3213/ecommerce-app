"use client";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, StateType } from "../../type";
import {
  addToCart,
  decreaseQuantity,
  increaseQuanity,
} from "@/redux/shofySlice";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";

interface Props {
  product?: ProductType;
  className?: string;
  variant?: "default" | "primary" | "outline" | "minimal";
  size?: "sm" | "md" | "lg";
  showQuantity?: boolean;
}
const AddToCartButton = ({
  product,
  className,
  variant,
  size,
  showQuantity = true,
}: Props) => {
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();
  const { cart } = useSelector((state: StateType) => state?.shopy);
  const existingProduct = cart?.find((item) => item?.id === product?.id);
  const isOutOfStock = !product?.stock || product.stock <= 0;

  function handleAddToCart() {
    setIsAdding(true);
    setTimeout(() => {
      dispatch(addToCart(product));
      setIsAdding(false);
      toast.success(`${product?.title.substring(0, 15)}... added to cart!`, {
        duration: 2000,
        style: {
          background: "#10B981",
          color: "white",
        },
      });
    }, 400);
  }
  function handleIncreaseQuantity() {
    dispatch(increaseQuanity(product?.id));
    toast.success(`Quantity increased!`, {
      duration: 2000,
      style: {
        background: "#10B981",
        color: "white",
      },
    });
  }
  function handleDecreaseQuantity() {
    if (existingProduct?.quantity! > 1) {
      dispatch(decreaseQuantity(product?.id));
      toast.success(`Quantity decreased!`, {
        duration: 2000,
        style: {
          background: "#10B981",
          color: "white",
        },
      });
    } else {
      toast.error("Minimum quantity is 1", {
        style: {
          background: "#EF4444",
          color: "white",
        },
      });
    }
  }

  // Base styles for different variants
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700";
      case "outline":
        return "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white";
      case "minimal":
        return "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300";
      default:
        return "bg-transparent border border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white";
    }
  };
  // Size styles
  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "px-3 py-1.5 text-sm";
      case "lg":
        return "px-6 py-3 text-lg";
      default:
        return "px-4 py-2 text-base";
    }
  };
  //   console.log(cart);
  return (
    <>
      {existingProduct && showQuantity ? (
        <div className="flex items-center justify-center gap-2 bg-white rounded-lg border border-gray-200 p-1 shadow-sm">
          <button
            disabled={existingProduct?.quantity! <= 1}
            className="h-8 w-8 flex items-center justify-center bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 rounded-md border transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-100 disabled:hover:text-gray-600"
            onClick={handleDecreaseQuantity}
          >
            <FaMinus className="h-3 w-3" />
          </button>
          <div className="flex flex-col items-center min-w-10">
            <span className="text-sm font-semibold text-gray-800">
              {existingProduct?.quantity}
            </span>
            <span className="text-xs text-gray-500">in cart</span>
          </div>
          <button
            className="h-8 w-8 flex items-center justify-center bg-gray-100 hover:bg-green-100 text-green-600 hover:text-green-600 rounded-md border transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-100 disabled:hover:text-gray-600"
            onClick={handleIncreaseQuantity}
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          disabled={isAdding || isOutOfStock}
          className={twMerge(
            "relative w-full flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden",
            getVariantStyles(),
            getSizeStyles(),
            isOutOfStock &&
              "bg-gray-300 border-gray-300 text-gray-500 hover:bg-gray-300 hover:text-gray-500",
            isAdding && "cursor-not-allowed",
            className
          )}
        >
          {isAdding ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Adding...</span>
            </>
          ) : (
            <>
              <FaShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      )}
    </>
  );
};

export default AddToCartButton;

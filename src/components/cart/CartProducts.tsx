"use client";
import { useSelector } from "react-redux";
import { ProductType, StateType } from "../../../type";
import CartProduct from "./CartProduct";

const CartProducts = () => {
  const { cart } = useSelector((state: StateType) => state?.shopy);

  return (
    <>
      {cart?.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold tracking-light text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <div className="mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-1 ">
            {/* cart sectoin */}
            <section className="lg:col-span-7">
              {cart.map((product: ProductType) => (
                <CartProduct key={product.id} product={product} />
              ))}
            </section>
            {/* cart summary */}
          </div>
        </>
      ) : (
        <>
          <h1>Cart is empty</h1>
        </>
      )}
    </>
  );
};

export default CartProducts;

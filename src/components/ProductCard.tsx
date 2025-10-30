import Link from "next/link";
import { ProductType } from "../../type";
import { FaStar } from "react-icons/fa";
import Button from "./ui/Button";
import AddToCartButton from "./AddToCartButton";
import ProductPrice from "./ProductPrice";

const ProductCard = ({ product }: { product: ProductType }) => {
  const regularPrice = product?.price;
  const discountedPrice =
    product?.price - (product?.price * product?.discountPercentage) / 100;
  return (
    <div className="bg-white border overflow-hidden border-gray-200 rounded-xl group hover:shadow-xl hover:shadow-black/10 transition-all duration-200">
      {/* image section */}
      <div className="bg-gray-50 overflow-hidden relative aspect-square">
        <Link
          href={{
            pathname: `/products/${product?.id}`,
            query: { id: product?.id },
          }}
        >
          <img
            src={product?.images[0]}
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>
        {product?.discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10 animate-pulse">
            -{Math.round(product.discountPercentage)}%OFF
          </div>
        )}
      </div>
      {/* content section */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
            {product?.category}
          </p>
          {product?.brand && (
            <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full font-medium">
              {product.brand}
            </span>
          )}
        </div>
        <Link
          href={{
            pathname: `/products/${product?.id}`,
            query: { id: product?.id },
          }}
        >
          <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-1 mb-3 leading-right">
            {product?.title}
          </h3>
        </Link>
        {/* Rating */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product?.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600 ml-5">
              {product?.rating}
            </span>
          </div>
          {product?.stock > 0 && (
            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full font-medium">
              In Stock
            </span>
          )}
        </div>
        <div className="mb-3">
          <ProductPrice
            regularPrice={regularPrice}
            discountedPrice={discountedPrice}
            product={product}
          />
        </div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;

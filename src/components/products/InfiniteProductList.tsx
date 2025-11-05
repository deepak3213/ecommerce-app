"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import ActiveFilters from "./ActiveFilters";
import { ProductType } from "../../../type";
import ProductCard from "../ProductCard";

const InfiniteProductList = ({ products }: { products: ProductType[] }) => {
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A to Z" },
    { value: "name-desc", label: "Name: Z to A" },
    { value: "rating", label: "Highest Rated" },
  ];
  // Handle sort change
  const handleSortChange = (sortValue: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (sortValue === "default") {
      params.delete("sort");
    } else {
      params.set("sort", sortValue);
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div>
      {/* Active filters */}
      <ActiveFilters />
      {/* Header with controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 bg-white border border-gray-200 rounded-md">
        <div>Showing Products</div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <label
              htmlFor="sort"
              className="text-sm text-gray-600 whitespace-nowrap"
            >
              Sort By:
            </label>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="gap-2 flex">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded transition-colors duration-300 ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <BsGridFill className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded transition-colors duration-300 ${
                viewMode === "list"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <ImList className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      {/*  Products grid or list */}
      <div className="grid  grid-cols-4 gap-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default InfiniteProductList;

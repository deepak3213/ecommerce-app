"use client";
import { FaChevronDown } from "react-icons/fa";
import { CategoryType, ProductType } from "../../../type";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface Props {
  categories?: CategoryType[];
  allProducts?: ProductType[];
}

const Category = (props: Props) => {
  const { categories, allProducts } = props;
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  // Special categories that should appear at the top
  const specialCategories = [
    { name: "bestsellers", label: "Best Sellers" },
    { name: "new", label: "New Arrivals" },
    { name: "offers", label: "Special Offers" },
  ];
  function handleCategoryClick(categorySlug: string) {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    router.push(`/products?category=${categorySlug.toLowerCase()}`);
  }
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 px-0 text-left focus:outline-none group"
      >
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          Shop by Category
        </h3>
        <div>
          <FaChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </button>
      {/* Accordian Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="space-y-2 pt-2 pb-4">
          {specialCategories.map((item, i) => {
            const isActive = item.name === currentCategory;
            return (
              <div key={item.label} className="flex items-center gap-2 px-2">
                <input
                  type="radio"
                  checked={isActive}
                  onChange={() => {}}
                  className="h-4 w-4 text-blue-600 bg-gray-100 border border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <button
                  className="text-sm ml-2 font-medium text-gray-900  hover:text-blue-600 transition-colors"
                  onClick={() => handleCategoryClick(item.name)}
                >
                  {item.label}
                </button>
              </div>
            );
          })}
          {categories?.map((item, i) => {
            const isActive = item.slug === currentCategory;
            return (
              <div key={item.name} className="flex items-center gap-2 px-2">
                <input
                  type="radio"
                  checked={isActive}
                  onChange={() => {}}
                  className="h-4 w-4 text-blue-600 bg-gray-100 border border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <button
                  className="text-sm ml-2 font-medium text-gray-900  hover:text-blue-600 transition-colors"
                  onClick={() => handleCategoryClick(item.slug)}
                >
                  {item.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;

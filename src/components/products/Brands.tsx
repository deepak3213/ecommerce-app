"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

interface BrandProps {
  brands?: string[];
}

const Brands = ({ brands = [] }: BrandProps) => {
  const [isOpen, setIsOpen] = useState(false); // Collapsed by default
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentBrand = searchParams.get("brand");

  const handleBrandClick = (brand: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("brand", brand);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`/products${query}`);
  };

  return (
    <div className="w-full">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-0 text-left focus:outline-none group"
      >
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          Shop by Brand
        </h3>
        <div>
          <FaChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="space-y-2 pt-2 pb-4">
          {brands.map((brand, index) => {
            const isActive = currentBrand === brand;
            return (
              <div key={index} className="flex items-center px-2">
                <input
                  type="radio"
                  id={`brand-${brand}`}
                  name="brand"
                  checked={isActive}
                  onChange={() => {}}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <button
                  onClick={() => handleBrandClick(brand)}
                  className="ml-2 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors flex-1 text-left"
                >
                  {brand}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brands;

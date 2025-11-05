"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  colors?: any[];
}
const Colors = ({ colors }: Props) => {
  const [isOpen, setIsOpen] = useState(false); // Collapsed by default
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentColor = searchParams.get("color");
  function handleColorClick(color: string) {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("color", color);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`/products${query}`);
  }
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 px-0 text-left focus:outline-none group"
      >
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          Shop by Colors
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
          {colors?.map((item, i) => {
            const isActive = item.title === currentColor;
            return (
              <div key={item.title} className="flex items-center gap-2 px-2">
                <input
                  type="radio"
                  checked={isActive}
                  onChange={() => {}}
                  className="h-4 w-4 text-blue-600 bg-gray-100 border border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <button
                  className="text-sm ml-2 font-medium text-gray-900  hover:text-blue-600 transition-colors flex items-center flex-1"
                  onClick={() => handleColorClick(item.title)}
                >
                  <span
                    style={{ background: item.base }}
                    className="w-3 shrink-0 h-3 rounded-full border border-gray-300 mr-2"
                  />
                  {item.title}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Colors;

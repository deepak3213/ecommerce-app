import { FaFilter } from "react-icons/fa";
import Category from "./Category";
import { CategoryType, ProductType } from "../../../type";
import Colors from "./Colors";
import Brands from "./Brands";
import Price from "./Price";

interface Props {
  categories?: CategoryType[];
  brands?: string[];
  allProducts?: ProductType[];
}
const ProductsSidebar = (props: Props) => {
  const { categories, brands, allProducts } = props;
  // Extract unique colors from products
  const extractColors = () => {
    const colorSet = new Set<string>();
    const colorMap = new Map<string, string>();

    // Predefined color mapping for common colors
    const colorMapping: { [key: string]: string } = {
      red: "#dc2626",
      blue: "#3b82f6",
      green: "#22c55e",
      yellow: "#f59e0b",
      black: "#000000",
      white: "#ffffff",
      gray: "#a3a3a3",
      grey: "#a3a3a3",
      purple: "#9333ea",
      pink: "#ec4899",
      orange: "#f97316",
      brown: "#92400e",
      navy: "#1e40af",
      maroon: "#991b1b",
      silver: "#d1d5db",
      gold: "#f59e0b",
      beige: "#f5f5dc",
      tan: "#d2b48c",
      cream: "#fffdd0",
      ivory: "#fffff0",
    };

    allProducts?.forEach((product) => {
      if (product.title) {
        Object.keys(colorMapping).forEach((color) => {
          if (product.title.toLowerCase().includes(color.toLowerCase())) {
            colorSet.add(color);
            colorMap.set(color, colorMapping[color]);
          }
        });
      }
    });

    return Array.from(colorSet).map((color) => ({
      title: color.charAt(0).toUpperCase() + color.slice(1),
      base: colorMap.get(color) || "#9ca3af",
    }));
  };

  const colors = extractColors();

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Desktop filter side nav */}
      <div className="px-4 py-3 border-b border-gray-200 hidden lg:block">
        <div className="flex items-center gap-6">
          <FaFilter className="w-4 h-4 text-gray-600" />
          <h2 className="font-semibold text-gray-900">Filters</h2>
        </div>
      </div>
      {/* Filter content */}
      <div>
        <div className="p-4">
          <Category allProducts={allProducts} categories={categories} />
          <Colors colors={colors} />
          <Brands brands={brands} />
          <Price allProducts={allProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductsSidebar;

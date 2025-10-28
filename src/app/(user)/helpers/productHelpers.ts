import { ProductType } from "../../../../type";

// Helper function to get all unique categories with counts
export const getCategoriesWithCounts = (products: ProductType[]) => {
  if (!products || products.length === 0) return [];
  const categoryMap = new Map();
  products.forEach((product) => {
    const category = product.category.toLowerCase();
    if (categoryMap.has(category)) {
      // increase the product quanity
      categoryMap.set(category, categoryMap.get(category) + 1);
    } else {
      // put in the map
      categoryMap.set(category, 1);
    }
  });
  return Array.from(categoryMap.entries()).map(([category, count]) => ({
    name: category,
    slug: category.replace(/\s+/g, "-").toLowerCase(),
    count,
    url: `/products?category=${category.replace(/\s+/g, "-").toLowerCase()}`,
  }));
};

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

// Helper function to get best sellers(products with high rating and good reviews)

export const getBestSellers = (products: ProductType[]): ProductType[] => {
  //   if (!products || products.length === 0) return [];
  const bestSellers = products.filter(
    (product) => product.rating > 4 && product.reviews?.length >= 3
  );
  // .sort((a, b) => {
  //   // Sort by rating first, then by number of reviews
  //   if (b.rating !== a.rating) {
  //     return b.rating - a.rating;
  //   }
  //   return (b.reviews?.length || 0) - (a.reviews?.length || 0);
  // });
  return bestSellers;
};

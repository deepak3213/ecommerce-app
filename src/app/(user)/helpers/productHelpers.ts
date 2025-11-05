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
  if (!products || products.length === 0) return [];
  const bestSellers = products
    .filter((product) => product.rating > 4 && product.reviews?.length >= 3)
    .sort((a, b) => {
      // Sort by rating first, then by number of reviews
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      }
      return (b.reviews?.length || 0) - (a.reviews?.length || 0);
    });
  return bestSellers;
};

// Helper function to get new arrivals (most recent products)
export const getNewArrivals = (products: ProductType[]): ProductType[] => {
  if (!products || products.length === 0) return [];

  let newArrivals = products.sort((a, b) => {
    // Sort by creation date (most recent first)
    const dateA = new Date(a.meta?.createdAt || 0);
    const dateB = new Date(b.meta?.createdAt || 0);
    return dateB.getTime() - dateA.getTime();
  });

  // Fallback: if no dates available, get products with highest IDs (newer)
  if (!newArrivals.some((p) => p.meta?.createdAt)) {
    newArrivals = products.sort((a, b) => b.id - a.id);
  }

  return newArrivals.slice(0, 8);
};

// Helper function to get products with offers (products with discount)
export const getOffers = (products: ProductType[]): ProductType[] => {
  if (!products || products.length === 0) return [];

  let offers = products
    .filter((product) => product.discountPercentage > 0)
    .sort((a, b) => b.discountPercentage - a.discountPercentage);

  // Fallback: if no discounts available, get lowest priced products
  if (offers.length < 8) {
    offers = products.sort((a, b) => a.price - b.price).slice(0, 8);
  }

  return offers.slice(0, 8);
};

// Helper function to get featured products (high rating, good stock, popular categories)
export const getFeaturedProducts = (products: ProductType[]): ProductType[] => {
  if (!products || products.length === 0) return [];

  const popularCategories = [
    "smartphones",
    "laptops",
    "beauty",
    "home-decoration",
    "fragrances",
    "skin-care",
  ];

  let featured = products
    .filter(
      (product) =>
        product.rating >= 3.5 &&
        product.stock > 10 &&
        popularCategories.includes(product.category.toLowerCase())
    )
    .sort((a, b) => b.rating - a.rating);

  // Fallback: if not enough products, get highest rated products
  if (featured.length < 8) {
    featured = products
      .filter((product) => product.rating >= 3.0)
      .sort((a, b) => b.rating - a.rating);
  }

  return featured.slice(0, 8);
};

export const getProductsByCategory = (
  products: ProductType[],
  category: string
) => {
  if (!products || products.length === 0) return [];
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
};

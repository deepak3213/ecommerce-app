import Banner from "@/components/pages/home/Banner";
import DynamicFeaturedCategories from "@/components/pages/home/DynamicFeaturedCategories";
import SpecialOffersBanner from "@/components/pages/home/SpecialOffersBanner";
import { getData } from "./helpers";
import { getBestSellers } from "./helpers/productHelpers";
import ProductSection from "@/components/pages/home/ProductSection";

export default async function Home() {
  const endpoint = `https://dummyjson.com/products?limit=0`; // Fetch all products
  const productsData = await getData(endpoint);
  const allProducts = productsData?.products || [];
  // categorize all products
  const bestSellers = getBestSellers(allProducts);

  return (
    <main>
      <Banner />
      {/* Dynamnic featured categories */}
      <DynamicFeaturedCategories />
      {/* Special offers bonus */}
      <SpecialOffersBanner />
      {/* Best Sellers Products */}
      <ProductSection
        products={bestSellers}
        title="Best Sellers"
        subtitle="Our most popular products loved by customers"
        viewMoreLink="/products?category=bestsellers"
      />
    </main>
  );
}

import Banner from "@/components/pages/home/Banner";
import DynamicFeaturedCategories from "@/components/pages/home/DynamicFeaturedCategories";
import SpecialOffersBanner from "@/components/pages/home/SpecialOffersBanner";

export default async function Home() {
  return (
    <main>
      <Banner />
      {/* Dynamnic featured categories */}
      <DynamicFeaturedCategories />
      {/* Special offers bonus */}
      <SpecialOffersBanner />
    </main>
  );
}

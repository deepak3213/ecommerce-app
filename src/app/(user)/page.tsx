import Banner from "@/components/pages/home/Banner";
import DynamicFeaturedCategories from "@/components/pages/home/DynamicFeaturedCategories";

export default async function Home() {
  return (
    <main>
      <Banner />
      {/* Dynamnic featured categories */}
      <DynamicFeaturedCategories />
    </main>
  );
}

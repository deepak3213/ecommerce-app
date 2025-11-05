import Container from "@/components/Container";
import { getData } from "../helpers";
import ProductsSidebar from "@/components/products/ProductsSidebar";
import InfiniteProductList from "@/components/products/InfiniteProductList";
import { ProductType } from "../../../../type";
import { CategoryType } from "../../../../type";
import {
  getBestSellers,
  getNewArrivals,
  getOffers,
  getProductsByCategory,
} from "../helpers/productHelpers";

interface Props {
  searchParams: Promise<{
    category?: string;
    search?: string;
    brand?: string;
    minPrice?: string;
    maxPrice?: string;
    min_price?: string;
    max_price?: string;
    color?: string;
    sort?: string;
    page?: string;
  }>;
}

const ProductPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  // fetch all products and category;
  let [products, categoriesData] = await Promise.all([
    getData<ProductType[]>(`https://dummyjson.com/products?limit=0`),
    getData<CategoryType[]>(`https://dummyjson.com/products/categories`),
  ]);

  // Extract unique brands from all products;
  const uniqueBrand: string[] = [
    ...new Set(products?.map((product: ProductType) => product.brand)),
  ].sort();
  //   filter product category
  if (params.category) {
    switch (params.category) {
      case "bestSellers":
        products = getBestSellers(products);
        break;
      case "new":
        products = getNewArrivals(products);
        break;
      case "offers":
        products = getOffers(products);
        break;
      default:
        products = getProductsByCategory(products, params.category);
    }
  }
  // filter products by brands;
  if (params.brand) {
    products = products.filter(
      (product) =>
        product.brand &&
        product.brand.toLowerCase().includes(params.brand!.toLowerCase())
    );
  }
  // Filter by price range
  if (params.min_price || params.max_price) {
    const minPrice = params.min_price ? parseFloat(params.min_price) : 0;
    const maxPrice = params.max_price ? parseFloat(params.max_price) : Infinity;
    products = products.filter(
      (product: any) => product.price >= minPrice && product.price <= maxPrice
    );
  }

  // Filter by color
  if (params.color) {
    products = products.filter((product: any) => {
      const colorLower = params.color!.toLowerCase();
      // Check in tags
      if (product.tags && Array.isArray(product.tags)) {
        const hasColorInTags = product.tags.some((tag: string) =>
          tag.toLowerCase().includes(colorLower)
        );
        if (hasColorInTags) return true;
      }
      // Check in title
      return product.title.toLowerCase().includes(colorLower);
    });
  }
  console.log({ products });
  return (
    <Container className="py-10">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl  md:text-4xl font-bold text-gray-900 mb-3">
          All Products
        </h1>
        {/* BreadCrumbs */}
      </div>
      {/* main content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filter */}
        <div className="w-full lg:w-1/5">
          <ProductsSidebar
            allProducts={products}
            brands={uniqueBrand}
            categories={categoriesData}
          />
        </div>
        {/*  Products section */}
        <div className="flex-1 min-w-0">
          <InfiniteProductList products={products} />
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;

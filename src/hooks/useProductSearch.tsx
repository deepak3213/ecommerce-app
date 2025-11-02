import { useEffect, useState } from "react";
import { ProductType } from "../../type";

// interface UseProductSearchReturn {
//   search: string;
//   setSearch: (value: string) => void;
//   products: ProductType[];
//   filteredProducts: ProductType[];
//   suggestedProducts: ProductType[];
//   isLoading: boolean;
//   hasSearched: boolean;
//   clearSearch: () => void;
// }
export default function useProductSearch(search: string) {
  const [searchedProducts, setSearchedProducts] = useState<ProductType[]>([]);
  const [defaultProducts, setDefaultProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setDefaultProducts((data?.products || []).slice(0, 10)));
  }, []);
  async function fetchProducts(signal: AbortSignal) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${search}`,
        { signal }
      );
      const data = await res.json();
      setSearchedProducts(data.products);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      console.error("Fetch failed:", err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    if (!search.trim()) {
      setSearchedProducts([]);
      setIsLoading(false);
      return;
    }
    const id = setTimeout(() => {
      fetchProducts(controller.signal);
    }, 300);
    return () => {
      clearTimeout(id);
      controller.abort();
    };
  }, [search]);
  return {
    isLoading,
    defaultProducts,
    searchedProducts,
  };
}

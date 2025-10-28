"use client";

import Container from "@/components/Container";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Category {
  slug: string;
  name: string;
  url: string;
  image: string;
  itemCount: number;
  description: string;
}
interface Props {
  categories: Category[];
}
const RoundedCategoriesCarousel = ({ categories }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 6; // xl
      if (window.innerWidth >= 1024) return 5; // lg
      if (window.innerWidth >= 768) return 4; // md
      if (window.innerWidth >= 640) return 3; // sm
      return 2; // xs
    }
    return 6;
  };
  useEffect(() => {
    function handleResize() {
      const items = getItemsPerView();
      setItemsPerView(items);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  const maxIndex = Math.max(0, categories.length - itemsPerView);
  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <Container className="px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop By Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {" "}
            Discover our diverse range of products across various categories
          </p>
        </div>
        {/* Carousel container */}
        <div className="relative mx-4 md:mx-0">
          {/* Arrow buttons */}
          <>
            <button
              onClick={goToPrevious}
              className={`absolute left-0 top-[30%] z-10 rounded-full p-3 transition-all duration-300 group -ml-6 bg-gray-100`}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={goToNext}
              className={`absolute right-0 top-[30%] z-10 rounded-full p-3 transition-all duration-300 group -mr-6 bg-gray-100`}
            >
              <FaArrowRight />
            </button>
          </>
          {/* Caresoul */}
          <div className="overflow-hidden ">
            <div
              className="flex transition-transform duration-500 ease-in-out "
              style={{
                transform: `translateX(-${
                  (currentIndex / categories.length) * 100
                }%)`,
                width: `${(categories.length / itemsPerView) * 100}%`,
              }}
            >
              {categories.map((category) => (
                <div
                  key={category.slug}
                  className="shrink-0 px-2 "
                  style={{
                    width: `${100 / categories.length}%`,
                  }}
                >
                  <Link href={`/products?category=${category.slug}`}>
                    <div className="group cursor-pointer">
                      <div className="relative mb-3">
                        <div className=" rounded-full overflow-hidden">
                          <img
                            src={category.image}
                            className="h-full w-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute top-2 right-2  bg-blue-600 text-xs px-2 py-1 rounded-full shadow-md text-white">
                          {category.itemCount}
                        </div>
                      </div>
                      {/* text section */}
                      <div className="text-center space-y-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-sm lg:text-base">
                          {category.name}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-2 px-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default RoundedCategoriesCarousel;

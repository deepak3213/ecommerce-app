import Container from "@/components/Container";
import Link from "next/link";
import { FiArrowRight, FiPercent, FiTag } from "react-icons/fi";

const SpecialOffersBanner = () => {
  return (
    <div className="py-16  bg-gradient-to-br from-red-50 via-pink-50  to-orange-50">
      <Container>
        <div className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-500  p-8 md:p-12 text-white relative">
          <div className="absolute h-64 w-64 bg-white/10 top-0 right-0 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute h-64 w-64 bg-white/10 bottom-0 left-0 rounded-full translate-y-24 -translate-x-24" />

          <div className="relative ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
              {/* Content Side */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 px-4 py-2 flex items-center gap-2 rounded-full">
                    <FiTag className="w-5 h-5" />
                    <span className="font-semibold">Limited Time</span>
                  </div>
                  <div className="bg-white/20 px-4 py-2 flex items-center gap-2 rounded-full">
                    <FiPercent className="h-5 w-5" />
                    <span className="font-semibold">Up to 50% Off</span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  🔥 Mega Sale <br />{" "}
                  <span className="text-yellow-300">Event!</span>{" "}
                </h2>
                <p className="text-xl md:text-2xl mb-6 text-white/90">
                  Don&apos;t miss out on incredible deals across all categories!
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col items-start text-center">
                    <span className="text-3xl font-bold">100+</span>
                    <span className="text-white/80">Products on sale</span>
                  </div>
                  <div className="flex flex-col items-start text-center">
                    <span className="text-3xl font-bold">50%</span>
                    <span className="text-white/80">Max Discount</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                  <Link
                    href="/offers"
                    className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 group"
                  >
                    Shop Now <FiArrowRight />
                  </Link>
                  <Link
                    href="/offers?min_discount=30"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
                  >
                    30%+ Deals
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="space-y-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
                      <div className="text-3xl font-bold mb-2">40% OFF</div>
                      <div className="text-white/90">Electronics</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30 ml-8">
                      <div className="text-3xl font-bold mb-2">40% OFF</div>
                      <div className="text-white/90">Electronics</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
                      <div className="text-3xl font-bold mb-2">40% OFF</div>
                      <div className="text-white/90">Electronics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffersBanner;

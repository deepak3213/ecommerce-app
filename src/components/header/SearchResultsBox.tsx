import Link from "next/link";
import { ProductType } from "../../../type";
import { CiSearch } from "react-icons/ci";

interface Props {
  search: string;
  isLoading: boolean;
  searchedProducts: ProductType[];
  defaultProducts: ProductType[];
  handleItemClick: () => void;
}
const SearchResultsBox = (props: Props) => {
  const {
    search,
    isLoading,
    searchedProducts,
    defaultProducts,
    handleItemClick,
  } = props;

  return (
    <div className="absolute left-0 w-full  top-12  max-h-96  bg-white rounded-mg overflow-y-scroll cursor-pointer text-black shadow-lg border border-gray-200 z-50">
      {search ? (
        isLoading ? (
          <div className="py-8 px-5 text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-theme-color border-t-transparent"></div>
              <div className="flex space-x-1">
                <div
                  className="w-2 h-2 bg-theme-color rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-theme-color rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-theme-color rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Searching for &quot;{search}&quot;...
            </p>
          </div>
        ) : searchedProducts?.length > 0 ? (
          <div className="flex flex-col">
            {searchedProducts?.map((item: ProductType) => (
              <Link
                key={item?.id}
                href={{
                  pathname: `/products/${item?.id}`,
                  query: { id: item?.id },
                }}
                onClick={handleItemClick}
                className="flex items-center gap-x-2 text-base font-medium hover:bg-light-text/30 px-3 py-1.5 border-b border-gray-100 last:border-b-0"
              >
                <CiSearch className="text-lg text-gray-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {item?.title}
                  </p>
                  {item?.category && (
                    <p className="text-xs text-gray-500">in {item.category}</p>
                  )}
                </div>
                {item?.price && (
                  <span className="text-sm font-semibold text-theme-color">
                    ${item.price}
                  </span>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-10 px-5">
            <p className="text-base text-center">
              Nothing matched with{" "}
              <span className="font-semibold underline underline-offset-2 decoration-1">
                &quot;{search}&quot;
              </span>
              <br />
              <span className="text-sm text-gray-500">Please try again.</span>
            </p>
          </div>
        )
      ) : (
        defaultProducts?.length > 0 && (
          <div className="flex flex-col">
            <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Trending Products
              </p>
            </div>
            {defaultProducts?.map((item: ProductType) => (
              <Link
                key={item?.id}
                href={{
                  pathname: `/products/${item?.id}`,
                  query: { id: item?.id },
                }}
                onClick={handleItemClick}
                className="flex items-center gap-x-2 text-base font-medium hover:bg-light-text/30 px-3 py-1.5 border-b border-gray-100 last:border-b-0"
              >
                <div className="w-4 h-4 bg-gradient-to-r from-theme-color to-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {item?.title}
                  </p>
                  {item?.category && (
                    <p className="text-xs text-gray-500">in {item.category}</p>
                  )}
                </div>
                {item?.price && (
                  <span className="text-sm font-semibold text-theme-color">
                    ${item.price}
                  </span>
                )}
              </Link>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default SearchResultsBox;

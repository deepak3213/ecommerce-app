import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";

const HeaderIcons = () => {
  return (
    <>
      <Link href={"/favorite"} className="text-2xl relative">
        <MdFavoriteBorder />
        <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-theme-color text-white rounded-full flex items-center justify-center">
          0
        </span>
      </Link>
      <Link href={"/cart"} className="text-2xl relative">
        <BiShoppingBag />
        <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-theme-color text-white rounded-full flex items-center justify-center">
          0
        </span>
      </Link>
    </>
  );
};

export default HeaderIcons;

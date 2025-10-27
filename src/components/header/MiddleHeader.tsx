import { LiaUser } from "react-icons/lia";
import Container from "../Container";
import Logo from "../Logo";
import SearchInput from "./SearchInput";
import Link from "next/link";
import HeaderIcons from "./HeaderIcons";

const MiddleHeader = () => {
  return (
    <div className="border-b border-b-gray-400">
      <Container className="flex items-center justify-between py-5 gap-4 md:gap-6 lg:gap-20">
        <Logo />
        {/* Search Input */}
        <SearchInput />
        {/* User Section */}
        <div className="flex items-center gap-3">
          <div className="flex gap-2 items-center cursor-pointer">
            {/* user profile section */}
            <div className="p-1.5 border-2 border-gray-700  rounded-full text-xl">
              <LiaUser />
            </div>
            <div>
              <Link href={"/auth/signin"}>
                <p className="text-xs hover:text-sky-color ease-in-out duration-300 cursor-pointer">
                  Hello, Guests
                </p>
              </Link>
              <div className="text-sm">
                <Link
                  href={"/auth/signin"}
                  className="hover:text-sky-color ease-in-out duration-300 cursor-pointer"
                >
                  Login{" "}
                </Link>
                /
                <Link
                  href={"/auth/register"}
                  className="hover:text-sky-color ease-in-out duration-300 cursor-pointer"
                >
                  {" "}
                  Register
                </Link>
              </div>
            </div>
          </div>
          {/* Cart Icons */}
          <HeaderIcons />
        </div>
      </Container>
    </div>
  );
};

export default MiddleHeader;

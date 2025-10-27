import { CiDeliveryTruck } from "react-icons/ci";
import Container from "../Container";
import LanguageDropdown from "./LanguageDropdown";
const TopHeader = () => {
  return (
    <div className="bg-[#010f1c] text-gray-200 w-full">
      <Container className="flex items-center justify-between">
        <p className="flex items-center justify-center md:justify-normal font-medium text-sm py-1 cursor-pointer hover:text-orange-300 transition-colors duratin-200">
          <CiDeliveryTruck className="text-2xl mr-1 text-[#ffb342]" />
          FREE Express Shipping On Orders $8+
        </p>
        <div>
          <LanguageDropdown />
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;

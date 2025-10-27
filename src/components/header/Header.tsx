import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header className="w-full bg-theme-white sticky top-1 z-50">
      {/* Top header */}
      <TopHeader />
      {/* Middle header */}
      <MiddleHeader />
      {/* Bottom heade */}
      <BottomHeader />
    </header>
  );
};
export default Header;

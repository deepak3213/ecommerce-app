import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header className="w-full bg-theme-white sticky top-1 z-50">
      {/* Top header */}
      <TopHeader />
      {/* Middle header */}
      <h1>Middle header</h1>
      {/* Bottom heade */}
      <h1>Bottom header</h1>
    </header>
  );
};
export default Header;

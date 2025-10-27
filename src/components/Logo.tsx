import Image from "next/image";
import Link from "next/link";
import { logo } from "@/assets";
const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" width={112} height={40} className="w-28" />
    </Link>
  );
};

export default Logo;

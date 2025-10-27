import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Link
        href={"/facebook"}
        className="bg-white border border-theme-color shadow-md text-black p-3 text-lg hover:bg-theme-color hover:text-theme-white cursor-pointer duration-200 rounded-md"
      >
        <FaFacebookF />
      </Link>
      <Link
        href={"/facebook"}
        className="bg-white border border-theme-color shadow-md text-black p-3 text-lg hover:bg-theme-color hover:text-theme-white cursor-pointer duration-200 rounded-md"
      >
        <FaXTwitter />
      </Link>
      <Link
        href={"/facebook"}
        className="bg-white border border-theme-color shadow-md text-black p-3 text-lg hover:bg-theme-color hover:text-theme-white cursor-pointer duration-200 rounded-md"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href={"/facebook"}
        className="bg-white border border-theme-color shadow-md text-black p-3 text-lg hover:bg-theme-color hover:text-theme-white cursor-pointer duration-200 rounded-md"
      >
        <FaInstagram />
      </Link>
    </div>
  );
};

export default SocialLinks;

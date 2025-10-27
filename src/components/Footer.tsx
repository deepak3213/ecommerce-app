import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import Title from "./Title";
import { InfoNavigation, navigation } from "@/constants";
import { GoDotFill } from "react-icons/go";
import { BsEnvelopeAt } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-light-bg py-10 lg:py-10">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex flex-col items-start gap-y-5">
          <Logo />
          <p>
            we are team of designers and developers that cretae high quality
            wordpress
          </p>
          <SocialLinks />
        </div>
        <div>
          <Title>My Account</Title>
          <div className="mt-3 flex flex-col gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-x-2 text-gray-700 hover:text-theme-color duration-200 font-medium"
              >
                <GoDotFill size={10} />
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Title>My Information</Title>
          <div className="mt-3 flex flex-col gap-y-2">
            {InfoNavigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-x-2 text-gray-700 hover:text-theme-color duration-200 font-medium"
              >
                <GoDotFill size={10} />
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Title>Talk to Us.</Title>
          <div className="mt-3">
            <div>
              <p className="text-sm">Got Questions? Call us</p>
              <Title>+670 413 90 762</Title>
            </div>
            <div className="mt-3">
              <p className="text-base flex items-center gap-x-3 text-gray-600">
                <BsEnvelopeAt /> shofy@suppert.com
              </p>
              <p className="text-base flex items-center gap-x-3 text-gray-600">
                <GrLocation /> Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

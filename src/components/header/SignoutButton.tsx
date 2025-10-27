import Link from "next/link";

const SignoutButton = () => {
  return (
    <>
      <Link
        href={"/auth/signin"}
        className="hover:text-theme-color duration-300 cursor-pointer"
      >
        Please login to view your cart.
      </Link>
    </>
  );
};

export default SignoutButton;

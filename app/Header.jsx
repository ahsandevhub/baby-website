import Logo from "@/public/logo.jpg";
import X from "@/public/x-icon.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full pt-4 md:pt-10 bg-gradient-to-b from-black to-transparent">
      <div className="container px-4 max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo - Smaller on mobile */}
        <div className="left w-16 md:w-20">
          <Image
            src={Logo}
            className="h-full w-auto rounded-full"
            alt="logo"
            priority
          />
        </div>

        {/* Navigation - Hidden on mobile, shown on tablet+ */}
        <div className="center hidden md:flex items-center gap-4 lg:gap-20">
          <Link
            href={"#home"}
            className="border-2 md:border-[3px] bg-black/50 text-white px-4 md:px-5 text-sm md:text-base font-semibold py-2 md:py-[10px] hover:bg-rose-700 transition-all hover:border-white hover:shadow-md shadow-white border-[#c4103d] rounded-lg"
          >
            Home
          </Link>
          <Link
            href={"#gofundme"}
            className="border-2 md:border-[3px] bg-black/50 text-white px-4 md:px-5 text-sm md:text-base font-semibold py-2 md:py-[10px] hover:bg-rose-700 transition-all hover:border-white hover:shadow-md shadow-white border-[#c4103d] rounded-lg"
          >
            Gofundme
          </Link>
          <Link
            href={"#petition"}
            className="border-2 md:border-[3px] bg-black/50 text-white px-4 md:px-5 text-sm md:text-base font-semibold py-2 md:py-[10px] hover:bg-rose-700 transition-all hover:border-white hover:shadow-md shadow-white border-[#c4103d] rounded-lg"
          >
            Petition
          </Link>
        </div>

        {/* X icon - Smaller on mobile */}
        <div className="right w-12 md:w-20">
          <Link href="https://x.com/example" target="_blank">
            <Image
              src={X}
              className="h-12 md:h-16 border-2 md:border-[2px] p-1 md:p-2 bg-black border-white rounded-xl w-auto"
              alt="X logo"
            />
          </Link>
        </div>

        {/* Mobile menu button (add functionality later) */}
        {/* <button className="md:hidden text-white text-4xl">☰</button> */}
      </div>
    </header>
  );
};

export default Header;

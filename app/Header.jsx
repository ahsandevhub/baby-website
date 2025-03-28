import Logo from "@/public/logo.jpg";
import X from "@/public/x-icon.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full pt-10 bg-gradient-to-b from-black to-transparent">
      <div className="container max-w-5xl mx-auto flex justify-between items-center">
        <div className="left w-20">
          <Image src={Logo} className="h-full w-auto rounded-full" alt="logo" />
        </div>
        <div className="center flex items-center gap-20">
          <Link
            href={"#home"}
            className="border-[3px] bg-black/50 text-white px-8 text-lg font-semibold py-3 border-[#c4103d] rounded-lg"
          >
            Home
          </Link>
          <Link
            href={"#home"}
            className="border-[3px] bg-black/50 text-white px-8 text-lg font-semibold py-3 border-[#c4103d] rounded-lg"
          >
            Gofundme
          </Link>
          <Link
            href={"#home"}
            className="border-[3px] bg-black/50 text-white px-8 text-lg font-semibold py-3 border-[#c4103d] rounded-lg"
          >
            Petition
          </Link>
        </div>
        <div className="right w-20">
          <Link
            href={
              "https://x.com/elonmusk/status/1896224487491997733?s=46&t=ivWZtwh3-wzJ6E1CN_x_HA"
            }
          >
            <Image
              src={X}
              className="h-16 border-[2px] p-2 bg-black border-white rounded-xl w-auto"
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

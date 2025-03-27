import Logo from "@/public/logo.jpg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="">
      <div className="container max-w-2xl mx-auto grid grid-cols-3">
        <div className="left">
          <Image src={Logo} className="h-20 w-auto rounded-full" alt="logo" />
        </div>
        <div className="center">
          <Link href={"#home"}>Home</Link>
          <Link href={"#home"}>Gofundme</Link>
          <Link href={"#home"}>Petition</Link>
        </div>
        <div className="right">
          <Link
            href={
              "https://x.com/elonmusk/status/1896224487491997733?s=46&t=ivWZtwh3-wzJ6E1CN_x_HA"
            }
          ></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

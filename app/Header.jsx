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
        <div className="right"></div>
      </div>
    </header>
  );
};

export default Header;

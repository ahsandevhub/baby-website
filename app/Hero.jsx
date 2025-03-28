import BabyHero from "@/public/baby-hero-image.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-black h-screen">
      {/* Background image that covers entire viewport */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/usa-flag.jpg')",
          zIndex: -1,
        }}
      ></div>

      {/* Content container */}
      <div className="container relative flex flex-col mx-auto h-full max-w-5xl z-10">
        <Image src={BabyHero} alt="baby image" className="mt-auto" />
      </div>
    </div>
  );
};

export default Hero;

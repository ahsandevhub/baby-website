import BoxingBaby from "@/public/boxing-baby.png";
import DexScreener from "@/public/dex-screener-logo.png";
import DexTools from "@/public/dextools-logo.jpeg";
import X from "@/public/x-icon.png";
import Image from "next/image";
import Link from "next/link";

const Description = () => {
  return (
    <div
      className="relative md:pt-20 pt-18"
      style={{
        background: "radial-gradient(circle at center, #c4103d, #be123c)",
      }}
    >
      <div className="absolute md:w-max w-[90%] md:-top-18 -top-20 z-10 left-1/2 -translate-x-1/2 text-white">
        <h3 className="md:text-2xl text-xl text-center mb-2 font-semibold">
          Contract Address
        </h3>
        <p className="md:text-lg text-center rounded-xl bg-black break-all md:px-10 px-5 md:py-4 py-3 border-[3px] border-white">
          6pKHwNCpzgZuC9o5FzvCZkYSUGfQddhUYtMyDbEVpump
        </p>
      </div>
      <div className="container text-slate-50 md:mt-8 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-5">
          Deer Seized by US Government
        </h1>
        <div className="content max-w-3xl mx-auto md:text-lg space-y-4 px-4">
          <p>
            The story of Baby the Deer has gone viral, with many people
            supporting his return to Tommy Bailey, who rescued him as a fawn and
            has cared for him for a year. At the time of the incident, Baby’s
            unusual behavior sparked conversation among residents of Bristol,
            leading to a response from wildlife authorities (initially
            considering rehabilitation, though charges were later dropped).
          </p>
          <p>
            On March 4, the Game Commission confirmed Baby was taken to a
            licensed facility for permanent care, but did not disclose its
            location or provide an update on his condition.
          </p>
        </div>
        <div className="icons flex justify-center md:mt-16 mt-10 items-center md:gap-12 gap-8 mb-4 md:mb-0">
          <Link
            href={
              "https://x.com/elonmusk/status/1896224487491997733?s=46&t=ivWZtwh3-wzJ6E1CN_x_HA"
            }
            target="_blank"
          >
            <Image
              src={DexScreener}
              className="md:h-18 h-14 border-[2px] p-2 bg-black border-white rounded-xl w-auto shadow-md hover:scale-105 transition-all shadow-white"
              alt="logo"
            />
          </Link>
          <Link
            href={
              "https://x.com/elonmusk/status/1896224487491997733?s=46&t=ivWZtwh3-wzJ6E1CN_x_HA"
            }
            target="_blank"
          >
            <Image
              src={DexTools}
              className="md:h-18 h-14 border-[2px] p-2 bg-black border-white rounded-xl w-auto shadow-md hover:scale-105 transition-all shadow-white"
              alt="logo"
            />
          </Link>
          <Link
            href={
              "https://x.com/elonmusk/status/1896224487491997733?s=46&t=ivWZtwh3-wzJ6E1CN_x_HA"
            }
            target="_blank"
          >
            <Image
              src={X}
              className="md:h-18 h-14 border-[2px] p-2 bg-black border-white rounded-xl w-auto shadow-md hover:scale-105 transition-all shadow-white"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="container relative flex flex-col mx-auto h-full max-w-5xl">
        <Image src={BoxingBaby} alt="boxing baby" className="mt-auto" />
      </div>
    </div>
  );
};

export default Description;

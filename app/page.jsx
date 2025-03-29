"use client";

import BoxingBaby from "@/public/boxing-baby.png";
import Image from "next/image";
import { useState } from "react";
import Description from "./Description";
import Header from "./Header";
import Hero from "./Hero";
import MerchPage from "./merch/page";

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <Header />
      <Hero />
      <div
        style={{
          background: "radial-gradient(circle at center, #c4103d, #be123c)",
        }}
      >
        <Description />
        <hr className="md:mt-20 mt-12 border-rose-800 border-2" />
        <MerchPage />
        <div className="container relative flex flex-col mx-auto h-full max-w-5xl">
          <Image src={BoxingBaby} alt="boxing baby" className="mt-auto" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

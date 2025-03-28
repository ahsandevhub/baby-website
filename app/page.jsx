"use client";

import { useState } from "react";
import Description from "./Description";
import Header from "./Header";
import Hero from "./Hero";

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <Header />
      <Hero />
      <Description />
    </div>
  );
};

export default Homepage;

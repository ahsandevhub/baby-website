"use client";

import { useState } from "react";
import Header from "./Header";

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header />
    </>
  );
};

export default Homepage;

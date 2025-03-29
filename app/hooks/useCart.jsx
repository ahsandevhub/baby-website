"use client";

// hooks/useCart.js
import { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, size) => {
    setCart([...cart, { ...product, selectedSize: size }]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return { cart, addToCart, removeFromCart };
}

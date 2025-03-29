"use client";

import { useState } from "react";

export default function MerchItem({ product, addToCart }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[#1a1a1a]/50 rounded-xl overflow-hidden shadow-lg border border-[#ff0055] transition-all duration-300 hover:shadow-[0_0_15px_#ff0055]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute top-3 right-3 bg-[#ff0055] text-white text-xs font-bold px-2 py-1 rounded-full">
          Web3
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 text-white">
        <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
        <p className="text-gray-100 text-sm mb-3">{product.description}</p>

        {/* Price */}
        <div className="flex items-center mb-4">
          <span className="text-white font-bold mr-2">{product.price} ETH</span>
          <span className="text-gray-100 text-sm">(~${product.priceUsd})</span>
        </div>

        {/* Size Selector */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Size
          </label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full rounded-lg border border-[#ff0055] bg-[#222] py-2 px-3 text-sm text-white focus:ring-2 focus:ring-[#ff0055]"
          >
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product, selectedSize)}
          className="w-full bg-[#ff0055] hover:bg-[#d40047] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

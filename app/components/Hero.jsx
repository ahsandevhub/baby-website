"use client";

import Image from "next/image";
import { useState } from "react";
import { FaCopy, FaSoundcloud, FaTwitter } from "react-icons/fa";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "6pKHwNCpzgZuC9o5FzvCZkYSUGfQddhUYtMyDbEVpump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative bg-blue-50">
      <div className="container max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">
        {/* Banner Image - Full Width */}
        <div className="w-full mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/hero-image.jpg"
            alt="Baby The Deer Banner"
            width={1280}
            height={427}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Content - Centered Below Banner */}
        <div className="w-full max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Justice For <span className="text-blue-600">Baby The Deer</span>
          </h1>
          <p className="text-lg text-blue-800 mb-8">
            Join the movement to hold the PA Game Commission accountable and
            protect animal rights.
          </p>

          {/* Contract Address with Copy */}
          <div className="mb-8 mx-auto max-w-lg">
            <p className="text-sm text-blue-600 mb-2">Contract Address:</p>
            <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-blue-200">
              <code className="text-blue-900 font-mono text-sm truncate flex-grow text-center">
                {contractAddress}
              </code>
              <button
                onClick={copyToClipboard}
                className="ml-2 text-blue-500 hover:text-blue-700 transition-colors"
                aria-label="Copy to clipboard"
              >
                {copied ? (
                  <span className="text-green-500 text-sm">Copied!</span>
                ) : (
                  <FaCopy className="text-lg" />
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://x.com/babythedeer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-3 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="https://m.soundcloud.com/babythedeer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-3 rounded-full transition-colors"
              aria-label="SoundCloud"
            >
              <FaSoundcloud className="text-lg" />
            </a>
            <a
              href="https://dexscreener.com/solana/6Fraqd6BFsYvXBa29W8TWbGiKGvCwqvLBfcsBKyitYUH"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-3 rounded-full text-sm font-medium transition-colors flex items-center"
            >
              DexScreener
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

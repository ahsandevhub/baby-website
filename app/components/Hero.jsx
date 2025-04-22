"use client";

import Image from "next/image";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa6";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "6pKHwNCpzgZuC9o5FzvCZkYSUGfQddhUYtMyDbEVpump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative bg-blue-50 min-h-[calc(100vh-81px)]">
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
          <div className="mb-8 mx-auto max-w-xl">
            <p className="text-sm text-blue-600 mb-2">Contract Address:</p>
            <div
              className={`flex items-center rounded-lg border transition-colors duration-300 ${
                copied
                  ? "bg-green-50 border-green-300"
                  : "bg-white border-blue-200"
              }`}
            >
              <code
                className={`p-3 font-mono text-sm md:text-lg truncate flex-grow transition-colors duration-300 ${
                  copied ? "text-green-600" : "text-blue-800"
                }`}
              >
                {contractAddress}
              </code>
              <button
                onClick={copyToClipboard}
                className={`w-12 h-13 flex items-center justify-center transition-colors cursor-pointer ${
                  copied
                    ? "bg-green-200 text-green-700"
                    : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                }`}
                aria-label="Copy to clipboard"
              >
                {copied ? (
                  <IoCheckmarkDoneSharp className="text-xl" />
                ) : (
                  <FaCopy className="text-xl" />
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {[
              {
                name: "Twitter",
                href: "https://x.com/babythedeer",
                icon: "/x-icon.png",
              },
              {
                name: "DexTools",
                href: "https://www.dextools.io/app/en/token/baby",
                icon: "/dextools-logo.jpeg",
              },
              {
                name: "DexScreener",
                href: "https://dexscreener.com/solana/6fraqd6bfsyvxba29w8twbgikgvcwqvlbfcsbkyityuh",
                icon: "/dexscreener.png",
              },
              {
                name: "GeckoTerminal",
                href: "https://www.geckoterminal.com/solana/pools/6Fraqd6BFsYvXBa29W8TWbGiKGvCwqvLBfcsBKyitYUH",
                icon: "/geckoterminal.png",
              },
              {
                name: "CoinMarketCap",
                href: "https://coinmarketcap.com/currencies/deer-seized-by-us-government/",
                icon: "/coinmarketcap.png",
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                aria-label={social.name}
              >
                <div className="sm:size-12 size-10 rounded-lg bg-white border border-blue-100 shadow-sm overflow-hidden transition-all group-hover:scale-110 group-hover:shadow-md">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mt-5">
            <a
              href="https://m.soundcloud.com/babythedeer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 flex items-center gap-2 hover:bg-blue-200 text-blue-700 px-5 py-2 rounded-full transition-colors"
              aria-label="SoundCloud"
            >
              <FaSoundcloud className="text-2xl" />
              <span className="text-sm">Listen on SoundCloud</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

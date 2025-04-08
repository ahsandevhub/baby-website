import Link from "next/link";
import { FaSoundcloud, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-blue-50 py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left - Brand and Links */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h3 className="text-blue-900 font-bold text-lg mb-2">
              #JusticeForBaby
            </h3>
            <div className="flex space-x-4">
              <Link
                href="/story"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Baby's Story
              </Link>
              <Link
                href="https://babythedeer.org"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Official Site
              </Link>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right - Socials */}
          <div className="flex space-x-6">
            <a
              href="https://x.com/babythedeer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
              aria-label="Twitter"
            >
              <FaXTwitter className="text-xl" />
            </a>
            <a
              href="https://dexscreener.com/solana/6Fraqd6BFsYvXBa29W8TWbGiKGvCwqvLBfcsBKyitYUH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center"
            >
              DexScreener
            </a>
            <a
              href="https://m.soundcloud.com/babythedeer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
              aria-label="SoundCloud"
            >
              <FaSoundcloud className="text-xl" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-blue-200 text-center">
          <p className="text-blue-500 text-xs">
            © {new Date().getFullYear()} Baby The Deer. Join the movement for
            justice.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="bg-white py-4 border-b border-blue-50">
      <div className="container mx-auto max-w-6xl px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src="/logo.jpg"
            alt="Logo"
            className="size-10 rounded-full border-2 border-blue-100 group-hover:border-blue-300 transition-all"
            width={40}
            height={40}
          />
          <span className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors">
            Baby The Deer
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/about"
                className="text-blue-800 hover:text-blue-500 font-medium transition-colors relative
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 
                  hover:after:w-full after:transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-blue-800 hover:text-blue-500 font-medium transition-colors relative
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 
                  hover:after:w-full after:transition-all"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-blue-800 hover:text-blue-500 font-medium transition-colors relative
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 
                  hover:after:w-full after:transition-all"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-5">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-colors"
            aria-label="Twitter"
          >
            <FaXTwitter className="text-xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>
    </header>
  );
}

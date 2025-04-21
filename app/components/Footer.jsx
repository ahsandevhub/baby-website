import Image from "next/image";
import Link from "next/link";

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
          <div className="flex justify-center space-x-4">
            {[
              {
                name: "Twitter",
                href: "https://x.com/babythedeer",
                icon: "/x-icon.png",
              },
              {
                name: "TeleGram",
                href: "https://t.me/BabythedeerCTO",
                icon: "/telegram.webp",
              },
              {
                name: "BabyTheDeer",
                href: "https://www.babythedeer.org",
                icon: "/baby-icon.png",
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
                <div className="size-10 rounded-lg bg-white border border-blue-100 shadow-sm overflow-hidden transition-all group-hover:scale-110 group-hover:shadow-md">
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

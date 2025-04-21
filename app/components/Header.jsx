import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm py-4 border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4 flex justify-between items-center">
        {/* Logo with improved typography */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src="/logo.jpg"
            alt="Logo"
            className="size-10 shadow-sm sm:size-12 rounded-lg group-hover:border-blue-300 transition-all"
            width={50}
            height={50}
          />
          <div className="flex flex-col gap-1">
            <span className="leading-none sm:text-2xl text-xl font-bold text-gray-900 transition-colors">
              BABY
            </span>
            <span className="leading-none text-gray-700 transition-colors">
              The Deer
            </span>
          </div>
        </Link>

        {/* Navigation with improved styling */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            {[
              { name: "About", href: "/about" },
              { name: "Story", href: "/story" },
              { name: "Gallery", href: "/gallery" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="relative text-blue-800/90 hover:text-blue-600 font-medium transition-colors
                    after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:w-0 after:h-[3px] after:bg-blue-400 
                    hover:after:w-[100%] hover:after:left-0 after:transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons with better spacing and hover effects */}
        <div className="flex space-x-4">
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
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});
export const metadata = {
  title: "Deer Seized by US Government",
  description:
    "Baby, a deer, was wrongfully seized by the Pennsylvania Gaming Commission from his family. This community-driven initiative seeks justice for Baby's return to Pittsburgh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>{children}</body>
    </html>
  );
}

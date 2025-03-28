import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Deer Seized by US Government",
  description:
    "Baby, a deer, was wrongfully seized by the Pennsylvania Gaming Commission from his family. This community-driven initiative seeks justice for Baby's return to Pittsburgh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}

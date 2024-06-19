"use client";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { isHomePage } from "../utils/utils";
import { usePathname } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const homePage = pathname === "/";

  return (
    <html lang="en">
      <body
        className={`bg-gray-100 ${homePage ? "home-background" : ""} ${
          inter.className
        }`}
      >
        <Navbar isHomePage={homePage ? "sim" : "nao"} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

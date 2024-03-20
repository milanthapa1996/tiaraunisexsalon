import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import ScrollTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiara Unisex Salon",
  description: "Best unisex salon in kathmandu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <Navbar />
        {children}
      </body>
      <Footer />
      <ScrollTop />
    </html>
  );
}

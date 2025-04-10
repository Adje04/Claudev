import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AOSWrapper from "../components/A0SWrapper";

const inter = Inter( {subsets: ["latin"],} );


export const metadata: Metadata = {
  title: "Claude-developper",
  description: "developper minimalist portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`inter.className scroll-smooth`}>
        <AOSWrapper >
        <Navbar />
        {children}
        <Footer />
        </AOSWrapper>
      </body>
    </html>
  );
}


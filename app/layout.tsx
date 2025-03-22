import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import AOSWrapper from "./components/A0SWrapper";

const inter = Inter({

  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Adje portfolio",
  description: "developper minimalist portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`inter.className`}>
        <AOSWrapper >
        <Navbar />
        {children}
        <Footer />
        </AOSWrapper>
      </body>
    </html>
  );
}


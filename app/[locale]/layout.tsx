import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AOSWrapper from "../../components/A0SWrapper";
import { I18nProviderClient } from "@/locales/client";

const inter = Inter( {subsets: ["latin"],} );


export const metadata: Metadata = {
  title: "Claude-developper",
  description: "developper minimalist portfolio",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{locale:string}>,
  children: React.ReactNode;
}>) {
  const {locale} = await params
  return (
    <html lang="en">
      <body className={`inter.className scroll-smooth`}>
      <I18nProviderClient locale={locale}>
        <AOSWrapper >
        <Navbar />
        {children}
        <Footer />
        </AOSWrapper>
        </I18nProviderClient>
      </body>
   
    </html>
  );
}

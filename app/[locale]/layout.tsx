import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AOSWrapper from "../../components/A0SWrapper";
import { I18nProviderClient } from "@/locales/client";

const inter = Inter( {subsets: ["latin"],} );


export const metadata: Metadata = {
  title: "Adjé Claude – Développeur fullstack",
  description:
    "KPONON-EKLOU Adjé Claude – Développeur fullstack passionné. Expert Laravel, Node.js et Next.js. Je transforme vos idées en solutions digitales concrètes et performantes.",
  openGraph: {
    title: "Adjé Claude – Développeur Backend",
    description:
      "Développeur fullstack spécialisé en Laravel, Node.js et Next.js. Découvrez mes projets et solutions digitales sur mon portfolio.",
    url: "https://claudev-woad.vercel.app",
    siteName: "Adjé Claude Developer",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Portfolio de Adjé Claude Développeur",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adje Claude – Développeur Backend",
    description:
      "Portfolio de KPONON-EKLOU Adjé Claude – Développeur Laravel, Node.js, Next.js. Projets, solutions digitales, expertise technique.",
    images: ["/og-image.png"],
  },
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

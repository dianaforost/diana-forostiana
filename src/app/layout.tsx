import { Footer } from "@/layout/Footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/layout/Header/Header";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diana Forostiana",
  description: "Portfolio web site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

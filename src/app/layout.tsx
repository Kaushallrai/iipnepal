import type { Metadata } from "next";
import { Inter, Fragment_Mono, Bebas_Neue, Syne, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";

const switzer = Inter({
  variable: "--font-switzer",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const posterFont = Bebas_Neue({
  variable: "--font-poster",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const polaroidFont = Caveat({
  variable: "--font-polaroid",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IIP Nepal — Indian Institute of Photography Nepal",
  description:
    "An editorial photography institute in Kathmandu, Nepal. Documentary photography, warm paper canvas, and professional mentorship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${switzer.variable} ${posterFont.variable} ${fragmentMono.variable} ${syne.variable} ${playfair.variable} ${polaroidFont.variable} antialiased`}
    >
      <body className="min-h-screen bg-[var(--color-bone-white)] text-[var(--color-ink-black)] overflow-x-hidden w-full max-w-full">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Fragment_Mono, Bebas_Neue } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GsapRegistry } from "@/components/animations/gsap-registry";
import "./globals.css";

const switzer = Inter({
  variable: "--font-switzer",
  subsets: ["latin"],
  weight: ["300", "400"],
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
      className={`${switzer.variable} ${posterFont.variable} ${fragmentMono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-[var(--color-bone-white)] text-[var(--color-ink-black)] font-sans selection:bg-[var(--color-iip-yellow)] selection:text-[var(--color-ink-black)] relative">
        {/* Creative Giants Architectural Grid Guidelines */}
        <div className="fixed inset-0 pointer-events-none z-0 flex justify-between max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 select-none" aria-hidden="true">
          <div className="w-[1px] h-full bg-[var(--color-hairline)] opacity-35" />
          <div className="w-[1px] h-full bg-[var(--color-hairline)] opacity-35 hidden sm:block" />
          <div className="w-[1px] h-full bg-[var(--color-hairline)] opacity-35 hidden md:block" />
          <div className="w-[1px] h-full bg-[var(--color-hairline)] opacity-35 hidden lg:block" />
          <div className="w-[1px] h-full bg-[var(--color-hairline)] opacity-35" />
        </div>

        <GsapRegistry>
          <Navbar />
          <main className="flex-1 flex flex-col relative z-10">{children}</main>
          <Footer />
        </GsapRegistry>
      </body>
    </html>
  );
}

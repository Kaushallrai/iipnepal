import type { Metadata } from "next";
import { Inter, Fragment_Mono } from "next/font/google";
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
      className={`${switzer.variable} ${fragmentMono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-[var(--color-bone-white)] text-[var(--color-ink-black)] font-sans selection:bg-[var(--color-iip-yellow)] selection:text-[var(--color-ink-black)]">
        <GsapRegistry>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </GsapRegistry>
      </body>
    </html>
  );
}

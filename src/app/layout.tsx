import type { Metadata } from "next";
import { Geist, Fragment_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500"],
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
    "A modern, professional photography education institute in Kathmandu, Nepal. Editorial photography school in warm film grain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${fragmentMono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-[var(--color-workshop-ivory)] text-[var(--color-charcoal-ink)] font-sans selection:bg-[var(--color-iip-yellow)] selection:text-[var(--color-charcoal-ink)]">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

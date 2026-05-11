import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guimond Vukovic Group | Play Overseas & Earn Your Master's Degree",
  description:
    "Free consulting services for NCAA, NAIA, USPORTS, and club athletes to earn Master's degrees while playing sports overseas in the UK.",
  keywords: [
    "play overseas",
    "NCAA athletes UK",
    "masters degree abroad",
    "student athlete scholarship UK",
    "play sports UK",
    "NAIA overseas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

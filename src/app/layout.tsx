import type { Metadata } from "next";
import { Geist, Geist_Mono,Lora } from "next/font/google";
import { nazanin } from "@/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lora= Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ZibaNordic",
    template: "%s | ZibaNordic",
  },
  description: "منتخبی از برندهای آرایشی و بهداشتی اصیل جهانی",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nazanin.variable} ${lora.variable} antialiased`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

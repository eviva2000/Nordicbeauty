import type { Metadata } from "next";
import { Geist, Geist_Mono,Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
})



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'ZibaNordic',
    template: '%s | ZibaNordic',
  },
  description: 'منتخبی از برندهای اصیل جهانی',
  viewport: {
    width: 'device-width',
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable } antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

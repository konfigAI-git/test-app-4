import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Coming Soon - Something Big is Coming",
  description:
    "We're working on something amazing that will change the way you experience the web. Get ready for an unforgettable journey.",
  keywords: ["coming soon", "launch", "notification", "subscribe"],
  authors: [{ name: "Your Project Team" }],
  openGraph: {
    title: "Something Big is Coming",
    description:
      "We're working on something amazing that will change the way you experience the web.",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

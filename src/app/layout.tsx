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
  title: "Fiangonana Jesosy Mamonjy Iarintsena",
  description: "Fanorenana ny Tranon'Andriamanitra, Fiangonana Jesosy Mamonjy Iarintsena",
  authors: [{ name: "Daniel Nomenjanahary", url:"https://nomenjanahary-daniel-sigma.vercel.app/"}],
  keywords: ["Jesosy Mamonjy", "Jesosy Mamonjy Foibe ankorondrano", "Ambalavao Tsienimparihy", "Anja Parck", "RN7", "Fianarantsoa", "Iarintsena"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

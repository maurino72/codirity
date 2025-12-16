import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Codirity | AI-Powered Automation & System Development",
  description:
    "Transform your business with intelligent automation. Codirity delivers AI-driven technology solutions that modernize processes and accelerate growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        {/* Background Pattern */}
        <div className="bg-pattern" />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

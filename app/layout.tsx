import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "React/NextJs Car Showcase App",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

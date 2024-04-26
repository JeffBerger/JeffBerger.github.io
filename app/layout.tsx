import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import React from "react";
// import Script from 'next/script';

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Jeffrey Berger Ph.D.",
  description: "Jeff Berger's personal page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
        </script>
      </head>
      <body className={"bg-slate900 " + inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

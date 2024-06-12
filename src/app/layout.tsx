"use client";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { useContext, useState } from "react";
import "./globals.css";
import Nav from "@/components/nav";
import { CartContext } from "@/contexts/cartContext";
import { Product } from "@/contexts/cartContext";
import { Toaster } from "sonner";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const metadata: Metadata = {
  title: "Ethospine Records",
  description: "sick riffage and noise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cart, setCart] = useState<Product[]>([]);
  return (
    <html lang="en">
      <CartContext.Provider value={{ cart, setCart }}>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Nav />
          {children}
          <Toaster />
        </body>
      </CartContext.Provider>
    </html>
  );
}

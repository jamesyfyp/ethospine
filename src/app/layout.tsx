"use client";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { createContext, useContext, useState } from "react";
import "./globals.css";
import Nav from "@/components/nav";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const metadata: Metadata = {
  title: "Ethospine Records",
  description: "sick riffage and noise",
};

export interface Product {
  collectionId: string;
  id: string;
  name: string;
  price: number;
  type: string;
  band: string;
  images: string[];
  // Add other properties as needed
}

interface CartContextType {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});
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
        </body>
      </CartContext.Provider>
    </html>
  );
}

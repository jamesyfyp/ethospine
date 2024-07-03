"use client";
import { useState } from "react";
import { BandLinks } from "./bandLinks";
import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import Cart from "./cart";

export default function Nav() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="w-full flex gap-2 p-4 h-18 bg-black sticky top-0">
      <Link className="text-2xl text-white font-bold" href="/">
        Home
      </Link>
      <Link className="text-2xl text-white font-bold" href="/">
        Shop
      </Link>
      <BandLinks />
      <div
        className="ml-auto text-white text-2xl font-bold pr-2 pt-1.5 hover:cursor-pointer"
        onClick={(e) => {
          e.preventDefault(); 
          setDialogOpen(!dialogOpen);
        }}
      >
        <ShoppingCart strokeWidth={3} size={26} />
      </div>
        <div className={`overflow-y-auto p-2 fixed top-0 right-0 sm:w-1/2 lg:w-1/3 h-full bg-black text-white z-50 transition-transform transform ${
          dialogOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <button className="fixed top-2 right-2 w-10 border-2 border-white rounded p-1 text-bold hover:invert hover:bg-black hover:borde-slate-200 hover:border-1" onClick={(e) => {
            e.preventDefault();
            setDialogOpen(!dialogOpen)
          }}>X</button>
          <Cart />
        </div>
      
    </div>
  );
}

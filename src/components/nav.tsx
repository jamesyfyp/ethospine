"use client";
import { useState, useContext } from "react";
import { CartContext, Product } from "@/contexts/cartContext";
import CartItem from "./cartItem";
import { BandLinks } from "./bandLinks";
import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import CheckoutButton from "./checkout";

export default function Nav() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { cart } = useContext(CartContext);

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
      {dialogOpen ? (
        <dialog
          className="text-white bg-black h-auto w-auto transition-all"
          open
        >
          {cart.length < 1 ? (
            <>empty cart</>
          ) : (
            <div className="flex-grid text-center rows-3 w-full">
              {cart.map((product: Product) => {
                return <CartItem key={product.id} product={product} />
              })}
              <CheckoutButton />
            </div>
          )}
        </dialog>
      ) : null}
    </div>
  );
}

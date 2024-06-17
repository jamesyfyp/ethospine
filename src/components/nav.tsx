"use client";
import { useState, useContext } from "react";
import { CartContext, Product } from "@/contexts/cartContext";
import CartItem from "./cartItem";
import { BandLinks } from "./bandLinks";

export default function Nav() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <div className="w-full flex gap-2 pt-2 pl-2 h-10 bg-slate-500">
      <BandLinks />
      <p>shop</p>
      <p>home</p>
      <div
        className="ml-auto pr-2"
        onClick={(e) => {
          e.preventDefault();
          setDialogOpen(!dialogOpen);
        }}
      >
        cart
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
                return <CartItem key={product.id} product={product} />;
              })}
            </div>
          )}
        </dialog>
      ) : null}
    </div>
  );
}

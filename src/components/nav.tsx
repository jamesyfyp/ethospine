"use client";
import { useState, useContext } from "react";
import { CartContext } from "@/app/layout";
import { Product } from "@/app/layout";
import CartItem from "./cartItem";

export default function Nav() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="w-full h-10 bg-slate-500">
      <div
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
              {cart.map((product) => {
                return <CartItem key={product.id} product={product} />;
              })}
            </div>
          )}
        </dialog>
      ) : null}
    </div>
  );
}

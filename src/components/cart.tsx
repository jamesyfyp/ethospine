"use client"
import { useContext } from "react";
import CartItem from "./cartItem";
import Checkout from "./checkout";
import { CartContext, Product } from "@/contexts/cartContext";


export default function Cart() {
  const { cart } = useContext(CartContext);
  const total = cart
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);
    if (cart.length>0) {
        return (
          <div className="grid pt-14 text-center w-full gap-5">
            {cart.map((product: Product) => {
              return <CartItem key={product.id} product={product} />;
            })}
            <Checkout amount={parseInt(total)} />
          </div>
        ); 
    } else {
        return <div className="text-center pt-14 text-xl">
            add items to your cart
        </div>;
    } 
    
}
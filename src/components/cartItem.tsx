import { Product } from "@/app/layout";
import { useContext } from "react";
import { CartContext } from "@/app/layout";

export default function CartItem({ product }: any) {
  const { cart, setCart } = useContext(CartContext);

  function removeFromCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    let newCart = cart.filter((cartItem) => cartItem.id != product.id);
    setCart(newCart);
  }

  return (
    <div key={product.id} className="inline-grid text-center rows-3 w-full">
      <>{product.name}</>
      <>{product.price}</>
      <button onClick={removeFromCart}>remove from cart</button>
    </div>
  );
}

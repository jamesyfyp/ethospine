import { CartContext } from "@/contexts/cartContext";
import { useContext } from "react";
import pbUrl from "@/lib/pbUrl";
import { Trash2 } from "lucide-react";

export default function CartItem({ product }: any) {
  const { cart, setCart } = useContext(CartContext);

  function removeFromCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    let newCart = cart.filter((cartItem) => cartItem.id != product.id);
    setCart(newCart);
  } 

  return (
      <div key={product.id} className="flex justify-between w-full p-2 border-[2.5px] border-white rounded-xl ">
        <img
          className="h-[50px] w-[50px] col-span-2"
          src={`${pbUrl}api/files/${product.collectionId}/${product.id}/${product.images[0]}?thumb=50x50`}
        />
        <div className="grid">
          <div>{product.name}</div>
          <div className="flex gap-2">
            <div>{product.price}</div>
            <div>QTY:{product.qty}</div>
          </div>
        </div>
        <button className="bg-red-400 rounded-lg h-8 w-8 mt-2"
        onClick={removeFromCart}>
          <Trash2 className="ml-1" />     
        </button>
      </div>
  );
}

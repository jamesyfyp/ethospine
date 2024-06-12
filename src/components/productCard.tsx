"use client";
import { CartContext, Product } from "@/contexts/cartContext";
import { useState, useContext } from "react";
import pbUrl from "@/lib/pbUrl";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@radix-ui/react-select";

export default function ProductCard({ product }: any) {
  const quantityOptions = Array.from({ length: 10 }, (_, i) => i + 1).reverse();
  const { cart, setCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  function addToCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (cart.includes(product)) {
      let newCart = [...cart];
      let itemIndex = newCart.indexOf(product);
      let newQty = qty + product.qty;
      newCart[itemIndex].qty = newQty;
      setCart(newCart);
    } else {
      let prod = product;
      prod.qty = qty;
      let newCart = [...cart, prod];
      setCart(newCart);
    }
    toast(`${qty} x ${product.name} added to cart`);
    setQty(1);
  }
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-48"
        src={`${pbUrl}api/files/${product.collectionId}/${product.id}/${product.images[0]}?thumb=200x200`}
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.type}</p>
      <p className="text-lg text-gray-800">${product.price}</p>
      <div className="flex items-center space-x-2">
        <p className="text-sm">QTY</p>
        <Select
          onValueChange={(value) => {
            setQty(parseInt(value));
          }}
        >
          <SelectTrigger className="w-[60px]">
            <SelectValue placeholder="1" />
          </SelectTrigger>
          <SelectContent>
            {quantityOptions.map((option: number) => (
              <SelectItem key={option} value={option.toString()}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Separator />
        <button
          className="flex-shrink-0 bg-black h-full px-2 text-white rounded-lg hover:invert border-2 hover:border-white"
          onClick={addToCart}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

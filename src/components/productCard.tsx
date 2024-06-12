"use client";
import { CartContext, Product } from "@/app/layout";
import { useState, useContext } from "react";
import pbUrl from "@/lib/pbUrl";

export default function ProductCard({ product }: any) {
  const { cart, setCart } = useContext(CartContext);
  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    let newCart = [...cart, product];
    setCart(newCart);
  }
  return (
    <div className="rows-3 justify-center text-center">
      <img
        className="w-48"
        src={`${pbUrl}api/files/${product.collectionId}/${product.id}/${product.images[0]}?thumb=200x200`}
      />
      <h2>{product.name}</h2>
      <p>{product.type}</p>
      <p>{product.price}</p>
      <button onClick={onClick}> buy </button>
    </div>
  );
}

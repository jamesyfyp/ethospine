import { createContext } from "react";

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

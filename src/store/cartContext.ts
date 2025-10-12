/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
import type { CartContextType, Product } from "../types/myTypes";

export const CartContext = createContext<CartContextType>({
  cartItems: [] as Product[],
  addToCart: (_product: Product) => {},
});

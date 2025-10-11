import type { Dispatch } from "react";

type Category = "Electronics" | "Accessories" | "Footwear" | "Home" | "Fitness";

export interface Product {
  id: number;
  image: string;
  category: Category;
  title: string;
  description: string;
  price: number;
  quantity?: number;
}

export interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export interface CartReducerType {
  cart: Product[];
  dispatch: Dispatch<CartReducerAction>;
}

export interface CartReducerAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "CLEAR_CART";
  payload: Product;
}

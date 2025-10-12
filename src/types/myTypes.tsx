import type { Dispatch } from "react";

type Category = "Electronics" | "Accessories" | "Footwear" | "Home" | "Fitness";

export interface Product {
  id: number;
  image: string;
  category: Category;
  title: string;
  description: string;
  price: number;
}

export interface CartState extends Product {
  quantity: number;
}

export interface CartContextType {
  cartState: CartState[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  deleteItemFromCart: (itemId: { id: number }) => void;
  clearCart: () => void;
}

export interface CartReducerType {
  cart: Product[];
  dispatch: Dispatch<CartReducerAction>;
}

export type CartReducerAction =
  | {
      type: "ADD_ITEM";
      payload: Product;
    }
  | {
      type: "REMOVE_ITEM";
      payload: Product;
    }
  | {
      type: "DELETE_ITEM";
      payload: { id: number };
    }
  | {
      type: "CLEAR_CART";
      payload: null;
    };

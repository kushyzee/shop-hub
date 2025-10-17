import type { Dispatch, SetStateAction } from "react";

export type Page = "home" | "checkout" | "orderSuccess";

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

export type FieldId =
  | "name"
  | "email"
  | "phone"
  | "address"
  | "city"
  | "state"
  | "zip"
  | "cardNumber"
  | "cardExpiry"
  | "cardCvv";

export interface FormFields {
  id: FieldId;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
}

export interface CreditCardItems {
  id: FieldId;
  label: "Card Number" | "Card Expiry" | "Card Cvv";
  type: "number" | "date";
}

export interface FilterProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

import { useReducer, type ReactNode } from "react";
import type { CartState, CartReducerAction, Product } from "../types/myTypes";
import { CartContext } from "./cartContext";

// reducer function
function cartReducer(cart: CartState[], action: CartReducerAction) {
  const { payload, type } = action;

  switch (type) {
    case "ADD_ITEM": {
      const existingItem = cart.find((item) => item.id === payload.id);
      if (existingItem) {
        return cart.map((item) =>
          item.id === payload.id
            ? { ...payload, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...cart, { ...payload, quantity: 1 }];
      }
    }

    default:
      return cart;
  }
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  const addToCart = (product: Product) => {
    cartDispatch({ type: "ADD_ITEM", payload: product });
  };

  const contextValue = {
    cartState,
    addToCart,
  };

  return <CartContext value={contextValue}>{children}</CartContext>;
}

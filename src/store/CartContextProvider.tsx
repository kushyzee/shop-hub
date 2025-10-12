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
    case "REMOVE_ITEM": {
      const existingItem = cart.find((item) => item.id === payload.id);

      if (existingItem?.quantity === 1) {
        return cart.filter((item) => item.id !== payload.id);
      } else {
        return cart.map((item) =>
          item.id === payload.id
            ? { ...payload, quantity: item.quantity - 1 }
            : item
        );
      }
    }
    case "DELETE_ITEM": {
      return cart.filter((item) => item.id !== payload.id);
    }
    case "CLEAR_CART": {
      return [];
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

  const removeFromCart = (product: Product) => {
    cartDispatch({ type: "REMOVE_ITEM", payload: product });
  };

  const clearCart = () => {
    cartDispatch({ type: "CLEAR_CART", payload: null });
  };

  const deleteItemFromCart = (itemId: { id: number }) => {
    cartDispatch({ type: "DELETE_ITEM", payload: itemId });
  };

  const contextValue = {
    cartState,
    addToCart,
    removeFromCart,
    deleteItemFromCart,
    clearCart,
  };

  return <CartContext value={contextValue}>{children}</CartContext>;
}

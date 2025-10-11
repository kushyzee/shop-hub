import { createContext, useReducer, type ReactNode } from "react";
import type {
  CartContextType,
  CartReducerAction,
  Product,
} from "../types/myTypes";

// reducer function
function cartReducer(cart: Product[], action: CartReducerAction) {
  const { payload, type } = action;

  switch (type) {
    case "ADD_ITEM": {
      const existingItem = cart.find((item) => item.id === payload.id);
      if (existingItem) {
        return cart.map((item) =>
          item.id === payload.id
            ? { ...payload, quantity: (item.quantity || 1) + 1 }
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

const CartContext = createContext({
  cartItems: [],
  addToCart: (product: Product) => {},
});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const contextValue = {
    cartItems: cart,
    addToCart,
  };

  return <CartContext value={contextValue}>{children}</CartContext>;
}

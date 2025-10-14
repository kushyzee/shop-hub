import { ShoppingCart } from "lucide-react";
import { useCart } from "../../../hooks/customHooks";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { type Dispatch, type SetStateAction } from "react";
import OrderSummary from "./OrderSummary";

interface CartProps {
  setIsCheckout: Dispatch<SetStateAction<boolean>>;
}

export default function Cart({ setIsCheckout }: CartProps) {
  const {
    cartState,
    addToCart,
    removeFromCart,
    deleteItemFromCart,
    clearCart,
  } = useCart();

  const totalCartItems = cartState.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleCheckoutClick = () => {
    setIsCheckout(true);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="relative bg-transparent"
        >
          {cartState.length > 0 && (
            <p className="absolute -top-2.5 -right-2.5 bg-primary text-background p-1 leading-none text-xs md:text-sm size-[22px] rounded-full flex items-center justify-center font-semibold">
              {totalCartItems < 99 ? totalCartItems : "99+"}
            </p>
          )}
          <ShoppingCart className="size-5" />
          <p className="sr-only">cart</p>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="border-b border-muted-foreground/30 shadow-sm">
          <SheetTitle className="text-2xl font-bold">Shopping Cart</SheetTitle>
          <SheetDescription className="sr-only">
            View your items in cart
          </SheetDescription>
        </SheetHeader>
        {cartState.length > 0 ? (
          <>
            <CartItems
              addToCart={addToCart}
              cartState={cartState}
              deleteItemFromCart={deleteItemFromCart}
              removeFromCart={removeFromCart}
            />
            <SheetFooter className="border-t border-muted-foreground/30">
              <OrderSummary isCheckout={false} cartState={cartState} />
              <div>
                <SheetClose className="w-full" asChild>
                  <Button
                    className="w-full mb-2"
                    size="lg"
                    onClick={handleCheckoutClick}
                  >
                    Proceed to Checkout
                  </Button>
                </SheetClose>
                <Button
                  className="w-full"
                  size="lg"
                  variant="outline"
                  onClick={() => clearCart()}
                >
                  Clear Cart
                </Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <EmptyCart />
        )}
      </SheetContent>
    </Sheet>
  );
}

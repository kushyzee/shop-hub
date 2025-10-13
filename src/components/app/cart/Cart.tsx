import { ShoppingCart } from "lucide-react";
import { useCart } from "../../../hooks/customHooks";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { formatCurrency } from "../../../lib/myFunctions";

export default function Cart() {
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

  const calculateSubtotal = () => {
    return cartState.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTax = (tax: number) => {
    return calculateSubtotal() * (tax / 100);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax(10);
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
              <div className="pb-2 border-b border-muted-foreground/30 text-sm space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-muted-foreground">Subtotal</p>
                  <p className="font-semibold">
                    {formatCurrency(calculateSubtotal())}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-muted-foreground">Tax (10%)</p>
                  <p className="font-semibold">
                    {formatCurrency(calculateTax(10))}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg">Total</p>
                <p className="font-bold text-primary text-xl">
                  {formatCurrency(calculateTotal())}
                </p>
              </div>
              <div>
                <Button className="w-full mb-2" size="lg">
                  Proceed to Checkout
                </Button>
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

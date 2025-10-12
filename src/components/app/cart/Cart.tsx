import { ShoppingCart } from "lucide-react";
import { useCart } from "../../../hooks/customHooks";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import CartItems from "./CartItems";

export default function Cart() {
  const { cartState } = useCart();

  const totalCartItems = cartState.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="relative bg-transparent"
        >
          {cartState.length > 0 && (
            <p className="absolute -top-3 -right-3 bg-primary text-background p-1 leading-none text-xs md:text-sm size-6 rounded-full flex items-center justify-center font-bold">
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
        </SheetHeader>
        <CartItems cartState={cartState} />
        <SheetFooter className="border-t border-muted-foreground/30">
          <Button size="lg">Proceed to Checkout</Button>
          <Button size="lg" variant="outline">
            Clear Cart
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

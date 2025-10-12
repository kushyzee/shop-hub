import { ShoppingCart, Store } from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "../../hooks/customHooks";

export default function Header() {
  const { cartItems } = useCart();

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="fixed top-0 left-0 right-0 border-b border-border shadow-md z-40 bg-background/60 backdrop-blur-2xl">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex gap-1.5 items-center">
          <div>
            <Store className="text-primary size-8" />
          </div>
          <p className="font-bold text-xl md:text-2xl">ShopHub</p>
        </div>
        <Button
          size="icon"
          variant="outline"
          className="relative bg-transparent"
        >
          {cartItems.length > 0 && (
            <p className="absolute -top-3 -right-3 bg-primary text-background p-1 leading-none text-xs md:text-sm size-6 rounded-full flex items-center justify-center font-bold">
              {totalCartItems < 99 ? totalCartItems : "99+"}
            </p>
          )}
          <ShoppingCart className="size-5" />
          <p className="sr-only">cart</p>
        </Button>
      </div>
    </header>
  );
}

import { Store } from "lucide-react";
import Cart from "./cart/Cart";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 border-b border-border shadow-md z-40 bg-background/60 backdrop-blur-2xl">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex gap-1.5 items-center">
          <div>
            <Store className="text-primary size-8" />
          </div>
          <p className="font-bold text-xl md:text-2xl">ShopHub</p>
        </div>
        <Cart />
      </div>
    </header>
  );
}

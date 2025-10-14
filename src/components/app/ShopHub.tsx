import { useState } from "react";
import Header from "./Header";
import Products from "./products/Products";
import Checkout from "./checkout/Checkout";

export default function ShopHub() {
  const [isCheckout, setIsCheckout] = useState(false);

  return (
    <>
      <Header setIsCheckout={setIsCheckout} />
      <main className="p-4 pt-26">
        {isCheckout ? <Checkout setIsCheckout={setIsCheckout} /> : <Products />}
      </main>
    </>
  );
}

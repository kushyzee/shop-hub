import { useState } from "react";
import Header from "./Header";
import Products from "./products/Products";
import Checkout from "./checkout/Checkout";
import type { Page } from "../../types/myTypes";
import OrderSuccess from "./checkout/OrderSuccess";

export default function ShopHub() {
  const [page, setPage] = useState<Page>("home");

  return (
    <>
      <Header setPage={setPage} />
      <main className="p-4 pt-26">
        {page === "home" && <Products />}
        {page === "checkout" && <Checkout setPage={setPage} />}
        {page === "orderSuccess" && <OrderSuccess setPage={setPage} />}
      </main>
    </>
  );
}

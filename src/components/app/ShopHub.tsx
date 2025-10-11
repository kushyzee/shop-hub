import Header from "./Header";
import Products from "./products/Products";

export default function ShopHub() {
  return (
    <>
      <Header />
      <main className="p-4 pt-26">
        <Products />
      </main>
    </>
  );
}

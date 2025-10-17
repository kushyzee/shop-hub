import ProductItem from "./ProductItem";
import { products } from "../../../lib/productData";
import FilterSheet from "./FilterSheet";
import { useState } from "react";
import DesktopFilter from "./DesktopFilter";

export default function ProductsList() {
  const [value, setValue] = useState("All");

  let filteredProducts = products.filter(
    (product) => product.category === value
  );

  if (!filteredProducts.length) {
    filteredProducts = products;
  }

  return (
    <section className="flex items-start gap-8 mt-6 lg:mt-12">
      <DesktopFilter value={value} setValue={setValue} />
      <div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} products
          </p>
          <FilterSheet value={value} setValue={setValue} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

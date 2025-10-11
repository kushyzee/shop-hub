import ProductItem from "./ProductItem";
import { products } from "../../../lib/productData";
import FilterSheet from "./FilterSheet";

export default function ProductsList() {
  return (
    <section className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <p className="text-muted-foreground">
          Showing {products.length} products
        </p>
        <FilterSheet />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

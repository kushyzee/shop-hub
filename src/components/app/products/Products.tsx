import ProductsList from "./ProductsList";

export default function Products() {
  return (
    <div>
      <h1 className="text-3xl font-bold md:text-4xl">
        Discover Amazing Products
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl mt-2">
        Browse our curated collection of quality items
      </p>
      <ProductsList />
    </div>
  );
}

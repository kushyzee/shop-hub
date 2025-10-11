import { ShoppingCart } from "lucide-react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { formatCurrency, truncateString } from "../../../lib/myFunctions";
import type { Product } from "../../../types/myTypes";

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  const { image, category, title, description, price } = product;

  return (
    <Card className="pt-0 group hover:shadow-lg shadow-primary/20 transition-all duration-300">
      <CardHeader className="px-0">
        <div className="h-60 overflow-hidden sm:h-96 md:h-80 rounded-tl-xl rounded-tr-xl">
          <img
            className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl group-hover:scale-110 transition-all duration-300"
            src={image}
            alt={title}
          />
        </div>
      </CardHeader>
      <CardContent className="px-5">
        <Badge className="mb-2">{category}</Badge>
        <CardTitle className="mb-2 text-lg font-bold">{title}</CardTitle>
        <CardDescription className="text-sm">
          {truncateString(description)}
        </CardDescription>
        <p className="text-2xl text-primary font-semibold mt-2.5">
          {formatCurrency(price)}
        </p>
      </CardContent>
      <CardFooter className="px-5">
        <CardAction className="w-full">
          <Button className="w-full">
            <ShoppingCart /> Add to Cart
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}

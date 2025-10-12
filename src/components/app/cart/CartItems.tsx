import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartState, Product } from "../../../types/myTypes";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { formatCurrency } from "../../../lib/myFunctions";

interface CartItemsProps {
  cartState: CartState[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  deleteItemFromCart: (itemId: { id: number }) => void;
}

export default function CartItems({
  cartState,
  addToCart,
  removeFromCart,
  deleteItemFromCart,
}: CartItemsProps) {
  const handleItemButtonClick = (
    type: "add" | "subtract" | "delete",
    item: CartState
  ) => {
    switch (type) {
      case "add":
        {
          addToCart(item);
        }
        break;
      case "subtract":
        {
          removeFromCart(item);
        }
        break;
      case "delete":
        {
          deleteItemFromCart({ id: item.id });
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="justify-center space-y-3 px-4 overflow-auto h-full">
      {cartState.map((item) => (
        <Card key={item.id} className="py-4">
          <CardContent className="px-4 flex justify-between items-baseline-last">
            <div className="flex gap-3 items-center">
              <div className="size-[84px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              <div>
                <p className="font-bold leading-tight">{item.title}</p>
                <p className="text-primary font-bold mt-0.5 text-sm">
                  {formatCurrency(item.price)}
                </p>
                <div className="flex gap-4 items-center mt-4">
                  <Button
                    variant="outline"
                    className="size-6"
                    onClick={() => handleItemButtonClick("subtract", item)}
                  >
                    <Minus className="size-4" />
                  </Button>
                  <p>{item.quantity}</p>
                  <Button
                    variant="outline"
                    className="size-6"
                    onClick={() => handleItemButtonClick("add", item)}
                  >
                    <Plus className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => handleItemButtonClick("delete", item)}
            >
              <Trash2 className="text-primary size-5" />
              <p className="sr-only">Remove</p>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

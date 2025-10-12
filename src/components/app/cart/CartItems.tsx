import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartState } from "../../../types/myTypes";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { formatCurrency } from "../../../lib/myFunctions";

export default function CartItems({ cartState }: { cartState: CartState[] }) {
  return (
    <div className="flex flex-col gap-3 justify-center px-4 overflow-scroll ">
      {cartState.map((item) => (
        <Card key={item.id} className="py-4">
          <CardContent className="px-4 flex justify-between items-baseline-last">
            <div className="flex gap-3 items-center">
              <div className="size-20">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              <div>
                <p className="font-bold leading-none">{item.title}</p>
                <p className="text-primary font-bold">
                  {formatCurrency(item.price)}
                </p>
                <div className="flex gap-4 items-center mt-5">
                  <Button variant="outline" className="size-6">
                    <Minus className="size-4" />
                  </Button>
                  <p>{item.quantity}</p>
                  <Button variant="outline" className="size-6">
                    <Plus className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon-sm">
              <Trash2 className="text-destructive size-5" />
              <p className="sr-only">Remove</p>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

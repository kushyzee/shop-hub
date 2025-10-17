import { useCart } from "../../../hooks/customHooks";
import { formatCurrency } from "../../../lib/myFunctions";
import { Card, CardContent, CardFooter } from "../../ui/card";
import OrderSummary from "../cart/OrderSummary";

export default function YourOrder() {
  const { cartState } = useCart();

  return (
    <div className="mt-10 lg:mt-0">
      <h2 className="text-2xl font-bold mb-3">Your order</h2>
      <Card>
        <CardContent className="space-y-3 max-h-72 overflow-auto pb-4 border-b border-muted-foreground/30">
          {cartState.map((item) => (
            <div key={item.id} className="flex gap-3 items-center">
              <div className="size-[84px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              <div>
                <p className="font-bold leading-tight">{item.title}</p>
                <p className="text-sm">Quantity: {item.quantity}</p>
                <p className="text-primary font-bold mt-0.5 text-lg">
                  {formatCurrency(item.price)}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="block">
          <OrderSummary isCheckout={true} cartState={cartState} />
        </CardFooter>
      </Card>
    </div>
  );
}

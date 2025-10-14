import { formatCurrency } from "../../../lib/myFunctions";
import type { CartState } from "../../../types/myTypes";

export default function OrderSummary({
  cartState,
  isCheckout,
}: {
  cartState: CartState[];
  isCheckout: boolean;
}) {
  const calculateSubtotal = () => {
    return cartState.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTax = (tax: number) => {
    return calculateSubtotal() * (tax / 100);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax(10);
  };

  const totalCartItems = cartState.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <div className="pb-2 border-b border-muted-foreground/30 text-sm space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">
            Subtotal{" "}
            {isCheckout && (
              <span>
                ({totalCartItems} {totalCartItems > 1 ? "items" : "item"})
              </span>
            )}
          </p>
          <p className="font-semibold">{formatCurrency(calculateSubtotal())}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">Tax (10%)</p>
          <p className="font-semibold">{formatCurrency(calculateTax(10))}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">Shipping</p>
          <p className="font-semibold">Free</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-1">
        <p className="font-semibold text-lg">Total</p>
        <p className="font-bold text-primary text-xl">
          {formatCurrency(calculateTotal())}
        </p>
      </div>
    </div>
  );
}

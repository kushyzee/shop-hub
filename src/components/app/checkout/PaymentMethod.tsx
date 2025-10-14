import { type Dispatch, type SetStateAction } from "react";
import { Card, CardContent } from "../../ui/card";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Input } from "../../ui/input";

const radioItems = [
  {
    id: "credit-debit-card",
    value: "Credit / Debit Card",
  },
  {
    id: "paypal",
    value: "PayPal",
  },
  {
    id: "bank-transfer",
    value: "Bank Transfer",
  },
];

interface PaymentMethodProps {
  paymentMethod: string;
  setPaymentMethod: Dispatch<SetStateAction<string>>;
}

export default function PaymentMethod({
  paymentMethod,
  setPaymentMethod,
}: PaymentMethodProps) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-3">Payment method</h2>

      <Card>
        <CardContent>
          <RadioGroup
            onValueChange={(value) => setPaymentMethod(value)}
            value={paymentMethod}
          >
            {radioItems.map((item) => (
              <Label
                key={item.id}
                htmlFor={item.id}
                className="flex items-center gap-2 p-4 border border-border rounded-lg cursor-pointer"
              >
                <RadioGroupItem value={item.value} id={item.id} />
                <p>{item.value}</p>
              </Label>
            ))}
          </RadioGroup>
          <div className="mt-8">
            {paymentMethod === "Credit / Debit Card" && (
              <div className="space-y-3">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input type="text" id="card-number" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="expiry-date">Expiry Date</Label>
                  <Input type="text" id="expiry-date" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input type="text" id="cvv" />
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

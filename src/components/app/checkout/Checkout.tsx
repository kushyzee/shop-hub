import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { ArrowLeft } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";
import YourOrder from "./YourOrder";
import PaymentMethod from "./PaymentMethod";
import { formFields } from "../../../lib/myFunctions";

export default function Checkout({
  setIsCheckout,
}: {
  setIsCheckout: Dispatch<SetStateAction<boolean>>;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("Credit / Debit Card");

  const handleBackButtonClick = () => {
    setIsCheckout(false);
  };

  const handleSubmit = () => {
    const newFormData = {
      ...formData,
      paymentMethod,
    };
    console.log(newFormData);
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <div>
          <Button
            className="px-0.5"
            variant="ghost"
            onClick={handleBackButtonClick}
          >
            <ArrowLeft /> Back to shop
          </Button>
          <h2 className="text-2xl font-bold mt-6">Billing details</h2>
        </div>
        <Card className="mt-3">
          <CardContent>
            <form className="space-y-4">
              {formFields.map((field) => (
                <div className="flex flex-col gap-2" key={field.id}>
                  <Label htmlFor={field.id}>
                    {field.label}
                    <span className="text-destructive -ml-1.5 text-base">
                      *
                    </span>
                  </Label>
                  <Input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    required
                    value={formData[field.id]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.id]: e.target.value,
                      })
                    }
                  />
                </div>
              ))}
            </form>
          </CardContent>
        </Card>
      </div>

      <YourOrder />
      <PaymentMethod
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      <Button
        type="submit"
        className="w-full mt-6"
        size="lg"
        onClick={handleSubmit}
      >
        Place Order
      </Button>
    </section>
  );
}

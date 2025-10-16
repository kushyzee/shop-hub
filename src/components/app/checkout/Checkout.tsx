import { Input } from "../../ui/input";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { ArrowLeft } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";
import YourOrder from "./YourOrder";
import PaymentMethod from "./PaymentMethod";
import { formFields } from "../../../lib/myFunctions";
import * as Z from "zod";
import { useForm } from "@tanstack/react-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "../../ui/field";

const formSchema = Z.object({
  name: Z.string().trim().min(3, "Name must be at least 3 characters long"),
  email: Z.email("Please enter a valid email address"),
  phone: Z.string()
    .refine((value) => /^\d+$/.test(value), {
      message: "Enter a valid phone number",
    })
    .min(11, "Phone number must be 11 digits long"),
  address: Z.string().trim().min(5, "Please enter a valid address"),
  city: Z.string().trim().min(3, "Please enter a valid city"),
  state: Z.string().trim().min(3, "Please enter a valid state"),
  zip: Z.string().trim().min(5, "Please enter a valid zip code"),
});

export default function Checkout({
  setIsCheckout,
}: {
  setIsCheckout: Dispatch<SetStateAction<boolean>>;
}) {
  const [paymentMethod, setPaymentMethod] = useState("Credit / Debit Card");

  const handleBackButtonClick = () => {
    setIsCheckout(false);
  };

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    },
    validators: {
      onChange: formSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

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
            <form
              className="space-y-4"
              id="checkout-form"
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
            >
              <FieldGroup>
                {formFields.map((fieldItem) => (
                  <form.Field
                    key={fieldItem.id}
                    name={fieldItem.id}
                    children={({ handleBlur, state, name, handleChange }) => {
                      const isInvalid =
                        state.meta.isTouched && !state.meta.isValid;
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={fieldItem.id}>
                            {fieldItem.label}
                            <span className="-ml-1 text-destructive">*</span>
                          </FieldLabel>
                          <Input
                            id={name}
                            name={name}
                            type={fieldItem.type}
                            value={state.value}
                            onBlur={handleBlur}
                            onChange={(e) => handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder={fieldItem.placeholder}
                            autoComplete={fieldItem.autoComplete}
                          />
                          {isInvalid && (
                            <FieldError errors={state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  />
                ))}
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>

      <YourOrder />
      <PaymentMethod
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      <form.Subscribe
        selector={(state) => [state.canSubmit]}
        children={([canSubmit]) => (
          <Button
            type="submit"
            form="checkout-form"
            className={`w-full mt-6 ${
              !canSubmit ? "opacity-50 cursor-not-allowed" : ""
            }`}
            size="lg"
            disabled={!canSubmit}
          >
            Place Order
          </Button>
        )}
      />
    </section>
  );
}

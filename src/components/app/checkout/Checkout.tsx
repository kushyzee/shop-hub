import { Input } from "../../ui/input";
import { Card, CardContent, CardFooter } from "../../ui/card";
import { Button } from "../../ui/button";
import { ArrowLeft } from "lucide-react";
import { type Dispatch, type SetStateAction } from "react";
import YourOrder from "./YourOrder";
import { formFields, formSchema } from "../../../lib/myFunctions";
import { useForm } from "@tanstack/react-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "../../ui/field";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import type { CreditCardItems, Page } from "../../../types/myTypes";
import { useCart } from "../../../hooks/customHooks";

const radioItems = [
  {
    id: "card",
    value: "Card",
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

const creditCardItems: CreditCardItems[] = [
  {
    id: "cardNumber",
    label: "Card Number",
    type: "number",
  },
  {
    id: "cardExpiry",
    label: "Card Expiry",
    type: "date",
  },
  {
    id: "cardCvv",
    label: "Card Cvv",
    type: "number",
  },
];

export default function Checkout({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<Page>>;
}) {
  const { clearCart } = useCart();

  const handleBackButtonClick = () => {
    setPage("home");
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
      paymentMethod: "Card",
      cardNumber: "",
      cardExpiry: "",
      cardCvv: "",
    },
    validators: {
      onChange: formSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
      clearCart();
      setPage("orderSuccess");
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
              <YourOrder />
              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-3">Payment method</h2>

                <Card>
                  <CardContent>
                    <form.Field
                      name="paymentMethod"
                      children={(field) => {
                        const { name, state, handleChange } = field;

                        return (
                          <>
                            <RadioGroup
                              name={name}
                              value={state.value}
                              onValueChange={handleChange}
                            >
                              {radioItems.map((item) => (
                                <FieldLabel
                                  className="flex items-center gap-2 p-4 border border-border rounded-lg cursor-pointer"
                                  key={item.id}
                                  htmlFor={item.id}
                                >
                                  <Field orientation="horizontal">
                                    <FieldTitle>{item.value}</FieldTitle>
                                    <RadioGroupItem
                                      value={item.value}
                                      id={item.id}
                                    />
                                  </Field>
                                </FieldLabel>
                              ))}
                            </RadioGroup>
                            {state.value === "Card" && (
                              <div className="mt-8 space-y-3">
                                {creditCardItems.map((item) => (
                                  <div
                                    key={item.id}
                                    className="flex flex-col gap-2"
                                  >
                                    <form.Field
                                      name={item.id}
                                      children={({
                                        handleBlur,
                                        state,
                                        name,
                                        handleChange,
                                      }) => {
                                        const isInvalid =
                                          state.meta.isTouched &&
                                          !state.meta.isValid;
                                        return (
                                          <Field data-invalid={isInvalid}>
                                            <FieldLabel htmlFor="cardNumber">
                                              {item.label}
                                              <span className="-ml-1 text-destructive">
                                                *
                                              </span>
                                            </FieldLabel>
                                            <Input
                                              id="cardNumber"
                                              name={name}
                                              type={item.type}
                                              value={state.value}
                                              onBlur={handleBlur}
                                              onChange={(e) =>
                                                handleChange(e.target.value)
                                              }
                                              aria-invalid={isInvalid}
                                            />
                                            {isInvalid && (
                                              <FieldError
                                                errors={state.meta.errors}
                                              />
                                            )}
                                          </Field>
                                        );
                                      }}
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        );
                      }}
                    />
                  </CardContent>
                </Card>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isPristine]}
              children={([canSubmit, isPristine]) => (
                <Button
                  type="submit"
                  form="checkout-form"
                  className={`w-full mt-6 ${
                    !canSubmit ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  size="lg"
                  disabled={isPristine || !canSubmit}
                >
                  Place Order
                </Button>
              )}
            />
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

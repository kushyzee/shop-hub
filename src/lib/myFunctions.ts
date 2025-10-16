import type { FormFields } from "../types/myTypes";
import * as Z from "zod";

export const truncateString = (str: string, maxLength: number = 77) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + "...";
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const formFields: FormFields[] = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "John Doe",
    autoComplete: "name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "johndoe@example.com",
    autoComplete: "email",
  },
  {
    id: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "123-456-7890",
    autoComplete: "tel",
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    placeholder: "123 Main St",
    autoComplete: "street-address",
  },
  {
    id: "city",
    label: "City",
    type: "text",
    placeholder: "New York",
    autoComplete: "address-level2",
  },
  {
    id: "state",
    label: "State",
    type: "text",
    placeholder: "New York",
    autoComplete: "address-level1",
  },
  {
    id: "zip",
    label: "Zip",
    type: "text",
    placeholder: "12345",
    autoComplete: "postal-code",
  },
];

export const formSchema = Z.object({
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
  paymentMethod: Z.enum(["Card", "PayPal", "Bank Transfer"]),
  cardNumber: Z.string(),
  cardExpiry: Z.string(),
  cardCvv: Z.string(),
}).superRefine((data, ctx) => {
  if (data.paymentMethod === "Card") {
    if (!data.cardNumber?.trim()) {
      ctx.addIssue({
        code: "custom",
        message: "Card number is required",
        path: ["cardNumber"],
      });
    } else if (!data.cardExpiry) {
      ctx.addIssue({
        code: "custom",
        message: "Expiry date is required",
        path: ["cardExpiry"],
      });
    } else if (!data.cardCvv?.trim()) {
      ctx.addIssue({
        code: "custom",
        message: "Card Cvv is required",
        path: ["cardCvv"],
      });
    }
  }
});

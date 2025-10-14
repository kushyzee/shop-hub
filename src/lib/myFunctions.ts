import type { FormFields } from "../types/myTypes";

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
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "johndoe@example.com",
  },
  {
    id: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "123-456-7890",
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    placeholder: "123 Main St",
  },
  {
    id: "city",
    label: "City",
    type: "text",
    placeholder: "New York",
  },
  {
    id: "state",
    label: "State",
    type: "text",
    placeholder: "New York",
  },
  {
    id: "zip",
    label: "Zip",
    type: "text",
    placeholder: "12345",
  },
];

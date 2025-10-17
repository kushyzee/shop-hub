import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import type { FilterProps } from "../../../types/myTypes";

const categories = [
  { id: "all", value: "All" },
  { id: "electronics", value: "Electronics" },
  { id: "accessories", value: "Accessories" },
  { id: "footwear", value: "Footwear" },
  { id: "home", value: "Home" },
  { id: "fitness", value: "Fitness" },
];

export default function FilterCategories({ value, setValue }: FilterProps) {
  console.log(value);

  return (
    <RadioGroup value={value} onValueChange={setValue}>
      {categories.map((category) => (
        <div className="flex items-center gap-2" key={category.id}>
          <RadioGroupItem value={category.value} id={category.id} />
          <Label htmlFor={category.id}>{category.value}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}

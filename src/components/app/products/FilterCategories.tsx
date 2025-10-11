import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";

export default function FilterCategories() {
  return (
    <RadioGroup defaultValue="all">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="all" id="all" />
        <Label htmlFor="all">All</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="electronics" id="electronics" />
        <Label htmlFor="electronics">Electronics</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="accessories" id="accessories" />
        <Label htmlFor="accessories">Accessories</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="footwear" id="footwear" />
        <Label htmlFor="footwear">Footwear</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="home" id="home" />
        <Label htmlFor="home">Home</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="fitness" id="fitness" />
        <Label htmlFor="fitness">Fitness</Label>
      </div>
    </RadioGroup>
  );
}

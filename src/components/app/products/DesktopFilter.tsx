import type { FilterProps } from "../../../types/myTypes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import FilterCategories from "./FilterCategories";

export default function DesktopFilter({ value, setValue }: FilterProps) {
  return (
    <Card className="hidden lg:block w-1/3">
      <CardHeader>
        <CardTitle className="text-2xl mb-4">Filters</CardTitle>
        <CardDescription className="text-lg font-semibold mb-3 text-foreground">
          Categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FilterCategories value={value} setValue={setValue} />
      </CardContent>
    </Card>
  );
}

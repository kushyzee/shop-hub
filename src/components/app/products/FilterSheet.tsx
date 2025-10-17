import { SlidersHorizontal } from "lucide-react";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import FilterCategories from "./FilterCategories";
import type { FilterProps } from "../../../types/myTypes";

export default function FilterSheet({ value, setValue }: FilterProps) {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="outline">
          <SlidersHorizontal />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-2/4">
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold">Filters</SheetTitle>
          <SheetDescription className="sr-only">
            Select your preferred filters
          </SheetDescription>
        </SheetHeader>
        <div className="pl-4">
          <p className="font-semibold mb-3">Categories</p>
          <FilterCategories value={value} setValue={setValue} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

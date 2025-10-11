import { SlidersHorizontal } from "lucide-react";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import FilterCategories from "./FilterCategories";

export default function FilterSheet() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Button variant="outline">
          <SlidersHorizontal />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold">Filters</SheetTitle>
        </SheetHeader>
        <div className="pl-4">
          <p className="font-semibold mb-3">Categories</p>
          <FilterCategories />
        </div>
      </SheetContent>
    </Sheet>
  );
}

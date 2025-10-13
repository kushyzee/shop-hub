import { ShoppingBag } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../ui/empty";

export default function EmptyCart() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <ShoppingBag className="size-16 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle className="font-bold text-xl">
          Your cart is empty
        </EmptyTitle>
        <EmptyDescription className="text-muted-foreground text-base">
          Add some products to get started
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent></EmptyContent>
    </Empty>
  );
}

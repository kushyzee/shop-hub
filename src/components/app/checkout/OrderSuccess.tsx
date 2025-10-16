import { CheckCircle } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import type { Dispatch, SetStateAction } from "react";
import type { Page } from "../../../types/myTypes";

export default function OrderSuccess({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<Page>>;
}) {
  const handleButtonClick = () => {
    setPage("home");
  };

  return (
    <Card className="max-w-lg mx-auto sm:mt-12">
      <CardHeader className="flex flex-col items-center">
        <div className="bg-success/20 p-4 rounded-full w-fit">
          <CheckCircle className="size-10 text-success" />
        </div>
        <CardTitle className="text-2xl md:text-3xl font-bold">
          Order Successful!
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground md:text-lg">
          Your order has been placed Successfully. You will receive a
          confirmation email shortly.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <CardAction>
          <Button size="lg" className="md:text-lg" onClick={handleButtonClick}>
            Continue shopping
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}

import { Plus } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Addcutomer = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <p
            className="py-2 px-3 bg-white text-black flex justify-center
          items-center font-semibold rounded-3xl"
          >
            <Plus color="black" size={22} />
            Add customer
          </p>
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Addcutomer;

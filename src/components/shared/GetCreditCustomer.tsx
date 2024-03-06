import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const GetCreditCustomer = () => {
  return (
    <div className="w-[50%]">
      <Sheet>
        <SheetTrigger className="w-full">
        <p className="py-2 px-2 bg-red-500 text-white font-semibold rounded-xl w-[90%] flex ite justify-center cursor-pointer hover:bg-red-700 hover:text-white duration-200">GIVE MORE CREDIT</p>
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

export default GetCreditCustomer;

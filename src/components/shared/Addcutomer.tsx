"use client"
import { Plus } from "lucide-react";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";

interface Props{
  label:String;
  placeholder:String;
  optional?:Boolean;
}
const InputField = ({ label, placeholder, optional = false }:Props) => (
  <div className="w-full">
    <div className="w-full flex justify-between">
      <p className="py-1 text-[#333] text-[1.05rem]">{label}</p>
      {optional && <p className="py-1 text-[#333] text-[1.05rem]">(optional)</p>}
    </div>
    <input
      placeholder={`${placeholder}`}
      type="text"
      className="py-2 px-4 w-full border-[1px] border-[#444] rounded-[8px] mb-6"
    />
  </div>
);



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
          <SheetHeader className="flex justify-around items-between ">
            <SheetTitle >Add new customer</SheetTitle>
            <SheetDescription>
            <InputField label="Customer Name" placeholder="Bhanu Singh" />
            <InputField label="Description" placeholder="Bought a beautiful girlfriend...." optional />
            <InputField label="Reminder" placeholder="2d or 2h" optional />
            <InputField label="Reminder Description" placeholder="2d or 2h" optional />
            <InputField label="Phone number" placeholder="9898989898" optional />
            <InputField label="Opening Balance" placeholder="69" />
            </SheetDescription>
                  <button className="w-full py-2.5 flex justify-center 
                  items-center bg-[#222] text-white rounded-xl ">Add customer</button>
            <SheetDescription>

            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Addcutomer;

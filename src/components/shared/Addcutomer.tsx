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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface Props {
  label: string;
  placeholder: string;
  optional?: boolean;
  value?: string;
  onChange: (value: string) => void;
}

const InputField = ({ label, placeholder, optional = false, value, onChange }: Props) => (
  <div className="w-full">
    <div className="w-full flex justify-between">
      <span className="py-1 text-[#333] text-[1.05rem]">{label}</span>
      {optional && <span className="py-1 text-[#333] text-[1.05rem]">(optional)</span>}
    </div>
    <input
      placeholder={`${placeholder}`}
      type="text"
      className="py-2 px-4 w-full border-[1px] border-[#444] rounded-[8px] mb-6"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

// ... (other imports)

const Addcutomer = () => {
  const [name, setName] = useState("");
  const [mode, setMode] = useState("");
  const [description, setDescription] = useState("");
  const [money, setMoney] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(name,mode,description,money,number);
  };

  return (
    <div>
      <Sheet>
      <SheetTrigger>
        <p className="w-full py-2 px-6 bg-white
        text-black flex gap-1 items-center justify-center">
          <Plus />
          Add Customer</p>
      </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetHeader className="flex justify-around items-between">
          <SheetTitle className="mb-4">Add customer</SheetTitle>
            <SheetDescription className="my-4">
            <InputField
                label="Name"
                placeholder="Bhanu singh"
                optional
                value={name}
                onChange={(value) => setName(value)}
              />
              <InputField
                label="Description"
                placeholder="Bought a beautiful girlfriend...."
                optional
                value={description}
                onChange={(value) => setDescription(value)}
              />

              <InputField
                label="Number"
                placeholder="999999999"
                optional
                value={number}
                onChange={(value) => setNumber(value)}
              />
              <InputField
                label="money"
                placeholder="0"
                optional
                value={money}
                onChange={(value) => setMoney(value)}
              />

              <div className="w-full mb-6">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="MODE" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#222] text-white">
                    <SelectItem value="light" onClick={() => {setMode("CASH")}}>CASH</SelectItem>
                    <SelectItem value="dark" onClick={() => {setMode("CREDIT")}}>CREDIT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </SheetDescription>
            <p onClick={(e) => handleSubmit(e)} className="py-2 px-4 bg-black text-white mt-4">Add customer</p>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Addcutomer;


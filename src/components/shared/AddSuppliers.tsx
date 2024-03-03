import { Plus } from 'lucide-react'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";

const AddSuppliers = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <p
            className="py-2 px-3 bg-white text-black flex justify-center
          items-center font-semibold rounded-3xl"
          >
            <Plus color="black" size={22} />
            Add Supplier
          </p>
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetHeader className="flex justify-around items-between ">
            <SheetTitle >Add new Supplier</SheetTitle>
            <SheetDescription>
                <div className="w-full">
                    <div>
                      <p className="py-1 text-[#333] text-[1.05rem] mt-6">Supplier Name</p>
                      <input placeholder="Bhanu singh" type="text" className="py-2 px-4 w-full border-[1px] border-[#444] rounded-[8px] mb-8"/>
                    </div>
                </div>

                <div className="w-full">
                    <div className="w-full">
                      <div className="w-full flex justify-between">
                      <p className="py-1 text-[#333] text-[1.05rem]">Description</p>
                      <p className="py-1 text-[#333] text-[1.05rem]">(optional)</p>
                      </div>
                      <input placeholder="Bought a beautifull girlfriend...." type="text" className="py-2 px-4 w-full border-[1px] border-[#444] rounded-[8px] mb-8"/>
                    </div>
                </div>

                <div className="w-full">
                    <div className="w-full">
                      <div className="w-full flex justify-between">
                      <p className="py-1 text-[#333] text-[1.05rem]">Reminder</p>
                      <p className="py-1 text-[#333] text-[1.05rem]">(optional)</p>
                      </div>
                      <input placeholder="2d or 2h" type="text" className="py-2 px-4 w-full border-[1px] border-[#444] rounded-[8px] mb-8"/>
                    </div>
                </div>

                <div className="w-full">
                    <div>
                    <div className="w-full flex justify-between">
                      <p className="py-1 text-[#333] text-[1.05rem]">Phone number</p>
                      <p className="py-1 text-[#333] text-[1.05rem]">(optional)</p>
                      </div>
                      <div className="flex items-center px-4 border-[1px] border-[#444] rounded-[8px] mb-8">
                        <p>+91</p>
                      <input placeholder="9898989898" type="text" className="py-2 px-4 outline-none w-full" min={10}/>
                      </div>
                    </div>
                </div>

                <div className="w-full">
                    <div>
                      <p className="py-1 text-[#333] text-[1.05rem]">Opening Balance</p>
                      <div className="flex w-full border-[1px] border-[#444] rounded-[8px] px-4 mb-8">
                       <input placeholder="69" type="text" className="py-2 px-4 outline-none"/>
                      </div>
                    </div>
                </div>
            </SheetDescription>
                  <button className="w-full py-2.5 flex justify-center 
                  items-center bg-[#222] text-white rounded-xl ">Add Supplier</button>
            <SheetDescription>

            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default AddSuppliers
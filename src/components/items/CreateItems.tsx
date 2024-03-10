import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleFadingPlus } from "lucide-react";

const CreateItems = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
           <CircleFadingPlus size={42} strokeWidth={2.5} color="white"/>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Create Item</DialogTitle>
            <DialogDescription>
              <div className="my-2 w-full">
                    <p>Title</p>
                    <input type="text" placeholder="enter your title" className="py-2 px-4 border border-black w-full" required/>
              </div>

              <div className="my-2">
                    <p>Description</p>
                    <input type="text" placeholder="enter your Description" className="py-2 px-4 border border-black w-full" required/>
              </div>

              <div className="my-2">
                    <p>Tags</p>
                    <input type="text" placeholder="enter your Tag" className="py-2 px-4 border border-black w-full" required/>
              </div>

              <div className="my-2">
                    <p>Original Price</p>
                    <input type="number" placeholder="enter your original Price" className="py-2 px-4 border border-black w-full" required/>
              </div>

              <div className="my-2">
                    <p>Discount</p>
                    <input type="number" placeholder="enter your Discount" className="py-2 px-4 border border-black w-full"/>
              </div>

              <div className="my-2">
                    <p>Total Weight or Liter</p>
                    <input type="text" placeholder="enter your title" className="py-2 px-4 border border-black w-full" required/>
              </div>

              <div className="my-2">
                    <p>add Image</p>
                    <input type="file" placeholder="enter your title" className="py-2" required/>
              </div>

              <p className="py-2.5 cursor-pointer w-full bg-black text-white flex justify-center items-center">Add item</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateItems;

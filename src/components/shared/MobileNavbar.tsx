import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <div>
      <Sheet >
        <SheetTrigger>
        <AlignRight size={28}/>
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetHeader>
            <SheetTitle>
                <Link href={"/"} className="flex gap-2 items-center">
                    <Image src={"/icons/money.png"} height={30} width={30} alt="logo" />
                    <p>udhari.com</p>
                </Link>
            </SheetTitle>
            <SheetDescription className="flex flex-col py-6 gap-2">
                <Link href={"/"} className='mobile_navbar_btn'>
                    <p>Home</p>
                </Link>

                <Link href={"/product"} className='mobile_navbar_btn'>
                    <p>Product</p>
                </Link>

                <Link href={"/contact-us"} className='mobile_navbar_btn'>
                    <p>Contact-us</p>
                </Link>

                <Link href={"/about"} className='mobile_navbar_btn'>
                    <p>About</p>
                </Link>

                <Link href={"/sign-up"} className='mobile_navbar_btn'>
                    <p>sign-up</p>
                </Link>

                <Link href={"/log-in"} className='mobile_navbar_btn'>
                    <p>log-in</p>
                </Link>

                <Link href={"/log-out"} className='mobile_navbar_btn'>
                    <p>log-out</p>
                </Link>
                
                <Link href={"/profile"} className='mobile_navbar_btn'>
                    <p>profile</p>
                </Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;

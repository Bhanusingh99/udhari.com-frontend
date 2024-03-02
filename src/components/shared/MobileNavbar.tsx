'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import axios from "axios";
import { AlignRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const MobileNavbar = () => {
  const [id,setId] = useState("");

  const getUserInfo = async() => {
    try {
      const res = await axios.get("/api/userinfo");
      console.log(res.data)
      setId(res.data.payload.id)
      console.log(id)
    } catch (error) {
      console.log(error)
    }
  }
  getUserInfo()

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
                <Link href={"/"} className='mobile_navbar_btn shadowcss'>
                    <p>HOME</p>
                </Link>

                <Link href={"/product"} className='mobile_navbar_btn shadowcss'>
                    <p>PRODUCT</p>
                </Link>

                <Link href={"/contact-us"} className='mobile_navbar_btn shadowcss'>
                    <p>CONTACT-US</p>
                </Link>

                <Link href={"/about"} className='mobile_navbar_btn shadowcss'>
                    <p>ABOUT</p>
                </Link>

                <Link href={"/sign-up"} className={`mobile_navbar_btn shadowcss ${id ? "hidden" : "block"}`}>
                    <p>SIGN-UP</p>
                </Link>

                <Link href={"/log-in"} className={`mobile_navbar_btn shadowcss ${id ? "hidden" : "block"}`}>
                    <p>LOG-IN</p>
                </Link>

                <Link href={"/log-out"} className='mobile_navbar_btn shadowcss'>
                    <p>LOG-OUT</p>
                </Link>
                
                <Link href={"/profile"} className='mobile_navbar_btn shadowcss'>
                    <p>PROFILE</p>
                </Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;

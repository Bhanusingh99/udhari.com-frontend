import { AlignRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  return (
    <div className='px-8 py-2 rounded-[30px] bg-[#f4ecd7] flex items-center w-[80%]
     h-[3.2rem] mt-5 ml-36 max-lg:mx-auto max-lg:w-[90%] justify-between'>
        <Link href={"/"}>
        <div className='flex gap-1 items-end'>
            <Image src={'/icons/money.png'} height={30} width={30} alt='logo'/>
            <h1 className='font-semibold'>udhari.com</h1>
        </div>
        </Link>

        <div className='flex gap-12 max-lg:hidden'>
            <Link href={"/"} className='text-[.9rem] font-semibold'>
                <p>Home</p>
            </Link>

            <Link href={"/product"} className='text-[.9rem] font-semibold'>
                <p>Product</p>
            </Link>

            <Link href={"/contact-us"} className='text-[.9rem] font-semibold'>
                <p>Contact-us</p>
            </Link>

            <Link href={"/about"} className='text-[.9rem] font-semibold'>
                <p>About</p>
            </Link>
        </div>

        <div>
            <MobileNavbar/>
        </div>
    </div>
  )
}

export default Navbar
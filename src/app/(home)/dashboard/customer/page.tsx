'use client'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DashboardCustome = () => {
  const param = usePathname();
  return (
<div className='w-full h-full bg-green-500 flex'>
  <div className='w-[55%] h-full bg-[#222] border-r-[1px] border-[#888]'>

      <div className='w-full h-16 mt-12 border-b-[1px] border-[#888] px-6 pt-7 flex justify-around'>
        <Link href={'/dashboard/customer'} className={`font-semibold ${param === '/dashboard/customer' ? "border-white text-white  border-b-[1px]" : " text-[#999]"}`}>Customer <span>7</span></Link>
        <Link href={'/dashboard/suppliers'} className={`font-semibold ${param === '/dashboard/suppliers' ? "border-white text-white  border-b-[1px]" : "text-[#999]"}`}>Suppliers <span>5</span></Link>
      </div>

      <div className='w-full h-16 border-b-[1px] border-[#888]'>

      </div>

      <div className='w-full h-28 border-b-[1px] border-[#888]'>

      </div>

      <div className='w-full h-[22rem] px-4 py-4 border-b-[1px] 
      border-[#888] overflow-y-scroll'>
          <div className='w-full h-16 bg-red-500 my-2'></div>
          <div className='w-full h-16 bg-red-500 my-2'></div>
          <div className='w-full h-16 bg-red-500 my-2'></div>
          <div className='w-full h-16 bg-red-500 my-2'></div>
          <div className='w-full h-16 bg-red-500 my-2'></div>
          <div className='w-full h-16 bg-red-500 my-2'></div>
          <div className='w-full h-16 bg-red-500 my-2'></div>
          <div className='w-full h-16 bg-red-500 my-2'></div>
      </div>

      <div className='w-full flex justify-center py-2.5'>
         <button className='py-2 px-3 bg-white text-black flex 
         justify-center items-center font-semibold rounded-3xl'>
          <Plus color='black' size={22}/>
           Add customer
          </button>
      </div>
  </div>


  <div className='w-[45%] h-full bg-[#222]'>

  </div>
</div>

  )
}

export default DashboardCustome
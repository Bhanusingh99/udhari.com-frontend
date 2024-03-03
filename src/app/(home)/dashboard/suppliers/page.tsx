'use client'
import AddSuppliers from '@/components/shared/AddSuppliers';
import { ClipboardPlus, MoveDownLeft, MoveUpRight, Plus, Search, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const arr = [

]

const DashboardSupplier = () => {
    const param = usePathname();
  return (
<div className='w-full h-full bg-green-500 flex'>
  <div className='w-[55%] h-full bg-[#222] border-r-[1px] border-[#888]'>

      <div className='w-full h-16 mt-12 border-b-[1px] border-[#888] px-6 pt-7 flex justify-around'>
        <Link href={'/dashboard/customer'} className={`font-semibold ${param === '/dashboard/customer' ? "border-white text-white  border-b-[1px]" : " text-[#999]"}`}>Customer <span>7</span></Link>
        <Link href={'/dashboard/suppliers'} className={`font-semibold ${param === '/dashboard/suppliers' ? "border-white text-white  border-b-[1px]" : "text-[#999]"}`}>Suppliers <span>5</span></Link>
      </div>

      <div className='w-full h-16 border-b-[1px] border-[#888] flex justify-around items-center'>
          <div className='flex justify-center items-end gap-1'>
            <p className="text-white">You'll Give: <span className='font-semibold text-green-600'>166</span></p>
            <MoveUpRight color='green' size={20} strokeWidth={2.5}/>
          </div>

          <div className='flex justify-center items-center gap-1'>
            <p className="text-white">You'll Get: <span className='font-semibold text-red-600'>200</span></p>
            <MoveDownLeft color='red' size={20} strokeWidth={2.5}/>
          </div>

          <div>
            <Link href={'/dashboard/customer/reports'}>
              <button className='py-2 px-4 border text-[.9rem] text-white rounded-2xl flex gap-1 items-center justify-center'>
              <ClipboardPlus size={18} />
                View Reports
              </button>
            </Link>
          </div>
      </div>

      <div className="w-full h-28 border-b-[1px] border-[#888] flex justify-around items-center">
          <div>
            <p className="text-white my-1 text-[.9rem]">Search for suppliers</p>
            <div className="flex items-center justify-center border-[1px] border-[#777] px-4 rounded-xl">
            <Search color="#999" size={17}/>
            <input type="search" placeholder="name or number" className="py-1.5 px-2 bg-transparent outline-none text-white"/>
            </div>
          </div>

          <div>
            <p className="text-white my-1 text-[.9rem]">Filter By</p>
            <div>
              <Select>
                <SelectTrigger className="w-[120px] text-white rounded-xl border-[1px] border-[#777]">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="light">You'll Give</SelectItem>
                  <SelectItem value="dark">You'll Get</SelectItem>
                  <SelectItem value="system">Settled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <p className="text-white my-1 text-[.9rem]">Sort By</p>
            <div>
              <Select>
                <SelectTrigger className="w-[120px] text-white rounded-xl border-[1px] border-[#777]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="light">Most Recent</SelectItem>
                  <SelectItem value="dark">Highest Amount</SelectItem>
                  <SelectItem value="system">Lowest Amount</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>


      <div className='w-full h-[22rem] px-4 py-4 border-b-[1px] 
      border-[#888] overflow-y-scroll'>
 
      </div>

      <div className='w-full flex justify-center py-2.5'>
      <AddSuppliers/>
      </div>
  </div>

  {arr.length === 0 ? <div className='w-[45%] h-full bg-[#222]'>
      <div className='w-full h-full flex justify-center items-center flex-col'>
        <Users size={125} color="white"/>
        <p className="text-[1.5rem] text-white">No supplier selected</p>
      </div>
  </div> :
  <div className='w-[45%] h-full bg-[#222]'>

  </div>}


</div>

  )
}

export default DashboardSupplier
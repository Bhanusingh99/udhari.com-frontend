'use client'
import { BellRing, ClipboardMinus, IndianRupee, Package, Settings, Truck, UsersRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props{
  url:String;
  icons:React.ReactNode;
  title:String;
}
const SidebarBtnComponent = ({url,icons,title}:Props) => {
  const param = usePathname();
  return(
    <Link href={`${url}`} className={`sidebar-button ${param === url ?"bg-[#333]" : "" }`}>
      {icons}
      {title}
    </Link>
  )
}

const Sidebar = () => {

  return (
    <div className='w-full h-full py-4 px-4'>
        <Link href={'/'} className='items-end'>
            <p className='text-white font-semibold text-[1.25rem] flex gap-1 items-center mt-16'>
            <IndianRupee size={22}/>
              udhari.com
              </p>
        </Link>

        <div>
            <h1 className='text-[1.15rem] text-white font-semibold mt-10'>PARTIES</h1>
            <div className='flex flex-col mt-1'>
              <SidebarBtnComponent 
              key={1} 
              url={'/dashboard/customer'}
              title={'customer'}
              icons={<UsersRound size={18} />}
              />

              <SidebarBtnComponent 
              key={2} 
              url={'/dashboard/suppliers'}
              title={'suppliers'}
              icons={<Truck size={20}/>}
              />
            </div>
        </div>

        <div>
            <h1 className='text-[1.15rem] text-white font-semibold mt-10'>MANAGE ITEMS</h1>
            <div className='flex flex-col mt-1'>

             <SidebarBtnComponent 
              key={3} 
              url={'/dashboard/items'}
              title={'items'}
              icons={<Package size={20} />}
              />

              <SidebarBtnComponent 
              key={4} 
              url={'/dashboard/notifications'}
              title={'notification'}
              icons={<BellRing size={20} />}
              />
            </div>
        </div>

        <div>
            <h1 className='text-[1.15rem] text-white font-semibold mt-10'>OTHERS</h1>
            <div className='flex flex-col mt-1'>

            <SidebarBtnComponent 
              key={5} 
              url={'/dashboard/reports'}
              title={'Reports'}
              icons={<ClipboardMinus size={20}/>}
              />

             <SidebarBtnComponent 
              key={6} 
              url={'/dashboard/settings'}
              title={'settings'}
              icons={<Settings size={20} />}
              />
            </div>
        </div>
    </div>
  )
}

export default Sidebar
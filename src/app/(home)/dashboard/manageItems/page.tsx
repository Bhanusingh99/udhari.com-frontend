import CreateItems from '@/components/items/CreateItems'
import { PackageOpen } from 'lucide-react'
import React from 'react'

const ManageItems = () => {
  return (
    <div className='mt-16 px-2 w-full'>
        <div className='w-full flex justify-between items-center px-10'>
           <h1 className='text-[2rem] font-semibold text-white'>Manage Items</h1>
           <CreateItems/>
        </div>

        <div className='w-full h-[80vh] flex justify-center items-center'>
                <div className=''>
                   <PackageOpen size={90} color='white' className='w-full flex justify-center items-center'/>
                   <p className='text-[1.5rem] text-white'>Add items and no items are there</p>
                </div>
        </div>
    </div>
  )
}

export default ManageItems
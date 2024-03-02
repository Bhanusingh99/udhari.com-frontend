import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-full h-full py-2 px-4'>
        <Link href={'/'} className='items-end'>
            <p className='text-white font-semibold text-[1.25rem]'>udhari.com</p>
        </Link>

        <div>
            <p></p>
        </div>
    </div>
  )
}

export default Sidebar
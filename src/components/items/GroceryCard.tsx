import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props{
    name:string,
    imgUrl:string,
    originalPrice:number,
    discount:number,
    quentity:string,
    storeName:string,
    inStock:boolean
}

const GroceryCard = ({name,imgUrl,originalPrice,discount,quentity,storeName,inStock}:Props) => {
  return (
    <div className='py-4 px-4 w-[25%] h-[22rem] bg-white m-4'>

    <Link href={"/"} className='flex justify-center items-center h-[50%]'>
          <Image src={`${imgUrl}`} height={120} width={120} alt='jj' />
    </Link>

    <Link href={'/'}>
    <p className='w-full line-clamp-2 mt-2 hover:text-blue-600 duration-100 text-[.9rem] font-semibold'>
    {name}
    </p>
    </Link>

    <p className='text-[.9rem] line-clamp-1 w-full'>{storeName}</p>

    <div className=' w-full flex gap-2 items-center my-1'>
      <p>625</p>
      <p>{originalPrice}</p>
      <p>{discount}% off</p>
    </div>

    <div className='flex justify-between items-center mt-2.5'>
        
        {
            inStock ?
            <>
            <button className='w-[45%] py-2 bg-[#222] text-white'>1 L</button>
            <Link href={"/"} className='w-[45%]'>
              <button className='w-[100%] py-2 border bg-green-500 text-white'>Add Item</button>
            </Link>
            </> 
             :<button className='w-full py-2 bg-red-500 text-white cursor-not-allowed'>Out of Stock</button>
        }
          
    </div>

</div>
  )
}

export default GroceryCard
import { formatTime } from '@/helper/formatTime'
import React from 'react'

interface Props{
    time:Date | String,
    description:String,
    form:String,
    money:Number
}

const SelectedCustomerHistory = ({time,description,form,money}:Props) => {
    const date = formatTime(`${time}`);
  return (
    <div className='w-full py-2 px-4 flex justify-between'>
        <div>
            <p className="text-white text-[.9rem] font-semibold">{date}</p>
            <p className='text-white text-[.8rem]'>
            Balance{" "}
             <span className={`${form === 'CASH' ? "text-green-500" : "text-red-500"}`}>{`${money}`}</span>
             </p>
            <p className='text-[.9rem] text-white'>{`${description}`}</p>
        </div>

        <div className='flex gap-28 items-center'>
        <div className='text-green-500'>{form === "CASH" ? `${money}`:"-"}</div>
        <div className='text-red-500'>{form === "CREDIT" ? `${money}`:"-"}</div>
        </div>
    </div>
  )
}

export default SelectedCustomerHistory
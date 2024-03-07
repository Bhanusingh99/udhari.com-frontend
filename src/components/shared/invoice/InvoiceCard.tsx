// InvoiceCard.js

import { IndianRupee } from 'lucide-react';
import React from 'react';

interface Props {
  name: string;
  description: string;
  date: string;
  id: string;
  transactionType: string;
  money: number;
  onClick?: () => void; // Callback function type
}

const InvoiceCard = ({ name, description, date, money, id, transactionType, onClick }: Props) => {
  return (
    <div className='w-[75%] py-3 px-6 text-white for_shadow mt-4 mx-auto bg-[#222] flex justify-between items-center mb-6 border-[1px] border-[#666]'>
      <div>
        <h1 className='text-[1.15rem]'>{name}</h1>
        <p className={`${transactionType === "CASH" ? "text-green-500" : "text-red-500"}`}>{date}</p>
        <p className="">{description}</p>
      </div>
      <div>
        <div className='flex items-center justify-between py-1'>
          <div className='flex items-center'>
            <IndianRupee size={18} />
            <p>{money}</p>
          </div>

          <div>
            <span className={`${transactionType === "CASH" ? "text-green-500" : "text-red-500"}`}>{transactionType}</span>
          </div>
        </div>
        <button
        onClick={onClick}
          className={`py-1.5 px-3 ${transactionType === "CASH" ? "bg-green-500" : "bg-red-500"}`}
        >
          Generate Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoiceCard;

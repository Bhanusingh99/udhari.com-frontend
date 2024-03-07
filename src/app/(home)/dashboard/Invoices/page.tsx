"use client"
import InvoiceCard from '@/components/shared/invoice/InvoiceCard'
import axios from 'axios';
import React, { useEffect, useState } from 'react'


interface Transaction {
    _id: string;
    sortingDate: string;
    customerName: string;
    number: number;
    description: string;
    money: number;
    date: string;
    transactionType: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  const Invoices = () => {
    const [arr, setArr] = useState<Transaction[]>([]);
    const [userSelected, setUserSelected] = useState("");

    const sortedTransactions = (transactions: Transaction[]) => {
        return transactions.sort((a, b) => {
          const dateA = new Date(a.sortingDate);
          const dateB = new Date(b.sortingDate);
    
          return dateB.getTime() - dateA.getTime();
        });
      };
      const getAllCustomers = async () => {
        try {
          const res = await axios.get(
            "http://localhost:4000/v1/api/total-customers-transactions"
          );
          console.log(res.data.data.transactions);
          setArr(sortedTransactions(res.data.data.transactions));
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getAllCustomers();
        console.log(arr); // Now arr contains the array of objects
      }, []);


      const handleCustomerCardClick = (id: any) => {
        // Set the userSelected state when a CustomerCard is clicked
        setUserSelected(id);
        console.log(userSelected);
      };

  return (
    <div className='mt-16 text-white py-2 px-8 w-full overflow-y-scroll'>

        <h1 className=' text-[2.5rem] font-semibold text-center'>Generate Invoice</h1>

        {
            arr.map((items,index) => 
            <InvoiceCard key={index}
            name={items.customerName}
            description={items.description}
            date={items.createdAt}
            money={items.money}
            id={items._id}
            transactionType={items.transactionType}
            onClick={() => handleCustomerCardClick(items._id)}
            />
            )
        }
   
    </div>
  )
}

export default Invoices
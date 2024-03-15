'use client'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { PackageOpen } from 'lucide-react';
import CreateItems from '@/components/items/CreateItems';
import { userContext } from '@/context/userContext';

interface Item {
  _id: string;
  title: string;
  description: string;
  stock: boolean;
}

const ManageItems: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const {userId} = useContext(userContext);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.post<{ data: Item[] }>(
          'http://localhost:4000/v1/api/get-individual-created-items',
           userId 
        );
        const array = response.data.res
        // Extract only the required fields from each item
        const extractedItems = array.map(item => ({
          _id: item._id,
          title: item.title,
          description: item.description,
          stock: item.stock,
          price:item.originalPrice
        }));
        setItems(extractedItems);
        console.log(items)
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [userId]); // Re-fetch items when userId changes

  return (
    <div className='mt-16 px-2 w-full'>
      <div className='w-full flex justify-between items-center px-10'>
        <h1 className='text-[2rem] font-semibold text-white'>Manage Items</h1>
        <CreateItems />
      </div>

      <div className='w-full h-[80vh] flex justify-center items-center'>
        {items.length === 0 ? (
          <div className=''>
            <PackageOpen size={90} color='white' className='w-full flex justify-center items-center' />
            <p className='text-[1.5rem] text-white'>Add items and no items are there</p>
          </div>
        ) : (
          <div className="w-full mt-6 flex flex-col gap-2">
            {items.map(item => (
              <div key={item._id} className='bg-white'>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <p>{item.stock ? 'In Stock' : 'Out of Stock'}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageItems;

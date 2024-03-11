'use client'
import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

const DashBoard = ({children}:{children:React.ReactNode}) => {


  return (
    <div className='w-full h-screen flex'>
        <div className='w-[15%] h-screen max-lg:hidden bg-[#111] border-r-[1px] border-[#777]'>
          <Sidebar />
        </div>
        <div className='w-[85%] max-lg:w-full mx-auto h-screen flex bg-[#111]'>
            {children}
        </div>
    </div>
  );
};

export default DashBoard;

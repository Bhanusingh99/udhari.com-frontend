import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

const DashBoard = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full h-screen flex'>
        <div className='w-[15%] h-screen max-md:w-[5%] bg-[#111] border-r-[1px] border-[#777]'>
          <Sidebar />
        </div>
        <div className='w-[85%] h-screen flex bg-[#111]'>
            {children}
        </div>
    </div>
  );
};

export default DashBoard;

import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

const DashBoard = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full h-screen mt-[3.70rem] flex'>
        <div className='w-[15%] h-screen border max-md:w-[5%] bg-[#111]'>
          <Sidebar/>
        </div>
        <div className='w-[85%] h-screen flex bg-green-700'>
            {children}
        </div>
    </div>
  );
};

export default DashBoard;

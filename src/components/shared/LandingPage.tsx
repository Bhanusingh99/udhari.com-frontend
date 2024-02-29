import React from 'react'

const LandingPage = () => {
  return (
    <>
    <div className="flex w-[90%] mx-auto mt-12">
      <div className="w-[60%] max-md:w-full flex flex-col py-10 px-6 max-md:px-4 lg:px-2 max-lg:w-full max-md:py-4">
        <div>
              <h1 className="text-[#f4ecd7] text-[2.5rem] font-semibold leading-[3.35rem] max-sm:text-[2rem]">
                Let's manage your like Pro finances now, to make the future
                <span className="max-md:hidden"> easier to make the future easier..</span>
              </h1>
        </div>

        <div>
          <p className="text-[#888] mt-4">
            we are here to help organize and plan your finance for a better future. 
           <span className="max-md:hidden">we are here to help organize and plan your finance for a better future.</span> 
          </p>
        </div>

        <div className="flex w-full gap-6 mt-8">
            <button className="py-2.5 px-6 bg-[#f4ecd7] font-semibold">Get started</button>
            <button className="py-2.5 px-6 border text-[#f4ecd7] font-semibold">Introduction</button>
        </div>

        <div className="w-full flex gap-6 mt-8 max-sm:gap-2">
            <div className="home_page_card_css">
              <h1>25k</h1>
              <p className="text-center">Happy Customer</p>
            </div>
            <div className="home_page_card_css">
              <h1>25k</h1>
              <p className="text-center">Happy Customer</p>
            </div>
            <div className="home_page_card_css">
              <h1>25k</h1>
              <p className="text-center">Happy Customer</p>
            </div>
        </div>
      </div>

      <div className="w-[50%] border border-blue-100 max-lg:hidden"></div>
    </div>
    </>
  )
}

export default LandingPage
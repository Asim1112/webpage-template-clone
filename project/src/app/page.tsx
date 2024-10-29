import React from 'react'


export default function page() {
  return (
   <div className='flex items-center justify-center h-screen'>
      
      <div className='flex flex-col gap-4 justify-center w-1/2 h-48 px-4'>
      <h1 className='font-bold text-[44px]'>Welcome to Our Website</h1>
      <p className='font-normal text-[32px] text-custom-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard</p>
      <button className='w-[237px] h-[66px] bg-black text-white font-normal text-[28px] p-4'>Contact Us</button>


      </div>
    
          <div className='w-[502px] h-[465px]'>
            <img src="/pic/image.jpg" alt="image is not showing" /> </div>

          
          
   </div>
)
}

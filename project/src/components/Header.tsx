import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between shadow-2x1 bg-gradient-to-r from-slate-800 via-slate-800 to-slate-600'>
            <div className='text-white text-x1 p-4 pl-6'>ASIM</div>
        
            <div className='flex gap-6 text-white text-xl p-4 pr-20'>
                <div className='cursor-pointer'>Home</div>
                <div className='cursor-pointer'>About</div>
                <div className='cursor-pointer'>Contact</div>
                <div className='cursor-pointer'>Services</div>

            </div>
    </div>
  )
}

export default Header





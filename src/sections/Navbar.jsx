import React from 'react';
import menuBar from '../assets/menuBar.png'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between border-2 border-b-[#112240] px-4 py-2 fixed top-0 w-full bg-[#1D3461]'>
        <div>
            <h2 className='text-[#64FFDA] font-bold text-xl'>AS.</h2>
        </div>
        <div className='text-[#CCD6F6] flex flex-col bg-white cursor-pointer'>
            <img src={menuBar} alt="" className='w-6'/>
        </div>
    </div>
  )
}

import React from 'react';
import gridBg from '../assets/gridBg.jpg';
import abhi from '../assets/abhi.jpg';

export const Hero = () => {
    return (
        <div
            className="bg-cover bg-center mt-12 flex flex-col text-white items-center justify-start px-4 pt-10"
        // style={{
        //     backgroundImage: `url(${gridBg})`,
        //     backgroundSize: '48px 48px',
        //     backgroundRepeat: 'repeat'
        // }}
        >

            <div id='p-img'>
                <div className='border-1 w-[150px] h-[150px] rounded-full overflow-hidden p-2 '>
                    <div className='rounded-full overflow-hidden'>
                        <img src={abhi} alt="" />
                    </div>
                </div>
            </div>

            <div id='p-title' className='flex flex-col items-center mt-4'>
                <h4 className='text-[#64FFDA]'>// Hi, my name is</h4>
                <h1 className='text-3xl text-[#CCD6F6] font-bold'>Abhishek Singh.</h1>
                <h2 className=''>I build things for the web.</h2>
            </div>

            <div className='flex items-center justify-center bg-yellow-800'>
                <p>Full-stack developer specializing in React, Node.js & PostgreSQL. I craft fast, scalable web applications with clean code and thoughtful UX.</p>
            </div>

            <div id='cta-btn'>
                <button>View Projects</button>
                <button>Resume</button>
            </div>

        </div>
    );
};
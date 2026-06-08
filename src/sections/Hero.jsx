import React from 'react';
import gridBg from '../assets/gridBg.jpg';
import abhi from '../assets/abhi.jpg';

export const Hero = () => {
    return (
        <div
            className="mt-12 flex flex-col items-center justify-start px-4 py-10"
            style={{
                backgroundImage: `url(${gridBg})`,
                backgroundSize: '48px 48px',
                backgroundRepeat: 'repeat'
            }}
        >

            <div id='p-img' className='text-white'>
                <div className='border-1 w-[150px] h-[150px] rounded-full overflow-hidden p-2 '>
                    <div className='rounded-full overflow-hidden'>
                        <img src={abhi} alt="" />
                    </div>
                </div>
            </div>

            <div id='p-title' className='flex flex-col items-center mt-4'>
                <h4 className='text-[#64FFDA] mb-2'>// Hi, my name is</h4>
                <h1 className='text-3xl text-[#CCD6F6] font-bold mb-2'>Abhishek Singh.</h1>
                <h2 className='text-[var(--color-text-secondary)]'>I build things for the web.</h2>
            </div>

            <div className='flex items-center justify-center mt-4'>
                <p className='text-center text-[#8892B0] font-bold'>Full-stack developer specializing in <span className='text-[var(--color-accent)]'>React</span>, <span className='text-[var(--color-accent)]'>Express</span> & <span className='text-[var(--color-accent)]'>PostgreSQL</span>. I craft fast, scalable web applications with clean code and thoughtful UX.</p>
            </div>

            <div id='cta-btn' className='flex gap-6 mt-4'>
                <button className='border-2 px-6 py-2 rounded border-[#64FFDA] text-[#64FFDA] font-bold cursor-pointer'>View Projects</button>
                <button className='border-2 px-4 py-2 rounded bg-[var(--color-accent)] border-[var(--color-bg-primary)] text-[var(--color-bg-primary)] font-bold cursor-pointer'>Resume</button>
            </div>

        </div>
    );
};
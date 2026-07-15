import React from 'react';
import gridBg from '../assets/gridBg.jpg';
// import abhi from '../assets/abhi.jpg';
import abhi from '../assets/abhi.png';

export const Hero = () => {
    return (
        <div
            className="mt-12 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-10 relative pt-15 pb-20 sm:py-24"
            style={{
                backgroundImage: `url(${gridBg})`,
                backgroundSize: '680px 680px',
                backgroundRepeat: 'repeat'
            }}
        >
            {/* Radial glow overlay */}
            <div
                className='absolute inset-0 pointer-events-none'
                style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(100,255,218,0.05) 0%, transparent 70%)' }}
            />

            {/* MOBILE: Image on top */}
            <div className='block md:hidden z-10 mt-4'>
                <div className='relative'>
                    {/* Circle border */}
                    <div className='absolute inset-0 rounded-full border-2 border-[#64FFDA] opacity-40 scale-110' />
                    <div className='w-36 h-36 rounded-full overflow-hidden border-2 border-[#1E3A5F]'>
                        <img
                            src={abhi}
                            alt="Abhishek Singh"
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>

            {/* LEFT — Text */}
            <div className='flex flex-col items-center md:items-start text-center md:text-left gap-4 z-10 flex-1 max-w-xl'>

                <p className='text-[#64FFDA] font-mono text-sm tracking-widest'>
                    // Hi, my name is
                </p>

                <div className='flex flex-col gap-1'>
                    <h1 className='text-3xl md:text-6xl font-bold text-[#CCD6F6] leading-tight'>
                        Abhishek Singh.
                    </h1>
                    <h2 className='text-xl md:text-3xl font-semibold text-[#8892B0]'>
                        I build things for the web.
                    </h2>
                </div>

                <p className='text-[#8892B0] text-sm md:text-base leading-relaxed max-w-md'>
                    Full-stack developer specializing in{' '}
                    <span className='text-[#64FFDA]'>React</span>,{' '}
                    <span className='text-[#64FFDA]'>Express</span> &amp;{' '}
                    <span className='text-[#64FFDA]'>PostgreSQL</span>.
                    I craft fast, scalable web applications with clean code and thoughtful UX.
                </p>

                <div className='flex gap-4 flex-wrap justify-center md:justify-start'>
                    <button className='px-6 py-2.5 rounded-lg border-2 border-[#64FFDA] text-[#64FFDA] font-bold text-sm hover:bg-[rgba(100,255,218,0.1)] transition-all duration-200 cursor-pointer'>
                        <a href="#projects">View Projects</a>
                    </button>
                    <button className='px-6 py-2.5 rounded-lg bg-[#64FFDA] text-[#0A0F1E] font-bold text-sm hover:bg-[#4EEFC9] transition-all duration-200 cursor-pointer'>
                        <a
                            href='./Abhishek_Singh_Resume.pdf'
                            download='Abhishek_Singh_Resume.pdf'>
                            Resume ↓
                        </a>
                    </button>
                </div>

            </div>

            {/* RIGHT — Avatar desktop only */}
            <div className='hidden md:flex z-10 flex-shrink-0'>
                <div className='relative group'>
                    {/* Circle border around image */}
                    <div className='absolute inset-0 rounded-full border-2 border-[#64FFDA] opacity-40 scale-110 group-hover:opacity-70 transition-opacity duration-300' />
                    {/* Image */}
                    <div className='relative z-10 w-64 h-64 rounded-full overflow-hidden border-2 border-[#1E3A5F]'>
                        <img
                            src={abhi}
                            alt="Abhishek Singh"
                            className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500'
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};
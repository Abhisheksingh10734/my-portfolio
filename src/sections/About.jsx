import React from 'react';
import tech from '../utils/techStack';
// import abhi from '../assets/abhi.jpg';
import abhi from '../assets/abhi.png';
import { stats } from '../utils/stats';

export const About = () => {
    return (
        <div id='about' className='px-6 md:px-16 py-20 text-white bg-[#0A1628] flex flex-col gap-12'>

            {/* Section Header */}
            <div className='flex flex-col gap-2'>
                <h4 className='text-[#64FFDA] font-mono tracking-widest text-sm'>// 01. about</h4>
                <div className='flex gap-4 items-center'>
                    <h1 className='text-2xl md:text-3xl font-bold text-[#CCD6F6] whitespace-nowrap'>About Me</h1>
                    <div className='flex-1 max-w-xs bg-[#1E3A5F] h-px'></div>
                </div>
            </div>

            {/* Bio + Image */}
            <div className='flex flex-col md:flex-row gap-10 items-start'>

                {/* Text */}
                <div className='flex flex-col gap-4 text-[#8892B0] text-[15px] leading-relaxed flex-1'>
                    <p>
                        Hello! I'm Abhishek,{' '}
                        <span className='text-[#64FFDA]'>a self-taught full-stack developer</span>{' '}
                        based in India. I enjoy building things that live on the internet — from
                        beautifully designed frontends to robust backend systems.
                    </p>
                    <p>
                        I started coding about a year ago and have since built multiple full-stack
                        projects including a{' '}
                        <span className='text-[#64FFDA]'>Task Manager</span> with JWT auth and a{' '}
                        <span className='text-[#64FFDA]'>Blog App</span> with Firebase and EmailJS.
                    </p>
                    <p>
                        Currently looking for opportunities where I can contribute, grow, and
                        continue learning alongside talented people.
                    </p>
                </div>

                {/* Photo */}
                <div className='flex-shrink-0 mx-auto md:mx-0'>
                    <div className='relative w-48 h-48 md:w-56 md:h-56 group'>
                        {/* Accent border offset */}
                        <div className='absolute inset-0 rounded-2xl border-2 border-[#64FFDA] translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300'></div>
                        <img
                            src={abhi}
                            alt="Abhishek Singh"
                            className='relative z-10 w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500'
                        />
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className='flex flex-col gap-5'>
                <h3 className='font-bold text-[#CCD6F6] text-lg'>
                    Technologies &amp; Tools I Work With
                </h3>
                <div className='flex gap-3 flex-wrap'>
                    {tech.map((item) => (
                        <div
                            key={item.id}
                            className='flex items-center gap-2 px-3 py-2 bg-[#112240] border border-[#1E3A5F] rounded-xl
                                       hover:border-[#64FFDA] hover:shadow-[0_0_16px_rgba(100,255,218,0.1)]
                                       transition-all duration-300 group cursor-default'
                        >
                            <img src={item.icon} alt={item.name} className='w-5 h-5 object-contain' />
                            <span className='text-[#8892B0] text-xs font-medium group-hover:text-[#64FFDA] transition-colors duration-300'>
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 w-full'>
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className='bg-[#112240] border border-[#1E3A5F] rounded-2xl px-4 py-6
                                   flex flex-col justify-center items-center gap-2
                                   hover:border-[#64FFDA] hover:shadow-[0_0_20px_rgba(100,255,218,0.08)]
                                   transition-all duration-300 group'
                    >
                        <h2 className='text-4xl font-bold text-[#64FFDA] group-hover:scale-110 transition-transform duration-300'>
                            {stat.num}
                        </h2>
                        <h3 className='text-[#8892B0] text-sm text-center leading-snug'>
                            {stat.label}
                        </h3>
                    </div>
                ))}
            </div>

        </div>
    );
};
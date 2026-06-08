import React from 'react';
import tech from '../utils/techStack';
import abhi from '../assets/abhi.jpg';
import { stats } from '../utils/stats';

export const About = () => {
    return (
        <div className='px-4 py-10 text-white bg-[#0A0F1E] flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <h4 className='text-[#64FFDA]'>// 01. about</h4>
                <div className='flex gap-4 items-center'>
                    <h1 className='text-2xl font-bold'>About Me</h1>
                    <div className='w-1/3 bg-[#CCD6F6] h-0.5'></div>
                </div>
            </div>

            <div className='mt-6 text-[#8892B0] flex flex-col gap-4'>
                <p>Hello! I'm Abhishek, <span className='text-[#64FFDA]'>a self-taught full-stack developer</span> based in Indid. I enjoy building things that live on the internet - from beautifully designed frontends to robust backend systems.</p>

                <p>I started coding about a year ago and have since built multiple full-stack projects including a <span className='text-[#64FFDA]'>Task Manager</span> with JWT auth and a <span className='text-[#64FFDA]'>Real-Time Chat App</span> with Socket.io</p>

                <p>Currently looking for oppourtunities where I can contribute, grow, and continue learning alongside talented people.</p>
            </div>

            <div className='flex flex-col gap-4'>
                <h3 className='font-bold text-[#CCD6F6]'>Technologies I work with</h3>

                <div className='flex gap-4 flex-wrap'>
                    {tech.map((tech) => (
                        <div key={tech.name} className='flex items-center gap-3 px-4 py-3 bg-[#112240] border border-[#1E3A5F] rounded-xl hover:border-[#64FFDA] hover:shadow-[0_0_16px_rgba(100,255,218,0.1)] transition-all duration-300 group'>
                            <img src={tech.icon} alt={tech.name} className='w-8 h-8 object-contain' />
                            <span className='text-[#CCD6F6] font-medium text-sm group-hover:text-[#64FFDA] transition-colors duration-300'>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full'>
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className='bg-[#112240] border border-[#1E3A5F] rounded-2xl px-4 py-6 flex flex-col justify-center items-center gap-2 hover:border-[#64FFDA] hover:shadow-[0_0_20px_rgba(100,255,218,0.08)] transition-all duration-300 group'
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
    )
}

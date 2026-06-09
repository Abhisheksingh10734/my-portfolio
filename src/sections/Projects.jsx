import React from 'react';
import { projects } from '../utils/projects';

export const Projects = () => {
  return (
    <div id='projects' className='bg-[#0A0F1E] px-6 md:px-16 py-20 text-white flex flex-col gap-12'>

      {/* Section Header */}
      <div className='flex flex-col gap-2'>
        <h4 className='text-[#64FFDA] tracking-widest text-sm font-mono'>// 02. projects</h4>
        <div className='flex gap-4 items-center'>
          <h1 className='text-2xl md:text-3xl font-bold text-[#CCD6F6] whitespace-nowrap'>Things I've Built</h1>
          <div className='flex-1 max-w-xs bg-[#1E3A5F] h-px'></div>
        </div>
      </div>

      {/* Project Cards */}
      <div className='flex flex-col gap-8'>
        {projects.map((project, i) => (
          <div
            key={i}
            className='bg-[#112240] border border-[#1E3A5F] rounded-2xl overflow-hidden
                       flex flex-col md:flex-row
                       hover:border-[#64FFDA] hover:shadow-[0_0_32px_rgba(100,255,218,0.07)]
                       transition-all duration-300 group'
          >
            {/* Image */}
            <div className='md:w-2/5 w-full h-52 md:h-auto overflow-hidden bg-[#0A1628] flex-shrink-0'>
              <img
                src={project.image}
                alt={project.name}
                className='w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500'
              />
            </div>

            {/* Content */}
            <div className='flex flex-col justify-between gap-5 p-6 md:p-8 flex-1'>

              {/* Top */}
              <div className='flex flex-col gap-3'>
                <span className='text-[#64FFDA] text-xs font-mono tracking-widest'>
                  {project.type}
                </span>
                <h2 className='text-xl md:text-2xl font-bold text-[#CCD6F6]'>
                  {project.name}
                </h2>
                <p className='text-[#8892B0] text-sm leading-relaxed'>
                  {project.desc}
                </p>
              </div>

              {/* Tech Tags */}
              <div className='flex flex-wrap gap-2'>
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className='text-xs font-mono text-[#64FFDA] bg-[#0A1628] border border-[#1E3A5F] px-3 py-1 rounded-full'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className='flex gap-3 flex-wrap'>
                <a
                  href={project.demo}
                  target='_blank'
                  className='px-5 py-2 rounded-lg bg-[#64FFDA] text-[#0A0F1E] text-sm font-bold
                             hover:bg-[#4EEFC9] transition-colors duration-200'
                >
                  Live Demo ↗
                </a>

                <a
                
                  href={project.github}
                  target='_blank'
                  className='px-5 py-2 rounded-lg border border-[#1E3A5F] text-[#8892B0] text-sm font-semibold
                             hover:border-[#64FFDA] hover:text-[#64FFDA] transition-all duration-200'
                >
                  GitHub
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
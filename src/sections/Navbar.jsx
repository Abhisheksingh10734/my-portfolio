import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ['About', 'Projects', 'GitHub', 'Contact'];

  return (
    <nav className='fixed top-0 w-full z-50 bg-[#060D1F]/90 backdrop-blur-md border-b border-[#1E3A5F]'>
      <div className='flex items-center justify-between px-6 md:px-16 h-12 md:h-16'>

        {/* Logo */}
        <h2 className='text-[#64FFDA] font-bold text-xl font-mono tracking-wider cursor-pointer'>
          <a href="#">
            AS.
          </a>
        </h2>

        {/* Desktop links */}
        <ul className='hidden md:flex items-center gap-8 list-none'>
          {links.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className='text-[#8892B0] text-sm font-medium hover:text-[#64FFDA] transition-colors duration-200'
              >
                <span className='text-[#64FFDA] font-mono mr-1'>0{i + 1}.</span>
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href='./Abhishek_Singh_Resume.pdf'
              download='Abhishek_Singh_Resume.pdf'
              className='px-4 py-2 rounded-lg border border-[#64FFDA] text-[#64FFDA] text-sm font-bold hover:bg-[rgba(100,255,218,0.1)] transition-all duration-200'
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Hamburger — mobile only */}
        <button
          className='md:hidden flex flex-col gap-1.5 cursor-pointer z-50 p-1'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          <span className={`block w-6 h-0.5 bg-[#64FFDA] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#64FFDA] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#64FFDA] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden flex-col items-center gap-6 py-8 bg-[#0A1628] border-t border-[#1E3A5F] transition-all duration-300 overflow-hidden ${isOpen ? 'flex max-h-96 opacity-100' : 'hidden max-h-0 opacity-0'}`}>        {links.map((link, i) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          onClick={() => setIsOpen(false)}
          className='text-[#8892B0] text-base font-medium hover:text-[#64FFDA] transition-colors duration-200'
        >
          <span className='text-[#64FFDA] font-mono mr-2'>0{i + 1}.</span>
          {link}
        </a>
      ))}
        <a
          href='#'
          className='px-6 py-2.5 rounded-lg border border-[#64FFDA] text-[#64FFDA] font-bold text-sm hover:bg-[rgba(100,255,218,0.1)] transition-all duration-200'
        >
          Resume
        </a>
      </div>
    </nav>
  );
};
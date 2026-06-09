import React from 'react';

export const Footer = () => {
  const links = ['About', 'Projects', 'GitHub', 'Contact'];

  return (
    <footer className='bg-[#060D1F] border-t border-[#1E3A5F] px-6 md:px-16 py-10'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-6'>

        {/* Logo */}
        <h2 className='text-[#64FFDA] font-bold text-xl font-mono tracking-wider'>AS.</h2>

        {/* Nav links */}
        <ul className='flex flex-wrap justify-center gap-6 list-none'>
          {links.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className='text-[#8892B0] text-sm hover:text-[#64FFDA] transition-colors duration-200'
              >
                <span className='text-[#64FFDA] font-mono mr-1'>0{i + 1}.</span>
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Credit */}
        <p className='text-[#64748B] text-xs font-mono text-center'>
          Designed &amp; Built by{' '}
          <span className='text-[#64FFDA]'>Abhishek Singh</span>
        </p>

      </div>

      {/* Bottom line */}
      <div className='mt-8 pt-6 border-t border-[#1E3A5F] text-center'>
        <p className='text-[#64748B] text-xs font-mono'>
          © {new Date().getFullYear()} Abhishek Singh · All rights reserved
        </p>
      </div>
    </footer>
  );
};
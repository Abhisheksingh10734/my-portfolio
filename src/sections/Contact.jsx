import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'service_vg6a6oi',
      'template_kk0nxfc',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'wKAmdwKG_Q2bcRhgU'
    )
      .then(() => {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  const links = [
    {
      label: 'Email',
      value: 'abhisingh10734@gmail.com',
      href: 'mailto:abhisingh10734@gmail.com',
      icon: '✉',
    },
    {
      label: 'GitHub',
      value: 'github.com/Abhisheksingh10734',
      href: 'https://github.com/Abhisheksingh10734',
      icon: 'GH',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/abhishek-singh',
    //   href: 'https://linkedin.com/in/abhishek-singh',
      icon: 'LI',
    },
  ];

  return (
    <div id='contact' className='px-6 md:px-16 py-20 bg-[#112240] text-white flex flex-col gap-12'>

      {/* Section Header */}
      <div className='flex flex-col gap-2'>
        <h4 className='text-[#64FFDA] font-mono tracking-widest text-sm'>// 04. contact</h4>
        <div className='flex gap-4 items-center'>
          <h1 className='text-2xl md:text-3xl font-bold text-[#CCD6F6] whitespace-nowrap'>Get In Touch</h1>
          <div className='flex-1 max-w-xs bg-[#1E3A5F] h-px' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>

        {/* Left — text + links */}
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h3 className='text-xl font-bold text-[#CCD6F6]'>Let's work together</h3>
            <p className='text-[#8892B0] text-sm leading-relaxed'>
              I'm currently open to new opportunities. Whether you have a project
              in mind, a question, or just want to say hi — my inbox is always open!
            </p>
          </div>

          <div className='flex flex-col gap-3'>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-4 px-4 py-3 bg-[#0A1628] border border-[#1E3A5F] rounded-xl
                           hover:border-[#64FFDA] hover:shadow-[0_0_16px_rgba(100,255,218,0.08)]
                           transition-all duration-300 group'
              >
                <div className='w-9 h-9 rounded-lg bg-[#112240] border border-[#1E3A5F] flex items-center justify-center
                                text-[#64FFDA] text-sm font-bold font-mono flex-shrink-0
                                group-hover:border-[#64FFDA] transition-colors duration-300'>
                  {link.icon}
                </div>
                <div className='flex flex-col'>
                  <span className='text-[#CCD6F6] text-sm font-semibold'>{link.label}</span>
                  <span className='text-[#8892B0] text-xs font-mono group-hover:text-[#64FFDA] transition-colors duration-300'>
                    {link.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form
          onSubmit={handleSubmit}
          className='bg-[#0A1628] border border-[#1E3A5F] rounded-2xl p-6 flex flex-col gap-5'
        >
          <div className='flex flex-col gap-1.5'>
            <label className='text-[#64FFDA] text-xs font-mono tracking-widest'>// name</label>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              required
              placeholder='Your name'
              className='w-full px-4 py-3 bg-[#112240] border border-[#1E3A5F] rounded-lg
                         text-[#CCD6F6] text-sm placeholder-[#64748B] outline-none
                         focus:border-[#64FFDA] transition-colors duration-200'
            />
          </div>

          <div className='flex flex-col gap-1.5'>
            <label className='text-[#64FFDA] text-xs font-mono tracking-widest'>// email</label>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              placeholder='your@email.com'
              className='w-full px-4 py-3 bg-[#112240] border border-[#1E3A5F] rounded-lg
                         text-[#CCD6F6] text-sm placeholder-[#64748B] outline-none
                         focus:border-[#64FFDA] transition-colors duration-200'
            />
          </div>

          <div className='flex flex-col gap-1.5'>
            <label className='text-[#64FFDA] text-xs font-mono tracking-widest'>// message</label>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="What's on your mind?"
              className='w-full px-4 py-3 bg-[#112240] border border-[#1E3A5F] rounded-lg
                         text-[#CCD6F6] text-sm placeholder-[#64748B] outline-none resize-none
                         focus:border-[#64FFDA] transition-colors duration-200'
            />
          </div>

          {/* Status messages */}
          {status === 'success' && (
            <p className='text-[#64FFDA] text-sm font-mono'>✓ Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className='text-red-400 text-sm font-mono'>✗ Something went wrong. Try again.</p>
          )}

          <button
            type='submit'
            disabled={status === 'sending'}
            className='w-full py-3 rounded-lg bg-[#64FFDA] text-[#0A0F1E] font-bold text-sm
                       hover:bg-[#4EEFC9] transition-all duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
          >
            {status === 'sending' ? 'Sending...' : 'Send Message →'}
          </button>
        </form>

      </div>
    </div>
  );
};
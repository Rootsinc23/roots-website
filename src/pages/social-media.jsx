import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
  <section className='mt-[3rem] px-[1rem]' id='social-media'>        
     <h2 className='text-center text-[2rem]'>Get In Touch</h2>
     <div className='w-[140px] h-[2px] bg-[purple] mx-auto mt-[.3rem]'></div>

     <p className='mt-[1rem]' data-aos = "fade-left">We’d love to hear about what you’re working on and how we could help. We’re currently looking and are open to a wide range of opportunities. We’re a hard-working and positive company that will always approach every task with a sense of purpose and attention to detail. Please do feel free to check out our online profiles below and get in touch using the form.</p>
        
        <div className='flex gap-[1rem] py-[2rem] justify-center' data-aos = "fade-left">
         <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} className='text-[#2eb435]'/>
        </a>
         <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} className='text-[#2eb435]'/>
        </a>
        <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className='text-[#2eb435]'/>
        </a>
        <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} className='text-[#2eb435]' />
        </a>
      </div>
  </section>
  );
}

export default SocialMedia;

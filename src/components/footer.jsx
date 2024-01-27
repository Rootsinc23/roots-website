import React, { useState } from 'react';
import rootsLogo from '../assets/images/roots-logo.png';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {

    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
      };
  return (
    <section className='px-[1rem] bg-[#33323d] text-white mt-[3rem] '>
    <div className='sm:flex sm:items-center sm:justify-around'>
        <img src={rootsLogo} alt="" width={130} className='ml-[6.5rem] sm:mx-0'/>
        <p className='text-[.7rem] hidden'>As R.O.O.T.S continues to grow, it remains dedicated to its mission of unearthing potential, solving problems, and leaving a lasting impact on the world through the power of technology. This startup is not just a company; it's a movement that aims to redefine the tech landscape and pave the way for a more innovative and sustainable future.</p>

        <nav
className=' sm:flex text-center sm:items-center sm:gap-[1rem]'>
         <p onClick={() => handleLinkClick('home')} className={activeLink === 'home' ? 'active' : ''} style={{padding: '.3rem 0'}}>Home</p>
         <p onClick={() => handleLinkClick('about')} className={activeLink === 'about' ? 'active' : ''}style={{padding: '.3rem 0'}}>About</p>
         <p onClick={() => handleLinkClick('services')} className={activeLink === 'services' ? 'active' : ''} style={{padding: '.3rem 0'}}>Services</p>
         <p onClick={() => handleLinkClick('team')} className={activeLink === 'team' ? 'active' : ''} style={{padding: '.3rem 0'}}>Team</p>
         <p onClick={() => handleLinkClick('social media')} className={activeLink === 'social media' ? 'active' : ''} style={{padding: '.3rem 0'}}>Social Media</p>
         <p onClick={() => handleLinkClick('contact')} className={activeLink === 'contact' ? 'active' : ''} style={{padding: '.3rem 0'}} >Contact</p>
      </nav>
      </div>
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
      
      <p className='text-center pb-[2rem]'>Designed By R.O.O.T.S</p>
    </section>
  );
}

export default Footer;

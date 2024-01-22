import React from 'react';
import rootsLogo from '../assets/images/roots-logo.png';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [activeLink, setActiveLink] = useState('home');


    const handleShowMenu = () => {
        setShowMenu(true)
       
    }

    const handleCloseMenu = () => {
        setShowMenu(false)
    }

    const handleLinkClick = (link) => {
        setActiveLink(link);
      };


  return (
    <header className ='relative z-10 flex justify-between items-center px-[.3rem]'>
      <div>
        <img src={rootsLogo} alt="" width={150} />
      </div>

      <nav className={showMenu ?'flex-col absolute right-[1.5rem] top-[6.5rem] bg-[#33323d] text-center text-white w-[355px] h-[410px] py-[2.4rem] gap-[1.1rem] uppercase text-[.9rem] font-[100]': 'md:flex md:items-center gap-[1rem] uppercase text-[.8rem] hidden z-30'} 
       style={{ display: showMenu && 'flex' }}
>
         <p onClick={() => handleLinkClick('home')} className={activeLink === 'home' ? 'active' : ''}>Home</p>
         <p onClick={() => handleLinkClick('about')} className={activeLink === 'about' ? 'active' : ''}>About</p>
         <p onClick={() => handleLinkClick('services')} className={activeLink === 'services' ? 'active' : ''}>Services</p>
         <p onClick={() => handleLinkClick('team')} className={activeLink === 'team' ? 'active' : ''}>Team</p>
         <p onClick={() => handleLinkClick('portfolio')} className={activeLink === 'portfolio' ? 'active' : ''}>Portfolio</p>
         <p onClick={() => handleLinkClick('social media')} className={activeLink === 'social media' ? 'active' : ''}>Social Media</p>
         <p onClick={() => handleLinkClick('contact')} className={activeLink === 'contact' ? 'active' : ''}>Contact</p>
      </nav>

      {!showMenu ? <AiOutlineMenu size={30} className='md:hidden' onClick={handleShowMenu}/> : <AiOutlineClose size={30} className='md:hidden' onClick={handleCloseMenu}/>}

    </header>
  );
}

export default Navbar;

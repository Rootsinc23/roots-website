import React from 'react';
import rootsLogo from '../assets/images/roots-logo.png';
import { useState } from 'react';


const Home = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeLink, setActiveLink] = useState('home');


    const handleShowMenu = () => {
        setShowMenu(true)
       
    }

    const handleCloseMenu = () => {
        setShowMenu(false)
    }
  return (
    <div className='flex justify-between items-center'>
      <div>
        <img src={rootsLogo} alt="" width={150} />
      </div>

      <div className='flex gap-[1rem]'>
         <p>Home</p>
         <p>About</p>
         <p>Services</p>
         <p>Portfolio</p>
         <p>Team</p>
         <p>Social Media</p>
         <p>Contact</p>
      </div>
    </div>
  );
}

export default Home;

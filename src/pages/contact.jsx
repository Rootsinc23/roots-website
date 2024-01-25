import React from 'react';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const Contact = () => {
  return (
    <section className='mt-[3rem] px-[1rem]'>        
    <h2 className='text-center text-[2rem]'>Contact Us</h2>
    <div className='w-[140px] h-[2px] bg-[purple] mx-auto mt-[.3rem]'></div>
    
    <div className='mt-[3rem] sm:flex gap-[1rem] md:justify-around'>
    <div className='text-center'>
      <FaPhone size={44} className='mx-auto text-[#2eb435] mb-[.5rem]' />
      <p>Call: +234 903 50 85579</p>
      <p>+27 66 167 4126</p>
    </div>
    <br />
    <div className='text-center'>
      <MdMail size={44} className='mx-auto text-[#2eb435] mb-[.5rem]' />
      <p>Email: info@rootswrld.com
</p>
      <p>Web: rootswrld.com</p>
    </div>
    <br />
    <div className='text-center'>
      <FaMapMarkerAlt size={44} className='mx-auto text-[#2eb435] mb-[.5rem]' />
      <p>Nigeria, South Africa
</p>
      <p>NG 228B22, SA</p>
    </div>
    </div>
    
 </section>
  );
}

export default Contact;

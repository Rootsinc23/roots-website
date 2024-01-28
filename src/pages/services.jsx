import React, { useEffect } from 'react'
import {FaCode, FaPaintBrush, FaShoppingCart, FaDesktop, FaTools, FaUserEdit} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return ( 
    <section className='mt-[2rem] px-[1rem]'  id='services'>
        <h2 className='text-center text-[2rem]'>Our Services</h2>
        <div className='w-[130px] h-[2px] bg-[purple] mx-auto mt-[.3rem]'></div>
        <div data-aos="fade-in" className='grid grid-cols-1 grid-rows-2 md:grid-cols-3 w-[100%] p-6 gap-[4rem] mt-[2rem] mb-[1rem]'>
          <div className='text-left' >
            <div className='justify-center items-center flex'>
          <FaPaintBrush size={30} className='m-[5px]' />  
          
          </div>
          <h1 data-aos="fade-up" className='text-[30px] font-bold justify-center items-center flex'>Web Design</h1>
            <br />
            <div data-aos="fade-up">
            <h3 className='text-[1rem] font-bold'>User Interface (UI) Design</h3>
            <h4>ROOTS excels in crafting visually stunning websites. Our UI design 
              focuses on layout, colors, typography, and overall aesthetics, ensuring
              a captivating user experience.
            </h4>
            
            <br />
            <h3 className='text-[1rem] font-bold'>User Experience (UX) Design:</h3>
            <h4>
              We take pride in creating seamless and intuitive user journeys. 
              Our UX design ensures visitors can navigae the site, 
              finding information efficiently.
            </h4>
          </div>
          </div>
         
          <div data-aos="fade-up" className='text-left' >
            <div className='justify-center items-center flex'>
          <FaDesktop size={30} className='m-[5px]'/>
          </div>
          <h1 className='text-[30px] font-bold justify-center items-center flex'>Development Expertise</h1>
          <br />
          <h3 className='text-[1rem] font-bold'>Front-end and Back-end Development:</h3>
          <h4>
            Our skilled developers implement UI/UX designs using languages like 
            HTML, CSS, and JavaScript. The result is a responsive website that 
            adapts to various devices. Server-side operations, database, 
            and application logic are meticulously managed using languages like 
            python, Java, Node.js.
          </h4>
          </div>
          
          <div data-aos="fade-up" className='text-left'>
          <div className='justify-center items-center flex'>
          <FaShoppingCart size={30} className='m-[5px]'/>
          </div>
            <h1 className='text-[30px] font-bold '>E-commerce development</h1>
            <br />
            <h3 className='text-[1rem] font-bold'>Building Online Stores:</h3>
            <h4>
              ROOTS specializes in creating online stores with features like 
              product listings, shopping carts, and secure payment gateways.
            </h4>
          </div>
          <div data-aos="fade-up" className='text-left'>
          <div className='justify-center items-center flex'>
          <FaCode size={30} className='m-[5px]'/>
          </div>
            <h1 className='text-[30px] font-bold '>Web Application and Development</h1>
            <br />
            <h3 className='text-[1rem] font-bold'>Dynamic and Interactive solutions:</h3>
            <h4>
              We create dynamic and interactive web applications tailored to specific 
              business or user needs
            </h4>
          </div>

          <div data-aos="fade-up" className='text-left'>
          <div className='justify-center items-center flex'>
          <FaUserEdit size={30} className='m-[5px]'/>
          </div>
            <h1 className='text-[30px] font-bold '>Enterprise Development</h1>
            <br />
            <h4>
              ROOTS specializes in crafting enterprise-grade web solutions. Our team
              ensures that your business receives a tailored, scalable, and secure 
              web platform to meet the demands of the modern digital landscape.
            </h4>
          </div>
          
          <div data-aos="fade-up" className='text-left'>
          <div className='justify-center items-center flex'>
          <FaTools size={30} className='m-[5px]'/>
          </div>
            <h1 className='text-[30px] font-bold '>Maintenance and Support</h1>
            <br />
            <h3 className='text-[1rem] font-bold'>Ensuring Smooth Functionality</h3>
            <h4>
              ROOTS provides regular update, bug fixes and ongoing support 
              to ensure your website functions and stays secure.
            </h4>

          </div>

        </div>
          
    </section>
  )
}

export default Services;
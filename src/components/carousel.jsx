import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel1 from '../assets/images/carouselImg4.jpeg';
import carousel2 from '../assets/images/carouselImg5.jpeg';
import carousel3 from '../assets/images/carouselImg6.jpeg';
import { Link } from 'react-scroll';

const MyCarousel = () => {
  return (
    <div className='relative z-0'>
    <Carousel>
      <Carousel.Item>
        <div className="overlay-container">
          <img
            className="d-block w-100 h-[500px] object-cover"
            src={carousel1}
            alt="First slide"
          />
          <div className="overlay flex items-center justify-center flex-col text-center">
              <h2 className='text-[2rem] pl-[.8rem] text-white sm:text-[2.2rem]'>Bringing Tech Solutions To Your Doorstep</h2>
              <p className='mt-[1.5rem] pl-[.8rem] text-[1.1rem] sm:text-[1.3rem] text-white font-[100]'>We are in the business to solve your problems using our optimized technology</p>
             <Link to='contact' smooth={true} duration={800}>
              <button className='rounded-[.2rem] py-[.5rem] px-[.8rem] border-[.7px] border-[#2eb435] text-white text-[.7rem] mt-[4rem]'>Get Started</button>
              </Link>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="overlay-container">
          <img
            className="d-block w-100 h-[500px] object-cover"
            src={carousel2}
            alt="Second slide"
          />
          <div className="overlay flex items-center justify-center flex-col text-center">
              <h2 className='text-[2rem] pl-[.8rem] text-white sm:text-[2.2rem]'>Meet With The Best Team In The World</h2>
              <p className='mt-[1.5rem] pl-[.8rem] text-[1.1rem] sm:text-[1.3rem] text-white font-[100]'>Start building customer relationships now</p>
              <Link to='contact' smooth={true} duration={800}>
              <button className='rounded-[.2rem] py-[.5rem] px-[.8rem] border-[.7px] border-[#2eb435] text-white text-[.7rem] mt-[4rem]'>Get Started</button>
              </Link>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="overlay-container">
          <img
            className="d-block w-100 h-[500px] object-cover"
            src={carousel3}
            alt="Third slide"
          />
          <div className="overlay flex items-center justify-center flex-col text-center">
              <h2 className='text-[2rem] pl-[.8rem] text-white sm:text-[2.2rem]'>The best School Management System</h2>
              <p className='mt-[1.5rem] pl-[.8rem] text-[1.1rem] sm:text-[1.3rem] text-white font-[100]'>We are in the business to help manage and automate school activities.</p>
              <Link to='contact' smooth={true} duration={800}>
              <button className='rounded-[.2rem] py-[.5rem] px-[.8rem] border-[.7px] border-[#2eb435] text-white text-[.7rem] mt-[4rem]'>Get Started</button>
              </Link>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default MyCarousel;

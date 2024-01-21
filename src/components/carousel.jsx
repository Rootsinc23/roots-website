import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel1 from '../assets/images/carouselImg4.jpeg';
import carousel2 from '../assets/images/carouselImg5.jpeg';
import carousel3 from '../assets/images/carouselImg6.jpeg';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="overlay-container">
          <img
            className="d-block w-100 h-[500px] object-cover"
            src={carousel1}
            alt="First slide"
          />
          <div className="overlay">
            <Carousel.Caption>
              <h2 className='text-[2rem] pl-[.8rem] text-white sm:text-[2.2rem] sm:text-left'>Bringing Tech Solutions To Your Doorstep</h2>
              <p className='mt-[1.5rem] pl-[.8rem] text-[1.1rem] sm:text-[1.3rem] text-white font-[100] sm:text-left'>We are in the business to solve your problems using our optimized technology</p>
            </Carousel.Caption>
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
          <div className="overlay">
            <Carousel.Caption>
              <h2 className='text-[2rem] pl-[.8rem] text-white sm:text-[2.2rem] sm:text-left'>Meet With The Best Team In The World</h2>
              <p className='mt-[1.5rem] pl-[.8rem] text-[1.1rem] sm:text-[1.3rem] text-white font-[100] sm:text-left'>Start building customer relationships now</p>
            </Carousel.Caption>
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
          <div className="overlay">
            <Carousel.Caption>
              <h2 className='text-[2rem] pl-[.8rem] text-white sm:text-[2.2rem] sm:text-left'>The best School Management System</h2>
              <p className='mt-[1.5rem] pl-[.8rem] text-[1.1rem] sm:text-[1.3rem] text-white font-[100] sm:text-left'>We are in the business to help manage and automate school activities.</p>
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;

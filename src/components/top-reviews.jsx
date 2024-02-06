import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import j1 from "../assets/images/john1.webp";
import j2 from "../assets/images/john2.webp";
import j3 from "../assets/images/john3.webp";
import j4 from "../assets/images/jane.jpg";
import j5 from "../assets/images/jane2.jpg";
import carousel1 from "../assets/images/carouselImg5.jpeg";

const TopReviews = () => {
  return (
    <section className="relative z-0 pt-[5%] dark:text-gray-100 dark:bg-slate-900">
      <h2 className="text-center text-[2rem]">Top Reviews</h2>
      <div className="w-[120px] h-[3px] bg-[purple] mx-auto mt-[.5rem]"></div>
      <Carousel className="mt-[3rem]">
        <Carousel.Item>
          <div className="overlay-container">
            <div className="fixed-image-container">
              <img
                className="d-block w-100 h-[400px] object-cover"
                src={carousel1}
                alt="First slide"
              />
            </div>
            <div className="overlay flex items-center justify-center flex-col text-center">
              <div>
                <img
                  src={j4}
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-full mx-auto mt-[1.5rem]"
                />
              </div>
              <h2 className="text-[1.6rem] pl-[.8rem] text-white sm:text-[2rem]">
                Sarah Wilson
              </h2>
              <p className="text-[purple]">Designer</p>
              <p className="mt-[1rem] pl-[.8rem] text-[.8rem] sm:text-[1.1rem] text-white font-[100] text-left">
                "Exceptional experience with R.O.O.T.S! They transformed our
                vision into a sleek and efficient app. Their team is not just
                skilled but also highly collaborative. Looking forward to more
                projects together!"
              </p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="overlay-container">
            <div className="fixed-image-container">
              <img
                className="d-block w-100 h-[400px] object-cover"
                src={carousel1}
                alt="Second slide"
              />
            </div>
            <div className="overlay flex items-center justify-center flex-col text-center">
              <div>
                <img
                  src={j2}
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-full mx-auto mt-[1.5rem]"
                />
              </div>
              <h2 className="text-[1.6rem] pl-[.8rem] text-white sm:text-[2rem]">
                John Larson
              </h2>
              <p className="text-[purple]">Entrepreneur</p>
              <p className="mt-[1rem] pl-[.8rem] text-[.8rem] sm:text-[1.1rem] text-white font-[100] text-left">
                "R.O.O.T.S exceeded our expectations! Their innovative solutions
                and timely delivery showcase their commitment to excellence. Our
                project was a success, thanks to their talented team."
              </p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="overlay-container">
            <div className="fixed-image-container">
              <img
                className="d-block w-100 h-[400px] object-cover"
                src={carousel1}
                alt="Third slide"
              />
            </div>
            <div className="overlay flex items-center justify-center flex-col text-center">
              <div>
                <img
                  src={j5}
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-full mx-auto mt-[1.5rem]"
                />
              </div>
              <h2 className="text-[1.6rem] pl-[.8rem] text-white sm:text-[2rem]">
                Elen Mei
              </h2>
              <p className="text-[purple]">Data Analyst</p>
              <p className="mt-[1rem] pl-[.8rem] text-[.8rem] sm:text-[1.1rem] text-white font-[100] text-left">
                "Choosing R.O.O.T.S was a game-changer for us. Their attention
                to detail and dedication to client satisfaction are
                unparalleled. Our website is now a testament to their technical
                prowess. Highly recommended!"
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="overlay-container">
            <div className="fixed-image-container">
              <img
                className="d-block w-100 h-[400px] object-cover"
                src={carousel1}
                alt="Fourth slide"
              />
            </div>
            <div className="overlay flex items-center justify-center flex-col text-center">
              <div>
                <img
                  src={j3}
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-full mx-auto mt-[1.5rem]"
                />
              </div>
              <h2 className="text-[1.6rem] pl-[.8rem] text-white sm:text-[2rem]">
                Ahmed Qatar
              </h2>
              <p className="text-[purple]">Freelancer</p>
              <p className="mt-[1rem] pl-[.8rem] text-[.8rem] sm:text-[1.1rem] text-white font-[100] text-left">
                "Working with R.O.O.T.S has been a delight. Their
                professionalism, expertise, and creativity shine through in
                every project. They listen to your needs and deliver top-notch
                solutions. A reliable partner in tech!"
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="overlay-container">
            <div className="fixed-image-container">
              <img
                className="d-block w-100 h-[400px] object-cover"
                src={carousel1}
                alt="Fifth slide"
              />
            </div>
            <div className="overlay flex items-center justify-center flex-col text-center">
              <div>
                <img
                  src={j1}
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-full mx-auto mt-[1.5rem]"
                />
              </div>
              <h2 className="text-[2rem] pl-[.8rem] text-white sm:text-[2.2rem]">
                Christian Kuma
              </h2>
              <p className="text-[purple]">Entrepreneur</p>
              <p className="mt-[1rem] pl-[.8rem] text-[.8rem] sm:text-[1.1rem] text-white font-[100] text-left">
                "R.O.O.T.S is simply outstanding! Their team's ability to grasp
                complex ideas and turn them into user-friendly applications is
                remarkable. Collaborating with them was not just a project; it
                was a smooth and rewarding journey."
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default TopReviews;

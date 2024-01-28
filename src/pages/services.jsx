import React, { useEffect } from "react";
import {
  FaCode,
  FaPaintBrush,
  FaShoppingCart,
  FaDesktop,
  FaTools,
  FaUserEdit,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="mt-[2rem] px-[1rem]" id="services">
      <h2 className="text-center text-[2rem]">Our Services</h2>
      <div className="w-[130px] h-[2px] bg-[purple] mx-auto mt-[.3rem]"></div>
      <h1 className="text-center mt-3">Services that Redefine Excellence</h1>
      <div
        data-aos="fade-in"
        className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 w-[100%] p-6 gap-[4rem] mt-[1rem] mb-[1rem]"
      >
        <div className="text-left">
          <div data-aos="fade-up" className="justify-center items-center flex">
            <FaPaintBrush
              size={30}
              className="hover:text-[#228b22] hover-scale transition-all duration-200m-[5px]"
            />
          </div>
          <h1
            data-aos="fade-up"
            className="text-[30px] text-center hover:text-[#228b22] hover-scale transition-all duration-200  justify-center items-center flex"
          >
            Web Design
          </h1>
          <br />
          <div data-aos="fade-up">
            <h3 className="text-[1rem] ">User Interface (UI) Design</h3>
            <h4 className="text-left">
              ROOTS excels in crafting visually stunning websites. Our UI design
              focuses on layout, colors, typography, and overall aesthetics,
              ensuring a captivating user experience.
            </h4>

            <br />
            <h3 className="text-[1rem] ">User Experience (UX) Design:</h3>
            <h4 className="text-left">
              We take pride in creating seamless and intuitive user journeys.
              Our UX design ensures visitors can navigate the site, finding
              information efficiently.
            </h4>
          </div>
        </div>

        <div data-aos="fade-up" className="">
          <div className="justify-center items-center flex">
            <FaDesktop
              size={30}
              className="hover:text-[#228b22] hover-scale transition-all duration-200m-[5px]"
            />
          </div>
          <h1 className="text-[30px] text-center hover:text-[#228b22] hover-scale transition-all duration-200  justify-center items-center flex">
            Development Expertise
          </h1>
          <br />
          <h3 className="text-[1rem] text-left ">
            Front-end and Back-end Development:
          </h3>
          <h4 className="text-left">
            Our skilled developers implement UI/UX designs using languages like
            HTML, CSS, and JavaScript. The result is a responsive website that
            adapts to various devices. Server-side operations, database, and
            application logic are meticulously managed using languages like
            python, Java, Node.js.
          </h4>
        </div>

        <div data-aos="fade-up" className="">
          <div className="justify-center items-center flex">
            <FaShoppingCart
              size={30}
              className="hover:text-[#228b22] hover-scale transition-all duration-200m-[5px]"
            />
          </div>
          <h1 className="text-[30px] text-center hover:text-[#228b22] hover-scale transition-all duration-200  ">
            E-commerce development
          </h1>
          <br />
          <h3 className="text-[1rem] ">Building Online Stores:</h3>
          <h4 className="text-left">
            ROOTS specializes in creating online stores with features like
            product listings, shopping carts, and secure payment gateways.
          </h4>
        </div>
        <div data-aos="fade-up" className="">
          <div className="justify-center items-center flex">
            <FaCode
              size={30}
              className="hover:text-[#228b22] hover-scale transition-all duration-200m-[5px]"
            />
          </div>
          <h1 className="text-[30px] text-center hover:text-[#228b22] hover-scale transition-all duration-200  ">
            Web Application and Development
          </h1>
          <br />
          <h3 className="text-[1rem] ">Dynamic and Interactive solutions:</h3>
          <h4 className="text-left">
            We create dynamic and interactive web applications tailored to
            specific business or user needs
          </h4>
        </div>

        <div data-aos="fade-up" className="">
          <div className="justify-center items-center flex">
            <FaUserEdit
              size={30}
              className="hover:text-[#228b22] hover-scale transition-all duration-200m-[5px]"
            />
          </div>
          <h1 className="text-[30px] text-center hover:text-[#228b22] hover-scale transition-all duration-200  ">
            Enterprise Development
          </h1>
          <br />
          <h4 className="text-left">
            ROOTS specializes in crafting enterprise-grade web solutions. Our
            team ensures that your business receives a tailored, scalable, and
            secure web platform to meet the demands of the modern digital
            landscape.
          </h4>
        </div>

        <div data-aos="fade-up" className="">
          <div className="justify-center items-center flex">
            <FaTools
              size={30}
              className="hover:text-[#228b22] hover-scale transition-all duration-200m-[5px]"
            />
          </div>
          <h1 className="text-[30px] text-center hover:text-[#228b22] hover-scale transition-all duration-200  ">
            Maintenance and Support
          </h1>
          <br />
          <h3 className="text-[1rem] ">Ensuring Smooth Functionality</h3>
          <h4 className="text-left">
            ROOTS provides regular update, bug fixes and ongoing support to
            ensure your website functions and stays secure.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Services;

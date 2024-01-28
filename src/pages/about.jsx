import React, { useEffect } from "react";
import abt from "../assets/images/about_us.jpg";
import aos from 'aos/dist/aos.js'; 
import Aos from 'aos';

const About = () => {
  useEffect(()=>{ 
    Aos.init({
      duration: 2000}); 
    }, []);
  return (
    <section data-aos="ease-in" className="mx-auto mt-[2rem] px-[1rem]" id="about">
      <h1 className="text-center text-[2rem]">About Us</h1>
      <div className="bg-[rgb(128,0,128)] w-[120px] h-[2px] mx-auto"></div>
      <div className="sm:flex-1 sm:text-center gap-5">
        <div data-aos="fade-up">
          <img src={abt}  className="w-[100%] mt-9" alt="about-us" />
        </div>
        <div data-aos="fade-up" className=" text-left text-[1rem] mt-9 ">
          Founded in 2023, ROOTS was born out of a shared vision among a group
          of seasoned tech enthusiasts who recognized the potential of
          technology to transform industries and improve lives. They envisioned
          a company that would serve as the bedrock for groundbreaking
          solutions, deeply rooted in innovation and creativity. ROOTS
          Technology Company stands out as a beacon of innovation and
          technological prowess in the competitive landscape of the tech
          industry. With a commitment to pushing boundaries and redefining
          possibilities, ROOTS has successfully carved a niche for itself as a
          forward-thinking and customer-centric organization. ROOTS is not just
          another tech company; it's a movement, a commitment to harness the
          power of technology to address real-world problems. The company is
          guided by a set of core values: Innovation, Collaboration,
          Sustainability, and Impact. These principles underpin every project,
          from ideation to execution.
        </div>
      </div>
    </section>
  );
};

export default About;

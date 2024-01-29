import React, { useEffect } from "react";
import abt from "../assets/images/about_us.jpg";


const About = () => {
 
  return (
    <section data-aos="ease-in" className="mx-auto mt-[2rem] px-[1rem]" id="about">
      <h1 className="text-center text-[2rem]">About Us</h1>
      <div className="bg-[rgb(128,0,128)] w-[120px] h-[2px] mx-auto"></div>
      <div className="p-7 gap-5">
        <div data-aos="fade-up">
          <img src={abt} className="w-[100%]" alt="about-us" />
        </div>
        <div data-aos="fade-up" className="relative text-left text-[1rem] mt-5 ">
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

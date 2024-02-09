import React from "react";
import abt from "../assets/images/about_us.png";

const About = () => {
  return (
    <section
      data-aos="ease-in"
      className="px-6 sm:px-10 md:px-16 pt-10 sm:pt-12 md:pt-20 dark:text-gray-100 dark:bg-slate-900"
      id="about"
    >
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl">
        About Us
      </h1>
      <div className="bg-[purple] w-20 h-px mx-auto my-1"></div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
        <div data-aos="slide-right" className="flex justify-center">
          <img
            src={abt}
            className="h-auto w-full sm:max-w-full md:max-w-full"
            alt="about-us"
          />
        </div>
        <div
          data-aos="slide-left"
          className="text-left text-sm sm:text-base md:text-lg leading-relaxed"
        >
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

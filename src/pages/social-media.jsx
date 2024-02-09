import React from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <section className=" p-[5%] dark:text-gray-100 dark:bg-slate-900" id="social-media">
      <h2 className="text-center text-[2rem]">Get In Touch</h2>
      <div className="w-[140px] h-[2px] bg-[purple] mx-auto mt-[.3rem]"></div>

      <p className="" data-aos="fade-left">
        We’d love to hear about what you’re working on and how we could help.
        We’re currently looking and are open to a wide range of opportunities.
        We’re a hard-working and positive company that will always approach
        every task with a sense of purpose and attention to detail. Please do
        feel free to check out our online profiles below and get in touch using
        the form.
      </p>

      <div
        className="flex gap-[1rem] py-[2rem] justify-center"
        data-aos="fade-left"
      >
        <a
          href="https://github.com/R-O-O-T-S"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub size={30} className="text-[#228b22]" />
        </a>
        <a
          href="https://x.com/rootsinc2023?" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiX size={30} className="text-[#228b22]" />
        </a>
        <a
          href="https://www.linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin size={30} className="text-[#228b22]" />
        </a>
        <a
          href="https://www.instagram.com/rootsinc.2023/?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiInstagram size={30} className="text-[#228b22]" />
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;

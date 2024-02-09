import React, { useState } from "react";
import rootsLogo from "../assets/images/roots-logo.png";
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <section className=" bg-[#33323d] text-white p-[5%] dark:text-gray-100 dark:bg-slate-900">
      <div
        className="sm:flex sm:items-center sm:justify-around"
        data-aos="fade-left"
      >
        <img src={rootsLogo} alt="" width={130} className="mx-auto sm:mx-0" />
        <p className="text-[.8rem] p-7 relative hidden">
          As R.O.O.T.S continues to grow, it remains dedicated to its mission of
          unearthing potential, solving problems, and leaving a lasting impact
          on the world through the power of technology. This startup is not just
          a company; it's a movement that aims to redefine the tech landscape
          and pave the way for a more innovative and sustainable future.
        </p>

        <nav className=" sm:flex text-center sm:items-center sm:mr-[auto] sm:gap-[1rem]">
          <Link to="home" smooth={true} duration={800}>
            <p
              onClick={() => handleLinkClick("home")}
              className={`cursor-pointer ${activeLink === "home" ? "active" : ""} transition-colors duration-300 hover:text-[#228b22]`}
            >
              Home
            </p>
          </Link>

          <Link to="about" smooth={true} duration={800}>
            <p
              onClick={() => handleLinkClick("about")}
              className={`cursor-pointer ${activeLink === "about" ? "active" : ""} transition-colors duration-300 hover:text-[#228b22]`}
            >
              About
            </p>
          </Link>

          <Link to="services" smooth={true} duration={800}>
            <p
              onClick={() => handleLinkClick("services")}
              className={`cursor-pointer ${activeLink === "services" ? "active" : ""} transition-colors duration-300 hover:text-[#228b22]`}
            >
              Services
            </p>
          </Link>

          <Link to="team" smooth={true} duration={800}>
            <p
              onClick={() => handleLinkClick("team")}
              className={`cursor-pointer ${activeLink === "team" ? "active" : ""} transition-colors duration-300 hover:text-[#228b22]`}
            >
              Team
            </p>
          </Link>

          <Link to="social-media" smooth={true} duration={800}>
            <p
              onClick={() => handleLinkClick("social media")}
              className={`cursor-pointer ${activeLink === "social-media" ? "active" : ""} transition-colors duration-300 hover:text-[#228b22]`}
            >
              Social Media
            </p>
          </Link>

          <Link to="contact" smooth={true} duration={800}>
            <p
              onClick={() => handleLinkClick("contact")}
              className={`cursor-pointer ${activeLink === "contact" ? "active" : ""} transition-colors duration-300 hover:text-[#228b22]`}
            >
              Contact
            </p>
          </Link>
        </nav>
      </div>
      <div
        className="flex gap-[1rem] py-[2rem] justify-center"
        data-aos="fade-left"
      >
        <a
          href="https://github.com/Rootsinc23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} className="text-[#228b22]" />
        </a>
        <a
          href="https://twitter.com/rootsinc2023"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} className="text-[#228b22]" />
        </a>
        <a
          href="https://www.linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} className="text-[#228b22]" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61553877355125&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} className="text-[#228b22]" />
        </a>
      </div>

      <p className="text-center pb-[2rem]">Designed By R.O.O.T.S</p>
    </section>
  );
};

export default Footer;

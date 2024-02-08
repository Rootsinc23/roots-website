import React, { useEffect } from "react";
import rootsLogo from "../assets/images/roots-logo.png";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { FaMoon, FaSun, FaDesktop } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("prefers-color-scheme: dark");
  console.log(darkQuery, "darkQuery");
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  /* DARK-MODE SWITCH */
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("themes" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="relative flex justify-between dark:text-gray-100 dark:bg-slate-900 items-center px-[.3rem] md:px-[1rem]">
      <img src={rootsLogo} alt="" width={150} />

      <nav
        className={
          showMenu
            ? "flex-col absolute right-[1.5rem] top-[6.5rem] bg-[#33323d] text-center text-white w-[355px] h-[410px] py-[2.4rem] gap-[1.1rem] uppercase text-[.9rem] font-[100] z-40 transition-all duration-500 ease-in-out"
            : "md:flex md:items-center gap-[1rem] uppercase text-[.8rem] hidden z-30"
        }
        style={{ 
          display: showMenu && "flex",
          transform: showMenu ? "translateX(0)" : "translateY(100%)", 
        }}
      >
        <Link to="home" smooth={true} duration={800}>
          <p
            onClick={() => handleLinkClick("home")}
            className={activeLink === "home" ? "active" : ""}
          >
            Home
          </p>
        </Link>

        <Link to="about" smooth={true} duration={800}>
          <p
            onClick={() => handleLinkClick("about")}
            className={`cursor-pointer ${activeLink === "about" ? "active" : ""} transition-all duration-300 hover:text-[#228b22]`}
          >
            About
          </p>
        </Link>

        <Link to="services" smooth={true} duration={800}>
          <p
            onClick={() => handleLinkClick("services")}
            className={`cursor-pointer ${activeLink === "services" ? "active" : ""} transition-all duration-300 hover:text-[#228b22]`}
          >
            Services
          </p>
        </Link>

        <Link to="team" smooth={true} duration={800}>
          <p
            onClick={() => handleLinkClick("team")}
            className={activeLink === "team" ? "active" : ""}
          >
            Team
          </p>
        </Link>

        <Link to="social-media" smooth={true} duration={800}>
          <p
            onClick={() => handleLinkClick("social media")}
            className={`cursor-pointer ${activeLink === "social-media" ? "active" : ""} transition-all duration-300 hover:text-[#228b22]`}
          >
            Social Media
          </p>
        </Link>

        <Link to="contact" smooth={true} duration={800}>
          <p
            onClick={() => handleLinkClick("contact")}
            className={`cursor-pointer ${activeLink === "contact" ? "active" : ""} transition-all duration-300 hover:text-[#228b22]`}
          >
            Contact
          </p>
        </Link>

        <div>
          {options?.map((opt) => (
            <button
              key={opt}
              onClick={() => setTheme(opt.text)}
              className={`w-7 h-7 duration-200 transition-all ${theme === opt.text && "text-sky-600"}`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div>
      </nav>

      {!showMenu ? (
        <AiOutlineMenu
          size={30}
          className="md:hidden transition-all duration-300 hover:text-green-600"
          onClick={handleShowMenu}
        />
      ) : (
        <AiOutlineClose
          size={30}
          className="md:hidden transition-all duration-300 hover:text-green-600"
          onClick={handleCloseMenu}
        />
      )}
    </header>
  );
};

export default Navbar;

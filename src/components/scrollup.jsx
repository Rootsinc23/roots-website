import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Scrollup = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 100px
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-4 right-4">
      {isVisible &&
      <button
        onClick={scrollToTop}
        className="text-white dark:text-white hover-scale ease-in-out transition-all duration-300 hover:pb-1 justify-center bg-green-600 rounded-5 h-10 w-10"
      >
        <FaArrowUp size={20} className="mx-auto" />
      </button>
      }
    </div>
  );
};

export default Scrollup;

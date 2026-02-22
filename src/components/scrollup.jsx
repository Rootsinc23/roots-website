import { useEffect, useState } from "react";
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
    <div className="fixed bottom-3 right-3 z-40 sm:bottom-4 sm:right-4">
      {isVisible &&
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-300/25 bg-emerald-500/90 text-white shadow-[0_10px_22px_rgba(16,185,129,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 dark:border-emerald-300/20 sm:h-10 sm:w-10"
      >
        <FaArrowUp size={16} className="mx-auto sm:text-[18px]" />
      </button>
      }
    </div>
  );
};

export default Scrollup;

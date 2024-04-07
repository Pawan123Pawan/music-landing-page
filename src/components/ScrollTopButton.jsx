import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 900) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed p-2 hover:opacity-80 transition-all delay-100 rounded-full bg-indigo-700 text-3xl shadow-md text-white  z-50 bottom-2 right-2 hover:dshadow-lg shadow-indigo-500/50 ${
        isVisible ? "block animate-bounce" : "hidden"
      }`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;

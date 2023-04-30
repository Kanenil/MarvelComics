import { useState, useEffect } from "react";
import ArrowUpIcon from "../elements/Icons/ArrowUpIcon";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        className={`fixed bottom-4 right-4 p-4 rounded-full bg-gradient-to-r from-red-500 to-pink-600 transition-opacity ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleOnClick}
      >
        <ArrowUpIcon className="w-6 h-6 text-white" />
      </button>
    </>
  );
}

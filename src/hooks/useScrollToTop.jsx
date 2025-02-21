import { ArrowUp } from "@/assets/icons";
import { useState, useEffect } from "react";

const useScrollToTop = (threshold = 40) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;

      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;

      setIsVisible(scrollPercentage > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ScrollButton = () =>
    isVisible && (
      <button
        onClick={scrollToTop}
        className="bg-primary-900 hover:bg-primary-700 fixed right-6 bottom-6 cursor-pointer rounded-full p-4 opacity-100 transition-opacity duration-300"
      >
        <ArrowUp />
      </button>
    );

  return ScrollButton;
};

export default useScrollToTop;

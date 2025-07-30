import React, { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollButtons() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight;

    setShowUp(scrollTop > 50);
    setShowDown(scrollTop + windowHeight < docHeight - 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed top-16 right-4 z-50 flex flex-col gap-2">
      {showUp && (
        <button
          onClick={scrollUp}
          className="bg-black bg-opacity-60 text-white rounded-full w-12 h-14 flex items-center justify-center border border-white/30 hover:bg-white hover:text-black transition"
        >
          <ArrowUp size={24} />
        </button>
      )}
      {showDown && (
        <button
          onClick={scrollDown}
          className="bg-black bg-opacity-60 text-white rounded-full w-12 h-14 flex items-center justify-center border border-white/30 hover:bg-white hover:text-black transition"
        >
          <ArrowDown size={24} />
        </button>
      )}
    </div>
  );
}
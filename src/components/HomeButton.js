import React from "react";

export default function HomeButton() {
  const playSound = () => {
    const audio = new Audio("/click.mp3");
    audio.play().catch((err) => console.error("Audio play failed:", err));
  };

  const handleMouseDown = (e) => {
    if (e.button === 0) playSound(); // left-click only
  };

  const handleTouchStart = () => {
    playSound(); // tap on mobile
  };

  return (
    <a
      href="#landing"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className="fixed top-2 left-20 z-50 flex items-center justify-center w-14 h-10 text-[#d4af37] bg-[#1e1e1e] border border-[#444] font-mono text-base rounded-lg shadow-[0_6px_0_#3a3a3a] active:translate-y-1 active:shadow-none active:bg-[#d4af37] active:text-black transition-all"
      title="Go Home"
    >
      HM
    </a>
  );
}
import React from "react";

export default function ClickSoundButton() {
  const playSound = () => {
    const audio = new Audio("/click.mp3");
    audio.play().catch((err) =>
      console.error("Audio play failed:", err)
    );
  };

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      playSound(); // Left mouse click only
    }
  };

  const handleTouchStart = () => {
    playSound(); // Tap on touch devices
  };

//   return (
//     <button
//       onMouseDown={handleMouseDown}
//       onTouchStart={handleTouchStart}
//       className="text-green-400 border px-4 py-2 rounded hover:bg-green-700"
//     >
//       Click Me 🔊
//     </button>
//   );
}
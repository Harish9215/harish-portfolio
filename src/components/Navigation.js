import React from "react";
import { sections } from "../data/constants";

export default function Navigation() {
  return (
    <nav className="fixed top-1.7 right-20 z-50 flex items-center justify-center h-10 px-4 rounded-lg shadow-[0_6px_0_#3a3a3a] backdrop-blur-md bg-white/10 border border-white/10 text-sm font-medium text-gray-300 space-x-4">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="flex items-center gap-1 hover:text-[#d4af37] transition-colors"
        >
          <span className="text-lg">↗</span> {section.label.toLowerCase()}
        </a>
      ))}
    </nav>
  );
}
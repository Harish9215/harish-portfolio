import React from "react";
import { sections } from "../data/constants";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-12 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-[0_6px_0_#3a3a3a]">
      <div className="flex justify-end items-center h-full pr-20 space-x-4 text-sm font-medium text-gray-300">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex items-center gap-1 hover:text-[#d4af37] transition-colors"
          >
            <span className="text-lg">↗</span> {section.label.toLowerCase()}
          </a>
        ))}
      </div>
    </nav>
  );
}
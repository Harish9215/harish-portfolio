import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { iconBtnStyle } from "../data/constants";

export default function IconButtons() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      {/* <button className="px-5 py-2 bg-[#d4af37] text-black font-semibold rounded-md shadow-[0_6px_0_#3a3a3a] hover:bg-[#c49e2f] active:translate-y-1 active:shadow-none">
        Learn more
      </button> */}
     
      <a
  href="/Harish.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-2 border border-white text-white font-semibold rounded-md shadow-[0_6px_0_#3a3a3a] 
  hover:bg-white hover:text-black active:translate-y-1 active:shadow-none">
  Résumé
</a>
      <a href="https://github.com/Harish9215" target="_blank" rel="noopener noreferrer"
       className={iconBtnStyle}>
        <Github className="w-5 h-5" />
      </a>
      
      <a href="https://www.linkedin.com/in/harish-mohan-18b287186/" target="_blank" 
      rel="noopener noreferrer" className={iconBtnStyle}>
        <Linkedin className="w-5 h-5" />
      </a>

      <a href="mailto:harishmohan1598@gmail.com" target="_blank" rel="noopener noreferrer" 
      className={iconBtnStyle}>
        <Mail className="w-5 h-5" />
        </a>

    </div>
  );
}
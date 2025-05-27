import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="snap-start min-h-screen bg-black text-white p-10 md:p-20 flex items-center justify-center">
      <div className="max-w-xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#d4af37]">Get in Touch</h2>
        <p className="text-xl text-gray-300 mb-8">
          Have a project in mind, a question, or just want to connect? Feel free to reach out!
        </p>
        <a 
          href="mailto:harishmohan1598@gmail.com" 
          className="px-8 py-3 bg-[#d4af37] text-black font-semibold rounded-md shadow-[0_6px_0_#3a3a3a] hover:bg-[#c49e2f] active:translate-y-1 active:shadow-none transition-all"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
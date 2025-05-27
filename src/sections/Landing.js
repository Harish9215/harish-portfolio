import React, { useEffect, useState } from "react";
import IconButtons from "../components/IconButtons";

export default function Landing() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm Harish Mohan.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="landing"
      className="snap-start min-h-screen flex flex-col justify-center items-center bg-black text-white p-8 text-left"
    >
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          {typedText}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
          I'm a Data Scientist and Solution Architect with a passion for building smart, scalable systems.
          My work blends automation, machine learning, and full-stack engineering to deliver tools that matter.
        </p>
        <p className="text-lg text-gray-400 mt-4">
          From AI-based document processing to GPT-driven assistants, I explore how technology can create meaningful change.
          Outside of work, I enjoy learning new tech, experimenting with ideas, and helping others solve hard problems.
        </p>
        <IconButtons />
      </div>
    </section>
  );
}
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="snap-start min-h-screen bg-black text-white flex justify-center items-start py-20 font-sans fade-slide"
    >
      <div className="max-w-5xl w-full mx-auto mt-40 px-6 space-y-10">
        <h1 className="text-4xl md:text-5xl font-light text-gray-100 leading-tight">
          I believe in building intelligent, user driven solutions, where each product is thoughtfully engineered to solve complex problems, automate workflows, and enhance decision-making through AI.
        </h1>
        <p className="text-sm uppercase tracking-wide text-gray-400">This is me.</p>
        <hr className="border-gray-600" />
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-white">Hi, I'm Harish Mohan.</h2>
          </div>
          <div className="space-y-4 text-gray-300 text-base leading-relaxed">
            <p>
              I’m a Data Scientist and Solution Architect with a Master’s in Data Science and 3+ years of experience working across finance and tech sectors. My expertise lies in building scalable AI solutions, NLP pipelines, and automation tools that transform raw data into real business impact.
            </p>
            <p>
              From deploying OCR-powered PDF extractors to crafting intelligent assistants and streamlining backend systems, I focus on performance, usability, and adaptability. I’ve led cross-functional teams, collaborated with enterprise clients, and developed tools used by thousands.
            </p>
            <p>
              I strive to make every interaction meaningful whether it’s for users or stakeholders by blending analytical rigor with human-centric design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
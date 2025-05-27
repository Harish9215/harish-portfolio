import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="snap-start min-h-screen bg-black text-white p-10 md:p-20">
      <h2 className="text-3xl font-bold mb-6 text-left text-[#d4af37]">Projects</h2>
      <div className="px-6 py-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
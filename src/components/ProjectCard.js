import React from "react";

export default function ProjectCard({ project }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-4">
        <div>
          <span className="text-[#d4af37] font-mono text-sm">_{project.id}</span>
          <h3 className="text-2xl font-bold group-hover:text-[#d4af37] transition-colors">{project.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-gray-400 mt-2 md:mt-0">
          {project.stack.map((tech, index) => (
            <span key={index}>• {tech}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
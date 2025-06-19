import React from "react";
import { Link } from "react-router-dom";
import data from "../assets/data";

const projects = data.projects;

const Projects = () => (
<section className="py-16 bg-gray-100 px-4 sm:px-8">
  <h2 className="text-4xl font-bold text-center text-black mb-16">Projects</h2>
    
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-7xl mx-auto">
  {projects.map((project, index) => (
        <div
          key={index}
          className="w-full bg-black rounded-2xl overflow-hidden shadow-lg p-6"
          >
          {/* Image block */}
          {project.image && (
            <div className="w-full aspect-square overflow-hidden rounded-xl mb-5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
          </div>
          
          )}

          {/* Title */}
          <h3 className="text-2xl text-white font-semibold text-center mb-4">
            {project.title}
          </h3>

          {/* Description */}
          {project.description && (
            <p className="text-white text-center mb-6">{project.description}</p>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm font-medium rounded-full border-2 border-cyan-200 text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}


          {/* Button */}
          <div className="text-center">
            {project.link ? (
              project.link.startsWith("http") ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white transition"
                >
                  {project.buttonLabel || "View Project"}
                </a>
              ) : (
                <Link
                  to={project.link}
                  className="inline-block px-6 py-3 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white transition"
                >
                  {project.buttonLabel || "View Project"}
                </Link>
              )
            ) : (
              <button
                disabled
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold text-lg rounded-lg opacity-70 cursor-not-allowed"
              >
                {project.buttonLabel || "Coming Soon"}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

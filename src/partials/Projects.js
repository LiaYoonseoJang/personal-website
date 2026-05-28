import React from "react";
import data from "../assets/data";

const projects = data.projects;

const Projects = () => (
  <section className="py-20 px-4 sm:px-8 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Projects</h2>
      <div className="w-12 h-1 bg-indigo-500 mx-auto mt-3 rounded-full mb-12"></div>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row"
          >
            {project.image && (
              <div className="md:w-64 flex-shrink-0 bg-gray-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
            )}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wider mb-1">
                  {project.problem}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags && project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    {project.buttonLabel || "View Project"} →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

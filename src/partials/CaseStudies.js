import React from "react";
import { Link } from "react-router-dom";

const CaseStudies = ({ case_studies }) => (
  <section className="py-20 px-4 sm:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Case Studies</h2>
      <div className="w-12 h-1 bg-indigo-500 mx-auto mt-3 rounded-full mb-4"></div>
      <p className="text-center text-gray-500 text-sm mb-12">
        Product thinking applied to real-world challenges
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {case_studies.map((cs, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="h-44 overflow-hidden bg-gray-50 flex items-center justify-center">
              <img
                src={cs.image}
                alt={cs.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wider mb-1">
                {cs.subtitle}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{cs.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">{cs.description}</p>
              <div className="mt-5">
                {cs.link ? (
                  cs.link.startsWith("http") ? (
                    <a
                      href={cs.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      {cs.buttonLabel || "View Case Study"} →
                    </a>
                  ) : (
                    <Link
                      to={cs.link}
                      className="inline-block px-5 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      {cs.buttonLabel || "View Case Study"} →
                    </Link>
                  )
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;

import React from "react";

function About({ title, description }) {
  return (
    <div className="max-w-3xl mx-auto mt-20 px-4">
      <p className="text-3xl md:text-4xl font-bold text-center text-gray-900">{title}</p>
      <div className="w-12 h-1 bg-indigo-500 mx-auto mt-3 rounded-full"></div>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-6 text-center">
        {description}
      </p>
    </div>
  );
}

export default About;

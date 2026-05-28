import React from "react";

function Skills({ skills }) {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-4">
      <p className="text-3xl md:text-4xl font-bold text-center text-gray-900">Core Competencies</p>
      <div className="w-12 h-1 bg-indigo-500 mx-auto mt-3 rounded-full mb-10"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-2xl mb-3">{skill.icon}</div>
            <p className="text-base font-semibold text-gray-900">{skill.skillName}</p>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">{skill.skillDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

// src/partials/MininiProject.js
import React from "react";

const MininiProject = () => (
  <div className="min-h-screen bg-white py-10">
    <div className="max-w-3xl mx-auto p-10 bg-gray-900 rounded-2xl shadow-xl text-white">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-white">Minini MBTI Test</h1>
      <p className="text-base mb-6 text-white text-center">
        A playful personality quiz built using HTML, CSS, and JavaScript,
        featuring Minini characters and dynamic result logic.
      </p>

      <ul className="mb-6 list-disc ml-6 text-white">
        <li>Built with vanilla HTML/CSS/JS</li>
        <li>Custom result mapping based on 4-letter quiz code</li>
        <li>Responsive design for mobile and desktop</li>
      </ul>

      <img
        src="/images/minini.jpg"
        alt="Minini project screenshot"
        className="w-full max-w-md mx-auto rounded-lg shadow mb-6"
      />

      <div className="flex justify-center gap-4">
        <a
          href="https://mbti-test.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Try the Live Demo
        </a>
        <a
          href="https://github.com/LiaYoonseoJang/mbti_test"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          View on GitHub
        </a>
      </div>
    </div>
  </div>
);

export default MininiProject;

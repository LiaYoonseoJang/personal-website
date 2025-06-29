// src/partials/CaseStudies.js
import React from "react";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudies = ({ case_studies }) => {
  if (!case_studies || case_studies.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No case studies yet.</p>;
  }

  return (
    <div className="mt-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-black">Case Studies</h2>
      <div className="flex flex-wrap justify-center">
        {case_studies.map((study, index) => (
          <CaseStudyCard key={index} case_study={study} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;



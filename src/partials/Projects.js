import React from "react";
import CaseStudyCard from "./CaseStudyCard"; // check your path!

const Projects = ({ case_studies }) => {
  console.log("case_studies in Projects.jsx:", case_studies); // For debug!
  return (
    <div>
      <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">My Projects</h1>
      <div className="flex flex-wrap justify-center">
        {(case_studies || []).map((case_study) => (
          <CaseStudyCard key={case_study.title} case_study={case_study} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

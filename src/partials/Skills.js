import React from "react";
import SkillCard from "./SkillCard";

function Skills({ skills }) {
  return (
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
      {skills.map((skill, index) => (
        <SkillCard
          key={index} // Use skill.skillName if it's unique
          skillName={skill.skillName}
          skillIcon={skill.skillIcon}
        />
      ))}
    </div>
  );
}

export default Skills;

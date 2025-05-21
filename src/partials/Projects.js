import React from "react";
import Projects from "./Projects";

const case_studies = [
  {
    title: "Minini MBTI Test",
    description: "A personality quiz built with HTML/CSS/JS featuring Minini characters and result logic.",
    link: "https://mbti-test.vercel.app",
    image: "minini.png"
  }
];

const MainHome = () => {
  return (
    <div>
      {/* Other sections like Hero/About/etc */}
      <Projects case_studies={case_studies} />
    </div>
  );
};

export default MainHome;

import React from "react";
import About from "./About";
import Card from "./Card";
import Footer from "./Footer";
import Projects from "./Projects";
import CaseStudies from "./CaseStudies";
import Skills from "./Skills";
import data from "../assets/data";

const MainHome = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Hero */}
    <div className="py-16 px-4 bg-white border-b border-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card
          name={data.name}
          title={data.title}
          subtitle={data.subtitle}
          social={data.social}
        />
      </div>
    </div>

    {/* Main content */}
    <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
      <div className="py-4 bg-gray-50">
        <About title={data.about.title} description={data.about.description} />
      </div>

      <div className="py-4 bg-white">
        <Skills skills={data.skills} />
      </div>

      <Projects projects={data.projects} />

      <div className="bg-white">
        <CaseStudies case_studies={data.case_studies} />
      </div>

      <Footer github={data.social.github} />
    </div>
  </div>
);

export default MainHome;

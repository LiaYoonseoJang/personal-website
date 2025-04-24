// src/partials/MainHome.js
import React from "react";
import About from "./About";
import Card from "./Card";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import data from "../assets/data";

const MainHome = () => (
  <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
    <div data-aos="fade-down" data-aos-duration="800">
      <Card name={data.name} title={data.title} social={data.social} />
    </div>
    <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
      <About title={data.about.title} description={data.about.description} />
      <Skills skills={data.skills} />
      <Projects case_studies={data.case_studies} />
      <Footer github={data.social.github} />
    </div>
  </div>
);

export default MainHome;

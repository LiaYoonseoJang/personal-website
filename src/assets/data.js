import React from "react";
import {   FaTasks, FaChartBar, FaCode, FaReact, FaPython, FaDatabase, FaPalette, FaUsers } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Lia Jang",
  title: "Problem Solver at the Intersection of Technology, Business, and Design",
  social: {
    LinkedIn: "https://www.linkedin.com/in/lia-yoonseo-jang-/",
    email: "lia010911@gmail.com",
  },
  about: {
    title: "My Background",
    description:
      "Hi, I'm Lia Yoonseo Jang, an undergraduate at New York University studying Computer Science and Economics. My interests span product management, business analytics, and software engineering, driven by a passion for building solutions at the intersection of technology and real-world needs. Through academic projects and hands-on experience in AR/VR, AI, and consulting, I've developed strong skills in data analysis, problem-solving, and cross-functional teamwork. I'm eager to contribute to innovative teams where I can learn, grow, and help create meaningful impact.",
  },
  
  skills: [
    {
      skillName: "Product Management",
      skillIcon: <FaTasks className={BOOTSTRAP_FOR_SKILL_ICON} />, // (You'll need to import FaTasks from react-icons/fa)
    },
    {
      skillName: "Business Analytics",
      skillIcon: <FaChartBar className={BOOTSTRAP_FOR_SKILL_ICON} />, // import FaChartBar
    },
    {
      skillName: "Frontend Development",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Python",
      skillIcon: <FaPython className={BOOTSTRAP_FOR_SKILL_ICON} />, // import FaPython
    },
    {
      skillName: "SQL",
      skillIcon: <FaDatabase className={BOOTSTRAP_FOR_SKILL_ICON} />, // import FaDatabase
    },
    {
      skillName: "Design / UX",
      skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Team Collaboration",
      skillIcon: <FaUsers className={BOOTSTRAP_FOR_SKILL_ICON} />, // import FaUsers
    },
  ],
  
  projects: [
    {
      title: "React tailwind portfolio",
      description: "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: [
        "template",
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentw/react-tailwind-portfolio"
    },
    {
      title: "My personal website",
      description: "⚡ My portfolio built with NextJS and TailwindCSS.",
      tags: [
        "website",
        "portfolio",
        "nextjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentW/braydentw"
    }
  ]
};
export default data;

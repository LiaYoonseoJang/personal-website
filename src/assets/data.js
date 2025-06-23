import React from "react";
import {   FaTasks, FaChartBar, FaCode, FaReact, FaPython, FaDatabase, FaPalette, FaUsers } from "react-icons/fa";
import netflixImg from '../images/netflix.jpg';
import paypalImg from '../images/paypal.jpg';
import spotifyImg from '../images/spotify.png';
import mininiImg from '../images/minini.jpg';
import econobotImg from '../images/econobot.png';


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
  
  case_studies: [
    {
      title: "Netflix",
      description: "Enhanced Personalized Recommendations to boost Netflix's user engagement and retention.",
      image: netflixImg, // Place this image in your public/ folder
      link: "/netflix-case-study", // Or use an external URL if you have one
      buttonLabel: "View Case Study"
    },
    {
      title: "PayPal",
      description: "", // You can add a teaser or leave it blank for 'Coming Soon'
      image: paypalImg, // Place this image in your public/ folder
      link: null, // No link yet
      buttonLabel: "Coming Soon"
    },
    {
      title: "Instagram",
      description: "", // You can add a teaser or leave it blank for 'Coming Soon'
      image: spotifyImg, // Place this image in your public/ folder
      link: null, // No link yet
      buttonLabel: "Coming Soon"
    }
  ],

  projects: [
    {
      title: "Minini MBTI Test",
      description: "A personality quiz built with HTML/CSS/JS featuring Minini characters and result logic.",
      link: "https://mbti-test-ashen.vercel.app/",
      image: mininiImg,
      tags: ["HTML", "CSS", "JavaScript"],
      buttonLabel: "Try Minini MBTI Test"
    },
    {
      title: "EconoBot",
      description: "An AI-powered Streamlit chatbot that summarizes economic news articles in plain English. Just paste a URL to get key takeaways.",
      link: "https://econobot-news-summarizer-3cygyveivxsjkfgz8smql2.streamlit.app/", // Use your actual deployed link
      image: econobotImg, // Or import like you did for others
      tags: ["Streamlit", "Python", "OpenAI", "NLP"],
      buttonLabel: "Try EconoBot"
    }
    
  ]
};
export default data;

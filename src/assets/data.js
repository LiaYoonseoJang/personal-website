import React from "react";
import netflixImg from '../images/netflix.jpg';
import instaImg from '../images/instagram.png';
import mininiImg from '../images/minini.jpg';
import econobotImg from '../images/econobot.png';

const data = {
  name: "Lia Jang",
  title: "Aspiring Product Manager",
  subtitle: "Incoming Associate Consultant @ Capgemini Invent",
  social: {
    LinkedIn: "https://www.linkedin.com/in/lia-yoonseo-jang-/",
    email: "lia010911@gmail.com",
    github: "https://github.com/LiaYoonseoJang",
  },
  about: {
    title: "About Me",
    description:
      "I'm Lia Yoonseo Jang, a Computer Science & Economics graduate from NYU, joining Capgemini Invent as an Associate Consultant in August 2025. I'm drawn to product management because I believe the best products emerge at the intersection of user empathy, data-driven thinking, and technical feasibility — and I've spent the last few years building exactly that skill set. From designing an AR/VR experience that shipped to real users, to conducting user research on algorithm transparency for Gen Z, I care about understanding why people behave the way they do and translating those insights into products that genuinely improve their lives.",
  },

  skills: [
    {
      skillName: "Product Strategy",
      skillDesc: "Roadmapping, prioritization frameworks, OKRs",
      icon: "🗺️",
    },
    {
      skillName: "User Research",
      skillDesc: "Interviews, usability testing, synthesis",
      icon: "🔍",
    },
    {
      skillName: "Data Analysis",
      skillDesc: "SQL, Python, A/B testing, metrics design",
      icon: "📊",
    },
    {
      skillName: "Technical Depth",
      skillDesc: "React, APIs, system design fundamentals",
      icon: "⚙️",
    },
    {
      skillName: "Design Thinking",
      skillDesc: "Wireframing, prototyping, UX principles",
      icon: "✏️",
    },
    {
      skillName: "Stakeholder Mgmt",
      skillDesc: "Cross-functional alignment, consulting",
      icon: "🤝",
    },
  ],

  case_studies: [
    {
      title: "Netflix",
      subtitle: "Personalization & Retention",
      description:
        "How might Netflix reduce decision fatigue for returning users? Redesigned the recommendation engine UX, identified key drop-off points, and proposed a feature set targeting a 15% reduction in browse time.",
      image: netflixImg,
      link: "/netflix-case-study",
      buttonLabel: "View Case Study",
    },
    {
      title: "Instagram",
      subtitle: "Algorithm Transparency",
      description:
        "A case study exploring how Instagram can rebuild trust with Gen Z through algorithm transparency, creator tools, and feed personalization — grounded in user research and behavioral data.",
      image: instaImg,
      link: "/instagram-case-study",
      buttonLabel: "View Case Study",
    },
  ],

  projects: [
    {
      title: "Minini MBTI Test",
      problem: "How do you make a brand campaign feel personal?",
      description:
        "Designed and built a personality quiz for Gongcha's Minini character campaign, targeting Gen Z users. Scoped the product solo, shipped in 2 weeks, and drove brand engagement through shareable results.",
      link: "https://mbti-test-ashen.vercel.app/",
      image: mininiImg,
      tags: ["HTML", "CSS", "JavaScript"],
      buttonLabel: "Try It Live",
    },
    {
      title: "EconoBot",
      problem: "How do you make economic news accessible to everyone?",
      description:
        "Built an AI-powered Streamlit chatbot that summarizes economic news articles in plain English. Identified the user need, scoped the MVP, and shipped end-to-end using OpenAI and NLP pipelines.",
      link: "https://econobot-news-summarizer-3cygyveivxsjkfgz8smql2.streamlit.app/",
      image: econobotImg,
      tags: ["Python", "OpenAI", "NLP", "Streamlit"],
      buttonLabel: "Try It Live",
    },
  ],
};
export default data;

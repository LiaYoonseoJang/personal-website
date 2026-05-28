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
      "I'm Lia Yoonseo Jang, a Computer Science & Economics graduate from NYU, joining Capgemini Invent as an Associate Consultant in August 2026. I'm drawn to product management because I believe the best products emerge at the intersection of user empathy, data-driven thinking, and technical feasibility — and I've spent the last few years building exactly that skill set. From designing an AR/VR experience that shipped to real users, to conducting user research on algorithm transparency for Gen Z, I care about understanding why people behave the way they do and translating those insights into products that genuinely improve their lives.",
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
      skillName: "Stakeholder Management",
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

export const experience = [
  {
    company: "Capgemini Invent",
    role: "Associate Consultant",
    period: "Aug 2025 – Present",
    location: "New York, NY",
    type: "full-time",
    bullets: [
      "Incoming Associate Consultant — strategy & technology consulting",
    ],
    tags: ["Consulting", "Strategy"],
  },
  {
    company: "LG CNS",
    role: "Smart Logistics Product Analyst Intern",
    period: "Jun 2025 – Aug 2025",
    location: "Englewood Cliffs, NJ",
    type: "internship",
    bullets: [
      "Analyzed 100k+ shipment lanes with SQL & Python, boosting forecast accuracy by 15%",
      "Engineered automated KPI pipelines (PCU, OTD) across 7+ warehouses and 80+ carriers via Tableau",
      "Proposed shipment optimization framework aligned across ops and tech teams",
    ],
    tags: ["SQL", "Python", "Tableau", "Logistics"],
  },
  {
    company: "EarthMera",
    role: "Product & Data Analyst Intern",
    period: "Feb 2025 – May 2025",
    location: "Brooklyn, NY",
    type: "internship",
    bullets: [
      "Led A/B testing on onboarding flows → 18% increase in activation",
      "Ran funnel analysis on 150+ user sessions, uncovering 3 major drop-offs",
      "Built Tableau dashboards to monitor retention and conversion for leadership",
    ],
    tags: ["A/B Testing", "Product", "UX", "Tableau"],
  },
  {
    company: "Juliette",
    role: "Product Management Intern",
    period: "Feb 2024 – Jun 2024",
    location: "New York, NY",
    type: "internship",
    bullets: [
      "Launched AR/VR features with design & engineering teams, reducing support time by 25%",
      "Authored feature specs and user stories driving 5+ customer-facing UX features",
      "Won 2024 IndieBio Alumni Challenge 🏆",
    ],
    tags: ["AR/VR", "Agile", "UX", "PRDs"],
  },
  {
    company: "Mobyus",
    role: "Back-End Product Management Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Seoul, South Korea",
    type: "internship",
    bullets: [
      "Improved TAMS performance by 12.5% refining queueing logic with backend engineers",
    ],
    tags: ["Java", "C", "Backend", "AI Robotics"],
  },
  {
    company: "Scale AI",
    role: "AI Training Data Analyst",
    period: "Feb 2024 – May 2024",
    location: "San Francisco, CA",
    type: "internship",
    bullets: [
      "Improved LLM accuracy across Java, Python, and C; reduced AHT by 10%",
    ],
    tags: ["LLM", "Python", "AI"],
  },
  {
    company: "Kearney",
    role: "Consulting Research Assistant",
    period: "Jun 2023 – Aug 2023",
    location: "Seoul, South Korea",
    type: "internship",
    bullets: [
      "Researched global smart city initiatives (Helsinki, Singapore, NYC), identifying 10+ emerging technologies",
      "Applied regression analysis on 10+ datasets for AI-based traffic optimization — up to 15% efficiency gains",
    ],
    tags: ["Research", "Smart City", "Regression", "Consulting"],
  },
];

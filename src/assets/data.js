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

export const journalEntries = [
  {
    id: "coupang-01",
    app: "Coupang",
    date: "Jun 26, 2025",
    timeSpent: "40 min",
    title: "Home screen visual overload and unclear IA",
    insight: "Coupang's home screen is optimized for acquisition, not for the user who already converted.",
    observation:
      "The home screen shows a sticky top banner ('WOW! Get 22,000 KRW coupon instantly'), a rotating hero carousel also pushing the same coupon, a 2-row grid of 10 category shortcuts (Goldbox, Coupang Live, Rocket Fresh, R.LUX...), another inline coupon strip repeating the 22,000 KRW offer — and only then does a personalized product feed appear. The 22,000 KRW coupon appears three times before you see a single product.",
    userPerspective:
      "Two distinct user types land here. First, a new or non-subscribed user — Coupang is aggressively pushing them toward WOW membership. Second, an existing user trying to browse products — who has to scroll past all the acquisition noise to get there. The screen is built for the first group at the expense of the second. Also: category names like 'Goldbox' and 'Coupang Live' are Coupang-specific product names, not universal categories. A new user has no idea what they mean.",
    dataQuestions: {
      intro: "If I were the PM for this home screen, I'd want to know:",
      kpis: [
        "WOW membership conversion rate from each banner placement",
        "Scroll depth before first product tap",
        "CTR per category icon (which ones get ignored?)",
        "Drop-off rate on home screen for existing members",
      ],
      hypothesis:
        "Hypothesis: the triple-coupon placement increases WOW sign-ups but hurts session depth for existing users — they likely open fewer product pages per session compared to a cleaner layout.",
    },
    improvementIdea:
      "Personalize the home screen by membership status. For non-WOW users: keep the aggressive acquisition layout. For existing WOW members: replace the coupon banners with personalized recommendations or recently viewed items. Also simplify the category grid from 10 icons to 5–6, using universal labels instead of branded product names — and test whether new users can actually find what they're looking for.",
  },
  {
    id: "coupang-02",
    app: "Coupang",
    date: "Jun 27, 2025",
    timeSpent: "30 min",
    title: "The cart as a membership funnel - when persuasion becomes friction",
    insight: "Coupang uses the cart as a membership funnel — but there's a thin line between persuasion and friction.",
    observation:
      "The cart experience splits sharply by membership status. For non-WOW members: a progress bar shows you need 16,800 KRW more in Rocket Delivery items to place an order — a minimum purchase threshold. A countdown timer ('Discount ends in 15:40:43') creates urgency on a discounted item. When you try to check out anyway, a WOW membership popup appears mid-flow, listing benefits (free shipping on one item, next-day delivery, coupon discount) with a bold CTA: 'Pay for membership and buy now.' For WOW members: none of this exists — one item, any price, buy immediately.",
    userPerspective:
      "As a non-member trying to buy one item, the experience feels like an obstacle course. First the progress bar tells me I'm not spending enough. Then a timer tells me I'm running out of time. Then a popup intercepts my checkout to sell me a subscription. Each of these is individually justifiable — but stacked together, they feel pushy. Some users, seeing the popup repeatedly, might eventually convert to WOW. Others will feel manipulated and abandon the cart entirely. The question is which group is larger.",
    dataQuestions: {
      intro: "If I were the PM for this checkout flow, I'd want to know:",
      kpis: [
        "Cart abandonment rate (non-WOW vs. WOW members)",
        "WOW conversion rate from checkout popup",
        "% of users who click Receive Later",
        "Repeat exposure rate - how many times does a user see the popup before converting or churning?",
      ],
      hypothesis:
        "Hypothesis: the checkout popup converts a meaningful % of high-intent users to WOW membership precisely because they're mid-purchase — but it also raises cart abandonment for users who just want a single cheap item and feel the membership isn't worth it.",
    },
    improvementIdea:
      "Show the WOW popup earlier — on the product page, not at checkout. A user who's already decided to buy and is entering payment details is the worst moment to interrupt with a subscription pitch. How to measure: A/B test WOW popup placement (product page vs. checkout) against WOW conversion rate and cart abandonment rate simultaneously.",
  },
];


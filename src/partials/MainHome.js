import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Experience from "./Experience";
import data from "../assets/data";
import profileImg from "../images/profile.jpg";

const useTypingEffect = (words, typingSpeed = 80, deletingSpeed = 50, pauseTime = 1800) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIndex];
    let timeout;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), deletingSpeed);
    } else {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);
  return displayed;
};

const useFadeIn = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
};

const FadeSection = ({ children, style }) => {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} style={{
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: "opacity 0.6s ease, transform 0.6s ease",
    }}>
      {children}
    </div>
  );
};

const sectionAccents = {
  "why-pm":    { dot: "#6366f1", label: "Why PM" },
  "numbers":   { dot: "#f59e0b", label: "By the numbers" },
  "skills":    { dot: "#10b981", label: "Core competencies" },
  "experience":{ dot: "#3b82f6", label: "Experience" },
  "cases":     { dot: "#ef4444", label: "Case studies" },
  "projects":  { dot: "#8b5cf6", label: "Projects" },
};

const SectionLabel = ({ id }) => {
  const { dot, label } = sectionAccents[id] || { dot: "#999", label: id };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: dot, flexShrink: 0 }} />
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", margin: 0 }}>{label}</p>
    </div>
  );
};

const MainHome = () => {
  const { name, social, about, skills, projects, case_studies } = data;
  const typedText = useTypingEffect(["Product Manager", "Problem Solver", "Data-Driven Thinker", "Aspiring PM"]);

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#fafafa", minHeight: "100vh" }}>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        .hover-card { transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s !important; }
        .hover-card:hover { border-color: #ccc !important; box-shadow: 0 8px 32px rgba(0,0,0,0.08) !important; transform: translateY(-2px) !important; }
        .hover-btn:hover { background: #222 !important; }
        .hover-btn-outline:hover { background: #f5f5f5 !important; }
        .nav-link { transition: color 0.15s; }
        .nav-link:hover { color: #111 !important; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(250,250,250,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid #f0f0f0", padding: "0 24px", animation: "fadeDown 0.4s ease" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontWeight: 700, fontSize: 15, color: "#111", letterSpacing: "-0.3px" }}>Lia Jang</span>
          <div style={{ display: "flex", gap: 24 }}>
            {[["About", "#about"], ["Why PM", "#why-pm"], ["Experience", "#experience"], ["Skills", "#skills"], ["Case Studies", "#cases"], ["Projects", "#projects"]].map(([label, href]) => (
              <a key={href} href={href} className="nav-link" style={{ fontSize: 13, color: "#888", textDecoration: "none", fontWeight: 500 }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>

        {/* HERO */}
        <section id="about" style={{ padding: "80px 0 64px", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
            <div style={{ animation: "fadeDown 0.6s ease 0.1s both" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", animation: "blink 2s step-end infinite" }} />
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#999" }}>Capgemini Invent · Aug 2026</span>
              </div>
              <h1 style={{ fontSize: 44, fontWeight: 700, color: "#111", lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 10 }}>
                {name}
              </h1>
              <div style={{ fontSize: 22, fontWeight: 500, color: "#555", marginBottom: 24, minHeight: 34, letterSpacing: "-0.3px" }}>
                <span>{typedText}</span>
                <span style={{ display: "inline-block", width: 2, height: "1.1em", background: "#555", marginLeft: 3, verticalAlign: "middle", animation: "blink 1s step-end infinite" }} />
              </div>
              <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, maxWidth: 460, marginBottom: 28 }}>
                {about.description}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
                {[["📍", "New York → Seoul"], ["🎓", "NYU CS & Economics"]].map(([icon, text]) => (
                  <span key={text} style={{ fontSize: 12, color: "#666", background: "#f0f0f0", borderRadius: 20, padding: "5px 14px", fontWeight: 500 }}>
                    {icon} {text}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <a href={social.LinkedIn} target="_blank" rel="noopener noreferrer" className="hover-btn"
                  style={{ fontSize: 13, fontWeight: 600, padding: "10px 22px", background: "#111", color: "#fff", borderRadius: 10, textDecoration: "none", letterSpacing: "-0.2px", transition: "background 0.2s" }}>
                  LinkedIn →
                </a>
                <a href={`mailto:${social.email}`} className="hover-btn-outline"
                  style={{ fontSize: 13, fontWeight: 600, padding: "10px 22px", background: "#fff", color: "#111", border: "1px solid #e0e0e0", borderRadius: 10, textDecoration: "none", transition: "background 0.2s" }}>
                  Email
                </a>
                <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover-btn-outline"
                  style={{ fontSize: 13, fontWeight: 600, padding: "10px 22px", background: "#fff", color: "#111", border: "1px solid #e0e0e0", borderRadius: 10, textDecoration: "none", transition: "background 0.2s" }}>
                  GitHub
                </a>
              </div>
            </div>
            <div style={{ animation: "fadeDown 0.6s ease 0.2s both" }}>
              <div style={{ position: "relative" }}>
                <img src={profileImg} alt={name}
                  style={{ width: 112, height: 112, borderRadius: "50%", objectFit: "cover", objectPosition: "top", border: "3px solid #fff", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }} />
                <span style={{ position: "absolute", bottom: 4, right: 4, width: 14, height: 14, borderRadius: "50%", background: "#22c55e", border: "2px solid #fafafa" }} />
              </div>
            </div>
          </div>
        </section>

        {/* WHY PM */}
        <FadeSection style={{ padding: "56px 0", borderBottom: "1px solid #f0f0f0" }}>
          <section id="why-pm">
            <SectionLabel id="why-pm" />
            <div style={{ maxWidth: 620, borderLeft: "2px solid #e0e7ff", paddingLeft: 24 }}>
              {[
                `I've always been drawn to the space where computer science and economics meet — where technical systems create real-world behavior, and where data tells a human story. But what pushed me toward product management specifically was something simpler: I wanted to be the one asking "how can this be better?" rather than waiting for someone to hand me the answer.`,
                `The moment it clicked was at Juliette. I ran user interviews, identified friction points in the AR/VR experience, and proposed a feature based on what I'd heard. When I saw that feature ship in the actual product, something stuck. It wasn't just about building — it was about listening first, then building the right thing.`,
                `At EarthMera, that feeling deepened. Running A/B tests on onboarding flows and watching the data validate (or challenge) a hypothesis made me realize this was the kind of work I wanted to do every day: stay close to users, make decisions grounded in evidence, and own the outcome.`,
                `PM sits at the intersection of everything I care about — technical depth, user empathy, and the autonomy to drive something forward. That's not a role I fell into. It's one I've been building toward.`,
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 15, color: "#444", lineHeight: 1.8, marginBottom: i < 3 ? 16 : 0 }}>{p}</p>
              ))}
            </div>
          </section>
        </FadeSection>

        {/* BY THE NUMBERS */}
        <FadeSection style={{ padding: "56px 0", borderBottom: "1px solid #f0f0f0" }}>
          <SectionLabel id="numbers" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {[
              { number: "6+", label: "Internships & roles", sub: "Fortune 500s · startups · consulting", color: "#f59e0b" },
              { number: "18%", label: "Activation uplift", sub: "EarthMera A/B testing", color: "#10b981" },
              { number: "15%", label: "Forecast accuracy", sub: "LG CNS · 100k+ lanes", color: "#3b82f6" },
              { number: "2", label: "PM case studies", sub: "Netflix · Instagram", color: "#ef4444" },
            ].map(({ number, label, sub, color }) => (
              <div key={label} className="hover-card" style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: 14, padding: "20px 20px", borderTop: `3px solid ${color}` }}>
                <p style={{ fontSize: 30, fontWeight: 700, color: "#111", letterSpacing: "-1px", lineHeight: 1 }}>{number}</p>
                <p style={{ fontSize: 12, fontWeight: 600, color: "#333", marginTop: 8 }}>{label}</p>
                <p style={{ fontSize: 11, color: "#aaa", marginTop: 3 }}>{sub}</p>
              </div>
            ))}
          </div>
        </FadeSection>

        {/* SKILLS */}
        <FadeSection style={{ padding: "56px 0", borderBottom: "1px solid #f0f0f0" }}>
          <section id="skills">
            <SectionLabel id="skills" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {skills.map((skill) => (
                <div key={skill.skillName} className="hover-card" style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: 12, padding: "18px 20px" }}>
                  <div style={{ fontSize: 22, marginBottom: 10 }}>{skill.icon}</div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 4 }}>{skill.skillName}</p>
                  <p style={{ fontSize: 12, color: "#888", lineHeight: 1.5 }}>{skill.skillDesc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeSection>

        {/* EXPERIENCE */}
        <FadeSection>
          <Experience />
        </FadeSection>

        {/* CASE STUDIES */}
        <FadeSection style={{ padding: "56px 0", borderBottom: "1px solid #f0f0f0" }}>
          <section id="cases">
            <SectionLabel id="cases" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {case_studies.map((cs, i) => (
                <Link key={i} to={cs.link} className="hover-card"
                  style={{ textDecoration: "none", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 18, alignItems: "center", background: "#fff", border: "1px solid #f0f0f0", borderRadius: 14, padding: "20px 24px" }}>
                  <img src={cs.image} alt={cs.title} style={{ width: 46, height: 46, borderRadius: 10, objectFit: "cover", border: "1px solid #f0f0f0" }} />
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 4 }}>{cs.title} — {cs.subtitle}</p>
                    <p style={{ fontSize: 12, color: "#888", lineHeight: 1.5 }}>{cs.description.slice(0, 90)}...</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                    {i === 0 && <span style={{ fontSize: 11, fontWeight: 600, color: "#16a34a", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 20, padding: "3px 10px" }}>↓15% browse time</span>}
                    {i === 1 && <span style={{ fontSize: 11, fontWeight: 600, color: "#2563eb", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 20, padding: "3px 10px" }}>↑ creator trust</span>}
                    <span style={{ fontSize: 20, color: "#ddd", fontWeight: 300 }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </FadeSection>

        {/* PROJECTS */}
        <FadeSection style={{ padding: "56px 0", borderBottom: "1px solid #f0f0f0" }}>
          <section id="projects">
            <SectionLabel id="projects" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {projects.map((project, i) => (
                <div key={i} className="hover-card" style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: 14, overflow: "hidden" }}>
                  <img src={project.image} alt={project.title} style={{ width: "100%", height: 148, objectFit: "cover" }} />
                  <div style={{ padding: "16px 18px" }}>
                    <p style={{ fontSize: 11, color: "#aaa", marginBottom: 5, lineHeight: 1.4 }}>{project.problem}</p>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 6 }}>{project.title}</p>
                    <p style={{ fontSize: 12, color: "#666", lineHeight: 1.6, marginBottom: 12 }}>{project.description.slice(0, 100)}...</p>
                    <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 14 }}>
                      {project.tags.map(tag => (
                        <span key={tag} style={{ fontSize: 11, color: "#555", background: "#f5f5f5", borderRadius: 6, padding: "3px 8px" }}>{tag}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 12, fontWeight: 600, color: "#111", textDecoration: "none", borderBottom: "1px solid #111", paddingBottom: 1 }}>
                      {project.buttonLabel} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeSection>

      </div>

      <Footer />
    </div>
  );
};

export default MainHome;

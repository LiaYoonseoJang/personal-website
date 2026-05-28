import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Experience from "./Experience";
import data from "../assets/data";
import profileImg from "../images/profile.jpg";

const MainHome = () => {
  const { name, title, subtitle, social, about, skills, projects, case_studies } = data;

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#fafafa", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(250,250,250,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid #f0f0f0", padding: "0 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontWeight: 600, fontSize: 15, color: "#111", letterSpacing: "-0.3px" }}>Lia Jang</span>
          <div style={{ display: "flex", gap: 24 }}>
            {[["About", "#about"], ["Experience", "#experience"], ["Skills", "#skills"], ["Projects", "#projects"], ["Case Studies", "#cases"]].map(([label, href]) => (
              <a key={href} href={href} style={{ fontSize: 13, color: "#666", textDecoration: "none", fontWeight: 450 }}
                onMouseOver={e => e.target.style.color = "#111"}
                onMouseOut={e => e.target.style.color = "#666"}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>

        {/* HERO */}
        <section id="about" style={{ padding: "72px 0 56px", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999" }}>Product Manager</span>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#ddd" }}></span>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999" }}>Capgemini Invent · Aug 2025</span>
              </div>
              <h1 style={{ fontSize: 40, fontWeight: 700, color: "#111", lineHeight: 1.15, letterSpacing: "-1px", marginBottom: 16 }}>
                {name}
              </h1>
              <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, maxWidth: 480, marginBottom: 28 }}>
                {about.description}
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
                {[["📍", "New York → Seoul"], ["🎓", "NYU CS & Economics"]].map(([icon, text]) => (
                  <span key={text} style={{ fontSize: 12, color: "#666", background: "#f4f4f4", borderRadius: 20, padding: "5px 12px", fontWeight: 450 }}>
                    {icon} {text}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <a href={social.LinkedIn} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 13, fontWeight: 600, padding: "9px 20px", background: "#111", color: "#fff", borderRadius: 10, textDecoration: "none", letterSpacing: "-0.2px" }}>
                  LinkedIn →
                </a>
                <a href={`mailto:${social.email}`}
                  style={{ fontSize: 13, fontWeight: 600, padding: "9px 20px", background: "#fff", color: "#111", border: "1px solid #e8e8e8", borderRadius: 10, textDecoration: "none" }}>
                  Email
                </a>
                <a href={social.github} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 13, fontWeight: 600, padding: "9px 20px", background: "#fff", color: "#111", border: "1px solid #e8e8e8", borderRadius: 10, textDecoration: "none" }}>
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <img src={profileImg} alt={name}
                style={{ width: 108, height: 108, borderRadius: "50%", objectFit: "cover", objectPosition: "top", border: "3px solid #fff", boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }} />
            </div>
          </div>
        </section>

        {/* BY THE NUMBERS */}
        <section style={{ padding: "48px 0", borderBottom: "1px solid #f0f0f0" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 20 }}>By the numbers</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { number: "2", label: "PM case studies", sub: "Netflix · Instagram" },
              { number: "3+", label: "Shipped products", sub: "Web · AI · AR/VR" },
              { number: "300M+", label: "Users analyzed", sub: "Across case studies" },
            ].map(({ number, label, sub }) => (
              <div key={label} style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: 14, padding: "20px 22px" }}>
                <p style={{ fontSize: 28, fontWeight: 700, color: "#111", letterSpacing: "-1px", lineHeight: 1 }}>{number}</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#333", marginTop: 8 }}>{label}</p>
                <p style={{ fontSize: 12, color: "#999", marginTop: 2 }}>{sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ padding: "48px 0", borderBottom: "1px solid #f0f0f0" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 20 }}>Core competencies</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {skills.map((skill) => (
              <div key={skill.skillName} style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: 12, padding: "18px 20px", transition: "border-color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.borderColor = "#ccc"}
                onMouseOut={e => e.currentTarget.style.borderColor = "#f0f0f0"}>
                <div style={{ fontSize: 20, marginBottom: 10 }}>{skill.icon}</div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 4 }}>{skill.skillName}</p>
                <p style={{ fontSize: 12, color: "#888", lineHeight: 1.5 }}>{skill.skillDesc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <Experience />

        {/* CASE STUDIES */}
        <section id="cases" style={{ padding: "48px 0", borderBottom: "1px solid #f0f0f0" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 20 }}>Case studies</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {case_studies.map((cs, i) => (
              <Link key={i} to={cs.link}
                style={{ textDecoration: "none", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 18, alignItems: "center", background: "#fff", border: "1px solid #f0f0f0", borderRadius: 14, padding: "18px 22px", transition: "border-color 0.2s, box-shadow 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = "#ccc"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = "#f0f0f0"; e.currentTarget.style.boxShadow = "none"; }}>
                <img src={cs.image} alt={cs.title} style={{ width: 44, height: 44, borderRadius: 10, objectFit: "cover", border: "1px solid #f0f0f0" }} />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 3 }}>{cs.title} — {cs.subtitle}</p>
                  <p style={{ fontSize: 12, color: "#888", lineHeight: 1.5 }}>{cs.description.slice(0, 90)}...</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                  {i === 0 && <span style={{ fontSize: 11, fontWeight: 600, color: "#16a34a", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 20, padding: "3px 10px" }}>↓15% browse time</span>}
                  {i === 1 && <span style={{ fontSize: 11, fontWeight: 600, color: "#2563eb", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 20, padding: "3px 10px" }}>↑ creator trust</span>}
                  <span style={{ fontSize: 18, color: "#ccc" }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ padding: "48px 0", borderBottom: "1px solid #f0f0f0" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 20 }}>Projects</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {projects.map((project, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: 14, overflow: "hidden", transition: "border-color 0.2s, box-shadow 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = "#ccc"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = "#f0f0f0"; e.currentTarget.style.boxShadow = "none"; }}>
                <img src={project.image} alt={project.title} style={{ width: "100%", height: 140, objectFit: "cover" }} />
                <div style={{ padding: "16px 18px" }}>
                  <p style={{ fontSize: 11, color: "#999", marginBottom: 5, lineHeight: 1.4 }}>{project.problem}</p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 6 }}>{project.title}</p>
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

      </div>

      <Footer />
    </div>
  );
};

export default MainHome;

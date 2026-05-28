import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Experience from "./Experience";
import data from "../assets/data";
import profileImg from "../images/profile.jpg";

const useTypingEffect = (words, typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) => {
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

const useFadeIn = (delay = 0) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.disconnect(); } },
      { threshold: 0.06 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return [ref, visible];
};

const Fade = ({ children, style, delay = 0 }) => {
  const [ref, visible] = useFadeIn(delay);
  return (
    <div ref={ref} style={{
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>{children}</div>
  );
};

const Label = ({ children }) => (
  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#b09070", margin: "0 0 20px" }}>
    {children}
  </p>
);

const MainHome = () => {
  const { name, social, about, skills, projects, case_studies } = data;
  const typedText = useTypingEffect(["Product Manager", "Problem Solver", "Data-Driven Thinker", "Builder"]);

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "#f2ede4", minHeight: "100vh", color: "#2c1a0e" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Playfair+Display:wght@700;900&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideIn { from{opacity:0;transform:translateX(-16px)} to{opacity:1;transform:translateX(0)} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hc { transition: transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease !important; }
        .hc:hover { transform: translateY(-4px) !important; box-shadow: 0 20px 60px rgba(0,0,0,0.1) !important; }
        .hbtn { transition: all 0.18s ease !important; }
        .hbtn:hover { background: #3d2612 !important; letter-spacing: 0.02em; }
        .hbtn-o { transition: all 0.18s ease !important; }
        .hbtn-o:hover { background: #2c1a0e !important; color: #f2ede4 !important; border-color: #2c1a0e !important; }
        .nav-a:hover { color: #2c1a0e !important; }
        .cs-row { transition: transform 0.2s ease, background 0.2s ease !important; }
        .cs-row:hover { transform: translateX(6px) !important; background: #e8dfd2 !important; }
        a { color: inherit; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(245,244,240,0.93)", backdropFilter: "blur(20px)", borderBottom: "1px solid #e0dfd9", padding: "0 48px", animation: "fadeUp 0.5s ease" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, letterSpacing: "-0.3px" }}>Lia Yoonseo Jang</span>
          <div style={{ display: "flex", gap: 36 }}>
            {[["About", "#about"], ["Why PM", "#why-pm"], ["Experience", "#experience"], ["Skills", "#skills"], ["Case Studies", "#cases"], ["Projects", "#projects"]].map(([label, href]) => (
              <a key={href} href={href} className="nav-a" style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#b09070", textDecoration: "none", fontWeight: 500, letterSpacing: "0.06em", transition: "color 0.15s" }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" style={{ maxWidth: 1080, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ paddingTop: 80, paddingBottom: 72, borderBottom: "1px solid #d4c9b8" }}>

          {/* top meta row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48, animation: "fadeUp 0.6s ease 0.05s both" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#b09070" }}>
                Capgemini Invent · Aug 2026
              </span>
            </div>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#cdb898" }}>
              NYU CS & Economics
            </span>
          </div>

          {/* Main hero grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 48, alignItems: "start" }}>
            <div style={{ animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 68, fontWeight: 900, lineHeight: 0.88, letterSpacing: "-3px", color: "#2c1a0e", marginBottom: 24 }}>
                Lia<br />Yoonseo<br />Jang
              </h1>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <span style={{ width: 32, height: 1, background: "#2c1a0e", display: "inline-block" }} />
                <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: 18, fontWeight: 400, color: "#6b4c35", letterSpacing: "-0.3px" }}>
                  <span style={{ color: "#2c1a0e", fontWeight: 600 }}>{typedText}</span>
                  <span style={{ display: "inline-block", width: 2, height: "0.9em", background: "#2c1a0e", marginLeft: 2, verticalAlign: "middle", animation: "blink 1s step-end infinite", borderRadius: 1 }} />
                </div>
              </div>
              <p style={{ fontSize: 15, color: "#7a5540", lineHeight: 1.8, maxWidth: 440, marginBottom: 36 }}>
                {about.description}
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <a href={social.LinkedIn} target="_blank" rel="noopener noreferrer" className="hbtn"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 500, padding: "12px 24px", background: "#2c1a0e", color: "#f2ede4", borderRadius: 4, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  LinkedIn →
                </a>
                <a href={`mailto:${social.email}`} className="hbtn-o"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 500, padding: "12px 24px", background: "transparent", color: "#2c1a0e", border: "1px solid #ccc", borderRadius: 4, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Email
                </a>
                <a href={social.github} target="_blank" rel="noopener noreferrer" className="hbtn-o"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 500, padding: "12px 24px", background: "transparent", color: "#2c1a0e", border: "1px solid #ccc", borderRadius: 4, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  GitHub
                </a>
              </div>
            </div>

            {/* Photo */}
            <div style={{ animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}>
              <div style={{ position: "relative" }}>
                <img src={profileImg} alt={name}
                  style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", objectPosition: "top center", display: "block", filter: "grayscale(10%)" }} />
                <div style={{ position: "absolute", bottom: 12, left: 12, right: 12, background: "rgba(245,244,240,0.88)", backdropFilter: "blur(8px)", padding: "10px 14px" }}>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9a7460" }}>New York → Seoul</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 48px" }}>

        {/* WHY PM */}
        <Fade style={{ padding: "72px 0", borderBottom: "1px solid #d4c9b8" }}>
          <section id="why-pm">
            <Label>Why PM</Label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.15, color: "#2c1a0e", marginBottom: 28 }}>
                  Why product<br />management?
                </h2>
                <p style={{ fontSize: 15, color: "#6b4c35", lineHeight: 1.85, marginBottom: 16 }}>
                  I've always been drawn to the space where computer science and economics meet — where technical systems create real-world behavior, and where data tells a human story. But what pushed me toward product management specifically was something simpler: I wanted to be the one asking "how can this be better?" rather than waiting for someone to hand me the answer.
                </p>
                <p style={{ fontSize: 15, color: "#6b4c35", lineHeight: 1.85, marginBottom: 16 }}>
                  Growing up moving between cultures and navigating different ways of thinking taught me to see problems from multiple angles — a habit that turned out to be core to good product thinking. I'm drawn to the moments where user insight, data, and technical feasibility all point in the same direction.
                </p>
                <p style={{ fontSize: 15, color: "#6b4c35", lineHeight: 1.85, marginBottom: 28 }}>
                  PM sits at the intersection of everything I care about — technical depth, user empathy, and the autonomy to drive something forward. That's not a role I fell into. It's one I've been building toward.
                </p>
                <div style={{ borderTop: "1px solid #d4c9b8", paddingTop: 24 }}>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {[
                  { label: "01 — Kearney", text: "Applied regression analysis across 10+ datasets to recommend AI-based traffic optimization policy. My first taste of using data to influence real decisions." },
                  { label: "02 — Juliette", text: "Ran user interviews, identified friction in the AR/VR experience, proposed a feature — and watched it ship. Listening before building." },
                  { label: "03 — Scale AI", text: "Improved LLM accuracy across Python, Java, and C. Learned how product quality is built at the model level, not just the surface." },
                  { label: "04 — Mobyus", text: "Partnered with backend engineers to refine queueing logic for AI robotics. Bridging technical depth with product impact." },
                  { label: "05 — EarthMera", text: "Led A/B testing on onboarding flows → 18% activation uplift. Data validating a hypothesis in real time — this was the work I wanted every day." },
                  { label: "06 — LG CNS", text: "Analyzed 100k+ shipment lanes, built automated KPI pipelines across 80+ carriers. Strategy backed by data at enterprise scale." },
                ].map(({ label, text }) => (
                  <div key={label} style={{ padding: "22px 0", borderBottom: "1px solid #d4c9b8" }}>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#b09070", marginBottom: 10 }}>{label}</p>
                    <p style={{ fontSize: 14, color: "#6b4c35", lineHeight: 1.75 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Fade>

        {/* BY THE NUMBERS */}
        <Fade style={{ padding: "72px 0", borderBottom: "1px solid #d4c9b8" }}>
          <Label>By the numbers</Label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderLeft: "1px solid #d4c9b8", borderTop: "1px solid #d4c9b8" }}>
            {[
              { number: "6+", label: "Internships & roles", sub: "Fortune 500s · startups · consulting" },
              { number: "18%", label: "Activation uplift", sub: "EarthMera A/B testing" },
              { number: "15%", label: "Forecast accuracy boost", sub: "LG CNS · 100k+ shipment lanes" },
              { number: "12.5%", label: "TAMS performance gain", sub: "Mobyus · AI robotics" },
              { number: "100k+", label: "Shipment lanes analyzed", sub: "LG CNS · SQL & Python" },
              { number: "25%", label: "Support time reduction", sub: "Juliette · AR/VR features" },
              { number: "10%", label: "LLM accuracy improvement", sub: "Scale AI · AHT reduction" },
              { number: "2", label: "PM case studies", sub: "Netflix · Instagram" },
            ].map(({ number, label, sub }) => (
              <div key={label} style={{ padding: "32px 28px", borderRight: "1px solid #d4c9b8", borderBottom: "1px solid #d4c9b8" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 900, color: "#2c1a0e", letterSpacing: "-2px", lineHeight: 1, marginBottom: 12 }}>{number}</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#3d2612", marginBottom: 4 }}>{label}</p>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#c0a880", letterSpacing: "0.06em" }}>{sub}</p>
              </div>
            ))}
          </div>
        </Fade>

        {/* SKILLS */}
        <Fade style={{ padding: "72px 0", borderBottom: "1px solid #d4c9b8" }}>
          <section id="skills">
            <Label>Core competencies</Label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#d4c9b8" }}>
              {skills.map((skill, i) => (
                <div key={skill.skillName} className="hc" style={{ background: "#f2ede4", padding: "28px 28px" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, color: "#c0a880", marginBottom: 14 }}>—</div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#2c1a0e", marginBottom: 6, letterSpacing: "-0.2px" }}>{skill.skillName}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#a08060", lineHeight: 1.6, letterSpacing: "0.02em" }}>{skill.skillDesc}</p>
                </div>
              ))}
            </div>
          </section>
        </Fade>

        {/* EXPERIENCE */}
        <Fade>
          <Experience />
        </Fade>

        {/* CASE STUDIES */}
        <Fade style={{ padding: "72px 0", borderBottom: "1px solid #d4c9b8" }}>
          <section id="cases">
            <Label>Case studies</Label>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {case_studies.map((cs, i) => (
                <Link key={i} to={cs.link} className="cs-row"
                  style={{ textDecoration: "none", display: "grid", gridTemplateColumns: "48px 1fr auto", gap: 24, alignItems: "center", padding: "24px 20px", borderBottom: "1px solid #d4c9b8", marginLeft: -20, marginRight: -20 }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: "#d4c9b8", letterSpacing: "-1px", lineHeight: 1 }}>0{i + 1}</p>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#2c1a0e", marginBottom: 4, letterSpacing: "-0.3px" }}>{cs.title} — {cs.subtitle}</p>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#b09070", lineHeight: 1.5, letterSpacing: "0.02em" }}>{cs.description.slice(0, 90)}...</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
                    {i === 0 && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 600, color: "#16a34a", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 2, padding: "4px 10px", letterSpacing: "0.04em" }}>↓15% browse time</span>}
                    {i === 1 && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 600, color: "#2563eb", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 2, padding: "4px 10px", letterSpacing: "0.04em" }}>↑ creator trust</span>}
                    <span style={{ fontSize: 20, color: "#cdb898" }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </Fade>

        {/* PROJECTS */}
        <Fade style={{ padding: "72px 0", borderBottom: "1px solid #d4c9b8" }}>
          <section id="projects">
            <Label>Projects</Label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#d4c9b8" }}>
              {projects.map((project, i) => (
                <div key={i} className="hc" style={{ background: "#f2ede4", overflow: "hidden" }}>
                  <img src={project.image} alt={project.title} style={{ width: "100%", height: 200, objectFit: "cover", display: "block", filter: "grayscale(10%)" }} />
                  <div style={{ padding: "22px 24px" }}>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#c0a880", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>{project.problem}</p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#2c1a0e", marginBottom: 8, letterSpacing: "-0.3px" }}>{project.title}</p>
                    <p style={{ fontSize: 13, color: "#8a6450", lineHeight: 1.7, marginBottom: 16 }}>{project.description.slice(0, 100)}...</p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
                      {project.tags.map(tag => (
                        <span key={tag} style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#9a7460", background: "#e8dfd2", borderRadius: 2, padding: "3px 8px", letterSpacing: "0.04em" }}>{tag}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 500, color: "#2c1a0e", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: "1px solid #2c1a0e", paddingBottom: 2 }}>
                      {project.buttonLabel} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Fade>

      </div>
      <Footer />
    </div>
  );
};

export default MainHome;

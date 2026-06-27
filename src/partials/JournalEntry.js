import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import { journalEntries } from "../assets/data";

const Section = ({ label, color, children }) => (
  <div style={{ marginBottom: 40 }}>
    <span style={{
      display: "inline-block",
      fontFamily: "'DM Mono', monospace",
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      padding: "3px 10px",
      borderRadius: 2,
      marginBottom: 14,
      background: color.bg,
      color: color.text,
    }}>
      {label}
    </span>
    <div style={{ fontSize: 14, color: "#6b4c35", lineHeight: 1.85 }}>{children}</div>
  </div>
);

const JournalEntry = () => {
  const { id } = useParams();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const entry = journalEntries.find((e) => e.id === id);
  const currentIndex = journalEntries.findIndex((e) => e.id === id);
  const prevEntry = journalEntries[currentIndex - 1];
  const nextEntry = journalEntries[currentIndex + 1];

  if (!entry) return (
    <div style={{ fontFamily: "'Helvetica Neue', sans-serif", background: "#f2ede4", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ color: "#b09070", marginBottom: 16 }}>Entry not found.</p>
        <Link to="/journal" style={{ color: "#2c1a0e", fontFamily: "'DM Mono', monospace", fontSize: 11 }}>← Back to journal</Link>
      </div>
    </div>
  );

  const colors = {
    observation: { bg: "#dbeafe", text: "#1d4ed8" },
    user: { bg: "#dcfce7", text: "#15803d" },
    data: { bg: "#fef9c3", text: "#a16207" },
    idea: { bg: "#ede9fe", text: "#6d28d9" },
    insight: { bg: "#e8dfd2", text: "#6b4c35" },
    frog: { bg: "#f2ede4", text: "#2c1a0e" },
  };

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "#f2ede4", minHeight: "100vh", color: "#2c1a0e" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Playfair+Display:wght@700;900&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .nav-link:hover { color: #2c1a0e !important; }
        .nav-row:hover { transform: translateX(4px) !important; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(245,244,240,0.93)", backdropFilter: "blur(20px)", borderBottom: "1px solid #e0dfd9", padding: "0 48px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, letterSpacing: "-0.3px", color: "#2c1a0e" }}>Lia Yoonseo Jang</span>
          </Link>
          <Link to="/journal" className="nav-link" style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#b09070", textDecoration: "none", fontWeight: 500, letterSpacing: "0.06em", transition: "color 0.15s" }}>
            ← Product Journal
          </Link>
        </div>
      </nav>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 48px" }}>

        {/* ENTRY HEADER */}
        <div style={{ paddingTop: 72, paddingBottom: 40, borderBottom: "1px solid #d4c9b8", animation: "fadeUp 0.6s ease" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20 }}>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#b09070" }}>
              Product Journal
            </p>
            <span style={{ color: "#d4c9b8" }}>·</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#b09070", background: "#e8dfd2", borderRadius: 2, padding: "2px 8px", letterSpacing: "0.04em" }}>
              {entry.app}
            </span>
            <span style={{ color: "#d4c9b8" }}>·</span>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#b09070", letterSpacing: "0.06em" }}>{entry.date}</p>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.15, color: "#2c1a0e", marginBottom: 16 }}>
            {entry.title}
          </h1>
          <p style={{ fontSize: 14, color: "#b09070", fontStyle: "italic", lineHeight: 1.7 }}>
            Day {currentIndex + 1} · {entry.timeSpent}
          </p>
        </div>

        {/* ENTRY BODY */}
        <div style={{ paddingTop: 48, paddingBottom: 48, borderBottom: "1px solid #d4c9b8" }}>

          <Section label="Observation" color={colors.observation}>
            {entry.observation}
          </Section>

          <Section label="User perspective" color={colors.user}>
            {entry.userPerspective}
          </Section>

          <Section label="Data questions" color={colors.data}>
            <p style={{ marginBottom: 12 }}>{entry.dataQuestions.intro}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "12px 0" }}>
              {entry.dataQuestions.kpis.map((kpi) => (
                <span key={kpi} style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, padding: "3px 10px", borderRadius: 2, background: "#e8dfd2", border: "0.5px solid #cdb898", color: "#6b4c35" }}>
                  {kpi}
                </span>
              ))}
            </div>
            {entry.dataQuestions.hypothesis && (
              <p style={{ borderLeft: "2px solid #d4c9b8", paddingLeft: 14, color: "#9a7460", marginTop: 12 }}>
                {entry.dataQuestions.hypothesis}
              </p>
            )}
          </Section>

          <Section label="Improvement idea" color={colors.idea}>
            {entry.improvementIdea}
          </Section>

          {/* KEY INSIGHT — highlighted */}
          <div style={{ background: "#e8dfd2", borderRadius: 4, padding: "24px 28px", marginBottom: 40 }}>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#b09070", marginBottom: 12 }}>
              Key insight
            </p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#2c1a0e", lineHeight: 1.5, letterSpacing: "-0.3px" }}>
              "{entry.insight}"
            </p>
          </div>
        </div>

        {/* PREV / NEXT NAV */}
        <div style={{ paddingTop: 40, paddingBottom: 80, display: "flex", justifyContent: "space-between", gap: 24 }}>
          {prevEntry ? (
            <Link to={`/journal/${prevEntry.id}`} className="nav-row" style={{ textDecoration: "none", transition: "transform 0.2s ease" }}>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#b09070", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>← Previous</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#2c1a0e" }}>{prevEntry.app} — {prevEntry.title}</p>
            </Link>
          ) : <div />}
          {nextEntry ? (
            <Link to={`/journal/${nextEntry.id}`} className="nav-row" style={{ textDecoration: "none", textAlign: "right", transition: "transform 0.2s ease" }}>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#b09070", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Next →</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#2c1a0e" }}>{nextEntry.app} — {nextEntry.title}</p>
            </Link>
          ) : <div />}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default JournalEntry;

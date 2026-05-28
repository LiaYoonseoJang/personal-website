import React, { useState } from "react";
import { experience } from "../assets/data";

const typeColor = {
  "full-time": { bg: "#f0fdf4", text: "#15803d", border: "#bbf7d0" },
  "internship": { bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe" },
};

const Experience = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="experience" style={{ padding: "48px 0", borderBottom: "1px solid #f0f0f0" }}>
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 28 }}>
        Experience
      </p>

      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 1, background: "#f0f0f0" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {experience.map((exp, i) => {
            const isOpen = expanded === i;
            const colors = typeColor[exp.type] || typeColor["internship"];

            return (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 20, paddingBottom: 28 }}>
                {/* Dot */}
                <div style={{ paddingTop: 4 }}>
                  <div style={{
                    width: 15, height: 15, borderRadius: "50%",
                    background: isOpen ? "#111" : "#fff",
                    border: `2px solid ${isOpen ? "#111" : "#ddd"}`,
                    transition: "all 0.2s",
                  }} />
                </div>

                {/* Content */}
                <div
                  onClick={() => setExpanded(isOpen ? null : i)}
                  style={{
                    background: "#fff",
                    border: `1px solid ${isOpen ? "#ccc" : "#f0f0f0"}`,
                    borderRadius: 14,
                    padding: "16px 20px",
                    cursor: "pointer",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    boxShadow: isOpen ? "0 4px 20px rgba(0,0,0,0.06)" : "none",
                  }}
                  onMouseOver={e => { if (!isOpen) e.currentTarget.style.borderColor = "#ccc"; }}
                  onMouseOut={e => { if (!isOpen) e.currentTarget.style.borderColor = "#f0f0f0"; }}
                >
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3, flexWrap: "wrap" }}>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#111", margin: 0 }}>{exp.company}</p>
                        <span style={{
                          fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 20,
                          background: colors.bg, color: colors.text, border: `1px solid ${colors.border}`
                        }}>
                          {exp.type === "full-time" ? "Full-time" : "Internship"}
                        </span>
                      </div>
                      <p style={{ fontSize: 13, color: "#555", margin: 0 }}>{exp.role}</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ fontSize: 12, color: "#999", margin: 0 }}>{exp.period}</p>
                      <p style={{ fontSize: 11, color: "#bbb", margin: "2px 0 0" }}>{exp.location}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 10 }}>
                    {exp.tags.map(tag => (
                      <span key={tag} style={{ fontSize: 11, color: "#666", background: "#f5f5f5", borderRadius: 6, padding: "2px 8px" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expandable bullets */}
                  {isOpen && (
                    <ul style={{ marginTop: 14, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }}>{b}</li>
                      ))}
                    </ul>
                  )}

                  {/* Toggle hint */}
                  <p style={{ fontSize: 11, color: "#bbb", marginTop: 10, marginBottom: 0 }}>
                    {isOpen ? "↑ collapse" : "↓ see details"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

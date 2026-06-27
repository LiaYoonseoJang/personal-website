import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { journalEntries } from "../assets/data";

const ProductJournal = () => {
    console.log("Journal loaded", journalEntries);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const grouped = journalEntries.reduce((acc, entry) => {
        const app = entry.app; 
        if (!acc[app]) acc[app] = [];
        acc[app].push(entry);
        return acc;
    }, {});

    return (
        <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "#f2ede4", minHeight: "100vh", color: "#2c1a0e" }}>
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Playfair+Display:wght@700;900&display=swap');
            @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
            * { box-sizing: border-box; margin: 0; padding: 0; }
            .nav-a:hover { color: #2c1a0e !important; }
            .entry-row { transition: transform 0.2s ease, background 0.2s ease !important; }
            .entry-row:hover { transform: translateX(6px) !important; background: #e8dfd2 !important; }
            .back-btn:hover { color: #2c1a0e !important; }
            `}</style>

            { /* NAV */} 
            <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(245,244,240,0.93)", backdropFilter: "blur(20px)", borderBottom: "1px solid #e0dfd9", padding: "0 48px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, letterSpacing: "-0.3px", color: "#2c1a0e" }}>Lia Yoonseo Jang</span>
          </Link>
          <Link to="/" className="back-btn" style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#b09070", textDecoration: "none", fontWeight: 500, letterSpacing: "0.06em", transition: "color 0.15s" }}>
            ← Back
          </Link>
        </div>
      </nav>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 48px" }}>

           {/* HEADER */}
           <div style={{ paddingTop: 80, paddingBottom: 56, borderBottom: "1px solid #d4c9b8", animation: "fadeUp 0.6s ease" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#b09070", marginBottom: 20 }}>
            Product Journal
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, color: "#2c1a0e", marginBottom: 20 }}>
            Daily app<br />observations
          </h1>
          <p style={{ fontSize: 15, color: "#7a5540", lineHeight: 1.8, maxWidth: 480 }}>
            A summer project before joining Capgemini Invent. Every day I opened an app, wrote down what I noticed, and asked what I'd change — and why.
          </p>
          <div style={{ display: "flex", gap: 24, marginTop: 28 }}>
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: "#2c1a0e", letterSpacing: "-1px" }}>{journalEntries.length}</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#b09070", letterSpacing: "0.06em", marginTop: 4 }}>Entries</p>
            </div>
            <div style={{ width: 1, background: "#d4c9b8" }} />
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: "#2c1a0e", letterSpacing: "-1px" }}>{Object.keys(grouped).length}</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#b09070", letterSpacing: "0.06em", marginTop: 4 }}>Apps</p>
            </div>
            <div style={{ width: 1, background: "#d4c9b8" }} />
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: "#2c1a0e", letterSpacing: "-1px" }}>Summer '26</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#b09070", letterSpacing: "0.06em", marginTop: 4 }}>Period</p>
            </div>
          </div>
        </div>
 
        {/* ENTRIES LIST */}
        <div style={{ paddingTop: 48, paddingBottom: 80 }}>
          {journalEntries.map((entry, i) => (
            <Link
              key={entry.id}
              to={`/journal/${entry.id}`}
              className="entry-row"
              style={{
                textDecoration: "none",
                display: "grid",
                gridTemplateColumns: "48px 1fr auto",
                gap: 24,
                alignItems: "center",
                padding: "24px 20px",
                borderBottom: "1px solid #d4c9b8",
                marginLeft: -20,
                marginRight: -20,
              }}
            >
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: "#d4c9b8", letterSpacing: "-1px", lineHeight: 1 }}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.3px" }}>
                    {entry.app} — {entry.title}
                  </p>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#b09070", background: "#e8dfd2", borderRadius: 2, padding: "2px 8px", letterSpacing: "0.04em" }}>
                    {entry.app}
                  </span>
                </div>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#b09070", letterSpacing: "0.02em" }}>
                  {entry.insight}
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#b09070", letterSpacing: "0.04em" }}>{entry.date}</span>
                <span style={{ fontSize: 20, color: "#cdb898" }}>→</span>
              </div>
            </Link>
          ))}
        </div>
 
      </div>
      <Footer />
    </div>
  );
};
 
export default ProductJournal;
 

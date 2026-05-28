import React from "react";
import instagram from "../images/instagram-logo-1.png";
import { Link } from "react-router-dom";

const S = {
  bg: "#f2ede4",
  card: "#faf7ff",
  border: "#d4c9b8",
  purple: "#6d28d9",
  purpleLight: "#f5f3ff",
  purpleBorder: "#ddd6fe",
  text: "#2c1a0e",
  muted: "#8a6450",
  mono: "'DM Mono', monospace",
  serif: "'Playfair Display', serif",
};

const Tag = ({ children }) => (
  <span style={{ fontFamily: S.mono, display: "inline-block", padding: "3px 10px", fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", borderRadius: 2, background: S.purpleLight, color: S.purple, border: `1px solid ${S.purpleBorder}`, marginRight: 6, marginBottom: 6 }}>
    {children}
  </span>
);

const SectionLabel = ({ children }) => (
  <p style={{ fontFamily: S.mono, fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: S.purple, marginBottom: 8 }}>{children}</p>
);

const Divider = () => <hr style={{ margin: "40px 0", borderColor: "#d4c9b8", borderTopWidth: 1 }} />;

const InstagramCaseStudy = () => (
  <div style={{ fontFamily: "'Helvetica Neue', sans-serif", background: "#f2ede4", minHeight: "100vh", padding: "40px 16px" }}>
    <div style={{ maxWidth: 760, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ background: "#faf7ff", borderRadius: 4, border: "1px solid #d4c9b8", padding: 32, marginBottom: 12 }}>
        <Link to="/" style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#8a6450", textDecoration: "none", display: "inline-block", marginBottom: 24, letterSpacing: "0.06em", textTransform: "uppercase" }}>← Back to Portfolio</Link>
        <img src={instagram} alt="Instagram" style={{ height: 40, marginBottom: 24 }} />
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 900, color: "#2c1a0e", letterSpacing: "-1px", marginBottom: 12 }}>
          Rebuilding Trust Through Algorithm Transparency on Instagram
        </h1>
        <p style={{ fontSize: 15, color: "#8a6450", lineHeight: 1.75, marginBottom: 20 }}>
          How might Instagram rebuild trust with Gen Z creators by making its recommendation system more transparent, understandable, and controllable?
        </p>
        <div className="flex flex-wrap">
          <Tag>User Research</Tag>
          <Tag>Trust & Safety</Tag>
          <Tag>Creator Tools</Tag>
          <Tag>Gen Z</Tag>
        </div>
      </div>

      {/* TL;DR */}
      <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 4, padding: 24, marginBottom: 12 }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6d28d9", marginBottom: 12 }}>TL;DR</p>
        <p style={{ fontSize: 14, color: "#2c1a0e", lineHeight: 1.75 }}>
          62% of social media users 18–24 don't understand why they see certain content. This case study proposes an <strong>Algorithm Transparency Toolkit</strong> — "Why am I seeing this?" labels, a centralized transparency hub, and creator visibility insights — to increase platform trust and intentional engagement among Gen Z.
        </p>
      </div>

      {/* Main content */}
      <div style={{ background: "#faf7ff", borderRadius: 4, border: "1px solid #d4c9b8", padding: 32 }}>

        {/* Context */}
        <section>
          <SectionLabel>Context</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 12 }}>The Problem with Black-Box Algorithms</h2>
          <p style={{ fontSize: 14, color: "#8a6450", lineHeight: 1.8, marginBottom: 14 }}>
            Instagram's recommendation algorithm shapes what billions of people see — but for most users, how it works is a complete mystery. College-aged users (18–24) who use Instagram as both consumers and creators report consistent frustration: posts get wildly different engagement for no apparent reason, and the platform offers almost no explanation.
          </p>
          <p style={{ fontSize: 14, color: "#8a6450", lineHeight: 1.8 }}>
            Meanwhile, competitors like TikTok and YouTube have started offering "Why this video?" explanations and feed reset controls, raising user expectations. Instagram risks falling behind on trust — a metric that increasingly drives Gen Z platform loyalty.
          </p>
        </section>

        <Divider />

        {/* Hypothesis */}
        <section>
          <SectionLabel>Hypothesis</SectionLabel>
          <div style={{ background: "#f5f3ff", padding: 20, borderLeft: "3px solid #6d28d9" }}>
            <p style={{ fontSize: 14, color: "#2c1a0e", lineHeight: 1.8, fontWeight: 500 }}>
              If Instagram introduces a centralized algorithm transparency hub, "Why am I seeing this?" labels across all post types, and user controls to adjust feed preferences — then trust in the platform and intentional engagement will increase among 18–24 users.
            </p>
          </div>
        </section>

        <Divider />

        {/* Target User */}
        <section>
          <SectionLabel>Target User</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 12 }}>The Gen Z Creator-Consumer</h2>
          <p style={{ fontSize: 14, color: "#8a6450", lineHeight: 1.8, marginBottom: 14 }}>
            Urban college students (18–24) who use Instagram in dual roles: passively consuming content and actively building an audience. They care deeply about visibility and fairness, and they're the cohort most likely to churn or shift platforms when they feel manipulated.
          </p>
          <div style={{ background: "#ede8f5", padding: 20, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, textAlign: "center", borderRadius: 4 }}>
            <div>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#6d28d9", fontFamily: "'Playfair Display', serif" }}>62%</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", marginTop: 4 }}>of 18–24s don't understand their feed</p>
            </div>
            <div>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#6d28d9", fontFamily: "'Playfair Display', serif" }}>70%+</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", marginTop: 4 }}>want more transparency & control</p>
            </div>
            <div>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#6d28d9", fontFamily: "'Playfair Display', serif" }}>↑ Trust</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", marginTop: 4 }}>linked to platform loyalty in Gen Z</p>
            </div>
          </div>
        </section>

        <Divider />

        {/* User Insights */}
        <section>
          <SectionLabel>User Insights</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 16 }}>What Research Revealed</h2>
          <div className="space-y-3 mb-6">
            <div style={{ background: "#f5f3ff", padding: 16, borderRadius: 4 }}>
              <p style={{ fontSize: 13, color: "#2c1a0e", fontStyle: "italic", lineHeight: 1.7 }}>"Sometimes my posts get 100 likes, and sometimes 20 — same time of day, same type of content. I have no idea why."</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#b09070", marginTop: 6 }}>— College student, 21, NYC</p>
            </div>
            <div style={{ background: "#ede8f5", padding: 16, borderRadius: 4 }}>
              <p style={{ fontSize: 13, color: "#2c1a0e", fontStyle: "italic", lineHeight: 1.7 }}>"I just want to know how to get my content seen without guessing what the algorithm wants."</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#b09070", marginTop: 6 }}>— Aspiring creator, 20</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: 16, padding: 16, background: "#f5f3ff", borderRadius: 4 }}>
              <span style={{width:10,height:10,borderRadius:"50%",background:"#a855f7",display:"inline-block",flexShrink:0,marginTop:5}}></span>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#2c1a0e" }}>Feed feels unpredictable and arbitrary</p>
                <p style={{ fontSize: 13, color: "#8a6450", marginTop: 4, lineHeight: 1.7 }}>Users can't build mental models of how their feed is curated, making every scroll feel like a gamble rather than a personalized experience.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, padding: 16, background: "#f5f3ff", borderRadius: 4 }}>
              <span style={{width:10,height:10,borderRadius:"50%",background:"#a855f7",display:"inline-block",flexShrink:0,marginTop:5}}></span>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#2c1a0e" }}>Creators feel disempowered</p>
                <p style={{ fontSize: 13, color: "#8a6450", marginTop: 4, lineHeight: 1.7 }}>Without knowing why a post performed well or poorly, creators can't improve. Frustration leads to posting less or leaving the platform.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, padding: 16, background: "#f5f3ff", borderRadius: 4 }}>
              <span style={{width:10,height:10,borderRadius:"50%",background:"#a855f7",display:"inline-block",flexShrink:0,marginTop:5}}></span>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#2c1a0e" }}>No control over the experience</p>
                <p style={{ fontSize: 13, color: "#8a6450", marginTop: 4, lineHeight: 1.7 }}>Instagram offers almost no tools to shape what you see. Users want to adjust for themselves — not have an invisible system decide for them.</p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* User Journey */}
        <section>
          <SectionLabel>User Journey</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 16 }}>Where the Pain Points Hit</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { emoji: "", step: "Login", pain: "Opens app to browse or post — no sense of what they'll see" },
              { emoji: "", step: "Feed Browse", pain: "Content appears in unexplained order — confusion about why certain posts surface" },
              { emoji: "", step: "Explore", pain: "Suggested content doesn't match interests; no transparency labels" },
              { emoji: "", step: "Engage", pain: "Likes/comments feel pointless — no feedback on how actions shape future recommendations" },
              { emoji: "", step: "Post Content", pain: "Post goes live but reach feels random and unexplainable" },
              { emoji: "", step: "Check Insights", pain: "Metrics exist but don't explain why reach was high or low" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl items-start">
                <span style={{width:10,height:10,borderRadius:"50%",background:"#e879f9",display:"inline-block",flexShrink:0,marginTop:5}}></span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#2c1a0e" }}>{item.step}</p>
                  <p className="text-gray-500 text-sm">{item.pain}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Competitive */}
        <section>
          <SectionLabel>Competitive Landscape</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 12 }}>How Others Are Approaching Transparency</h2>
          <div className="overflow-x-auto">
            <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
              <thead>
                <tr className="border-b border-gray-100">
                  <th style={{ paddingBottom: 8, color: "#8a6450", fontWeight: 600, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em" }}>Platform</th>
                  <th style={{ paddingBottom: 8, color: "#8a6450", fontWeight: 600, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em" }}>Transparency Feature</th>
                  <th style={{ paddingBottom: 8, color: "#8a6450", fontWeight: 600, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em" }}>Gap</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr style={{ borderBottom: "1px solid #d4c9b8" }}>
                  <td style={{ padding: "12px 0", fontWeight: 600, color: "#2c1a0e" }}>TikTok</td>
                  <td style={{ padding: "12px 0", color: "#8a6450" }}>"Why this video?" + feed reset</td>
                  <td style={{ padding: "12px 0", color: "#8a6450" }}>No creator visibility insights</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #d4c9b8" }}>
                  <td style={{ padding: "12px 0", fontWeight: 600, color: "#2c1a0e" }}>YouTube</td>
                  <td style={{ padding: "12px 0", color: "#8a6450" }}>Watch history management</td>
                  <td style={{ padding: "12px 0", color: "#8a6450" }}>Limited in-feed explanations</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #d4c9b8" }}>
                  <td style={{ padding: "12px 0", fontWeight: 600, color: "#2c1a0e" }}>Spotify</td>
                  <td style={{ padding: "12px 0", color: "#8a6450" }}>"Made For You / Because you listened to…"</td>
                  <td style={{ padding: "12px 0", color: "#8a6450" }}>No user-adjustable controls</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-purple-600">Instagram</td>
                  <td style={{ padding: "12px 0", color: "#8a6450" }}>Partial ad explanations only</td>
                  <td style={{ padding: "12px 0", fontWeight: 600, color: "#6d28d9" }}>No centralized hub, no creator tools</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <Divider />

        {/* Solutions */}
        <section>
          <SectionLabel>MVP Definition</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 16 }}>The Algorithm Transparency Toolkit</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { num: "01", title: '"Why am I seeing this?" Labels', desc: 'Info icon on every post — tap to see a plain-English reason ("You liked similar content") + option to adjust preferences. Immediate, contextual, low-friction.' },
              { num: "02", title: "Algorithm Transparency Hub", desc: "A centralized Settings page with visual breakdowns of how Feed, Explore, and Reels are ranked. FAQs, onboarding tutorial. Surfaced proactively to new users." },
              { num: "03", title: "Creator Visibility Insights", desc: "Analytics panel showing why a post reached (or didn't reach) certain audiences — format signals, share velocity, timing. Actionable tips per post." },
              { num: "04", title: "Weekly Feed Summary", desc: 'Push notification / Story digest: "This week your feed was 50% friends, 30% suggested, 20% ads." Simple nudge toward reflection and control.' },
            ].map(({ num, title, desc }) => (
              <div key={num} style={{ border: "1px solid #d4c9b8", borderRadius: 4, padding: 24 }}>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#b09070", marginBottom: 10 }}>{num}</p>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#2c1a0e", marginBottom: 8 }}>{title}</p>
                <p style={{ fontSize: 13, color: "#8a6450", lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* User Testing */}
        <section>
          <SectionLabel>User Testing</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 16 }}>What Resonated Most</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { feature: '"Why am I seeing this?"', result: "Most valued — gave instant contextual clarity without extra steps", signal: "high" },
              { feature: "Transparency Hub", result: "Loved when visual and accessible; disliked when buried in settings", signal: "high" },
              { feature: "Creator Insights", result: "High value for frequent posters; less relevant for pure consumers", signal: "medium" },
              { feature: "Weekly Summary", result: "Nice-to-have but low urgency; better as a notification than a page", signal: "low" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#ede8f5", padding: 16, borderRadius: 4 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#2c1a0e", marginBottom: 6 }}>{item.feature}</p>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", lineHeight: 1.6 }}>{item.result}</p>
                <span className={`text-xs mt-2 inline-block font-medium ${item.signal === "high" ? "text-green-600" : item.signal === "medium" ? "text-yellow-600" : "text-gray-400"}`}>
                  {item.signal === "high" ? "↑ Ship in MVP" : item.signal === "medium" ? "~ Phase 2" : "~ Phase 3"}
                </span>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Metrics */}
        <section>
          <SectionLabel>Measuring Success</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 16 }}>Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div style={{ background: "#ede8f5", padding: 20, textAlign: "center", borderRadius: 4 }}>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#6d28d9", fontFamily: "'Playfair Display', serif" }}>↑ DAU</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", marginTop: 4 }}>transparency hub engagement among 18–24</p>
            </div>
            <div style={{ background: "#ede8f5", padding: 20, textAlign: "center", borderRadius: 4 }}>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#6d28d9", fontFamily: "'Playfair Display', serif" }}>↑ Post freq.</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", marginTop: 4 }}>creators posting more after seeing insights</p>
            </div>
            <div style={{ background: "#ede8f5", padding: 20, textAlign: "center", borderRadius: 4 }}>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#6d28d9", fontFamily: "'Playfair Display', serif" }}>↓ Churn</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", marginTop: 4 }}>monthly churn among Gen Z segment</p>
            </div>
          </div>
        </section>

        <Divider />

        {/* Final Thoughts */}
        <section>
          <SectionLabel>Final Thoughts</SectionLabel>
          <p style={{ fontSize: 14, color: "#8a6450", lineHeight: 1.8 }}>
            Gen Z doesn't just want a better algorithm — they want to understand and trust the one they already have. Transparency isn't about exposing trade secrets; it's about giving users enough context to feel like partners in their own experience. If Instagram gets this right, it doesn't just reduce churn — it earns the kind of loyalty that no recommendation engine can buy.
          </p>
        </section>

      </div>

      <div className="text-center mt-8 mb-12">
        <Link to="/" style={{ fontFamily: "'DM Mono', monospace", display: "inline-block", padding: "12px 28px", background: "#6d28d9", color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: 4 }}>
          ← Back to Portfolio
        </Link>
      </div>

    </div>
  </div>
);

export default InstagramCaseStudy;

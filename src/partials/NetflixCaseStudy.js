import React from "react";
import chartImg1 from '../images/chart-1.png';
import chartImg2 from '../images/chart-2.png';
import netflixImg from '../images/netflix_logo.png';
import { Link } from "react-router-dom";

const S = {
  bg: "#f2ede4",
  card: "#fff8f3",
  border: "#d4c9b8",
  red: "#b91c1c",
  redLight: "#fef2f2",
  redBorder: "#fecaca",
  text: "#2c1a0e",
  muted: "#8a6450",
  mono: "'DM Mono', monospace",
  serif: "'Playfair Display', serif",
};

const Tag = ({ children }) => (
  <span style={{ fontFamily: S.mono, display: "inline-block", padding: "3px 10px", fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", borderRadius: 2, background: S.redLight, color: S.red, border: `1px solid ${S.redBorder}`, marginRight: 6, marginBottom: 6 }}>
    {children}
  </span>
);

const SectionLabel = ({ children }) => (
  <p style={{ fontFamily: S.mono, fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: S.red, marginBottom: 8 }}>{children}</p>
);

const Divider = () => <hr style={{ margin: "40px 0", borderColor: "#d4c9b8", borderTopWidth: 1 }} />;

const NetflixCaseStudy = () => (
  <div style={{ fontFamily: "'Helvetica Neue', sans-serif", background: "#f2ede4", minHeight: "100vh", padding: "40px 16px" }}>
    <div style={{ maxWidth: 760, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ background: "#fff8f3", borderRadius: 4, border: "1px solid #d4c9b8", padding: 32, marginBottom: 12 }}>
        <Link to="/" style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#8a6450", textDecoration: "none", display: "inline-block", marginBottom: 24, letterSpacing: "0.06em", textTransform: "uppercase" }}>← Back to Portfolio</Link>
        <img src={netflixImg} alt="Netflix" style={{ height: 36, marginBottom: 24 }} />
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 900, color: "#2c1a0e", letterSpacing: "-1px", marginBottom: 12 }}>
          Reducing Decision Fatigue on Netflix
        </h1>
        <p style={{ fontSize: 15, color: "#8a6450", lineHeight: 1.75, marginBottom: 20 }}>
          How might Netflix help users find content they love faster — reducing the time spent browsing and increasing satisfaction?
        </p>
        <div className="flex flex-wrap">
          <Tag>Product Strategy</Tag>
          <Tag>UX Research</Tag>
          <Tag>Recommendation Systems</Tag>
          <Tag>Streaming</Tag>
        </div>
      </div>

      {/* TL;DR */}
      <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 4, padding: 24, marginBottom: 12 }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#b91c1c", marginBottom: 12 }}>TL;DR</p>
        <p style={{ fontSize: 14, color: "#2c1a0e", lineHeight: 1.75 }}>
          Netflix users spend up to 10% of their viewing time just deciding what to watch. This case study proposes an <strong>Enhanced Personalized Discovery</strong> system — mood-based categories, a region selector, and adaptive preference controls — targeting a 15% reduction in browse time and improved monthly retention.
        </p>
      </div>

      {/* Main content card */}
      <div style={{ background: "#fff8f3", borderRadius: 4, border: "1px solid #d4c9b8", padding: 32 }}>

        {/* Context */}
        <section>
          <SectionLabel>Context</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 12 }}>The Streaming Landscape</h2>
          <p style={{ fontSize: 14, color: "#8a6450", lineHeight: 1.8, marginBottom: 14 }}>
            Netflix leads the global streaming market with over 300 million paid subscribers and a ~21% share in the U.S. Despite strong growth — 41 million new subscribers in 2024 — a persistent problem remains: users are overwhelmed by too much choice and feel their recommendations don't adapt fast enough to their changing tastes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src={chartImg1} alt="Netflix market share" className="rounded-xl border border-gray-100 w-full" />
            <img src={chartImg2} alt="Subscriber growth" className="rounded-xl border border-gray-100 w-full" />
          </div>
        </section>

        <Divider />

        {/* Hypothesis */}
        <section>
          <SectionLabel>Hypothesis</SectionLabel>
          <div style={{ background: "#fef2f2", padding: 20, borderLeft: "3px solid #b91c1c" }}>
            <p style={{ fontSize: 14, color: "#2c1a0e", lineHeight: 1.8, fontWeight: 500 }}>
              If Netflix improves personalized content discovery with mood-based categories and adaptive preference controls, then users will spend less time browsing and watch more — leading to higher engagement and reduced churn.
            </p>
          </div>
        </section>

        <Divider />

        {/* Target User */}
        <section>
          <SectionLabel>Target User</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 12 }}>Who Are We Solving For?</h2>
          <p style={{ fontSize: 14, color: "#8a6450", lineHeight: 1.8, marginBottom: 14 }}>
            While this affects all Netflix users, we focused on <strong>Millennials and Gen Z (18–35)</strong> — the most active segment, making up 33%+ of the user base. These users browse in short bursts, expect instant relevance, and are most likely to churn if recommendations feel stale.
          </p>
          <div style={{ background: "#f5ede0", padding: 20, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, textAlign: "center", borderRadius: 4 }}>
            <div>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#b91c1c", fontFamily: "'Playfair Display', serif" }}>62 min</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", marginTop: 4 }}>avg. daily Netflix use (US)</p>
            </div>
            <div>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#b91c1c", fontFamily: "'Playfair Display', serif" }}>~10%</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", marginTop: 4 }}>of viewing time spent deciding</p>
            </div>
            <div>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#b91c1c", fontFamily: "'Playfair Display', serif" }}>33%</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", marginTop: 4 }}>of users are Millennials</p>
            </div>
          </div>
        </section>

        <Divider />

        {/* User Insights */}
        <section>
          <SectionLabel>User Insights</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 16 }}>Pain Points</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <span style={{width:10,height:10,borderRadius:"50%",background:"#ef4444",display:"inline-block",flexShrink:0,marginTop:5}}></span>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#2c1a0e" }}>Decision fatigue is real</p>
                <p className="text-gray-600 text-sm mt-1">A user watching 6 hrs/week may spend 1.5+ hrs/month just choosing what to watch. The scroll loop is frustrating, not enjoyable.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <span style={{width:10,height:10,borderRadius:"50%",background:"#ef4444",display:"inline-block",flexShrink:0,marginTop:5}}></span>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#2c1a0e" }}>Recommendations feel stale</p>
                <p className="text-gray-600 text-sm mt-1">The algorithm is slow to adapt when user preferences shift. Users who finish a genre binge keep seeing the same type of content weeks later.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <span style={{width:10,height:10,borderRadius:"50%",background:"#ef4444",display:"inline-block",flexShrink:0,marginTop:5}}></span>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#2c1a0e" }}>Hidden gems stay hidden</p>
                <p className="text-gray-600 text-sm mt-1">Niche titles that users would love get buried under mainstream recommendations, making the library feel smaller than it is.</p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Competitive Landscape */}
        <section>
          <SectionLabel>Competitive Landscape</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 12 }}>How Do Competitors Approach Discovery?</h2>
          <div className="overflow-x-auto">
            <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
              <thead>
                <tr className="border-b border-gray-100">
                  <th style={{ paddingBottom: 8, color: "#8a6450", fontWeight: 600, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em" }}>Platform</th>
                  <th style={{ paddingBottom: 8, color: "#8a6450", fontWeight: 600, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em" }}>Strength</th>
                  <th style={{ paddingBottom: 8, color: "#8a6450", fontWeight: 600, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em" }}>Gap</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr style={{ borderBottom: "1px solid #d4c9b8" }}>
                  <td style={{ padding: "12px 0", fontWeight: 600, color: "#2c1a0e" }}>Amazon Prime</td>
                  <td style={{ padding: "12px 0", color: "#8a6450" }}>Deep catalog, bundle perks</td>
                  <td style={{ padding: "12px 0", color: "#8a6450" }}>Weak personalization UX</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #d4c9b8" }}>
                  <td style={{ padding: "12px 0", fontWeight: 600, color: "#2c1a0e" }}>Disney+</td>
                  <td style={{ padding: "12px 0", color: "#8a6450" }}>Strong brand identity</td>
                  <td style={{ padding: "12px 0", color: "#8a6450" }}>Limited content variety</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #d4c9b8" }}>
                  <td style={{ padding: "12px 0", fontWeight: 600, color: "#2c1a0e" }}>Hulu</td>
                  <td style={{ padding: "12px 0", color: "#8a6450" }}>Live TV + next-day episodes</td>
                  <td style={{ padding: "12px 0", color: "#8a6450" }}>Poor recommendation engine</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 0", fontWeight: 600, color: "#b91c1c" }}>Netflix</td>
                  <td style={{ padding: "12px 0", color: "#8a6450" }}>Best algorithm foundation</td>
                  <td style={{ padding: "12px 0", fontWeight: 600, color: "#b91c1c" }}>Slow to adapt + mood-based gaps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <Divider />

        {/* Solutions */}
        <section>
          <SectionLabel>Solutions Explored</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 16 }}>Three Options Considered</h2>
          <div className="space-y-4">
            <div style={{ border: "1px solid #d4c9b8", padding: 20, borderRadius: 4 }}>
              <div className="flex justify-between items-start mb-2">
                <p className="font-semibold text-gray-900">1. AI-Powered Conversational Search</p>
                <span className="text-xs px-2 py-1 bg-yellow-50 text-yellow-600 rounded-full border border-yellow-100">High complexity</span>
              </div>
              <p style={{ fontSize: 13, color: "#8a6450", marginBottom: 10, lineHeight: 1.7 }}>Let users ask in natural language: "Find me a suspenseful thriller with a twist." Reduces browsing but requires advanced NLP and risks slow adoption.</p>
              <div className="flex gap-4 text-xs">
                <span className="text-green-600">Highly interactive</span>
                <span className="text-red-500">✗ Hard to build & adopt</span>
              </div>
            </div>
            <div style={{ border: "2px solid #fecaca", padding: 20, borderRadius: 4, background: "#fef2f2" }}>
              <div className="flex justify-between items-start mb-2">
                <p className="font-semibold text-gray-900">2. Enhanced Personalized Recommendations — Selected</p>
                <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded-full border border-green-100">Best fit</span>
              </div>
              <p style={{ fontSize: 13, color: "#8a6450", marginBottom: 10, lineHeight: 1.7 }}>Mood-based categories ("Late Night Laughs", "Mind-Bending Thrillers"), a Region Selector, and a Preference Control tab. Builds on existing systems with incremental improvements.</p>
              <div className="flex gap-4 text-xs">
                <span className="text-green-600">Feasible & scalable</span>
                <span className="text-green-600">High user impact</span>
              </div>
            </div>
            <div style={{ border: "1px solid #d4c9b8", padding: 20, borderRadius: 4 }}>
              <div className="flex justify-between items-start mb-2">
                <p className="font-semibold text-gray-900">3. Social Playlist Sharing</p>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">Nice to have</span>
              </div>
              <p style={{ fontSize: 13, color: "#8a6450", marginBottom: 10, lineHeight: 1.7 }}>User-generated playlists shared with friends or the Netflix community. Differentiating, but risks underuse and requires moderation.</p>
              <div className="flex gap-4 text-xs">
                <span className="text-green-600">Community-building</span>
                <span className="text-red-500">✗ Adoption uncertainty</span>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* MVP */}
        <section>
          <SectionLabel>MVP Definition</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 16 }}>What Ships First?</h2>
          <div className="space-y-3">
            {[
              { label: "Mood-based rows", desc: "\"Feel-Good Movies\", \"Mind-Bending Thrillers\" — updated based on time of day and recent watch history" },
              { label: "Region Selector", desc: "A dropdown to explore trending content from a chosen country, refreshing catalog recommendations in real time" },
              { label: "Preference Controls", desc: "A simple tab in Settings to adjust genre/mood weights (More Sci-Fi, Less Romance) with instant preview" },
              { label: "Adaptive feedback loop", desc: "Algorithm updates within 1–2 sessions of new behavior, not weeks" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#2c1a0e" }}>{item.label}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#8a6450", marginTop: 3, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* GTM */}
        <section>
          <SectionLabel>Launch Strategy</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 12 }}>Phased Rollout</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, textAlign: "center" }}>
            <div style={{ background: "#f5ede0", padding: 16, borderRadius: 4 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#2c1a0e", marginBottom: 6 }}>Phase 1</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", lineHeight: 1.6 }}>A/B test mood rows with 5% of Millennial users in US</p>
            </div>
            <div style={{ background: "#f5ede0", padding: 16, borderRadius: 4 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#2c1a0e", marginBottom: 6 }}>Phase 2</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", lineHeight: 1.6 }}>Roll out Region Selector + Preference Controls to 20% of global base</p>
            </div>
            <div style={{ background: "#f5ede0", padding: 16, borderRadius: 4 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#2c1a0e", marginBottom: 6 }}>Phase 3</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", lineHeight: 1.6 }}>Full launch with adaptive feedback loop enabled globally</p>
            </div>
          </div>
        </section>

        <Divider />

        {/* Metrics */}
        <section>
          <SectionLabel>Measuring Success</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", letterSpacing: "-0.5px", marginBottom: 16 }}>Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div style={{ background: "#f5ede0", padding: 20, textAlign: "center", borderRadius: 4 }}>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#b91c1c", fontFamily: "'Playfair Display', serif" }}>↓ 15%</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", marginTop: 4 }}>target reduction in avg. browse time</p>
            </div>
            <div style={{ background: "#f5ede0", padding: 20, textAlign: "center", borderRadius: 4 }}>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#b91c1c", fontFamily: "'Playfair Display', serif" }}>↑ Retention</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", marginTop: 4 }}>monthly retention among 18–35 segment</p>
            </div>
            <div style={{ background: "#f5ede0", padding: 20, textAlign: "center", borderRadius: 4 }}>
              <p style={{ fontSize: 26, fontWeight: 800, color: "#b91c1c", fontFamily: "'Playfair Display', serif" }}>↑ Watch time</p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#8a6450", marginTop: 4 }}>titles watched per session in test group</p>
            </div>
          </div>
        </section>

        <Divider />

        {/* Final thoughts */}
        <section>
          <SectionLabel>Final Thoughts</SectionLabel>
          <p style={{ fontSize: 14, color: "#8a6450", lineHeight: 1.8 }}>
            The best streaming experience isn't just about having the most content — it's about making the right content feel immediately reachable. By giving users clearer signals, faster adaptation, and genuine control, Netflix can turn browsing from a chore into part of the joy of watching.
          </p>
        </section>

      </div>

      <div className="text-center mt-8 mb-12">
        <Link to="/" style={{ fontFamily: "'DM Mono', monospace", display: "inline-block", padding: "12px 28px", background: "#b91c1c", color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: 4 }}>
          ← Back to Portfolio
        </Link>
      </div>

    </div>
  </div>
);

export default NetflixCaseStudy;

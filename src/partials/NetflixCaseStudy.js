import React from "react";
import chartImg1 from '../images/chart-1.png';
import chartImg2 from '../images/chart-2.png';
import netflixImg from '../images/netflix_logo.png';
import { Link } from "react-router-dom";

const Tag = ({ children }) => (
  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-red-50 text-red-600 border border-red-100 mr-2 mb-2">
    {children}
  </span>
);

const SectionLabel = ({ children }) => (
  <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">{children}</p>
);

const Divider = () => <hr className="my-10 border-gray-100" />;

const NetflixCaseStudy = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-4">
    <div className="max-w-3xl mx-auto">

      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
        <Link to="/" className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block">← Back to Portfolio</Link>
        <img src={netflixImg} alt="Netflix" className="h-10 mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Reducing Decision Fatigue on Netflix
        </h1>
        <p className="text-gray-500 text-base leading-relaxed mb-6">
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
      <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">TL;DR</p>
        <p className="text-gray-700 text-sm leading-relaxed">
          Netflix users spend up to 10% of their viewing time just deciding what to watch. This case study proposes an <strong>Enhanced Personalized Discovery</strong> system — mood-based categories, a region selector, and adaptive preference controls — targeting a 15% reduction in browse time and improved monthly retention.
        </p>
      </div>

      {/* Main content card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-10">

        {/* Context */}
        <section>
          <SectionLabel>Context</SectionLabel>
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Streaming Landscape</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
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
          <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-red-500">
            <p className="text-gray-800 font-medium leading-relaxed">
              If Netflix improves personalized content discovery with mood-based categories and adaptive preference controls, then users will spend less time browsing and watch more — leading to higher engagement and reduced churn.
            </p>
          </div>
        </section>

        <Divider />

        {/* Target User */}
        <section>
          <SectionLabel>Target User</SectionLabel>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Who Are We Solving For?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            While this affects all Netflix users, we focused on <strong>Millennials and Gen Z (18–35)</strong> — the most active segment, making up 33%+ of the user base. These users browse in short bursts, expect instant relevance, and are most likely to churn if recommendations feel stale.
          </p>
          <div className="bg-gray-50 rounded-xl p-5 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-red-500">62 min</p>
              <p className="text-xs text-gray-500 mt-1">avg. daily Netflix use (US)</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-500">~10%</p>
              <p className="text-xs text-gray-500 mt-1">of viewing time spent deciding</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-500">33%</p>
              <p className="text-xs text-gray-500 mt-1">of users are Millennials</p>
            </div>
          </div>
        </section>

        <Divider />

        {/* User Insights */}
        <section>
          <SectionLabel>User Insights</SectionLabel>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pain Points</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <span style={{width:10,height:10,borderRadius:"50%",background:"#ef4444",display:"inline-block",flexShrink:0,marginTop:5}}></span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Decision fatigue is real</p>
                <p className="text-gray-600 text-sm mt-1">A user watching 6 hrs/week may spend 1.5+ hrs/month just choosing what to watch. The scroll loop is frustrating, not enjoyable.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <span style={{width:10,height:10,borderRadius:"50%",background:"#ef4444",display:"inline-block",flexShrink:0,marginTop:5}}></span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Recommendations feel stale</p>
                <p className="text-gray-600 text-sm mt-1">The algorithm is slow to adapt when user preferences shift. Users who finish a genre binge keep seeing the same type of content weeks later.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <span style={{width:10,height:10,borderRadius:"50%",background:"#ef4444",display:"inline-block",flexShrink:0,marginTop:5}}></span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Hidden gems stay hidden</p>
                <p className="text-gray-600 text-sm mt-1">Niche titles that users would love get buried under mainstream recommendations, making the library feel smaller than it is.</p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Competitive Landscape */}
        <section>
          <SectionLabel>Competitive Landscape</SectionLabel>
          <h2 className="text-xl font-bold text-gray-900 mb-3">How Do Competitors Approach Discovery?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="pb-2 text-gray-500 font-medium">Platform</th>
                  <th className="pb-2 text-gray-500 font-medium">Strength</th>
                  <th className="pb-2 text-gray-500 font-medium">Gap</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-50">
                  <td className="py-3 font-medium text-gray-900">Amazon Prime</td>
                  <td className="py-3">Deep catalog, bundle perks</td>
                  <td className="py-3">Weak personalization UX</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-3 font-medium text-gray-900">Disney+</td>
                  <td className="py-3">Strong brand identity</td>
                  <td className="py-3">Limited content variety</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-3 font-medium text-gray-900">Hulu</td>
                  <td className="py-3">Live TV + next-day episodes</td>
                  <td className="py-3">Poor recommendation engine</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-red-600">Netflix</td>
                  <td className="py-3">Best algorithm foundation</td>
                  <td className="py-3 text-red-500 font-medium">Slow to adapt + mood-based gaps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <Divider />

        {/* Solutions */}
        <section>
          <SectionLabel>Solutions Explored</SectionLabel>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Three Options Considered</h2>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-5">
              <div className="flex justify-between items-start mb-2">
                <p className="font-semibold text-gray-900">1. AI-Powered Conversational Search</p>
                <span className="text-xs px-2 py-1 bg-yellow-50 text-yellow-600 rounded-full border border-yellow-100">High complexity</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Let users ask in natural language: "Find me a suspenseful thriller with a twist." Reduces browsing but requires advanced NLP and risks slow adoption.</p>
              <div className="flex gap-4 text-xs">
                <span className="text-green-600">Highly interactive</span>
                <span className="text-red-500">✗ Hard to build & adopt</span>
              </div>
            </div>
            <div className="border-2 border-red-200 rounded-xl p-5 bg-red-50">
              <div className="flex justify-between items-start mb-2">
                <p className="font-semibold text-gray-900">2. Enhanced Personalized Recommendations — Selected</p>
                <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded-full border border-green-100">Best fit</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Mood-based categories ("Late Night Laughs", "Mind-Bending Thrillers"), a Region Selector, and a Preference Control tab. Builds on existing systems with incremental improvements.</p>
              <div className="flex gap-4 text-xs">
                <span className="text-green-600">Feasible & scalable</span>
                <span className="text-green-600">High user impact</span>
              </div>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <div className="flex justify-between items-start mb-2">
                <p className="font-semibold text-gray-900">3. Social Playlist Sharing</p>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">Nice to have</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">User-generated playlists shared with friends or the Netflix community. Differentiating, but risks underuse and requires moderation.</p>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">What Ships First?</h2>
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
                  <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* GTM */}
        <section>
          <SectionLabel>Launch Strategy</SectionLabel>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Phased Rollout</h2>
          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-bold text-gray-900 mb-1">Phase 1</p>
              <p className="text-gray-500 text-xs">A/B test mood rows with 5% of Millennial users in US</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-bold text-gray-900 mb-1">Phase 2</p>
              <p className="text-gray-500 text-xs">Roll out Region Selector + Preference Controls to 20% of global base</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-bold text-gray-900 mb-1">Phase 3</p>
              <p className="text-gray-500 text-xs">Full launch with adaptive feedback loop enabled globally</p>
            </div>
          </div>
        </section>

        <Divider />

        {/* Metrics */}
        <section>
          <SectionLabel>Measuring Success</SectionLabel>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-red-500">↓ 15%</p>
              <p className="text-xs text-gray-500 mt-1">target reduction in avg. browse time</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-red-500">↑ Retention</p>
              <p className="text-xs text-gray-500 mt-1">monthly retention among 18–35 segment</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-red-500">↑ Watch time</p>
              <p className="text-xs text-gray-500 mt-1">titles watched per session in test group</p>
            </div>
          </div>
        </section>

        <Divider />

        {/* Final thoughts */}
        <section>
          <SectionLabel>Final Thoughts</SectionLabel>
          <p className="text-gray-600 leading-relaxed">
            The best streaming experience isn't just about having the most content — it's about making the right content feel immediately reachable. By giving users clearer signals, faster adaptation, and genuine control, Netflix can turn browsing from a chore into part of the joy of watching.
          </p>
        </section>

      </div>

      <div className="text-center mt-8 mb-12">
        <Link to="/" className="inline-block px-6 py-3 bg-red-600 text-white text-sm font-semibold rounded-xl hover:bg-red-700 transition-colors">
          ← Back to Portfolio
        </Link>
      </div>

    </div>
  </div>
);

export default NetflixCaseStudy;

import React from "react";
import instagram from "../images/instagram-logo-1.png";
import algorithm from "../images/algorithm.png";
import summary from "../images/feed_summary.png";
import performance from "../images/post_performance.png";
import why from "../images/why_seeing_this.png";
import { Link } from "react-router-dom";

const Tag = ({ children }) => (
  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-50 text-purple-600 border border-purple-100 mr-2 mb-2">
    {children}
  </span>
);

const SectionLabel = ({ children }) => (
  <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-2">{children}</p>
);

const Divider = () => <hr className="my-10 border-gray-100" />;

const InstagramCaseStudy = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-4">
    <div className="max-w-3xl mx-auto">

      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
        <Link to="/" className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block">← Back to Portfolio</Link>
        <img src={instagram} alt="Instagram" className="h-12 mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Rebuilding Trust Through Algorithm Transparency on Instagram
        </h1>
        <p className="text-gray-500 text-base leading-relaxed mb-6">
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
      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-3">TL;DR</p>
        <p className="text-gray-700 text-sm leading-relaxed">
          62% of social media users 18–24 don't understand why they see certain content. This case study proposes an <strong>Algorithm Transparency Toolkit</strong> — "Why am I seeing this?" labels, a centralized transparency hub, and creator visibility insights — to increase platform trust and intentional engagement among Gen Z.
        </p>
      </div>

      {/* Main content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-10">

        {/* Context */}
        <section>
          <SectionLabel>Context</SectionLabel>
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Problem with Black-Box Algorithms</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Instagram's recommendation algorithm shapes what billions of people see — but for most users, how it works is a complete mystery. College-aged users (18–24) who use Instagram as both consumers and creators report consistent frustration: posts get wildly different engagement for no apparent reason, and the platform offers almost no explanation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Meanwhile, competitors like TikTok and YouTube have started offering "Why this video?" explanations and feed reset controls, raising user expectations. Instagram risks falling behind on trust — a metric that increasingly drives Gen Z platform loyalty.
          </p>
        </section>

        <Divider />

        {/* Hypothesis */}
        <section>
          <SectionLabel>Hypothesis</SectionLabel>
          <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-purple-500">
            <p className="text-gray-800 font-medium leading-relaxed">
              If Instagram introduces a centralized algorithm transparency hub, "Why am I seeing this?" labels across all post types, and user controls to adjust feed preferences — then trust in the platform and intentional engagement will increase among 18–24 users.
            </p>
          </div>
        </section>

        <Divider />

        {/* Target User */}
        <section>
          <SectionLabel>Target User</SectionLabel>
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Gen Z Creator-Consumer</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Urban college students (18–24) who use Instagram in dual roles: passively consuming content and actively building an audience. They care deeply about visibility and fairness, and they're the cohort most likely to churn or shift platforms when they feel manipulated.
          </p>
          <div className="bg-gray-50 rounded-xl p-5 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-purple-500">62%</p>
              <p className="text-xs text-gray-500 mt-1">of 18–24s don't understand their feed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-500">70%+</p>
              <p className="text-xs text-gray-500 mt-1">want more transparency & control</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-500">↑ Trust</p>
              <p className="text-xs text-gray-500 mt-1">linked to platform loyalty in Gen Z</p>
            </div>
          </div>
        </section>

        <Divider />

        {/* User Insights */}
        <section>
          <SectionLabel>User Insights</SectionLabel>
          <h2 className="text-xl font-bold text-gray-900 mb-4">What Research Revealed</h2>
          <div className="space-y-3 mb-6">
            <div className="bg-gray-50 rounded-xl p-4 border-l-3 border-gray-200">
              <p className="text-gray-800 text-sm italic">"Sometimes my posts get 100 likes, and sometimes 20 — same time of day, same type of content. I have no idea why."</p>
              <p className="text-gray-400 text-xs mt-2">— College student, 21, NYC</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-800 text-sm italic">"I just want to know how to get my content seen without guessing what the algorithm wants."</p>
              <p className="text-gray-400 text-xs mt-2">— Aspiring creator, 20</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-xl">❓</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Feed feels unpredictable and arbitrary</p>
                <p className="text-gray-600 text-sm mt-1">Users can't build mental models of how their feed is curated, making every scroll feel like a gamble rather than a personalized experience.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-xl">📉</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Creators feel disempowered</p>
                <p className="text-gray-600 text-sm mt-1">Without knowing why a post performed well or poorly, creators can't improve. Frustration leads to posting less or leaving the platform.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-xl">🔒</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">No control over the experience</p>
                <p className="text-gray-600 text-sm mt-1">Instagram offers almost no tools to shape what you see. Users want to adjust for themselves — not have an invisible system decide for them.</p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* User Journey */}
        <section>
          <SectionLabel>User Journey</SectionLabel>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Where the Pain Points Hit</h2>
          <div className="space-y-2">
            {[
              { emoji: "🔓", step: "Login", pain: "Opens app to browse or post — no sense of what they'll see" },
              { emoji: "📜", step: "Feed Browse", pain: "Content appears in unexplained order — confusion about why certain posts surface" },
              { emoji: "🔍", step: "Explore", pain: "Suggested content doesn't match interests; no transparency labels" },
              { emoji: "❤️", step: "Engage", pain: "Likes/comments feel pointless — no feedback on how actions shape future recommendations" },
              { emoji: "📸", step: "Post Content", pain: "Post goes live but reach feels random and unexplainable" },
              { emoji: "📊", step: "Check Insights", pain: "Metrics exist but don't explain why reach was high or low" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl items-start">
                <span className="text-lg">{item.emoji}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.step}</p>
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">How Others Are Approaching Transparency</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="pb-2 text-gray-500 font-medium">Platform</th>
                  <th className="pb-2 text-gray-500 font-medium">Transparency Feature</th>
                  <th className="pb-2 text-gray-500 font-medium">Gap</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-50">
                  <td className="py-3 font-medium text-gray-900">TikTok</td>
                  <td className="py-3">"Why this video?" + feed reset</td>
                  <td className="py-3">No creator visibility insights</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-3 font-medium text-gray-900">YouTube</td>
                  <td className="py-3">Watch history management</td>
                  <td className="py-3">Limited in-feed explanations</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-3 font-medium text-gray-900">Spotify</td>
                  <td className="py-3">"Made For You / Because you listened to…"</td>
                  <td className="py-3">No user-adjustable controls</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-purple-600">Instagram</td>
                  <td className="py-3">Partial ad explanations only</td>
                  <td className="py-3 text-purple-500 font-medium">No centralized hub, no creator tools</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <Divider />

        {/* Solutions */}
        <section>
          <SectionLabel>MVP Definition</SectionLabel>
          <h2 className="text-xl font-bold text-gray-900 mb-4">The Algorithm Transparency Toolkit</h2>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-2">1. "Why am I seeing this?" Labels</p>
                  <p className="text-gray-600 text-sm">Info icon on every post — tap to see a plain-English reason ("You liked similar content") + option to adjust preferences. Immediate, contextual, low-friction.</p>
                </div>
                <img src={why} alt="Why am I seeing this" className="rounded-xl border border-gray-100 w-full" />
              </div>
            </div>
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-2">2. Algorithm Transparency Hub</p>
                  <p className="text-gray-600 text-sm">A centralized Settings page with visual breakdowns of how Feed, Explore, and Reels are ranked. FAQs, onboarding tutorial. Surfaced proactively to new users.</p>
                </div>
                <img src={algorithm} alt="Algorithm Hub" className="rounded-xl border border-gray-100 w-full" />
              </div>
            </div>
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-2">3. Creator Visibility Insights</p>
                  <p className="text-gray-600 text-sm">Analytics panel showing why a post reached (or didn't reach) certain audiences — format signals, share velocity, timing. Actionable tips per post.</p>
                </div>
                <img src={performance} alt="Creator Insights" className="rounded-xl border border-gray-100 w-full" />
              </div>
            </div>
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-2">4. Weekly Feed Summary</p>
                  <p className="text-gray-600 text-sm">Push notification / Story digest: "This week your feed was 50% friends, 30% suggested, 20% ads." Simple nudge toward reflection and control.</p>
                </div>
                <img src={summary} alt="Weekly Summary" className="rounded-xl border border-gray-100 w-full" />
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* User Testing */}
        <section>
          <SectionLabel>User Testing</SectionLabel>
          <h2 className="text-xl font-bold text-gray-900 mb-4">What Resonated Most</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { feature: '"Why am I seeing this?"', result: "Most valued — gave instant contextual clarity without extra steps", signal: "high" },
              { feature: "Transparency Hub", result: "Loved when visual and accessible; disliked when buried in settings", signal: "high" },
              { feature: "Creator Insights", result: "High value for frequent posters; less relevant for pure consumers", signal: "medium" },
              { feature: "Weekly Summary", result: "Nice-to-have but low urgency; better as a notification than a page", signal: "low" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{item.feature}</p>
                <p className="text-gray-500 text-xs">{item.result}</p>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-purple-500">↑ DAU</p>
              <p className="text-xs text-gray-500 mt-1">transparency hub engagement among 18–24</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-purple-500">↑ Post freq.</p>
              <p className="text-xs text-gray-500 mt-1">creators posting more after seeing insights</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-purple-500">↓ Churn</p>
              <p className="text-xs text-gray-500 mt-1">monthly churn among Gen Z segment</p>
            </div>
          </div>
        </section>

        <Divider />

        {/* Final Thoughts */}
        <section>
          <SectionLabel>Final Thoughts</SectionLabel>
          <p className="text-gray-600 leading-relaxed">
            Gen Z doesn't just want a better algorithm — they want to understand and trust the one they already have. Transparency isn't about exposing trade secrets; it's about giving users enough context to feel like partners in their own experience. If Instagram gets this right, it doesn't just reduce churn — it earns the kind of loyalty that no recommendation engine can buy.
          </p>
        </section>

      </div>

      <div className="text-center mt-8 mb-12">
        <Link to="/" className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-colors">
          ← Back to Portfolio
        </Link>
      </div>

    </div>
  </div>
);

export default InstagramCaseStudy;

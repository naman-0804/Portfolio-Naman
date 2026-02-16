import React, { useEffect, useState } from "react";

const CodingStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/coding-stats.json")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="stats-container">
        <div className="stats-wrapper">
          <div className="stats-summary" style={{ width: "100%", alignItems: "center" }}>
            <h2 className="stats-title">Loading...</h2>
          </div>
        </div>
      </div>
    );
  }

  const { easy, medium, hard, total } = stats.final || {};
  const github = stats.github || {};
  const youtube = stats.youtube || {};
  const devto = stats.devto || {};

  return (
    <section className="stats-container">
      <div className="stats-wrapper">

        {/* =========================================
            LEFT CARD: SUMMARY
           ========================================= */}
        <div className="stats-summary" style={{ height: "fit-content" }}>
          
          <div className="summary-top">
            <h2>DSA - Problem Solving</h2>
            
            <div className="total-solved">{total}</div>
            <span className="total-label">Total Solved</span>

            <div className="platforms-row">
              <span className="p-name leetcode">LeetCode</span>
              <span className="divider">•</span>
              <span className="p-name gfg">GFG</span>
              <span className="divider">•</span>
              <span className="p-name tuf">TUF</span>
              <span className="divider">•</span>
              <span className="p-name ninjas">Coding Ninjas</span>
              <span className="divider">•</span>
              <span className="p-name interviewbit">InterviewBit</span>
              <span className="divider">•</span>
              <span className="p-name codechef">CodeChef</span>
              <span className="divider">•</span>
              <span className="p-name codeforces">CodeForces</span>
            </div>
          </div>

          <div className="difficulty-breakdown">
            <div className="difficulty-item easy">
              <span>Easy</span>
              <span className="count">{easy}</span>
            </div>
            <div className="difficulty-item medium">
              <span>Medium</span>
              <span className="count">{medium}</span>
            </div>
            <div className="difficulty-item hard">
              <span>Hard</span>
              <span className="count">{hard}</span>
            </div>
          </div>
        </div>

        {/* =========================================
            RIGHT CARD: ACTIVITY & SOCIALS
           ========================================= */}
        <div className="stats-details">
          
          {/* --- GitHub Section --- */}
          <h2 className="stats-title">GitHub</h2>
          <div className="github-grid">
            <div className="platform-card">
              <span className="platform-badge">Commits</span>
              <div className="platform-total">{github.commits || 0}</div>
              <div className="platform-stats">Total contributions</div>
            </div>

            <div className="platform-card">
              <span className="platform-badge" style={{ background: "#8b5cf6" }}>Active</span>
              <div className="platform-total">{github.totalActiveDays || 0}</div>
              <div className="platform-stats">Days coding</div>
            </div>

            <div className="platform-card">
              <span className="platform-badge" style={{ background: "#f59e0b" }}>Stars</span>
              <div className="platform-total">{github.stars || 0}</div>
              <div className="platform-stats">Repositories starred</div>
            </div>

            <div className="platform-card">
              <span className="platform-badge" style={{ background: "#ec4899" }}>PRs</span>
              <div className="platform-total">{github.pushRequestsCount || 0}</div>
              <div className="platform-stats">Pull Requests</div>
            </div>
          </div>

          {/* --- Socials Section --- */}
          <h2 className="stats-title" style={{ marginTop: "1.5rem" }}>Socials</h2>
          <div className="github-grid">
            
            {/* YouTube Card */}
            <div className="platform-card">
              <span className="platform-badge" style={{ background: "#FF0000" }}>YouTube</span>
              <div className="platform-total">{youtube.viewCountText || "0 views"}</div>
              <div className="platform-stats">Total Channel Views</div>
            </div>

            {/* Dev.to Card */}
            <div className="platform-card">
              <span className="platform-badge" style={{ background: "#000000" }}>Dev.to</span>
              <div className="platform-total">{devto.totalViews || 0} views</div>
              <div className="platform-stats">Total Blog Views</div>
            </div>
            {/* LinkedIn Card */}
            <div className="platform-card">
              <span className="platform-badge" style={{ background: "#098d9c" }}>LinkedIn</span>
              <div className="platform-total"> 805 reactions</div>
              <div className="platform-stats">Total Linkedn Reaction</div>
            </div>
            {/* Vercel Card */}
            <div className="platform-card">
              <span className="platform-badge" style={{ background: "#7509c8b5" }}>Portfolio Views</span>
              <div className="platform-total">{stats.vercel ? stats.vercel.Pageviews : 0} views</div>
              <div className="platform-stats">Total Portfolio Views (30 Days)</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CodingStats;
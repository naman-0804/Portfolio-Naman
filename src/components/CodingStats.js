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
      <div className="stats-container" id="coding-stats">
        <div className="premium-section-header">
          <h2 className="premium-heading">Stats</h2>
          <p className="premium-subtitle">Loading metrics...</p>
        </div>
      </div>
    );
  }

  const { easy, medium, hard, total } = stats.final || {};
  const github = stats.github || {};
  const youtube = stats.youtube || {};
  const devto = stats.devto || {};

  return (
    <section className="stats-container" id="coding-stats">
      <div className="premium-section-header">
        <h2 className="premium-heading">Metrics & Impact</h2>
        <p className="premium-subtitle">A data-driven look at my open-source contributions, problem-solving, and community reach.</p>
      </div>

      <div className="stats-bento-grid">
        
        {/* DSA - Large Bento */}
        <div className="stats-bento-card dsa-bento">
          <div className="dsa-header">
            <h3>DSA Problem Solving</h3>
            <div className="dsa-total">
              <span className="total-num">{total}</span>
              <span className="total-label">Total Solved</span>
            </div>
          </div>
          
          <div className="dsa-platforms">
            <span>LeetCode</span> • <span>GFG</span> • <span>TUF</span> • <span>Coding Ninjas</span> • <span>CodeForces</span>
          </div>

          <div className="dsa-bars">
            <div className="diff-bar easy-bar">
              <span className="diff-label">Easy</span>
              <div className="bar-track"><div className="bar-fill" style={{ width: '40%' }}></div></div>
              <span className="diff-count">{easy}</span>
            </div>
            <div className="diff-bar medium-bar">
              <span className="diff-label">Medium</span>
              <div className="bar-track"><div className="bar-fill" style={{ width: '50%' }}></div></div>
              <span className="diff-count">{medium}</span>
            </div>
            <div className="diff-bar hard-bar">
              <span className="diff-label">Hard</span>
              <div className="bar-track"><div className="bar-fill" style={{ width: '10%' }}></div></div>
              <span className="diff-count">{hard}</span>
            </div>
          </div>
        </div>

        {/* GitHub Stats - Grid inside Bento */}
        <div className="stats-bento-card github-bento">
          <h3>GitHub Activity</h3>
          <div className="github-metrics">
            <div className="metric-box">
              <span className="metric-title">Commits</span>
              <span className="metric-val">{github.commits || 0}</span>
            </div>
            <div className="metric-box">
              <span className="metric-title" style={{ color: 'var(--amber)' }}>Active Days</span>
              <span className="metric-val">{github.totalActiveDays || 0}</span>
            </div>
            <div className="metric-box">
              <span className="metric-title" style={{ color: 'var(--violet)' }}>Stars</span>
              <span className="metric-val">{github.stars || 0}</span>
            </div>
            <div className="metric-box">
              <span className="metric-title" style={{ color: 'var(--rose)' }}>PRs</span>
              <span className="metric-val">{github.pushRequestsCount || 0}</span>
            </div>
          </div>
        </div>

        {/* SQL Stats */}
        <div className="stats-bento-card sql-bento">
          <h3>SQL Problems</h3>
          <div className="sql-val">85</div>
          <p className="sql-desc">Queries mastered</p>
        </div>

        {/* Publications */}
        <div className="stats-bento-card pub-bento">
          <h3>Publications</h3>
          <div className="pub-tag">Zenodo</div>
          <div className="pub-metrics">
            <div><span className="pub-val">276</span> Views</div>
            <div><span className="pub-val">52</span> Downloads</div>
          </div>
        </div>

        {/* Social Reach - Wide Bento */}
        <div className="stats-bento-card social-bento">
          <h3>Community Reach</h3>
          <div className="social-metrics-row">
            <div className="social-stat">
              <span className="social-platform" style={{ color: '#ef4444' }}>YouTube</span>
              <span className="social-num">{youtube.viewCountText || "0"}</span>
            </div>
            <div className="social-stat">
              <span className="social-platform" style={{ color: '#10b981' }}>Dev.to</span>
              <span className="social-num">{devto.totalViews || 0} views</span>
            </div>
            <div className="social-stat">
              <span className="social-platform" style={{ color: '#3b82f6' }}>LinkedIn</span>
              <span className="social-num">805 reactions</span>
            </div>
            <div className="social-stat">
              <span className="social-platform" style={{ color: '#a855f7' }}>Portfolio</span>
              <span className="social-num">{stats.vercel ? stats.vercel.Pageviews : 0} views</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CodingStats;
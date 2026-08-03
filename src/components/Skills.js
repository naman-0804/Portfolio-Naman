import React from "react";
import {
  FaServer, FaReact, FaDatabase, FaCloud, FaTools, FaCode, FaTrophy
} from "react-icons/fa";

function Skills() {
  const skillsData = [
    {
      title: "Backend",
      content: "Express js, Flask",
      icon: <FaServer />,
      color: "#10b981"
    },
    {
      title: "Frontend",
      content: "React, Vite",
      icon: <FaReact />,
      color: "#3b82f6"
    },
    {
      title: "Database",
      content: "MongoDB, MySQL, Supabase",
      icon: <FaDatabase />,
      color: "#f59e0b"
    },
    {
      title: "Cloud",
      content: "Amazon Web Services, GCP",
      icon: <FaCloud />,
      color: "#8b5cf6"
    },
    {
      title: "Coding",
      content: "DSA(500+), C++, Python, Java",
      icon: <FaCode />,
      color: "#ec4899"
    },
    {
      title: "Tools",
      content: "Git, Figma, Postman, WinSCP, PUTTY, Clerk",
      icon: <FaTools />,
      color: "#6366f1"
    },
  ];

  const achievementsData = [
    {
      date: "Jan 2026",
      title: "TCS Digital Selection",
      description: "Cleared TCS NQT for Prime role and TCS Prime interview process and got selected for the role of TCS Digital.",
    },
    {
      date: "Dec 2025",
      title: "Infosys Selection",
      description: "Cleared Infosys aptitude exam, interviews and got selected as an intern for the role of Software Developer.",
    },
    {
      date: "Nov 2024",
      title: "VITISH (SIH Internal Hackathon)",
      description: "Qualified two elimination rounds and got nominated for official SIH24 from VIT Chennai out of 600 teams.",
    },
    {
      date: "Jun 2024",
      title: "Software Developer Intern",
      description: "Secured a summer internship with The Entrepreneurship Network and learned a lot of new skills.",
    },
    {
      date: "Apr 2024",
      title: "Solveathon 6th Place",
      description: "Ranked 6th in the Solveathon and received special appreciation from vice chancellor of VIT for our idea.",
    },
    {
      date: "Mar 2024",
      title: "Devshouse 4th Place",
      description: "Participated in the Devshouse competition and secured the 4th place among 600+ teams.",
    },
  ];

  const certificationsData = [
    {
      title: "Oracle Cloud Infrastructure Associate",
      year: "2025",
      score: "Passed",
    },
    {
      title: "Microsoft Azure DP-900",
      year: "2024",
      score: "925 / 1000",
    },
    {
      title: "Spoken Tutorial – IIT Bombay (C++)",
      year: "2023",
      score: "74%",
    },
    {
      title: "Spoken Tutorial – IIT Bombay (C)",
      year: "2023",
      score: "77.5%",
    },
    {
      title: "Spoken Tutorial – IIT Bombay (Python)",
      year: "2023",
      score: "80%",
    },
  ];

  return (
    <div id="skills-section">

      {/* Skills Header */}
      <div className="premium-section-header" style={{ marginBottom: "2.5rem" }}>
        <h2 className="premium-heading">Skills & Tools</h2>
        <p className="premium-subtitle">Languages, frameworks, databases, and continuous learning.</p>
      </div>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
            style={{ "--skill-color": skill.color }}
          >
            <div className="skill-icon-container">
              {skill.icon}
            </div>
            <div className="skill-content">
              <h3>{skill.title}</h3>
              <div className="skill-tags">
                {skill.content.split(", ").map((tag, i) => (
                  <span key={i} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="premium-section-header" style={{ marginBottom: "2.5rem", marginTop: "3.5rem" }}>
        <h2 className="premium-heading">Milestones</h2>
        <p className="premium-subtitle">Awards, hackathons, and professional highlights.</p>
      </div>
      <div className="Achievements">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <span className="achievement-date">{achievement.date}</span>
            <div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="premium-section-header" style={{ marginBottom: "2.5rem", marginTop: "3.5rem" }}>
        <h2 className="premium-heading">Certifications</h2>
        <p className="premium-subtitle">Verified certifications and coursework.</p>
      </div>
      <div className="certifications-container">
        {certificationsData.map((cert, index) => (
          <div key={index} className="certification-card">
            <h3>{cert.title}</h3>
            <span className="certification-score">{cert.score}</span>
            <span className="certification-year">{cert.year}</span>
          </div>
        ))}
      </div>

      {/* Scholarship Section */}
      <div className="scholarship-banner">
        <FaTrophy className="scholarship-icon" />
        <div>
          <h3>Annual Academic Excellence Scholarship</h3>
          <p>
            Awarded scholarship from INDIAN AIR FORCE each academic year for academic excellence in class 12th CBSE Boards.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Skills;
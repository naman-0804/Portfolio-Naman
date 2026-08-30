import React from "react";
import {
  FaServer, FaReact, FaDatabase, FaCloud, FaTools, FaCode, FaRobot
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
      content: "React, Vite, Next.js",
      icon: <FaReact />,
      color: "#3b82f6"
    },
    {
      title: "Database",
      content: "MongoDB, MySQL, Supabase, DynamoDB",
      icon: <FaDatabase />,
      color: "#f59e0b"
    },
    {
      title: "Cloud",
      content: "AWS, GCP",
      icon: <FaCloud />,
      color: "#8b5cf6"
    },
    {
      title: "Coding",
      content: "DSA(600+), C++, Python, Java",
      icon: <FaCode />,
      color: "#ec4899"
    },
    {
      title: "Tools",
      content: "Git, Postman, WinSCP, PUTTY, Clerk, Docker",
      icon: <FaTools />,
      color: "#6366f1"
    },
    {
      title: "AI",
      content: "LangGraph, LangChain, NLP, ML, DL",
      icon: <FaRobot />,
      color: "#ef4444"
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
      description: "Cleared Infosys exam, interviews and got selected for the role of Systems Engineer.",
    },
    {
      date: "Nov 2024",
      title: "SIH Internal Hackathon 22nd Place",
      description: "Qualified two elimination rounds and got nominated for official SIH24 from VIT Chennai out of 1000 teams.",
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
    {
      title: "Academic Excellence Scholarship (Air Force)",
      year: "2022",
      score: "Awarded for getting above 90% in 12th",
    },
  ];

  return (
    <div id="skills-section">

      {/* Skills Header */}
      <div className="premium-section-header" style={{ marginBottom: "2.5rem" }}>
        <h2 className="premium-heading">Skills & Tools</h2>

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

      </div>
      <div className="certifications-grid">
        {certificationsData.map((cert, index) => (
          <div key={index} className="cert-item">
            <span className="cert-year">{cert.year}</span>
            <h3>{cert.title}</h3>
            <span className="cert-score">{cert.score}</span>
          </div>
        ))}
      </div>



    </div>
  );
}

export default Skills;
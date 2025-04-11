import React from "react";
import { FaServer, FaReact, FaDatabase, FaCloud, FaTools, FaCode } from "react-icons/fa";

function Skills() {
  const skillsData = [
    { 
      title: "Backend", 
      content: "Node.js, Python, Flask", 
      icon: <FaServer className="skill-icon" />,
      color: "#4CAF50"
    },
    { 
      title: "Frontend", 
      content: "JavaScript, React, HTML", 
      icon: <FaReact className="skill-icon" />,
      color: "#2196F3"
    },
    { 
      title: "Database", 
      content: "MongoDB, MySQL, PostgreSQL", 
      icon: <FaDatabase className="skill-icon" />,
      color: "#FF9800"
    },
    { 
      title: "Cloud", 
      content: "Amazon Web Services", 
      icon: <FaCloud className="skill-icon" />,
      color: "#9C27B0"
    },
    { 
      title: "Coding", 
      content: "DSA(250+), C++, Python, C, Java", 
      icon: <FaCode className="skill-icon" />,
      color: "#9C27B0"
    },
    { 
      title: "Tools", 
      content: "Git, GitHub, Docker, Figma, Postman", 
      icon: <FaTools className="skill-icon" />,
      color: "#E91E63"
    },
  ];

  return (
    <div id="skills-section">
      {/* Skills Section */}
      <h1 className="section-title">Skills</h1>
      
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item" style={{"--skill-color": skill.color}}>
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
      <h1 className="section-title">Achievements</h1>
      <div className="Achievements">
        {[
          {
            date: "November 2024",
            title: "VITISH (SIH Internal Hackathon) Nominated for Official SIH24",
            description:
              "Qualified two elimination rounds and got nominated for official SIH24 from VIT Chennai out of 600 teams.",
          },
          {
            date: "June 2024",
            title: "Software Developer Intern",
            description:
              "Secured a summer internship with The Entrepreneurship Network and learned a lot of new skills.",
          },
          {
            date: "April 2024",
            title: "Solveathon 6th Place",
            description:
              "Ranked 6th in the Solveathon and received special appreciation from vice chancellor of VIT for our idea.",
          },
          {
            date: "March 2024",
            title: "Devshouse 4th Place",
            description:
              "Participated in the Devshouse competition and secured the 4th place among 600+ teams.",
          },
        ].map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-date">{achievement.date}</div>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

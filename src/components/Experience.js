import React from 'react';
import { FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

function Experience() {

  const experienceData = [
    {
      role: "Upcoming SE at TCS Digital",
      company: "TCS Digital",
      date: "2026 — Present",
      summary: "Starting with focus on AIML, Langchain and LLMs, Cloud technology, and Java based projects.",
      technologies: ["ML", "NLP", "DL", "Cloud", "Java"]
    },
    {
      role: "Software Development Intern",
      company: "The Entrepreneurship Network (TEN)",
      date: "Jun — Jul 2024",
      summary: "Built an Employee Management System using React and Flask with MongoDB. Gained hands-on experience working in a real-world dev environment.",
      technologies: ["React", "Flask", "MongoDB", "Render"]
    },
    {
      role: "Web Developer",
      company: "Biosphere Club",
      date: "2022 — 2023",
      summary: "Developed and maintained the club's responsive website, ensuring it remained user-friendly and up-to-date using HTML, CSS, and JavaScript.",
      technologies: ["React.js"]
    }
  ];

  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Vellore Institute of Technology",
      date: "2022 — 2026",
      location: "Chennai",
      detail: "Cleared VITEEE 2022 and got selected for pursuing undergraduate degree under CSE branch ."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Peace Public School",
      date: "2018 — 2022",
      location: "Ludhiana",
      detail: "Class XII — 90.4% · Class X — 89.4%"
    },
    {
      degree: "Junior Education",
      institution: "Air Force Bal Bharati School (AFBBS)",
      date: "2012 - 2017",
      location: "Delhi",
      detail: "Class III-VII"
    }
  ];

  return (
    <div id="experience-section">
      <div className="section-container">

        {/* Experience Header */}
        <div className="premium-section-header" style={{ marginBottom: "2.5rem" }}>
          <h2 className="premium-heading">Experience</h2>

        </div>

        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-entry">
              <span className="timeline-date">{exp.date}</span>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <div className="timeline-company">
                  <FaBuilding className="text-icon" /> <span>{exp.company}</span>
                </div>
                <p className="timeline-summary">{exp.summary}</p>
                <div className="tech-stack">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Header */}
        <div className="premium-section-header" style={{ marginBottom: "2.5rem", marginTop: "3.5rem" }}>
          <h2 className="premium-heading">Education</h2>

        </div>

        <div className="experience-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="edu-entry">
              <span className="edu-date">{edu.date}</span>
              <div className="edu-content">
                <h3>{edu.degree}</h3>
                <div className="edu-institution">
                  <FaBuilding className="text-icon" /> <span>{edu.institution}</span>
                </div>
                {edu.location && (
                  <div className="edu-location">
                    <FaMapMarkerAlt className="text-icon" /> <span>{edu.location}</span>
                  </div>
                )}
                <p className="edu-detail">{edu.detail}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Experience;
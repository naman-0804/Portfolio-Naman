import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaTools, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

function Experience() {

  const experienceData = [
    {
      role: "Upcoming SE at TCS Digital",
      company: "TCS Digital",
      date: "2026 - Current",
      description: "Cleared interview process and selected for the role of Software Engineer Intern at TCS Digital, starting in 2026.",
      technologies: ["Full-Stack", "Cloud", "ML","DevOps"]
    },
    {
      role: "Software Development Intern",
      company: "The Entrepreneurship Network (TEN)",
      date: "June 2024 - July 2024",
      description: "Worked as a software development intern at The Entrepreneurship Network (TEN), contributing to various projects and gaining valuable industry experience.",
      technologies: ["React", "Flask", "MongoDB"]
    },
    {
      role: "Web Developer",
      company: "Biosphere Club",
      date: "2022 - 2023",
      description: "Active member of the Biosphere Club, responsible for developing and maintaining the club's website, ensuring it is up-to-date and user-friendly.",
      technologies: ["HTML", "CSS", "JavaScript", "Python"]
    }
  ];

  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Vellore Institute of Technology",
      date: "2022 - 2026",
      location: "Vellore, India",
      description: "Currently pursuing undergraduate degree with focus on software development and computer science fundamentals."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Peace Public School",
      date: "2020 - 2022",
      location: "", // Optional
      achievements: [
        "Completed Class XII in 2022 with 90.4% marks",
        "Completed Class X in 2020 with 90% marks"
      ]
    }
  ];

  return (
    <div id="experience-section">
      <div className="section-container">
        
        {/* Experience Header */}
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-grid">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="card-header">
                <div className="icon-container">
                  <FaBriefcase />
                </div>
                <h3>{exp.role}</h3>
              </div>
              
              <div className="card-body">
                <div className="info-row">
                  <div className="info-item">
                    <FaBuilding className="text-icon" /> <span>{exp.company}</span>
                  </div>
                  <div className="info-item">
                    <FaCalendarAlt className="text-icon" /> <span>{exp.date}</span>
                  </div>
                </div>
                
                <p>{exp.description}</p>
                
                <div className="tech-container">
                  <div className="tech-label"><FaTools /> Technologies:</div>
                  <div className="tech-pills">
                    {exp.technologies.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Education Header */}
        <br></br>
        <h2 className="section-title education-title">Education</h2>
        
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="card-header">
                <div className="icon-container">
                  <FaGraduationCap />
                </div>
                <h3>{edu.degree}</h3>
              </div>
              
              <div className="card-body">
                <div className="info-row">
                  <div className="info-item">
                    <FaBuilding /> <span>{edu.institution}</span>
                  </div>
                  <div className="info-item">
                    <FaCalendarAlt /> <span>{edu.date}</span>
                  </div>
                  {edu.location && (
                    <div className="info-item">
                      <FaMapMarkerAlt /> <span>{edu.location}</span>
                    </div>
                  )}
                </div>
                
                {edu.description && <p>{edu.description}</p>}
                
                {edu.achievements && (
                  <div className="achievements">
                    <ul>
                      {edu.achievements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Experience;
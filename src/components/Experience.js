import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaTools, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

function Experience() {

  const experienceData = [
    {
      role: "Upcoming SE at TCS Digital",
      company: "TCS Digital",
      date: "2026 - Current",
      points: [
        "Cleared interview process and selected for Digital role",
        "Starting in 2026 with focus on Full-Stack development and Cloud technologies",
        "Opportunity to work on DevOps technologies and BigData projects"
      ],
      technologies: ["Full-Stack", "Cloud", "ML","DevOps"]
    },
    {
      role: "Software Development Intern",
      company: "The Entrepreneurship Network (TEN)",
      date: "June 2024 - July 2024",
      points: [
        "Worked on Employee System using React and Flask",
        "Worked with MongoDB for database management",
        "Gained hands-on experience in real-world development environment"
      ],
      technologies: ["React", "Flask", "MongoDB"]
    },
    {
      role: "Web Developer",
      company: "Biosphere Club",
      date: "2022 - 2023",
      points: [
        "Developed and maintained club's responsive website",
        "Ensured site remains user-friendly and up-to-date",
        "Implemented features using HTML, CSS, JavaScript"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Python"]
    }
  ];

  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Vellore Institute of Technology",
      date: "2022 - 2026",
      location: "Chennai",
      points: [
        "Pursuing undergraduate degree in Computer Science and Engineering",
        "Focus on software development and computer science fundamentals",
        "Gaining experience through projects and practical coursework"
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Peace Public School",
      date: "2020 - 2022",
      location: "Ludhiana",
      points: [
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
                
                <div className="description-box">
                  <ul className="description-points">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                
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
                
                {edu.points && (
                  <div className="description-box">
                    <ul className="description-points">
                      {edu.points.map((point, i) => (
                        <li key={i}>{point}</li>
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
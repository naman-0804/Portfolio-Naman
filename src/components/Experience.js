import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaTools, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

function Experience() {
  return (
    <div id="experience-section">
      <div className="section-container">
        <div className="section-header">
          <h1>Professional Experience</h1>
          <div className="section-underline"></div>
        </div>
        
        <div className="experience-grid">
          <div className="experience-card">
            <div className="card-header">
              <div className="icon-container">
                <FaBriefcase />
              </div>
              <h3>Software Development Intern</h3>
            </div>
            <div className="card-body">
              <div className="company-info">
                <div className="company">
                  <FaBuilding /> <span>The Entrepreneurship Network (TEN)</span>
                </div>
                <div className="duration">
                  <FaCalendarAlt /> <span>June 2023 - July 2023</span>
                </div>
              </div>
              <p>
                Worked as a software development intern at The Entrepreneurship Network (TEN), 
                contributing to various projects and gaining valuable industry experience.
              </p>
              <div className="tech-container">
                <div className="tech-label"><FaTools /> Technologies:</div>
                <div className="tech-pills">
                  <span>React</span>
                  <span>Flask</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="experience-card">
            <div className="card-header">
              <div className="icon-container">
                <FaBriefcase />
              </div>
              <h3>Web Developer</h3>
            </div>
            <div className="card-body">
              <div className="company-info">
                <div className="company">
                  <FaBuilding /> <span>Biosphere Club</span>
                </div>
                <div className="duration">
                  <FaCalendarAlt /> <span>2022 - 2023</span>
                </div>
              </div>
              <p>
                Active member of the Biosphere Club, responsible for developing and maintaining 
                the club's website, ensuring it is up-to-date and user-friendly.
              </p>
              <div className="tech-container">
                <div className="tech-label"><FaTools /> Technologies:</div>
                <div className="tech-pills">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-header education-header">
          <h1>Education</h1>
          <div className="section-underline"></div>
        </div>
        
        <div className="education-grid">
          <div className="education-card">
            <div className="card-header">
              <div className="icon-container education">
                <FaGraduationCap />
              </div>
              <h3>B.Tech in Computer Science and Engineering</h3>
            </div>
            <div className="card-body">
              <div className="institution-info">
                <div className="institution">
                  <FaBuilding /> <span>Vellore Institute of Technology</span>
                </div>
                <div className="duration">
                  <FaCalendarAlt /> <span>2022 - 2026</span>
                </div>
                <div className="location">
                  <FaMapMarkerAlt /> <span>Vellore, India</span>
                </div>
              </div>
              <p>Currently pursuing undergraduate degree with focus on software development and computer science fundamentals.</p>
            </div>
          </div>
          
          <div className="education-card">
            <div className="card-header">
              <div className="icon-container education">
                <FaGraduationCap />
              </div>
              <h3>Higher Secondary Education</h3>
            </div>
            <div className="card-body">
              <div className="institution-info">
                <div className="institution">
                  <FaBuilding /> <span>Peace Public School</span>
                </div>
                <div className="duration">
                  <FaCalendarAlt /> <span>2020 - 2022</span>
                </div>
              </div>
              <div className="achievements">
                <p>• Completed Class XII in 2022 with 90.4% marks</p>
                <p>• Completed Class X in 2020 with 90% marks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

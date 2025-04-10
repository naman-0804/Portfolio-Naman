import React, { useState } from 'react';
import okrapic from '../Images/okra-website.png';
import vitalized from '../Images/vitalized-website.png';
import medhub from '../Images/medhub360-website.png';
import sl from '../Images/SL-website.png';
import sahyogi from '../Images/sahyogi.png';
import aws from '../Images/AWS.png';
import db from '../Images/Diabetes.png';
import wcs from '../Images/th.png';
import { FaGithub, FaYoutube } from 'react-icons/fa';

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 'ml-button',
      title: 'Diabetes Prediction on AWS',
      image: db,
      description: 'Machine learning model deployed on AWS to predict diabetes risk based on patient data.',
      technologies: ['Python', 'AWS', 'Machine Learning', 'Flask'],
      github: 'https://github.com/naman-0804/Diabetes_Prediction_onAWS',
      youtube: 'https://youtu.be/qMkM-zELXGI?si=OnXqZru0goOXu35-'
    },
    {
      id: 'vitalized-button',
      title: 'Vitalized',
      image: vitalized,
      description: 'A wellness platform for VIT students to track and improve their mental and physical health.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/naman-0804/vitalized-vit',
      youtube: 'https://youtu.be/PPTDtrzJOT8?si=e32v89AZyyjjZ0av'
    },
    {
      id: 'sahyogi-button',
      title: 'Sahyogi',
      image: sahyogi,
      description: 'A platform connecting volunteers with organizations for social causes and community service.',
      technologies: ['React', 'Firebase', 'Material UI'],
      github: 'https://github.com/naman-0804/sih-site',
      youtube: 'https://youtu.be/eXR-V_Ck7VA?si=OxYaDhNPUAbsYDEK'
    },
    {
      id: 'AWS-button',
      title: 'Serverless Web App on AWS',
      image: aws,
      description: 'A fully serverless web application deployed on AWS using Lambda, API Gateway, and DynamoDB.',
      technologies: ['AWS', 'Serverless', 'JavaScript', 'DynamoDB'],
      github: 'https://github.com/naman-0804/Cloud-AWS',
      youtube: 'https://youtu.be/bld7EkDXFR4?si=4ccr0Le0AUv6gtfL'
    },
    {
      id: 'wcs-button',
      title: 'AI Webpage Content Summarizer',
      image: wcs,
      description: 'An AI-powered tool that summarizes web page content using natural language processing.',
      technologies: ['Python', 'NLP', 'AI', 'Flask'],
      github: 'https://github.com/naman-0804/Ai_content_summarizer',
      youtube: 'https://www.youtube.com/watch?v=X9xr08p2mtk'
    },
    {
      id: 'medhub-button',
      title: 'Medhub360',
      image: medhub,
      description: 'A comprehensive healthcare platform connecting patients with doctors and medical services.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/naman-0804/Healthcare',
      youtube: 'https://www.youtube.com/@naman_0804'
    },
    {
      id: 'asl-button',
      title: 'ASL/ISL Translator',
      image: sl,
      description: 'An application that translates American and Indian Sign Language to text using computer vision.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
      github: 'https://github.com/naman-0804/Sign-Language-Translator',
      youtube: 'https://youtu.be/qMkM-zELXGI?si=hYzMO1V07OooRW-y'
    },
    {
      id: 'okra-button',
      title: 'Okra Maturity Analysis',
      image: okrapic,
      description: 'An image processing system that analyzes the maturity of okra plants for optimal harvesting.',
      technologies: ['Python', 'Computer Vision', 'Image Processing'],
      github: 'https://github.com/naman-0804/Okra-Maturity-Analysis',
      youtube: 'https://www.youtube.com/@naman_0804'
    }
  ];

  function redirectToProject(url) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  return (
    <div id="project-section" className="project">
      <div className="project-header">
        <h1>Projects</h1>
        <p>A showcase of my technical skills and creative problem-solving</p>
      </div>
      
      <div className="project-grid">
        {projects.map((project, index) => (
          <div 
            className="project-item" 
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
              <div className={`project-overlay ${hoveredProject === project.id ? 'active' : ''}`}>
                <div className="project-description">
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <button 
                  className="view-project-btn youtube-btn"
                  onClick={() => redirectToProject(project.youtube)}
                >
                  <FaYoutube /> View on YouTube
                </button>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="project-links">
                <button 
                  className="icon-button github-btn"
                  onClick={() => redirectToProject(project.github)}
                  aria-label="View GitHub repository"
                >
                  <FaGithub />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

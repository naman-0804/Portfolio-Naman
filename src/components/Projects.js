import React, { useState } from 'react';
import okrapic from '../Images/okra-website.png';
import vitalized from '../Images/vitalized-website.png';
import medhub from '../Images/medhub360-website.png';
import sl from '../Images/SL-website.png';
import dl from '../Images/Filetransfer.png';
import sahyogi from '../Images/sahyogi.png';
import aws from '../Images/AWS.png';
import db from '../Images/Diabetes.png';
import wcs from '../Images/th.png';
import lex from '../Images/lex.png';
import Portfolio from '../Images/portfolio.png';
import { FaGithub, FaYoutube } from 'react-icons/fa';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 'dl-button',
      title: 'Upload and download without login',
      image: dl,
      description: 'Transfer assignments from lab computers to your device without logging into Gmail.',
      technologies: ['GCP', 'Google API', 'Javascript', 'Flask'],
      github: 'https://github.com/naman-0804/File_Storage',
      youtube: 'https://www.youtube.com/watch?v=5xgZ00DH89w'
    },
    {
      id: 'ml-button',
      title: 'Diabetes Prediction on AWS',
      image: db,
      description: 'Project deployed on AWS to predict diabetes risk based on patient data.',
      technologies: ['Python', 'AWS', 'Machine Learning', 'Flask'],
      github: 'https://github.com/naman-0804/Diabetes_Prediction_onAWS',
      youtube: 'https://youtu.be/OqBdSu4jDhs?si=s80-z3eRVexeqTu1'
    },
    {
      id: 'vitalized-button',
      title: 'Vitalized',
      image: vitalized,
      description: 'A platform for VIT students/faculties to find ongoing researches.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/naman-0804/vitalized-vit',
      youtube: 'https://youtu.be/PPTDtrzJOT8?si=e32v89AZyyjjZ0av'
    },
    {
      id: 'sahyogi-button',
      title: 'Sahyogi',
      image: sahyogi,
      description: 'A platform focussing on mute people in healthcare.',
      technologies: ['React', 'Firebase', 'Material UI'],
      github: 'https://github.com/naman-0804/sih-site',
      youtube: 'https://youtu.be/eXR-V_Ck7VA?si=OxYaDhNPUAbsYDEK'
    },
    {
      id: 'AWS-button',
      title: 'Serverless Web App on AWS',
      image: aws,
      description: 'A fully serverless web application deployed on AWS using its features.',
      technologies: ['AWS', 'Serverless', 'JavaScript', 'DynamoDB'],
      github: 'https://github.com/naman-0804/Cloud-AWS',
      youtube: 'https://youtu.be/bld7EkDXFR4?si=4ccr0Le0AUv6gtfL'
    },
    {
      id: 'wcs-button',
      title: 'AI Webpage Content Summarizer',
      image: wcs,
      description: 'An AI-powered tool that summarizes web page content using gemini api.',
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
      description: 'Translates American and Indian Sign Language to text using computer vision.',
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
    },
    {
      id: 'lex-button',
      title: 'Lex ChatBot',
      image: lex,
      description: 'A chatbot built using AWS Lex.',
      technologies: ['Chat Bot', 'Ai'],
      github: 'https://github.com/naman-0804?tab=repositories',
      youtube: 'https://www.youtube.com/watch?v=lU9DK8GRS1k'
    },
    {
      id: 'portfolio-button',
      title: 'Portfolio Website',
      image: Portfolio,
      description: 'About Me',
      technologies: ['React', 'EmailJs'],
      github: 'https://github.com/naman-0804/Portfolio-Naman',
      youtube: 'https://www.youtube.com/watch?v=u4lYKwQs48s'
    }
  ];

  function redirectToProject(url) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  // Handle both hover on desktop and touch on mobile
  const handleProjectInteraction = (projectId) => {
    if (window.innerWidth <= 768) {
      // Toggle for mobile (touch)
      setActiveProject(activeProject === projectId ? null : projectId);
    } else {
      // Set on hover for desktop
      setActiveProject(projectId);
    }
  };

  // Clear active project on mouse leave (desktop only)
  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setActiveProject(null);
    }
  };

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
            onMouseEnter={() => handleProjectInteraction(project.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleProjectInteraction(project.id)}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
              <div className={`project-overlay ${activeProject === project.id ? 'active' : ''}`}>
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
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering card click
                    redirectToProject(project.youtube);
                  }}
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
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering card click
                    redirectToProject(project.github);
                  }}
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

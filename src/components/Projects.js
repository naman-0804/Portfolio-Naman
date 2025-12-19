import React, { useState } from 'react';
import { FaGithub, FaYoutube } from 'react-icons/fa';

// Import Images
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
import devops from '../Images/devops.png';
import auth from '../Images/auth.png';
import route from '../Images/route.png';
import ecommerce from '../Images/ecommerce.png';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 'routeguard',
      title: 'RouteGuard: Real-Time Detection',
      description: 'Real-Time Loitering Detection and safe Navigation using OpenCV and OSM.',
      image: route,
      technologies: ['React', 'Python', 'OpenCV', 'OSM API'],
      github: 'https://github.com/naman-0804/RouteGuard',
      youtube: 'https://www.youtube.com/watch?v=LGjBXVr_ZvM'
    },
    {
      id: 'ecommerce-ml',
      title: 'E-Commerce ML Prediction',
      description: 'Customer Segmentation and Purchase Prediction using Scikit-learn.',
      image: ecommerce, 
      technologies: ['Scikit-learn', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/naman-0804/E-Commerce-Customer-Segmentation-Purchase-Prediction',
      youtube: ''
    },
    {
      id: 'auth-button',
      title: 'Next.js Chat App',
      description: 'Real-time chat application using Next.js, Clerk Auth and GetStream.',
      image: auth,
      technologies: ['Next.js', 'Clerk', 'GetStream'],
      github: 'https://github.com/naman-0804/Chat-App',
      youtube: 'https://www.youtube.com/watch?v=OOlXkIn3GucY'
    },
    {
      id: 'dl-button',
      title: 'Anonymous File Share',
      description: 'Upload and download files securely without requiring user login.',
      image: dl,
      technologies: ['GCP', 'Google API', 'Flask'],
      github: 'https://github.com/naman-0804/File_Storage',
      youtube: 'https://www.youtube.com/watch?v=5xgZ00DH89w'
    },
    {
      id: 'ml-button',
      title: 'AWS Diabetes Prediction',
      description: 'Machine Learning model deployed on AWS for predicting diabetes.',
      image: db,
      technologies: ['Python', 'AWS', 'Flask', 'ML'],
      github: 'https://github.com/naman-0804/Diabetes_Prediction_onAWS',
      youtube: 'https://youtu.be/OqBdSu4jDhs?si=s80-z3eRVexeqTu1'
    },
    {
      id: 'devops-button',
      title: 'DevOps CI/CD Pipeline',
      description: 'React app with Docker containerization and GitHub Actions workflow.',
      image: devops,
      technologies: ['Docker', 'React', 'GitHub Actions'],
      github: 'https://github.com/naman-0804/to-do_devops_',
      youtube: 'https://www.youtube.com/watch?v=NSN33CLi0M8'
    },
    {
      id: 'vitalized-button',
      title: 'Vitalized Healthcare',
      description: 'Comprehensive healthcare platform for connecting patients and doctors.',
      image: vitalized,
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/naman-0804/vitalized-vit',
      youtube: 'https://youtu.be/PPTDtrzJOT8?si=e32v89AZyyjjZ0av'
    },
    {
      id: 'sahyogi-button',
      title: 'Sahyogi Platform',
      description: 'Community helper platform built for SIH with real-time database.',
      image: sahyogi,
      technologies: ['React', 'Firebase', 'Material UI'],
      github: 'https://github.com/naman-0804/sih-site',
      youtube: 'https://youtu.be/eXR-V_Ck7VA?si=OxYaDhNPUAbsYDEK'
    },
    {
      id: 'AWS-button',
      title: 'Serverless Web App',
      description: 'Fully serverless architecture using AWS Lambda and DynamoDB.',
      image: aws,
      technologies: ['AWS Lambda', 'DynamoDB', 'JS'],
      github: 'https://github.com/naman-0804/Cloud-AWS',
      youtube: 'https://youtu.be/bld7EkDXFR4?si=4ccr0Le0AUv6gtfL'
    },
    {
      id: 'wcs-button',
      title: 'AI Content Summarizer',
      description: 'NLP-based tool to summarize long web articles automatically.',
      image: wcs,
      technologies: ['Python', 'NLP', 'Flask'],
      github: 'https://github.com/naman-0804/Ai_content_summarizer',
      youtube: 'https://www.youtube.com/watch?v=X9xr08p2mtk'
    },
    {
      id: 'medhub-button',
      title: 'Medhub360',
      description: 'Medical resource aggregator and appointment booking system.',
      image: medhub,
      technologies: ['React', 'Node.js', 'Express'],
      github: 'https://github.com/naman-0804/Healthcare',
      youtube: 'https://www.youtube.com/@naman_0804'
    },
    {
      id: 'asl-button',
      title: 'Sign Language Translator',
      description: 'Real-time ASL/ISL translation using computer vision and deep learning.',
      image: sl,
      technologies: ['TensorFlow', 'OpenCV', 'Python'],
      github: 'https://github.com/naman-0804/Sign-Language-Translator',
      youtube: 'https://youtu.be/qMkM-zELXGI?si=hYzMO1V07OooRW-y'
    },
    {
      id: 'okra-button',
      title: 'Okra Maturity Analysis',
      description: 'Agricultural tech solution for analyzing crop maturity via images.',
      image: okrapic,
      technologies: ['Python', 'Image Processing'],
      github: 'https://github.com/naman-0804/Okra-Maturity-Analysis',
      youtube: 'https://www.youtube.com/@naman_0804'
    },
    {
      id: 'lex-button',
      title: 'Lex ChatBot',
      description: 'Intelligent conversational bot powered by Amazon Lex.',
      image: lex,
      technologies: ['AWS Lex', 'AI', 'Cloud'],
      github: 'https://github.com/naman-0804?tab=repositories',
      youtube: 'https://www.youtube.com/watch?v=lU9DK8GRS1k'
    },
    {
      id: 'portfolio-button',
      title: 'Portfolio Website',
      description: 'The website you are currently looking at!',
      image: Portfolio,
      technologies: ['React', 'EmailJs', 'CSS3'],
      github: 'https://github.com/naman-0804/Portfolio-Naman',
      youtube: 'https://www.youtube.com/watch?v=u4lYKwQs48s'
    }
  ];

  const redirectToProject = (url) => {
    if (url) window.open(url, '_blank');
  };

  const handleProjectInteraction = (projectId) => {
    if (window.innerWidth <= 768) {
      setActiveProject(activeProject === projectId ? null : projectId);
    } else {
      setActiveProject(projectId);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setActiveProject(null);
    }
  };

  return (
    <div id="project-section" className="project">
      {/* UPDATED HEADER: Matches Skills Section */}
      <h1 className="section-title">Projects</h1>
      
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
                  <p>{project.description || `A cool project built with ${project.technologies[0]}.`}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="project-info">
              <h3 title={project.title}>{project.title}</h3>
              <div className="project-links">
                <button 
                  className="icon-button github-btn"
                  title="View Code"
                  onClick={(e) => {
                    e.stopPropagation();
                    redirectToProject(project.github);
                  }}
                >
                  <FaGithub />
                </button>

                {project.youtube && (
                  <button 
                    className="icon-button youtube-btn"
                    title="Watch Demo"
                    onClick={(e) => {
                      e.stopPropagation();
                      redirectToProject(project.youtube);
                    }}
                  >
                    <FaYoutube />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
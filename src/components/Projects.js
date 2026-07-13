import React, { useState } from 'react';
import { FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';

// Import Images
import okrapic from '../Images/okra-website.webp';
import vitalized from '../Images/vitalized-website.webp';
import medhub from '../Images/medhub360-website.webp';
import sl from '../Images/SL-website.webp';
import dl from '../Images/Filetransfer.webp';
import sahyogi from '../Images/sahyogi.webp';
import aws from '../Images/AWS.webp';
import db from '../Images/Diabetes.webp';
import wcs from '../Images/th.webp';
import lex from '../Images/lex.webp';
import Portfolio from '../Images/portfolio.webp';
import devops from '../Images/devops.webp';
import auth from '../Images/auth.webp';
import route from '../Images/route.webp';
import ecommerce from '../Images/ecommerce.webp';
import wecalm from '../Images/wecalm.webp';
import contextImg from '../Images/contxt.webp';
import vpc from '../Images/vpc-aws.webp';
import cityAssist from '../Images/city-assist.webp';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 'pulse-tracker',
      category: 'Fullstack',
      title: 'Critical mental health support system',
      description: 'Privacy-preserving mental health tracking system for students with automated SOS triggers and SHA-256 anonymization.',
      image: wecalm,
      technologies: ['React', 'Flask', 'MongoDB', 'Recharts'],
      github: 'https://github.com/naman-0804/Counselling-Management-',
      youtube: ''
    },
    {
      id: 'routeguard',
      title: 'RouteGuard: Real-Time Detection',
      category: 'Fullstack',
      description: 'Real-Time Loitering Detection and safe Navigation using OpenCV and OSM.',
      image: route,
      technologies: ['React', 'Python', 'OpenCV', 'OSM API'],
      github: 'https://github.com/naman-0804/RouteGuard',
      youtube: 'https://www.youtube.com/watch?v=LGjBXVr_ZvM'
    },
    {
      id: 'context-ai',
      category: 'Machine Learning',
      title: 'Context AI',
      description: 'Intelligent document assistant using RAG and LLMs to interact with documents through natural language.',
      image: contextImg,
      technologies: ['Flask', 'Pinecone', 'Groq API', 'spaCy'],
      github: 'https://github.com/Context-Driven-Legal-Text-Analysis/Context_Driven_Text_Analysis',
      demo: 'https://contextai.tiiny.site/'
    },
    {
      id: 'ecommerce-ml',
      category: 'Machine Learning',
      title: 'E-Commerce ML Prediction',
      description: 'Customer Segmentation and Purchase Prediction using Scikit-learn.',
      image: ecommerce,
      technologies: ['Scikit-learn', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/naman-0804/E-Commerce-Customer-Segmentation-Purchase-Prediction',
      youtube: ''
    },
    {
      id: 'auth-button',
      category: 'Fullstack',
      title: 'Next.js Chat App',
      description: 'Real-time chat application using Next.js, Clerk Auth and GetStream.',
      image: auth,
      technologies: ['Next.js', 'Clerk', 'GetStream'],
      github: 'https://github.com/naman-0804/Chat-App',
      youtube: 'https://www.youtube.com/watch?v=OOlXkIn3GucY'
    },
    {
      id: 'dl-button',
      category: 'Cloud',
      title: 'Anonymous File Share',
      description: 'Upload and download files securely without requiring user login.',
      image: dl,
      technologies: ['GCP', 'Google API', 'Flask'],
      github: 'https://github.com/naman-0804/File_Storage',
      youtube: 'https://www.youtube.com/watch?v=5xgZ00DH89w'
    },
    {
      id: 'ml-button',
      category: 'Cloud',
      title: 'AWS Diabetes Prediction',
      description: 'Machine Learning model deployed on AWS for predicting diabetes.',
      image: db,
      technologies: ['Python', 'AWS', 'Flask', 'ML'],
      github: 'https://github.com/naman-0804/Diabetes_Prediction_onAWS',
      youtube: 'https://youtu.be/OqBdSu4jDhs?si=s80-z3eRVexeqTu1'
    },
    {
      id: 'devops-button',
      category: 'DevOps',
      title: 'DevOps CI/CD Pipeline',
      description: 'React app with Docker containerization and GitHub Actions workflow.',
      image: devops,
      technologies: ['Docker', 'React', 'GitHub Actions'],
      github: 'https://github.com/naman-0804/to-do_devops_',
      youtube: 'https://www.youtube.com/watch?v=NSN33CLi0M8'
    },
    {
      id: 'vitalized-button',
      category: 'Fullstack',
      title: 'Vitalized Healthcare',
      description: 'Comprehensive healthcare platform for connecting patients and doctors.',
      image: vitalized,
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/naman-0804/vitalized-vit',
      youtube: 'https://youtu.be/PPTDtrzJOT8?si=e32v89AZyyjjZ0av'
    },
    {
      id: 'sahyogi-button',
      category: 'Fullstack',
      title: 'Sahyogi Platform',
      description: 'Community helper platform built for SIH with real-time database.',
      image: sahyogi,
      technologies: ['React', 'Firebase', 'Material UI'],
      github: 'https://github.com/naman-0804/sih-site',
      youtube: 'https://youtu.be/eXR-V_Ck7VA?si=OxYaDhNPUAbsYDEK'
    },
    {
      id: 'AWS-button',
      category: 'Cloud',
      title: 'Serverless Web App',
      description: 'Fully serverless architecture using AWS Lambda and DynamoDB.',
      image: aws,
      technologies: ['AWS Lambda', 'DynamoDB', 'JS'],
      github: 'https://github.com/naman-0804/Cloud-AWS',
      youtube: 'https://youtu.be/bld7EkDXFR4?si=4ccr0Le0AUv6gtfL'
    },
    {
      id: 'wcs-button',
      category: 'Machine Learning',
      title: 'AI Content Summarizer',
      description: 'NLP-based tool to summarize long web articles automatically.',
      image: wcs,
      technologies: ['Python', 'NLP', 'Flask'],
      github: 'https://github.com/naman-0804/Ai_content_summarizer',
      youtube: 'https://www.youtube.com/watch?v=X9xr08p2mtk'
    },
    {
      id: 'medhub-button',
      category: 'Fullstack',
      title: 'Medhub360',
      description: 'Medical resource aggregator and appointment booking system.',
      image: medhub,
      technologies: ['React', 'Node.js', 'Express'],
      github: 'https://github.com/naman-0804/Healthcare',
      youtube: 'https://www.youtube.com/@naman_0804'
    },
    {
      id: 'asl-button',
      category: 'Machine Learning',
      title: 'Sign Language Translator',
      description: 'Real-time ASL/ISL translation using computer vision and deep learning.',
      image: sl,
      technologies: ['TensorFlow', 'OpenCV', 'Python'],
      github: 'https://github.com/naman-0804/Sign-Language-Translator',
      youtube: 'https://youtu.be/qMkM-zELXGI?si=hYzMO1V07OooRW-y'
    },
    {
      id: 'okra-button',
      category: 'Machine Learning',
      title: 'Okra Maturity Analysis',
      description: 'Agricultural tech solution for analyzing crop maturity via images.',
      image: okrapic,
      technologies: ['Python', 'Image Processing'],
      github: 'https://github.com/naman-0804/Okra-Maturity-Analysis',
      youtube: 'https://www.youtube.com/@naman_0804'
    },
    {
      id: 'lex-button',
      category: 'Cloud',
      title: 'Lex ChatBot',
      description: 'Intelligent conversational bot powered by Amazon Lex.',
      image: lex,
      technologies: ['AWS Lex', 'AI', 'Cloud'],
      github: 'https://github.com/naman-0804?tab=repositories',
      youtube: 'https://www.youtube.com/watch?v=lU9DK8GRS1k'
    },
    {
      id: 'portfolio-button',
      category: 'Fullstack',
      title: 'Portfolio Website',
      description: 'The website you are currently looking at!',
      image: Portfolio,
      technologies: ['React', 'EmailJs', 'CSS3'],
      github: 'https://github.com/naman-0804/Portfolio-Naman',
      youtube: 'https://www.youtube.com/watch?v=u4lYKwQs48s'
    },
    {
      id: 'vpc-aws-button',
      category: 'Cloud',
      title: 'Advanced Secure VPC Architecture on AWS',
      description: 'Made an AWS Virtual Private Cloud and demonstrated the connection with private EC2 instance using SSH inside NAT instance',
      image: vpc,
      technologies: ['AWS', 'VPC', 'EC2', 'NAT'],
      github: 'https://github.com/naman-0804/Cloud-AWS/tree/main/Virtual%20Private%20Cloud%20Setup',
      youtube: ''
    },
    {
      id: 'city-assist-button',
      category: 'Machine Learning',
      title: 'City Assist',
      description: 'Platform for household help, combines identity verification with semantic search to help users find workers',
      image: cityAssist,
      technologies: ['ML', 'Semantic Search', 'Identity Verification'],
      github: 'https://github.com/naman-0804/cityassist',
      youtube: ''
    }
  ];

  // Group projects by category for sectioned rendering
  const groupedProjects = projects.reduce((acc, project) => {
    const cat = project.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(project);
    return acc;
  }, {});

  // Define preferred category order for display
  const categoryOrder = ['Fullstack', 'Machine Learning', 'DevOps', 'Cloud', 'Other'];

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

  // Reusable renderer for a single project item
  const renderProjectItem = (project) => (
    <div
      className="project-item"
      key={project.id}
      onMouseEnter={() => handleProjectInteraction(project.id)}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleProjectInteraction(project.id)}
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} loading="lazy" />

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

          {project.demo && (
            <button
              className="icon-button youtube-btn"
              title="View Live Demo"
              onClick={(e) => {
                e.stopPropagation();
                redirectToProject(project.demo);
              }}
            >
              <FaExternalLinkAlt />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div id="project-section" className="project">
      {/* Premium Typography Header */}
      <div className="premium-section-header" style={{ marginBottom: "3rem" }}>
        <h2 className="premium-heading">Showcase &<br />Works.</h2>
        <p className="premium-subtitle">A collection of full-stack, machine learning, and cloud projects.</p>
      </div>
      {categoryOrder
        .filter((cat) => groupedProjects[cat] && groupedProjects[cat].length)
        .map((cat) => (
          <div key={cat} className="project-category">
            <h2 className="category-title">{cat}</h2>
            <div className="project-grid">
              {groupedProjects[cat].map((project) => renderProjectItem(project))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Projects;
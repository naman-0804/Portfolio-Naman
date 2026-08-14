import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube, FaDownload, FaEye, FaArrowRight } from 'react-icons/fa';
import { SiOrcid } from 'react-icons/si';
import mypic from '../Images/profile-hero.webp';

function Home() {
  return (
    <div className="hero-container" id="home">

      <div className="hero-content">

        {/* --- LEFT — PROFILE --- */}
        <aside className="hero-left">
          <div className="profile-card">

            <div className="avatar-wrap">
              <span className="avatar-aura" aria-hidden="true"></span>
              <div className="avatar-frame">
                <img
                  src={mypic}
                  alt="Naman Srivastava"
                  width="760"
                  height="936"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>

            <h1 className="profile-name">Naman Srivastava</h1>
            <span className="profile-role">Software Developer</span>

            <div className="social-row">
              <a href="https://linkedin.com/in/naman1608" target="_blank" rel="noopener noreferrer" className="social-node" data-brand="linkedin" aria-label="Naman Srivastava on LinkedIn">
                <FaLinkedin aria-hidden="true" focusable="false" />
              </a>
              <a href="https://github.com/naman-0804" target="_blank" rel="noopener noreferrer" className="social-node" data-brand="github" aria-label="Naman Srivastava on GitHub">
                <FaGithub aria-hidden="true" focusable="false" />
              </a>
              <a href="https://www.youtube.com/@naman_0804/" target="_blank" rel="noopener noreferrer" className="social-node" data-brand="youtube" aria-label="Naman Srivastava on YouTube">
                <FaYoutube aria-hidden="true" focusable="false" />
              </a>
              <a href="https://orcid.org/0009-0007-1557-9333" target="_blank" rel="noopener noreferrer" className="social-node" data-brand="orcid" aria-label="Naman Srivastava ORCID profile">
                <SiOrcid aria-hidden="true" focusable="false" role="presentation" />
              </a>
            </div>

            <div className="quiet-divider"></div>

            <figure className="testimonial">
              <span className="testimonial-mark" aria-hidden="true">&ldquo;</span>
              <blockquote>
                He showed full interest in his tasks, followed instructions closely and
                brought sufficient knowledge to his role — a good intern in the company.
              </blockquote>
              <figcaption>
                <span className="testimonial-name">Srikrupa HD</span>
                <span className="testimonial-role">Data Analyst · Mentor at TEN</span>
                <span className="testimonial-date">August 12, 2024</span>
              </figcaption>
            </figure>

          </div>
        </aside>

        {/* --- RIGHT — ABOUT & CONTENT --- */}
        <section className="hero-right">
          <div className="about-card">

            <div className="content-block">
              <span className="eyebrow">Introduction</span>
              <h3 className="block-title">About Me</h3>
              <div className="about-copy">
                <p>
                  I'm a <span className="highlight dusk">Software Developer</span> with experience across
                  <span className="highlight dusk"> Full-Stack Development</span>, <span className="highlight sage">DevOps</span>, and <span className="highlight rose">Cloud Architecture</span>, working with technologies such as
                  <span className="highlight amber"> AWS</span> and <span className="highlight blue">Kubernetes</span>.
                </p>
                <p>
                  My recent focus has been on building intelligent applications using
                  <span className="highlight sage"> Machine Learning, Deep Learning, and NLP</span>, with hands-on experience developing LLM-powered applications and AI agents using
                  <span className="highlight rose"> LangChain</span> and <span className="highlight amber">LangGraph</span>.
                </p>
                <p>
                  I thrive in fast-paced environments like <span className="highlight rose">hackathons</span>.
                  Being selected for several top-tier events has really pushed me to think on my feet, build fast, and stay creative.
                </p>

              </div>
            </div>

            <div className="content-block">
              <span className="eyebrow">Resume</span>
              <div className="info-row">
                <div className="info-row-main">
                  <h4>Naman — Resume</h4>
                  <p>ML · Cloud · Full-Stack</p>
                </div>
                <div className="info-row-actions">
                  <a
                    href="https://drive.google.com/file/d/1GT2cGCyLLkD9CqNMD3gDRPYPTpiLgZP8/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-btn outline"
                  >
                    <FaEye aria-hidden="true" focusable="false" /> View
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1GT2cGCyLLkD9CqNMD3gDRPYPTpiLgZP8"
                    className="pill-btn solid"
                  >
                    <FaDownload aria-hidden="true" focusable="false" /> Download
                  </a>
                </div>
              </div>
            </div>

            <div className="content-block">
              <span className="eyebrow">Interview Experiences</span>
              <div className="info-row">
                <div className="info-row-main">
                  <h4>Read My Interview Journey</h4>
                  <p>Notes from real interview rounds</p>
                </div>
                <div className="info-row-actions">
                  <a
                    href="https://interview.namansrivastava.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-btn solid"
                  >
                    Read now <FaArrowRight aria-hidden="true" focusable="false" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;
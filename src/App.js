import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Icons for the Floating Dock
import { FaHome, FaLaptopCode, FaShapes, FaBriefcase, FaPenNib, FaEnvelope, FaCode } from 'react-icons/fa';

// CSS Imports
import '../src/Design/home.css';
import '../src/Design/nav.css';
import '../src/Design/contact.css';
import '../src/Design/exp.css';
import '../src/Design/project.css';
import '../src/Design/skill.css';
import '../src/Design/blog.css';
import '../src/Design/terminal.css';
import '../src/Design/stats.css';
// Component Imports
import Home from './components/Home';
const EyeFollower = lazy(() => import('./components/EyeFollower'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const BlogSection = lazy(() => import('./components/Blogsection'));
const CodingStats = lazy(() => import('./components/CodingStats'));
const Contact = lazy(() => import('./components/Contact'));

const NAV_SECTION_IDS = ['home', 'projects', 'skills', 'experience', 'blogs', 'coding-stats', 'contact'];

const SectionLoader = () => (
  <div className="section-loader" aria-hidden="true" />
);

const DeferredSection = ({ id, component: Component, forceLoad = false }) => {
  const [shouldRender, setShouldRender] = useState(forceLoad);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (forceLoad) {
      setShouldRender(true);
    }
  }, [forceLoad]);

  useEffect(() => {
    if (shouldRender) {
      return undefined;
    }

    const section = sectionRef.current;
    if (!section) {
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      const timeoutId = window.setTimeout(() => setShouldRender(true), 500);
      return () => window.clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '700px 0px', threshold: 0 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <section id={id} ref={sectionRef} className="section-wrapper">
      {shouldRender ? (
        <Suspense fallback={<SectionLoader />}>
          <Component />
        </Suspense>
      ) : (
        <div className="section-placeholder" aria-hidden="true" />
      )}
    </section>
  );
};

const DeferredInsights = () => {
  const [insights, setInsights] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let timeoutId;
    let idleId;

    const loadInsights = () => {
      Promise.all([
        import('@vercel/analytics/react'),
        import('@vercel/speed-insights/react')
      ]).then(([analyticsModule, speedModule]) => {
        if (!cancelled) {
          setInsights({
            AnalyticsComponent: analyticsModule.Analytics,
            SpeedInsightsComponent: speedModule.SpeedInsights
          });
        }
      });
    };

    const scheduleIdleLoad = () => {
      timeoutId = window.setTimeout(() => {
        if ('requestIdleCallback' in window) {
          idleId = window.requestIdleCallback(loadInsights, { timeout: 4000 });
        } else {
          loadInsights();
        }
      }, 4000);
    };

    if (document.readyState === 'complete') {
      scheduleIdleLoad();
    } else {
      window.addEventListener('load', scheduleIdleLoad, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener('load', scheduleIdleLoad);
      window.clearTimeout(timeoutId);
      if (idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);

  if (!insights) {
    return null;
  }

  const { AnalyticsComponent, SpeedInsightsComponent } = insights;

  return (
    <>
      <SpeedInsightsComponent />
      <AnalyticsComponent />
    </>
  );
};

const NavBar = ({ toggleDarkMode, darkMode, isDesktop, requestSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrolledRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 50;
        if (nextScrolled !== scrolledRef.current) {
          scrolledRef.current = nextScrolled;
          setIsScrolled(nextScrolled);
        }
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for Scroll Spy
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Responsive strip in the upper-mid screen
      threshold: 0 // Trigger immediately on any intersection
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    const timeoutId = setTimeout(() => {
      NAV_SECTION_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        }
      });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [isDesktop]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId); // Set immediately for better UX
    requestSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* --- TOP NAVBAR (Logo + Theme Toggle) --- */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          
          <div className="navbar-logo">
             {isDesktop ? (
               <Suspense fallback={<span className="navbar-monogram">NS</span>}>
                 <EyeFollower />
               </Suspense>
             ) : (
               <span className="navbar-monogram">NS</span>
             )}
          </div>

          {!isDesktop && (
            <span className="mobile-nav-title">
              {activeSection === 'coding-stats'
                ? 'Coding Stats'
                : activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </span>
          )}

          {/* Desktop Links (Hidden on Mobile via CSS) */}
          <div className="navbar-links">
            <button onClick={() => scrollToSection('home')} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>
              Home
            </button>
            <button onClick={() => scrollToSection('projects')} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
              Experience
            </button>
            <button onClick={() => scrollToSection('blogs')} className={`nav-link ${activeSection === 'blogs' ? 'active' : ''}`}>
              Blogs
            </button>
            <button onClick={() => scrollToSection('coding-stats')} className={`nav-link ${activeSection === 'coding-stats' ? 'active' : ''}`}>
              Coding Stats
            </button>
            <button onClick={() => scrollToSection('contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
              Contact
            </button>
          </div>

          <button 
            className="theme-toggle-btn" 
            onClick={toggleDarkMode} 
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

        </div>
      </nav>

      {/* --- MOBILE BOTTOM DOCK --- */}
      {!isDesktop && (
        <div className="mobile-bottom-dock">
          <button 
            className={`mobile-tile ${activeSection === 'home' ? 'active' : ''}`} 
            onClick={() => scrollToSection('home')} 
            title="Home"
          >
            <FaHome />
            <span>Home</span>
          </button>
          <button 
            className={`mobile-tile ${activeSection === 'projects' ? 'active' : ''}`} 
            onClick={() => scrollToSection('projects')} 
            title="Projects"
          >
            <FaLaptopCode />
            <span>Projects</span>
          </button>
          <button 
            className={`mobile-tile ${activeSection === 'skills' ? 'active' : ''}`} 
            onClick={() => scrollToSection('skills')} 
            title="Skills"
          >
            <FaShapes />
            <span>Skills</span>
          </button>
          <button 
            className={`mobile-tile ${activeSection === 'experience' ? 'active' : ''}`} 
            onClick={() => scrollToSection('experience')} 
            title="Experience"
          >
            <FaBriefcase />
            <span>Experience</span>
          </button>
          <button 
            className={`mobile-tile ${activeSection === 'blogs' ? 'active' : ''}`} 
            onClick={() => scrollToSection('blogs')} 
            title="Blogs"
          >
            <FaPenNib />
            <span>Blogs</span>
          </button>
          <button 
            className={`mobile-tile ${activeSection === 'coding-stats' ? 'active' : ''}`} 
            onClick={() => scrollToSection('coding-stats')} 
            title="Stats"
          >
            <FaCode />
            <span>Stats</span>
          </button>
          <button 
            className={`mobile-tile ${activeSection === 'contact' ? 'active' : ''}`} 
            onClick={() => scrollToSection('contact')} 
            title="Contact"
          >
            <FaEnvelope />
            <span>Contact</span>
          </button>
        </div>
      )}
    </>
  );
};

function AppContent() {
  const [darkMode, setDarkMode] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth > 992);
  const [requestedSections, setRequestedSections] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loadHashedSection = () => {
      const sectionId = window.location.hash.replace('#', '');
      if (!sectionId || sectionId === 'home' || !NAV_SECTION_IDS.includes(sectionId)) {
        return;
      }

      setRequestedSections((current) => (
        current[sectionId] ? current : { ...current, [sectionId]: true }
      ));

      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView();
      });
    };

    loadHashedSection();
    window.addEventListener('hashchange', loadHashedSection);
    return () => window.removeEventListener('hashchange', loadHashedSection);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const requestSection = (sectionId) => {
    if (sectionId === 'home') {
      return;
    }

    setRequestedSections((current) => (
      current[sectionId] ? current : { ...current, [sectionId]: true }
    ));
  };

  // Single scroll experience for both Mobile and Desktop
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <NavBar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        isDesktop={isDesktop}
        requestSection={requestSection}
      />
      <main className="content">
        {/* Home Section */}
        <section id="home" className="section-wrapper">
          <Home />
        </section>

        <DeferredSection id="projects" component={Projects} forceLoad={requestedSections.projects} />
        <DeferredSection id="skills" component={Skills} forceLoad={requestedSections.skills} />
        <DeferredSection id="experience" component={Experience} forceLoad={requestedSections.experience} />
        <DeferredSection id="blogs" component={BlogSection} forceLoad={requestedSections.blogs} />
        <DeferredSection id="coding-stats" component={CodingStats} forceLoad={requestedSections['coding-stats']} />
        <DeferredSection id="contact" component={Contact} forceLoad={requestedSections.contact} />
      </main>
      <DeferredInsights />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

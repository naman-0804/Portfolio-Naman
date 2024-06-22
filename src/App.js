import React from 'react';
import './App.css';

function App() {
  function redirectToProject(id) {
    let url = '';
    switch (id) {
      case 'vitalized-button':
        url = 'https://github.com/un-identified/vitalized-vit';
        break;
      case 'asl-button':
        url = 'https://github.com/un-identified/Sign-Language-Translator';
        break;
      case 'medhub-button':
        url = 'https://github.com/un-identified/Healthcare';
        break;
      case 'okra-button':
        url = 'https://github.com/un-identified/Okra-Maturity-Analysis';
        break;
      default:
        break;
    }
    if (url) {
      window.open(url, '_blank');
    }
  }

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      <div className="navbar">
        <div className="section">
          <h2>Welcome to my Portfolio</h2>
          <button id="p" className='button-86' onClick={() => scrollToSection('project-section')}>Project</button>
          <button id="s" className='button-86' onClick={() => scrollToSection('skills-section')}>Skills</button>
          <button id="e" className='button-86' onClick={() => scrollToSection('experience-section')}>Experience</button>
          <button id="c" className='button-86' onClick={() => scrollToSection('contact-section')}>Contact</button>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: "lime" }}>
        <div className="intro">
          <h1>I am Naman</h1>
          <h1>I am a Software Developer</h1>
          <h3>I am more passionate about developing new websites and applications</h3>
        </div>
        <div className="dp">
          <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" alt="Profile" />
        </div>
      </div>

      <div id="project-section" className="project" style={{ backgroundColor: "orange" }}>
        <center><h1>Project</h1></center>
        <div>
          <div className="vitalized">
            <h1>Vitalized</h1>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width="600px" height="250px" alt="Vitalized" />
            <button id="vitalized-button" className='button-81' onClick={() => redirectToProject('vitalized-button')}>View project</button>
          </div>
          <div className="asl">
            <h1>ASL/ISL Translator</h1>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width="600px" height="250px" alt="ASL/ISL Translator" />
            <button id="asl-button" className='button-81' onClick={() => redirectToProject('asl-button')}>View project</button>
          </div>
        </div>
        <div>
          <div className="medhub">
            <h1>Medhub360</h1>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width="600px" height="250px" alt="Medhub360" />
            <button id="medhub-button" className='button-81' onClick={() => redirectToProject('medhub-button')}>View project</button>
          </div>
          <div className="okra">
            <h1>Okra</h1>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width="600px" height="250px" alt="Okra" />
            <button id="okra-button" className='button-81' onClick={() => redirectToProject('okra-button')}>View project</button>
          </div>
        </div>
      </div>

      <div id="experience-section" className="exed" style={{ backgroundColor: "pink" }}>
        <center><h1>Experience</h1></center>
        <div className="exp">
          <h3>Software Developer</h3>
          <h3>Software Developer</h3>
          <h3>Software Developer</h3>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Education</h1>

        <div className="edu">
          <h3>College VIT</h3>
          <h3>High School</h3>
        </div>
      </div>

      <div id="skills-section" style={{ padding: "10px", backgroundColor: "teal" }}>
        <center><h1>Skills</h1></center>
        <div className="Skills">
          <div className="p1">
            <h3>Html</h3>
            <h3>Css</h3>
          </div>
          <div className="p2">
            <h3>Css</h3>
          </div>
          <div className="p3">
            <h3>Js</h3>
          </div>
          <div className="p4">
            <h3>React</h3>
          </div>
          <div className="p5">
            <h3>React</h3>
          </div>
          <div className="p6">
            <h3>React</h3>
          </div>
        </div>
        <br />
        <br />
        <center><h1>Achievement</h1></center>
        <div className="ach">
          <h3>Devhouse 4th place</h3>
          <h3>Solveathon 6th place</h3>
        </div>
      </div>

      <div id="contact-section" style={{ padding: "1px", backgroundColor: "silver" }}>
        <center><h1>Contact</h1></center>
        <div className="contact">
          <div id="Name">
            <h3>Naman</h3>
          </div>
          <div id="Email">
            <h3>Email id</h3>
          </div>
          <div id="Phone">
            <h3>Phone number</h3>
          </div>
        </div>
        <br />
        <center><h1>Reach out</h1></center>
        <div className="reach">
          <div id="Name">
            <h4><label htmlFor="Name">Name: </label></h4>
            <input type="text" placeholder="Name"></input>
          </div>
          <div id="Email">
            <h4><label htmlFor="Email">Email: </label></h4>
            <input type="text" placeholder="Email"></input>
          </div>
          <div id="Phone">
            <h4><label htmlFor="Phone">Phone: </label></h4>
            <input type="text" placeholder="Enter your Phone number"></input>
          </div>
          <div id="Message">
            <h4><label htmlFor="Message">Message: </label></h4>
            <input type="text" placeholder="Enter a message"></input>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;

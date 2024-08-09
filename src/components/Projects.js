import React from 'react';
import okrapic from '../Images/okra-website.png';
import vitalized from '../Images/vitalized-website.png';
import medhub from '../Images/medhub360-website.png';
import sl from '../Images/SL-website.png';

function Projects() {
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

  return (
    <div id="project-section" className="project"  style={{ backgroundColor: '#fff7e6' }}>
      <center><h1>Projects</h1></center>
      <div className="project-grid">
        <div className="project-item">
          <h1>Vitalized</h1>
          <img src={vitalized} alt="Vitalized" />
          <button id="vitalized-button" className='button' onClick={() => redirectToProject('vitalized-button')}>View project</button>
        </div>
        <div className="project-item">
          <h1>ASL/ISL Translator</h1>
          <img src={sl} alt="ASL/ISL Translator" />
          <button id="asl-button" className='button' onClick={() => redirectToProject('asl-button')}>View project</button>
        </div>
        <div className="project-item">
          <h1>Medhub360</h1>
          <img src={medhub} alt="Medhub360" />
          <button id="medhub-button" className='button' onClick={() => redirectToProject('medhub-button')}>View project</button>
        </div>
        <div className="project-item">
          <h1>Okra Maturity Analysis</h1>
          <img src={okrapic} alt="Okra" />
          <button id="okra-button" className='button' onClick={() => redirectToProject('okra-button')}>View project</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;

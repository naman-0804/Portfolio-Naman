import React from 'react';
import okrapic from '../okra-website.png';
import vitalized from '../vitalized-website.png';
import medhub from '../medhub360-website.png';
import sl from '../SL-website.png';
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
    <div id="project-section" className="project" style={{  }}>
      <center><h1>Project</h1></center>
      <div>
        <div className="vitalized">
          <h1>Vitalized</h1>
          <img src={vitalized} width="600px" height="250px" alt="Vitalized" />
          <button id="vitalized-button" className='button-81' onClick={() => redirectToProject('vitalized-button')}>View project</button>
        </div>
        <div className="asl">
          <h1>ASL/ISL Translator</h1>
          <img src={sl} width="600px" height="250px" alt="ASL/ISL Translator" />
          <button id="asl-button" className='button-81' onClick={() => redirectToProject('asl-button')}>View project</button>
        </div>
      </div>
      <div>
        <div className="medhub">
          <h1>Medhub360</h1>
          <img src={medhub} width="600px" height="250px" alt="Medhub360" />
          <button id="medhub-button" className='button-81' onClick={() => redirectToProject('medhub-button')}>View project</button>
        </div>
        <div className="okra">
          <h1>Okra maturity Analysis</h1>
          <img src={okrapic} width="600px" height="250px" alt="Okra" />
          <button id="okra-button" className='button-81' onClick={() => redirectToProject('okra-button')}>View project</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;

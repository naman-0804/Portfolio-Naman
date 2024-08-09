import React from 'react';

function Experience() {
  return (
    
    <div id="experience-section" className="exed" style={{ backgroundColor: '#fff7e6' }}>
      <center><h1>Experience</h1></center>
      <ul className="exp">
        <li>
          <h3>Software Development Intern at TEN</h3>
          <p>Worked as a software development intern at The Entrepreneurship Network (TEN), contributing to various projects and gaining valuable industry experience.</p>
          <b><p><strong>Technologies:</strong> React, Flask, MongoDb</p></b>
        </li>
        <li>
          <h3>Web Developer at Biosphere Club</h3>
          <p>Active member of the Biosphere Club, responsible for developing and maintaining the club's website, ensuring it is up-to-date and user-friendly.</p>
          <b><p><strong>Technologies:</strong> HTML, CSS, JavaScript, Python</p></b>
        </li>
      </ul>
      <br />
      <h1>Education</h1>

      <div className="edu">
        <h3>College - Vellore Institute of Technology (2022-2026)</h3>
        <ul>
          <li>Pursuing B.Tech in Computer Science and Engineering</li>
        </ul>
        <h3>School - Peace Public School (2020-2022)</h3>
        <ul>
          <li>Completed 10th in 2020 with 90%</li>
          <li>Completed 12th in 2022 with 90.4%</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;

import React from 'react';

function Experience() {
  return (
    <div id="experience-section" className="exed">
      <h1>Experience</h1>
      <ul className="exp">
        <li>
          <h3>Software Development Intern at TEN</h3>
          <p>Worked as a software development intern at The Entrepreneurship Network (TEN), contributing to various projects and gaining valuable industry experience.</p>
          <p><strong>Technologies:</strong> React, Flask, MongoDB</p>
        </li>
        <li>
          <h3>Web Developer at Biosphere Club</h3>
          <p>Active member of the Biosphere Club, responsible for developing and maintaining the club's website, ensuring it is up-to-date and user-friendly.</p>
          <p><strong>Technologies:</strong> HTML, CSS, JavaScript, Python</p>
        </li>
      </ul>

      <h1>Education</h1>
      <ul className="edu">
        <li>
          <h3>College - Vellore Institute of Technology (2022-2026)</h3>
          <p>Pursuing B.Tech in Computer Science and Engineering</p>
        </li>
        <li>
          <h3>School - Peace Public School (2020-2022)</h3>
          <p>Completed Class X in 2020 with 90%</p>
          <p>Completed Class XII in 2022 with 90.4%</p>
        </li>
      </ul>
    </div>
  );
}

export default Experience;

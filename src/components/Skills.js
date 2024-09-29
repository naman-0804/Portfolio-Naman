import React from 'react';

function Skills() {
  return (
    <div id="skills-section" style={{ padding: "10px", backgroundColor: "#fff7e6" }}>
      <center><h1>Skills</h1></center>
      <div className="Skills" style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h3>Backend</h3>
          <p>Java, Node.js, Python, Flask</p>
        </div>
        <div>
          <h3>Frontend</h3>
          <p>JavaScript, React, HTML</p>
        </div>
        <div>
          <h3>Database</h3>
          <p>MongoDB, MySQL, PostgreSQL</p>
        </div>
        <div>
          <h3>Cloud Servers</h3>
          <p>Supabase, Firebase, Amazon Web servies</p>
        </div>
        <div>
          <h3>Tools</h3>
          <p>Git, GitHub, Docker, Figma, Postman</p>
        </div>
      </div>
      <center><h1>Achievement</h1></center>
      <ul className="ach">
        <li>
          <h3>Software developer Intern</h3>
          <p>Secured a summer internship with The entrepreneurship network, learned a lot of new stuff during my tenure</p>
        </li>
        <li>
          <h3>Devshouse 4th place</h3>
          <p>Participated in the Devhouse competition and secured the 4th place among 600+ teams.</p>
        </li>
        <li>
          <h3>Solveathon 6th place</h3>
          <p>Ranked 6th in the Solveathon and got special appreciation for our idea.</p>
        </li>
        <li>
          <h3>VITISH (SIH Internal Hackathon) 33rd place</h3>
          <p>Ranked 33rd out of 600 teams, qualified two elimination rounds and got nominated for official SIH24.</p>
        </li>
      </ul>
    </div>
  );
}

export default Skills;

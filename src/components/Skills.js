import React from 'react';

function Skills() {
  return (
    <div id="skills-section" style={{ padding: "10px" }}>
      <center><h1>Skills</h1></center>
      <div className="Skills">
      <br/>
        <div>
        - Backend
        <p>
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=java,nodejs,py,flask,express" alt="Backend" />
          </a>
        </p>
        </div>
        <br/>
        <div>
        - Frontend
        <p >
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=js,react,nextjs,materialui" alt="Frontend" />
          </a>
        </p>
        </div>
        <br/>
        <div>
        - Database
        <p >
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=mongodb,mysql,postgresql" alt="Database" />
          </a>
        </p>
        </div>
        <br/>
        <div>
        - Cloud Servers
        <p >
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=supabase,firebase" alt='cloud server'/>
          </a>
        </p>
        </div>
        <br/>
        <div>
        - Tools
        <p >
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=git,github,docker,figma,vscode,postman,linux" alt="tools" />
          </a>
        </p>
        </div>
      </div>
      <center><h1>Achievement</h1></center>
      <ul className="ach">
        <li>
          <h3>Software developer Intern</h3>
          <p>Secured a summer internship with The entreprenuership network, learned a lot of new stuff during my tenure</p>
        </li>
        <li>
          <h3>Devshouse 4th place</h3>
          <p>Participated in the Devhouse competition and secured the 4th place among 600+ teams.</p>
        </li>
        <li>
          <h3>Solveathon 6th place</h3>
          <p>Ranked 6th in the Solveathon and got special apprectiation for our idea.</p>
        </li>

      </ul>
    </div>
  );
}

export default Skills;

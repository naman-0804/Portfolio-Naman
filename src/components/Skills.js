import React from "react";


function Skills() {
  return (
    <div id="skills-section">
      {/* Skills Section */}
      <center>
        <h1 className="section-title">Skills</h1>
      </center>
      <div className="Skills">
        {[
          { title: "Backend", content: "Node.js, Python, Flask" },
          { title: "Frontend", content: "JavaScript, React, HTML" },
          { title: "Database", content: "MongoDB, MySQL, PostgreSQL" },
          { title: "Cloud", content: "Supabase, Amazon Web Services" },
          { title: "Tools", content: "Git, GitHub, Docker, Figma, Postman" },
        ].map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.title}</h3>
            <p>{skill.content}</p>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <center>
        <h1 className="section-title">Achievements</h1>
      </center>
      <table className="achievements-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              title: "Software Developer Intern",
              description:
                "Secured a summer internship with The Entrepreneurship Network and learned a lot of new skills.",
            },
            {
              title: "Devshouse 4th Place",
              description:
                "Participated in the Devshouse competition and secured the 4th place among 600+ teams.",
            },
            {
              title: "Solveathon 6th Place",
              description:
                "Ranked 6th in the Solveathon and received special appreciation for our idea.",
            },
            {
              title:
                "VITISH (SIH Internal Hackathon) Nominated for Official SIH24",
              description:
                "Qualified two elimination rounds and got nominated for official SIH24 from VIT Chennai out of 600 teams.",
            },
          ].map((achievement, index) => (
            <tr key={index}>
              <td>{achievement.title}</td>
              <td>{achievement.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Skills;

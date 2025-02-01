import React from "react";
import "./index.css";

const skills = [
  { name: "HTML", icon: "https://img.icons8.com/color/48/000000/html-5.png" },
  { name: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png" },
  { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript.png" },
  { name: "React.js", icon: "https://img.icons8.com/officel/40/000000/react.png" },
  { name: "Node.js", icon: "https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development-thumbnail.png" },
  { name: "Express.js", icon: "https://w7.pngwing.com/pngs/846/87/png-transparent-mean-solution-stack-express-js-node-js-javascript-github-text-trademark-logo-thumbnail.png" },
  { name: "Bootstrap", icon: "https://img.icons8.com/ios/50/000000/bootstrap.png" },
  { name: "Python", icon: "https://img.icons8.com/color/48/000000/python.png" },
  { name: "GitHub", icon: "https://img.icons8.com/ios/50/000000/github.png" },
  { name: "SQLite", icon: "https://img.icons8.com/ios/50/000000/sqlite.png" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

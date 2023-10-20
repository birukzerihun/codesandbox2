import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "svelt",
    level: "beginer",
    color: "#346273"
  },
  {
    skill: "nodejs",
    level: "advanced",
    color: "#123456"
  },
  {
    skill: "git and git hub",
    level: "intermidiate",
    color: "#AD3456"
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "web design",
    level: "advanced",
    color: "#C3DCAF"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="me.jpg" alt="Biruk" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Biruk Zerihun</h1>
      <p>
        My name is Biruk Zerihun i work as front end ehgineer at zemen bank for
        the last 4 years now i am passionate abou books
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ background: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginer" && "😎"}
        {level === "intermidiate" && "🙄"}
        {level === "advanced" && "😐"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

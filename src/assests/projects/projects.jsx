import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import calc from '../img/calculator.png';
import ttt from '../img/tic-tac-toe.png';
import heart from '../img/love.png';
import weather from '../img/weather-app.png';

import "./projects.css";

function Skill({ img_link, name, desc, page_link, github_link }) {

    const { theme } = useContext(ThemeContext);
    const currentTheme = theme === 'dark' ? 'dark' : 'light';
    const btnTheme = `btn-${currentTheme}`;
    return (
        <div className="card">
            <img src={img_link} alt={name} />
            <h6>{name}</h6>
            <p>{desc}</p>
            <div className="btn-container">
                <button>
                    <a href={github_link} target="_blank" rel="noopener noreferrer" className={btnTheme}>
                        Source
                    </a>
                </button>
                <button className="btn">
                    <a href={page_link} target="_blank" rel="noopener noreferrer" className={btnTheme}>
                    View
                    </a>
                </button>
            </div>
        </div>
    );
}


function Projects() {
  const slidingProjects = [...projects];

  return (
    <section id="projects" className="projects-container">
      <h4>Explore My Recent</h4>
      <p>Projects</p>
      <div className="project-cards">
        <div className="cards">
            {slidingProjects.map((card, index) => (
                <Skill key={index} {...card} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;


const projects = [
    {
      name: "Calculator",
      img_link: calc,
      page_link: "https://weather-app.nixquest.live/",
      desc: "A simple web-based calculator application",
      github_link: "https://github.com/nikhilcharan-dev/nikhilcharan-dev.github.io",
    },
    {
      name: "Tic-Tac-Toe",
      img_link: ttt,
      page_link: "https://tic-tac-toe.nixquest.live/",
      desc: "Compete against a computer in the classic game of Tic-Tac-Toe.",
      github_link: "https://github.com/nikhilcharan-dev/nikhilcharan-dev.github.io",
    },
    {
      name: "Weather App",
      img_link: weather,
      page_link: "https://weather-app.nixquest.live/",
      desc: "A fun and interactive web-based project that provides the current weather data of the location/city the user provides.",
      github_link: "https://github.com/nikhilcharan-dev/nikhilcharan-dev.github.io",
    },
    {
        name: "Elite Coders",
        img_link: heart,
        page_line: "https://elite-coders.nixquest.live",
        desc: "",
        github_link: "https://github.com/nikhilcharan-dev/elite-coders",
    },
    {
        name: "Last Line",
        img_link: heart,
        page_link: "https://lastline.life",
        desc: "",
        github_link: "https://github.com/nikhilcharan-dev/last-line",
    },
    {
        name: "Keep me Alive",
        img_link: heart,
        page_link: "https://keepmealive.nixquest.live/",
        desc: "",
        github_link: "https://github.com/nikhilcharan-dev/keepmealive",
    },
];
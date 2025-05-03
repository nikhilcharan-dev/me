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
  const slidingProjects = [...projects, ...projects];

  return (
    <section id="projects" className="projects-container">
      <h4>Explore My Recent</h4>
      <p>Projects</p>
      <div className="projects-slider">
        <div className="cards custom-scrollbar">
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
      page_link: "https://nikhilcharan-dev.github.io/Calculator/",
      desc: "A simple web-based calculator application",
      github_link: "https://github.com/nikhilcharan-dev/nikhilcharan-dev.github.io",
    },
    {
      name: "Tic-Tac-Toe",
      img_link: ttt,
      page_link: "https://nikhilcharan-dev.github.io/Tic-Tac-Toe/",
      desc: "Compete against a computer in the classic game of Tic-Tac-Toe.",
      github_link: "https://github.com/nikhilcharan-dev/nikhilcharan-dev.github.io",
    },
    {
      name: "Likes Counter",
      img_link: heart,
      page_link: "https://nikhilcharan-dev.github.io/Double_CLick/",
      desc: "A fun and interactive web-based project that spawns animated hearts whenever the user double clicks on the screen.",
      github_link: "https://github.com/nikhilcharan-dev/nikhilcharan-dev.github.io",
    },
    {
      name: "Weather App",
      img_link: weather,
      page_link: "https://nikhilcharan-dev.github.io/weather-app/",
      desc: "A fun and interactive web-based project that provides the current weather data of the location/city the user provides.",
      github_link: "https://github.com/nikhilcharan-dev/nikhilcharan-dev.github.io",
    },
  ];
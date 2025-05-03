import { ThemeContext } from '../theme/ThemeContext';
import React, { useContext } from 'react';
import Clit from '../img/certified-light.png';
import CDrk from '../img/certified-dark.png';

import './skillcard.css';


export function DataCard() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className="skill-card">
        <h3>Programming Languages</h3>
        <div>
            <img src={theme === 'dark' ? CDrk : Clit} alt='certified'/>
            <p>C/C++, Python, Java</p>
        </div>
        <h3>Technologies</h3>
        <div>
            <img src={theme === 'dark' ? CDrk : Clit} alt='certified'/>
            <p>HTML, CSS, JS, React.Js, MySQL</p>
        </div>
    </div>
  );
};

export function SkillCard() {
  return (
    <div className="skill-card">
      <h3>Education</h3>
      <p>Aditya Engineering College</p>
      <p>Information Technology - 2nd Year</p>
      <h3>Personal Details</h3>
      <p>Interests: Coding, Anime, Gaming</p>
      <p>Location: Andhra Pradesh, India</p>
    </div>
  );
}

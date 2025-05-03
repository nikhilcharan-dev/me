import { useContext  } from 'react';
import { ThemeContext } from '../theme/ThemeContext';

import './skills.css';

import c from '../img/c.png';
import cpp from '../img/c++.png';
import java from '../img/java.png';
import python from '../img/python.png';
import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/java-script.png';
import react from '../img/react.png';
import node from '../img/nodejs.png';
import express from '../img/express.png';
import sqlL from '../img/mysql-light.png';
import sqlD from '../img/mysql-dark.png';
import git from '../img/git.png';
import gitL from '../img/github-light.png';
import gitD from '../img/github-dark.png';

function Skills() {

    const { theme } = useContext(ThemeContext);

    return (
        <section id='skills' className='skillCard'>
            <p>Arsenal</p>
            <div className='skill-container'>
                <div className='skill'>
                    <h4>Programming Languages</h4>
                    <div className='img-container'>
                        <img src={c} alt='C' title='C - Intermediate'/>
                        <img src={cpp} alt='C++' title='C++ - Intermediate' />
                        <img src={java} alt='Java' title='Java - Intermediate' />
                        <img src={python} alt='Python' title='Python - Intermediate'/>
                    </div>
                </div>
                <div className='skill'>
                    <h4>Frontend</h4>
                    <div className='img-container'>
                        <img src={html} alt='HTML' title='HTML-5 - Intermediate' />
                        <img src={css} alt='CSS' title='CSS - Intermediate'/>
                        <img src={js} alt='JavaScript' title='JavaScript - Intermediate'/>
                        <img src={react} alt='React' title='React.Js - Intermediate' />
                    </div>
                </div>
                <div className='skill'>
                    <h4>Backend</h4>
                    <div className='img-container'>
                        <img src={node} alt='Node.Js' title='Node.Js - Beginner' />
                        <img src={express} alt='Express' title='Express.Js - Beginner' />
                        <img src={theme === 'dark' ? sqlD : sqlL} alt='MySQL' title='MySQL - Novice' />
                    </div>
                </div>
                <div className='skill'>
                    <h4>Tools</h4>
                    <div className='img-container'>
                        <img src={git} alt='Git' title='Git - Novice'/>
                        <img src={theme === 'dark' ? gitD : gitL} alt='Github' title='Github - Intermediate' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
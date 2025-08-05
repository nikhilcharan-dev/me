import React, { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';

import gitLit from '../img/github-light.png';
import gitDrk from '../img/github-dark.png';
import linkedinLit from '../img/linkedin-light.png';
import linkedinDrk from '../img/linkedin-dark.png';
import instaLit from '../img/instagram-light.png';
import instaDrk from '../img/instagram-dark.png';
import mainCharacter from '../img/zhou-fan.png';

import './home.css';


function Home() {
    const { theme } = useContext(ThemeContext);

    return (
        <section id='home' className='home-container'>
            <div className='text-container'>
                <h4>Hey there! I'm </h4>
                <p>Nikhil Charan Gollapalli</p>
                <h3>Programmer</h3>
                <a href='https://github.com/nikhilcharan-dev' target='_blank' rel='noopener noreferrer'>
                    <img src={theme === 'dark' ? gitDrk : gitLit} alt='github'/>
                </a>
                <a href='https://linkedin.com/in/shadow01' target='_blank' rel='noopener noreferrer'>
                    <img src={theme === 'dark' ? linkedinDrk : linkedinLit} alt='linkedin'/>
                </a>
                <a href='https://www.instagram.com/_.icarus___/' target='_blank' rel='noopener noreferrer'>
                    <img src={theme === 'dark' ? instaDrk : instaLit} alt='instagram'/>
                </a>
            </div>
            <div className='image-container'>
                <img src={mainCharacter} alt='me' className='me'/>
            </div>
        </section>
    );
}

export default Home;
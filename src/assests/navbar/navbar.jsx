import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import sun from '../img/sun.png';
import moon from '../img/moon.png';
import './navbar.css';

function Nikhil() {
    return (
        <>
            <div className='name'>Nikhil Charan Gollapalli</div>
        </>
    );
};

function Navbar() {
    
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [icon, setIcon] = useState(theme === "dark" ? sun : moon);

    const toggle = () => {
        toggleTheme();
    }

    useEffect(() => {
        setIcon(theme === "dark" ? sun : moon);
    }, [theme]);

    return (
        <nav>
            <Nikhil />
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                    <button id="toggle-btn" onClick={toggle}>
                        <img src={icon} alt="theme" id="theme" />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

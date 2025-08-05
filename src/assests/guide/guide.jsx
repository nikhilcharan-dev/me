import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import homeLight from '../img/home-light.png';
import homeDark from '../img/home-dark.png';
import './guide.css';

function Guide() {
    const { theme } = useContext(ThemeContext);
    const [arrow, setArrow] = useState(theme === "dark" ? homeLight : homeDark);

    useEffect(() => {
        setArrow(theme === "dark" ? homeLight : homeDark);
        document.querySelector('.home').style.borderColor = theme === "dark" ? 'white' : 'black';
    }, [theme]);

    return (
        <>
            <button className='arrow'>
                <a href='/'>
                    <img src={arrow} className='home' alt='home'/>
                </a>
            </button>
        </>
    );
}


export default Guide;
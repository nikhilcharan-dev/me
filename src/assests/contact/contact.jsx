import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

import emaiL from '../img/email-light.png';
import emaiD from '../img/email-dark.png';
import linkedinLit from '../img/linkedin-light.png';
import linkedinDrk from '../img/linkedin-dark.png';
import gitLit from '../img/github-light.png';
import gitDrk from '../img/github-dark.png';
import instaLit from '../img/instagram-light.png';
import instaDrk from '../img/instagram-dark.png';
import waL from '../img/whatsapp-light.png';
import waD from '../img/whatsapp-dark.png';

import programmerL from '../img/user-light.png';
import programmerD from '../img/user-dark.png';

import "./contact.css";


function Contact() {

    const { theme } = useContext(ThemeContext);

    const col = theme === 'dark' ? 'white' : 'black';

    return (
        <section id="contact" className="contact">
            <h4>Get In Touch</h4>
            <p>Contact Me</p>

            <img src={theme === 'dark'? programmerL : programmerD} alt='user' />

            <div className="details">
                <img src={theme === 'dark' ? emaiL : emaiD} alt="email" />
                <h2>
                    <a href="mailto:nikhilcharangollapalli@gmail.com">
                        nikhilcharangollapalli@gmail.com
                    </a>
                </h2>
                <a href="https://www.linkedin.com/in/shadow01/" target="_blank" rel="noopener noreferrer">
                    <img src={theme === 'dark' ? linkedinDrk : linkedinLit} alt="linkedin" />
                    LinkedIn
                </a>
            </div>

            <hr style={{ color: `${col}` }} />

            <div className="footer">
                <div class="social-media">
                    <a href='https://github.com/nikhilcharan-dev' target='_blank' rel='noopener noreferrer'>
                        <img src={theme === 'dark' ? gitDrk : gitLit} alt='github'/>
                    </a>
                    <a href='https://linkedin.com/in/shadow01' target='_blank' rel='noopener noreferrer'>
                        <img src={theme === 'dark' ? linkedinDrk : linkedinLit} alt='linkedin'/>
                    </a>
                    <a href='https://instagram.com/rudeus__._' target='_blank' rel='noopener noreferrer'>
                        <img src={theme === 'dark' ? instaDrk : instaLit} alt='instagram'/>
                    </a>
                    <a href='https://wa.me/7815873262' target='_blank' rel='noopener noreferrer'>
                        <img src={theme === 'dark' ? waL : waD} alt='whatsapp'/>
                    </a>
                </div>
                <div class="contact-info">
                    <p>Email: <a href="mailto:nikhilcharangollapali@gmail.com">nikhilcharangollapali@gmail.com</a></p>
                    <p>Location: Andhra Pradehs, India (IST)</p>
                </div>
                <h4>
                    Copyright © 2024 Nikhil Charan. All Rights Reserved
                </h4>
            </div>

        </section>
    );
};

export default Contact;
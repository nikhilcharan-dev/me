import './about.css';
import { DataCard, SkillCard } from '../skillcard/skillcard';

function About() {
    return (
        <section id="about" className='about-container'>
            <h1>Who am I?</h1>
            <p style={{textAlign: 'center'}}>
                A coder, a creator, and a relentless problem solver.
            </p>
            <div>
                <SkillCard />
                <DataCard />
            </div>
            <p>
                I’m <b>Nikhil Charan</b>, a second-year Bachelor's in Information Technology (IT) student at <b>Aditya Engineering College</b>. <br/>
                As a <b>competitive programmer</b> skilled in <b>C/C++, Python, and Java</b>, I’m constantly improving my abilities through coding challenges and hackathons. 
                I’m always eager to learn and take on new challenges, whether it’s solving complex problems or building impactful projects. 
                Driven by curiosity and a passion for growth, I thrive on creating and learning.  

                When I’m not coding, you’ll often find me watching <b>anime</b> or <b>gaming</b>.  
            </p>
            <br></br>
        </section>
    );
};

export default About;
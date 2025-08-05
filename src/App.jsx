import { ThemeProvider as Theme } from './assests/theme/ThemeContext.jsx';
import Background from './assests/background/background.jsx';
import Nav from './assests/navbar/navbar.jsx';
import Home from './assests/home/home.jsx';
import About from './assests/about/about.jsx';
import Skills from './assests/skills/skills.jsx';
import Projects from './assests/projects/projects.jsx';
import Contact from './assests/contact/contact';
import Guide from './assests/guide/guide.jsx';

function App() {
  return (
    <Theme>
      <Background />
      <Nav />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Guide />
    </Theme>
  );
}

export default App;

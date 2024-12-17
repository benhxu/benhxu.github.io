import { useState, useEffect } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import NavBar from './components/NavBar';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      setDarkMode(true);
    } else {
      document.body.classList.remove('dark-mode');
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const body = document.body;
    if (darkMode) {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <NavBar toggleTheme={toggleTheme} darkMode={darkMode} />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
import React from 'react';

interface NavBarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, toggleTheme }) => {
  return (
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="toggle-button" onClick={toggleTheme}>
        {darkMode ? '🌞' : '🌙'}
      </button>
    </nav>
  );
};

export default NavBar;
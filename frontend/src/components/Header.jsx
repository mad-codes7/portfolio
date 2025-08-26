import React from 'react'

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Madhur Biradar</div>
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home')}}>Home</a></li>
          <li><a href="#achievement" onClick={(e) => {e.preventDefault(); scrollToSection('achievement')}}>Achievement</a></li>
          <li><a href="#experience" onClick={(e) => {e.preventDefault(); scrollToSection('experience')}}>Experience</a></li>
          <li><a href="#projects" onClick={(e) => {e.preventDefault(); scrollToSection('projects')}}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact')}}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
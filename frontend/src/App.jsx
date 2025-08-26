import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Achievement from './components/Achievement'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light'
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="App">
      <Header />
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <Achievement />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
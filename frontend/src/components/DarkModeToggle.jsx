import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default DarkModeToggle
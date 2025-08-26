import React from 'react'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { 
  FaPython, 
  FaJs, 
  FaReact, 
  FaNodeJs 
} from 'react-icons/fa'
import { 
  SiC, 
  SiCplusplus, 
  SiTailwindcss, 
  SiExpress, 
  SiMysql, 
  SiMongodb 
} from 'react-icons/si'
import profileImg from './profile.jpg'   // ✅ Import image from components folder
import resumePdf from './resume.pdf'     // ✅ Import resume PDF from components folder

const Home = () => {
  const technologies = [
    { name: 'Python', icon: <FaPython style={{color: '#3776ab'}} /> },
    { name: 'C', icon: <SiC style={{color: '#A8B9CC'}} /> },
    { name: 'C++', icon: <SiCplusplus style={{color: '#00599C'}} /> },
    { name: 'JavaScript', icon: <FaJs style={{color: '#f7df1e'}} /> },
    { name: 'Tailwind', icon: <SiTailwindcss style={{color: '#38b2ac'}} /> },
    { name: 'React', icon: <FaReact style={{color: '#61dafb'}} /> },
    { name: 'Express', icon: <SiExpress style={{color: '#000000'}} /> },
    { name: 'Node.js', icon: <FaNodeJs style={{color: '#339933'}} /> },
    { name: 'SQL', icon: <SiMysql style={{color: '#4479a1'}} /> },
    { name: 'MongoDB', icon: <SiMongodb style={{color: '#47a248'}} /> }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'Madhur_Biradar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="section home">
        <br /><br />
      <div className="home-content">
        <div className="profile-placeholder">
          {/* ✅ Display profile image */}
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>
                
        <div className="home-info">
          <h1>Hi! I'm Madhur Biradar</h1>
                     
          <p className="about-me">
            I'm a passionate web developer with expertise in modern technologies. 
            I love creating innovative solutions and building user-friendly applications.
          </p>
                     
          <div className="home-buttons">
            <button className="resume-btn" onClick={downloadResume}>
              <FaDownload />
              Resume
            </button>
                         
            <button className="get-in-touch-btn" onClick={scrollToContact}>
              Get in touch
            </button>
          </div>
           
          {/* <div className="social-links">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>
          </div> */}
        </div>
      </div>

      <div className="block">
        <h2>Technologies</h2>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="icon">{tech.icon}</div>
              <div className="name">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
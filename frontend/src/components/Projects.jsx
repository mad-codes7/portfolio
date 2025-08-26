import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      
      <div className="block">
        <div className="project-item">
          <div className="project-header">
            <h3>CITIZEN</h3>
            <div className="project-links">
              <a href="#" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" aria-label="Live Demo">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          
          <p>
            A comprehensive citizen services platform that connects residents with local government services. 
            Built with modern web technologies to provide an intuitive user experience for accessing 
            municipal services, filing complaints, and tracking service requests.
          </p>
          
          <div style={{marginTop: '1rem'}}>
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">Express</span>
          </div>
        </div>
        
        {/* Add more projects as needed */}
      </div>
    </section>
  )
}

export default Projects
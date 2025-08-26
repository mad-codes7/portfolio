import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      
      <div className="block">
        <div className="experience-item">
          <div className="experience-dates">
            <div className="date-start">Aug 25</div>
            <div className="date-line"></div>
            <div className="date-end">Feb 25</div>
          </div>
          
          <div className="experience-content">
            <div className="experience-header-row">
              <div>
                <h3>INNOVSPHERE</h3>
                <h4>• Web Developer</h4>
              </div>
              <div className="tech-tag">Node.js</div>
            </div>
            
            <p>
            Designed and developed sections of the official club website using MERN Stack.
Contributed to creating a clean, responsive UI that highlights the club's vision and
activities.
              Implemented responsive designs and optimized application performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
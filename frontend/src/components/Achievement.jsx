import React from 'react'
import { FaTrophy } from 'react-icons/fa'

const Achievement = () => {
  return (
    <section id="achievement" className="section">
      <h2>Achievements</h2>
      
      <div className="block">
        <div className="achievement-item">
          <div className="achievement-icon">
            <FaTrophy style={{color: '#ffd700'}} />
          </div>
          <div>
            <h3>Runner up Codebid Hackathon</h3>
            <p>Secured 2nd place at CodeBid – The Code Auction, a unique hackathon where teams bid on code snippets using virtual currency and rapidly built impactful solutions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievement
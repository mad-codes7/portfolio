import React, { useState } from 'react'
import axios from 'axios'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    note: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData)
      setMessage('Message sent successfully!')
      setFormData({ name: '', email: '', note: '' })
    } catch (error) {
      setMessage('Failed to send message. Please try again.')
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      
      <div className="block">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="note">Note</label>
            <textarea
              id="note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {message && (
            <div style={{marginTop: '1rem', textAlign: 'center'}}>
              {message}
            </div>
          )}
        </form>
        
        <div className="contact-social">
          <a href="https://github.com/mad-codes7" aria-label="GitHub" target="_blank">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/mad-codes7" aria-label="LinkedIn" target="_blank">
            <FaLinkedin />
          </a>
          {/* <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a> */}
        </div>
      </div>
      
      <div style={{marginTop: '2rem', textAlign: 'center', opacity: '0.6'}}>
        <small>© 2025 Madhur Biradar. All rights reserved.</small>
      </div>
    </section>
  )
}

export default Contact
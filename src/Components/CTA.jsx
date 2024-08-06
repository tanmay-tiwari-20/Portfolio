import React from 'react'
import { Link } from 'react-router-dom'
import { socialLinks } from '../Constants/index'; // Adjust the path as needed

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text font-poppins text-gray-100'>
        Have a project in mind? <br className='sm:block hidden' /> Let's build something together!
      </p>
      <Link to="/contact" className='btn'>Contact Me!</Link>

      <div className='social-links flex gap-4'>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className='social-icon text-gray-100 hover:text-blue-300'
          >
            <img src={link.iconUrl} alt={link.name} className='w-6 h-6' />
          </a>
        ))}
      </div>
    </section>
  )
}

export default CTA

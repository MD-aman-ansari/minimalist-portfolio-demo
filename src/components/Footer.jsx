import React from 'react'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
]

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <a className="wordmark footer-wordmark" href="#home" aria-label="Alex Morgan, back to top">
            AM<span className="wordmark-period">.</span>
          </a>
          <p>Independent by nature. Thoughtful by design.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="footer-right">
          <a className="footer-email" href="mailto:hello@alexmorgan.design">
            hello@alexmorgan.design
          </a>
          <div className="social-links" aria-label="Social links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
          <span>© {new Date().getFullYear()} Alex Morgan</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

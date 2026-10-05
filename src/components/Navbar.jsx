import React, { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    function updateScrollState() {
      setHasScrolled(window.scrollY > 12)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className={`site-header${hasScrolled ? ' is-scrolled' : ''}`}>
      <nav className="navbar container" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Alex Morgan, home">
          AM<span className="wordmark-period">.</span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        <div
          className={`nav-links${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar

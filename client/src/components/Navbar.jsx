import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiPhone, FiShield, FiFileText } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/tours', label: 'Tours' },
  { path: '/destinations', label: 'Destinations' },
  { path: '/governance', label: 'Governance' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`triply-navbar ${scrolled ? 'triply-navbar--scrolled' : ''}`}>
      {/* Top Pre-Qualification Strip */}
      <div className="triply-topbar">
        <div className="container triply-topbar__inner">
          <div className="triply-topbar__left">
            <span className="topbar-item">
              <FiShield className="topbar-icon" />
              <span>Verified Entity (VAT #80692 | Lic. 14/666/128419/2005)</span>
            </span>
            <span className="topbar-sep">•</span>
            <span className="topbar-item">
              <FiPhone className="topbar-icon" />
              <span>Addis Ababa HQ: +251 911 420 000</span>
            </span>
            <span className="topbar-sep">•</span>
            <span className="topbar-item regional-tag">
              <span>Semera & Mekelle Depots Active</span>
            </span>
          </div>

          <div className="triply-topbar__right">
            <Link to="/contact" className="topbar-link">
              <FiPhone size={13} />
              <span>24/7 Dedicated Concierge Desk</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="triply-navbar__inner container">
        {/* Brand Logo with Sun / Compass Mark */}
        <Link to="/" className="triply-logo" onClick={() => setOpen(false)}>
          <div className="triply-logo__icon-wrap">
            <svg viewBox="0 0 24 24" className="triply-logo__svg" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="9" stroke="#E26D3C" strokeWidth="1.8" />
              <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" stroke="#E26D3C" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" fill="#E26D3C" />
            </svg>
          </div>
          <span className="triply-logo__text">
            MyChoice <span className="brand-ethiopia">Ethiopia</span>
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="triply-nav__links">
          {navLinks.map((l, index) => (
            <NavLink
              key={index}
              to={l.path}
              end={l.path === '/'}
              className={({ isActive }) => `triply-nav__link ${isActive ? 'triply-nav__link--active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA & Socials */}
        <div className="triply-nav__actions">
          <Link to="/contact" className="nav-rfq-btn">
            Book a Tour
          </Link>

          <div className="triply-nav__socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
              <FaFacebookF size={13} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter">
              <FaTwitter size={13} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
              <FaInstagram size={13} />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button className="triply-burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`triply-mobile ${open ? 'triply-mobile--open' : ''}`}>
        <nav className="triply-mobile__links">
          {navLinks.map((l, index) => (
            <NavLink
              key={index}
              to={l.path}
              end={l.path === '/'}
              className={({ isActive }) => `triply-mobile__link ${isActive ? 'triply-mobile__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}

          <Link 
            to="/contact" 
            className="triply-btn-orange mobile-rfq-btn"
            onClick={() => setOpen(false)}
          >
            Plan Your Expedition
          </Link>

          <div className="triply-mobile__socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn"><FaInstagram /></a>
          </div>
        </nav>
      </div>
    </header>
  )
}

import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 70
      const top = element.offsetTop - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={(e) => scrollToSection(e, 'home')}>
            <img src="/images/logo.png" alt="Korialys Logo" />
            <span>Korialys Asia Limited</span>
          </a>
          <button
            className={`nav-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
            <li><a href="#consulting" className="nav-link" onClick={(e) => scrollToSection(e, 'consulting')}>Consulting</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, 'contact')}>Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-video-bg">
          <iframe
            src="https://www.youtube.com/embed/-_x6UStltfY?autoplay=1&mute=1&loop=1&playlist=-_x6UStltfY&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Korialys Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Peace of Mind, in a highly connected digital world.</h1>
          <p className="hero-subtitle">Zero Trust Networks, Password Management, Identity Management & beyond.</p>
          <a href="#about" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'about')}>Learn More</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Personalized Service</h2>
              <p>A bespoke information security and consulting service, focused towards privacy minded businesses.</p>
              <p>We understand that every organization has unique security challenges. Our approach is tailored to your specific needs, ensuring comprehensive protection without unnecessary complexity.</p>
            </div>
            <div className="about-image">
              <img src="/images/about-image.png" alt="Security Consulting" />
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="consulting" className="section consulting">
        <div className="container">
          <h2>Transformation Expertise</h2>
          <p className="section-subtitle">Map out a road map towards your goals together.</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3>Zero Trust Networks</h3>
              <p>Implement security architectures that verify every access request regardless of source.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Password Management</h3>
              <p>Enterprise-grade credential management solutions for your organization.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Identity Management</h3>
              <p>Secure identity verification and access control systems.</p>
            </div>
          </div>

          <div className="privacy-badge">
            <span>Privacy Guaranteed</span>
            <p>Incorporated in Hong Kong, International Service.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p className="section-subtitle">Get in touch to discuss your security needs.</p>

          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3>Send us an email</h3>
            <p>We typically respond within 24 hours.</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                // Email obfuscated to prevent spam harvesting
                const a = 'nick'; const b = 'korialys'; const c = 'hk';
                window.location.href = `mailto:${a}@${b}.${c}?subject=Inquiry from Korialys Website`;
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/images/logo.png" alt="Korialys Logo" />
              <span>Korialys Asia Limited</span>
            </div>
            <p className="footer-copyright">© 2020 - {new Date().getFullYear()} Korialys Asia Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

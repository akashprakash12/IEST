import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 20px 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        .header.scrolled {
          padding: 15px 0;
          box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        
        .club-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 1.8rem;
          background: var(--gradient-blue);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        
        .college-name {
          font-size: 0.9rem;
          color: var(--text-light);
          margin-top: 5px;
        }
        
        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }
        
        .nav-links a {
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.3s ease;
          position: relative;
        }
        
        .nav-links a:hover {
          color: var(--accent-orange);
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-orange);
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--primary-blue);
          cursor: pointer;
          z-index: 1001;
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 999;
          opacity: 0;
          transform: translateY(-100%);
          transition: all 0.3s ease;
        }
        
        .mobile-menu.open {
          opacity: 1;
          transform: translateY(0);
        }
        
        .mobile-menu .nav-links {
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .club-name {
            font-size: 1.5rem;
          }
          
          .college-name {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <div className="header-content">
        <div className="logo-container">
          <div className="logo-text">
            <h1 className="club-name">IEST CLUB</h1>
            <p className="college-name">Government Engineering College, Idukki</p>
          </div>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="nav-links desktop-nav">
          <a href="/IEST/#workshop">Workshop</a>
          <a href="#trainers">Trainers</a>
          <a href="#schedule">Schedule</a>
        </nav>
      </div>

      <motion.div 
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        initial={false}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="nav-links">
          <a href="/IEST/#workshop" onClick={() => setIsMobileMenuOpen(false)}>Workshop</a>
          <a href="#trainers" onClick={() => setIsMobileMenuOpen(false)}>Trainers</a>
          <a href="#schedule" onClick={() => setIsMobileMenuOpen(false)}>Schedule</a>
        </nav>
      </motion.div>
    </motion.header>
  )
}

export default Header
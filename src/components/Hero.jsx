import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-section">
      <style>{`
        .hero-section {
          min-height: 100vh;
          background: var(--gradient-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 20px;
          position: relative;
          overflow: hidden;
        }
        
        .hero-content {
          text-align: center;
          color: white;
          z-index: 2;
          max-width: 800px;
        }
        
        .hero-title {
          font-size: 4rem;
          margin-bottom: 20px;
          line-height: 1.2;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .hero-subtitle {
          font-size: 1.8rem;
          margin-bottom: 30px;
          font-weight: 300;
          opacity: 0.9;
        }
        
        .highlight {
          color: var(--accent-orange);
          font-weight: 700;
        }
        
        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 40px;
          opacity: 0.9;
          line-height: 1.8;
        }
        
        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .hero-badge {
          display: inline-block;
          background: var(--accent-orange);
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 0.9rem;
          margin-bottom: 20px;
          font-weight: 600;
        }
        
        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 1;
        }
        
        .floating-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }
        
        .floating-element:nth-child(1) {
          width: 100px;
          height: 100px;
          top: 20%;
          left: 10%;
          animation: float 20s infinite linear;
        }
        
        .floating-element:nth-child(2) {
          width: 150px;
          height: 150px;
          bottom: 20%;
          right: 10%;
          animation: float 25s infinite linear reverse;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.3rem;
          }
          
          .hero-description {
            font-size: 1rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(100px, 50px) rotate(90deg);
          }
          50% {
            transform: translate(50px, 100px) rotate(180deg);
          }
          75% {
            transform: translate(-50px, 50px) rotate(270deg);
          }
        }
      `}</style>

      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-badge">Presented by IEST Club</div>
        <h1 className="hero-title">Build<span className="highlight">IT</span></h1>
        <h2 className="hero-subtitle">Complete Web Development Workshop</h2>
        <p className="hero-description">
          Master the art of web development with our intensive hands-on workshop covering 
          HTML, CSS, JavaScript, React, Python, Django, and more. Join us at Government 
          Engineering College, Idukki for an unforgettable learning experience.
        </p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a href="#schedule" className="btn pulse-animation">View Schedule</a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
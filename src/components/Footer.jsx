import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <style jsx>{`
        .footer {
          background: var(--primary-blue);
          color: white;
          padding: 80px 20px 30px;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 50px;
        }
        
        .footer-section h3 {
          font-size: 1.5rem;
          margin-bottom: 25px;
          color: var(--accent-orange);
        }
        
        .footer-logo {
          font-family: 'Montserrat', sans-serif;
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 15px;
          background: linear-gradient(45deg, #ff6f00, #ff9100);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .contact-icon {
          color: var(--accent-orange);
          font-size: 1.2rem;
        }
        
        .social-links {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }
        
        .social-icon {
          font-size: 1.5rem;
          color: white;
          transition: color 0.3s ease;
        }
        
        .social-icon:hover {
          color: var(--accent-orange);
        }
        
        .quick-links {
          list-style: none;
        }
        
        .quick-links li {
          margin-bottom: 12px;
        }
        
        .quick-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .quick-links a:hover {
          color: var(--accent-orange);
        }
        
        .copyright {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }
        
        .footer-highlight {
          color: var(--accent-orange);
          font-weight: 600;
        }
      `}</style>

      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">IEST</div>
          <p>
            The Institution's Engineers and Students Team at Government Engineering College, Idukki. 
            We foster technical excellence and innovation among students.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
            <a href="#" className="social-icon"><FaGithub /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>
                Government Engineering College<br />
                Idukki, Kerala - 685603
              </span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>iest@geci.ac.in</span>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="/IEST/#workshop">Workshop Details</a></li>
            <li><a href="#trainers">Our Trainers</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#registration">Registration</a></li>
            <li><a href="#project">Project Evaluation</a></li>
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        © {new Date().getFullYear()} <span className="footer-highlight">IEST Club</span> - 
        Government Engineering College, Idukki. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
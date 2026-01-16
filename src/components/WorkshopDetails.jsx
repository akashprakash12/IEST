import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaReact, FaPython, FaGitAlt } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'

const WorkshopDetails = () => {
  const topics = [
    {
      icon: <FaCode />,
      title: "HTML, CSS & JavaScript",
      description: "Build strong foundation in frontend web development",
      duration: "2 Days"
    },
    {
      icon: <FaReact />,
      title: "React JS",
      description: "Modern frontend library for building dynamic UIs",
      duration: "2 Days"
    },
    {
      icon: <FaPython />,
      title: "Python OOPs",
      description: "Object-Oriented Programming with Python",
      duration: "2 Days"
    },
    {
      icon: <FaDatabase />,
      title: "DBMS & SQL",
      description: "Database design and SQL queries",
      duration: "2 Days"
    },
    {
      icon: <SiDjango />,
      title: "Django Framework",
      description: "Full-stack web development with Django",
      duration: "3 Days"
    },
    {
      icon: <FaGitAlt />,
      title: "Git & GitHub",
      description: "Version control and collaboration",
      duration: "1 Day"
    }
  ]

  return (
    <section id="workshop" className="workshop-section">
      <style jsx>{`
        .workshop-section {
          background: var(--white);
          padding: 100px 20px;
        }
        
        .workshop-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .workshop-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }
        
        .topic-card {
          background: var(--white);
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .topic-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-orange);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .topic-icon {
          font-size: 2.5rem;
          color: var(--accent-orange);
          margin-bottom: 20px;
        }
        
        .topic-title {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: var(--primary-blue);
        }
        
        .topic-desc {
          color: var(--text-light);
          margin-bottom: 15px;
        }
        
        .topic-duration {
          display: inline-block;
          background: var(--light-bg);
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent-green);
        }
        
        .overview-text {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 50px;
          font-size: 1.1rem;
          color: var(--text-light);
          line-height: 1.8;
        }
      `}</style>

      <div className="workshop-container">
        <h2 className="section-title">Workshop Content</h2>
        
        <p className="overview-text">
          Our comprehensive 10-day workshop is designed to take you from beginner to 
          job-ready web developer. Learn industry-relevant skills through hands-on 
          projects and expert guidance.
        </p>
        
        <div className="workshop-grid">
          {topics.map((topic, index) => (
            <motion.div 
              key={index}
              className="topic-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="topic-icon">{topic.icon}</div>
              <h3 className="topic-title">{topic.title}</h3>
              <p className="topic-desc">{topic.description}</p>
              <span className="topic-duration">{topic.duration}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkshopDetails
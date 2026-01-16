import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCode, FaDatabase, FaReact, FaPython, FaGitAlt, FaTimes, FaClock, FaChalkboardTeacher, FaBook } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'

const WorkshopDetails = () => {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const topics = [
    {
      id: 1,
      icon: <FaCode />,
      title: "HTML, CSS & JavaScript",
      description: "Build strong foundation in frontend web development",
      duration: "2 Days",
      trainer: "Anitta",
      details: [
        "HTML5 semantic elements and structure",
        "CSS3 Flexbox, Grid, and responsive design",
        "Modern CSS with variables and animations",
        "JavaScript fundamentals and ES6+ features",
        "DOM manipulation and event handling",
        "Building interactive web pages",
        "Debugging and browser developer tools"
      ],
      prerequisites: ["Basic computer knowledge", "Enthusiasm to learn"],
      outcomes: ["Create responsive websites", "Build interactive UI components", "Understand web fundamentals"]
    },
    {
      id: 2,
      icon: <FaReact />,
      title: "React JS",
      description: "Modern frontend library for building dynamic UIs",
      duration: "2 Days",
      trainer: "Nithin Gireesh",
      details: [
        "React fundamentals and JSX syntax",
        "Components and props",
        "State and lifecycle methods",
        "Hooks (useState, useEffect, useContext)",
        "React Router for navigation",
        "State management concepts",
        "Building single-page applications"
      ],
      prerequisites: ["HTML, CSS, JavaScript basics", "ES6+ features"],
      outcomes: ["Build React applications", "Create reusable components", "Implement routing"]
    },
    {
      id: 3,
      icon: <FaPython />,
      title: "Python OOPs",
      description: "Object-Oriented Programming with Python",
      duration: "2 Days",
      trainer: "Sarga",
      details: [
        "Python syntax and basic programming",
        "Functions and modules",
        "Classes and objects",
        "Inheritance and polymorphism",
        "Encapsulation and abstraction",
        "Magic methods and operator overloading",
        "Exception handling",
        "File handling operations"
      ],
      prerequisites: ["Basic programming concepts", "Logical thinking"],
      outcomes: ["Write Python programs", "Implement OOP concepts", "Build modular applications"]
    },
    {
      id: 4,
      icon: <FaDatabase />,
      title: "DBMS & SQL",
      description: "Database design and SQL queries",
      duration: "2 Days",
      trainer: "Nidhin Nicholas",
      details: [
        "Database fundamentals and RDBMS",
        "Entity-Relationship diagrams",
        "Normalization and database design",
        "SQL basics: SELECT, INSERT, UPDATE, DELETE",
        "Joins and subqueries",
        "Aggregate functions and grouping",
        "Indexes and optimization",
        "Transactions and ACID properties"
      ],
      prerequisites: ["Basic data organization concepts"],
      outcomes: ["Design databases", "Write complex SQL queries", "Optimize database performance"]
    },
    {
      id: 5,
      icon: <SiDjango />,
      title: "Django Framework",
      description: "Full-stack web development with Django",
      duration: "3 Days",
      trainer: "Thomas Jacob",
      details: [
        "Django architecture and MVT pattern",
        "Setting up Django projects",
        "Models and migrations",
        "Views and URL routing",
        "Templates and template language",
        "Forms and form handling",
        "Authentication and authorization",
        "REST API development",
        "Deployment basics"
      ],
      prerequisites: ["Python basics", "HTML/CSS knowledge"],
      outcomes: ["Build full-stack web applications", "Create REST APIs", "Implement authentication"]
    },
    {
      id: 6,
      icon: <FaGitAlt />,
      title: "Git & GitHub",
      description: "Version control and collaboration",
      duration: "1 Day",
      trainer: "Akash Prakash",
      details: [
        "Version control concepts",
        "Git installation and configuration",
        "Basic Git commands: add, commit, push, pull",
        "Branching and merging strategies",
        "Resolving merge conflicts",
        "GitHub workflow",
        "Pull requests and code review",
        "Collaborative development",
        ".gitignore and best practices"
      ],
      prerequisites: ["Basic command line knowledge"],
      outcomes: ["Use Git for version control", "Collaborate on GitHub", "Manage project versions"]
    }
  ]

  const handleCardClick = (topic) => {
    setSelectedTopic(topic)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedTopic(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <section id="workshop" className="workshop-section">
        <style>{`
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
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }
          
          .topic-card:hover {
            transform: translateY(-10px);
            border-color: var(--accent-orange);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }
          
          .topic-card::after {
            content: 'Click for Details →';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: var(--gradient-orange);
            color: white;
            text-align: center;
            padding: 8px;
            font-size: 0.8rem;
            font-weight: 600;
            transform: translateY(100%);
            transition: transform 0.3s ease;
          }
          
          .topic-card:hover::after {
            transform: translateY(0);
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
          
          /* Modal Styles */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            padding: 20px;
          }
          
          .modal-content {
            background: white;
            border-radius: 20px;
            max-width: 800px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          }
          
          .modal-header {
            background: var(--gradient-blue);
            color: white;
            padding: 30px;
            border-radius: 20px 20px 0 0;
            position: relative;
          }
          
          .close-button {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background 0.3s ease;
          }
          
          .close-button:hover {
            background: rgba(255, 255, 255, 0.3);
          }
          
          .modal-icon {
            font-size: 3rem;
            margin-bottom: 20px;
          }
          
          .modal-title {
            font-size: 2rem;
            margin-bottom: 10px;
            font-weight: 800;
          }
          
          .modal-subtitle {
            font-size: 1.1rem;
            opacity: 0.9;
            margin-bottom: 20px;
          }
          
          .meta-info {
            display: flex;
            gap: 30px;
            margin-top: 20px;
          }
          
          .meta-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.9rem;
          }
          
          .meta-icon {
            color: var(--accent-orange);
          }
          
          .modal-body {
            padding: 40px;
          }
          
          .section-title {
            font-size: 1.3rem;
            color: var(--primary-blue);
            margin: 30px 0 15px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .section-title:first-child {
            margin-top: 0;
          }
          
          .details-list {
            list-style: none;
            padding: 0;
          }
          
          .details-list li {
            padding: 8px 0;
            padding-left: 25px;
            position: relative;
            color: var(--text-light);
          }
          
          .details-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--accent-green);
            font-weight: bold;
          }
          
          .prerequisites, .outcomes {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
          }
          
          .tag {
            background: var(--light-bg);
            padding: 6px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            color: var(--text-dark);
          }
          
          .outcomes .tag {
            background: #e8f5e9;
            color: var(--accent-green);
          }
          
          @media (max-width: 768px) {
            .workshop-grid {
              grid-template-columns: 1fr;
            }
            
            .modal-content {
              max-height: 95vh;
            }
            
            .meta-info {
              flex-direction: column;
              gap: 15px;
            }
            
            .modal-body {
              padding: 25px;
            }
          }
        `}</style>

        <div className="workshop-container">
          <h2 className="section-title">Workshop Content</h2>
          
          <p className="overview-text">
            Click on any topic card to view detailed information about what will be covered.
            Our comprehensive 10-day workshop is designed to take you from beginner to 
            job-ready web developer.
          </p>
          
          <div className="workshop-grid">
            {topics.map((topic, index) => (
              <motion.div 
                key={topic.id}
                className="topic-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => handleCardClick(topic)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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

      <AnimatePresence>
        {isModalOpen && selectedTopic && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <button className="close-button" onClick={closeModal}>
                  <FaTimes />
                </button>
                <div className="modal-icon">{selectedTopic.icon}</div>
                <h2 className="modal-title">{selectedTopic.title}</h2>
                <p className="modal-subtitle">{selectedTopic.description}</p>
                
                <div className="meta-info">
                  <div className="meta-item">
                    <FaClock className="meta-icon" />
                    <span>{selectedTopic.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaChalkboardTeacher className="meta-icon" />
                    <span>Trainer: {selectedTopic.trainer}</span>
                  </div>
                </div>
              </div>
              
              <div className="modal-body">
                <h3 className="section-title">
                  <FaBook />
                  What You'll Learn
                </h3>
                <ul className="details-list">
                  {selectedTopic.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                
                <h3 className="section-title">Prerequisites</h3>
                <div className="prerequisites">
                  {selectedTopic.prerequisites.map((req, index) => (
                    <span key={index} className="tag">{req}</span>
                  ))}
                </div>
                
                <h3 className="section-title">Learning Outcomes</h3>
                <div className="outcomes">
                  {selectedTopic.outcomes.map((outcome, index) => (
                    <span key={index} className="tag">{outcome}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default WorkshopDetails
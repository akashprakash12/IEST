import { motion } from 'framer-motion'
import { FaCalendarAlt } from 'react-icons/fa'

const Schedule = () => {
  const schedule = [
    { day: "Day 1-2", topic: "HTML, CSS & JS", trainer: "Anitta" },
    { day: "Day 3-4", topic: "React JS", trainer: "Nithin Gireesh" },
    { day: "Day 5-6", topic: "Python OOPs", trainer: "Sarga" },
    { day: "Day 7-8", topic: "DBMS & SQL", trainer: "Nidhin Nicholas" },
    { day: "Day 9-10", topic: "Django Framework", trainer: "Thomas Jacob" },
    { day: "Day 11", topic: "Git & GitHub", trainer: "Akash Prakash" },
    { day: "Project", topic: "Final Project Development", trainer: "All Mentors" },
    { day: "Evaluation", topic: "Project Submission & Review", trainer: "Expert Panel" }
  ]

  return (
    <section id="schedule" className="schedule-section">
      <style jsx>{`
        .schedule-section {
          background: var(--white);
          padding: 100px 20px;
        }
        
        .schedule-container {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .schedule-timeline {
          position: relative;
          margin-top: 50px;
        }
        
        .schedule-timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: var(--gradient-blue);
          border-radius: 2px;
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 50px;
          width: 45%;
        }
        
        .timeline-item:nth-child(odd) {
          margin-left: 0;
          margin-right: auto;
          padding-right: 60px;
          text-align: right;
        }
        
        .timeline-item:nth-child(even) {
          margin-left: auto;
          margin-right: 0;
          padding-left: 60px;
        }
        
        .timeline-marker {
          position: absolute;
          top: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--accent-orange);
          border: 4px solid white;
          box-shadow: 0 0 0 4px var(--accent-orange);
        }
        
        .timeline-item:nth-child(odd) .timeline-marker {
          right: -15px;
        }
        
        .timeline-item:nth-child(even) .timeline-marker {
          left: -15px;
        }
        
        .timeline-content {
          background: var(--light-bg);
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        
        .timeline-day {
          font-size: 1.2rem;
          color: var(--primary-blue);
          font-weight: 700;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .timeline-topic {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 5px;
          color: var(--text-dark);
        }
        
        .timeline-trainer {
          color: var(--accent-orange);
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .schedule-timeline::before {
            left: 30px;
          }
          
          .timeline-item {
            width: 100%;
            padding-left: 70px !important;
            padding-right: 20px !important;
            text-align: left !important;
          }
          
          .timeline-item:nth-child(odd) .timeline-marker,
          .timeline-item:nth-child(even) .timeline-marker {
            left: 15px;
            right: auto;
          }
        }
      `}</style>

      <div className="schedule-container">
        <h2 className="section-title">Workshop Schedule</h2>
        
        <div className="schedule-timeline">
          {schedule.map((item, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-day">
                  <FaCalendarAlt />
                  {item.day}
                </div>
                <div className="timeline-topic">{item.topic}</div>
                <div className="timeline-trainer">Trainer: {item.trainer}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Schedule
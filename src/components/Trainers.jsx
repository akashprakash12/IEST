import { motion } from 'framer-motion'

const Trainers = () => {
  const trainers = [
    {
      name: "Anitta",
      subject: "HTML, CSS & JavaScript",
      expertise: "Frontend Developer"
    },
    {
      name: "Nithin Gireesh",
      subject: "React JS",
      expertise: "React Specialist"
    },
    {
      name: "Sarga",
      subject: "Python OOPs",
      expertise: "Python Developer"
    },
    {
      name: "Nidhin Nicholas",
      subject: "DBMS & SQL",
      expertise: "Database Expert"
    },
    {
      name: "Thomas Jacob",
      subject: "Django Framework",
      expertise: "Full Stack Developer"
    },
    {
      name: "Akash Prakash",
      subject: "Git & GitHub",
      expertise: "DevOps Engineer"
    }
  ]

  return (
    <section id="trainers" className="trainers-section">
      <style jsx>{`
        .trainers-section {
          background: var(--light-bg);
          padding: 100px 20px;
        }
        
        .trainers-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .trainers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }
        
        .trainer-card {
          background: var(--white);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .trainer-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: var(--gradient-orange);
        }
        
        .trainer-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .trainer-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: var(--gradient-blue);
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: white;
          font-weight: bold;
        }
        
        .trainer-name {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: var(--primary-blue);
        }
        
        .trainer-subject {
          color: var(--accent-orange);
          font-weight: 600;
          margin-bottom: 10px;
          font-size: 1.1rem;
        }
        
        .trainer-expertise {
          color: var(--text-light);
          font-size: 0.9rem;
        }
      `}</style>

      <div className="trainers-container">
        <h2 className="section-title">Expert Trainers</h2>
        
        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <motion.div 
              key={index}
              className="trainer-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="trainer-avatar">
                {trainer.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="trainer-name">{trainer.name}</h3>
              <div className="trainer-subject">{trainer.subject}</div>
              <p className="trainer-expertise">{trainer.expertise}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers
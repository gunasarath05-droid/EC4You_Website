import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Digital Marketing',
    'Web Development',
    'SEO Services',
    'Graphic Design',
    'App Development'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Elevate Your Business with
              <span className="hero-highlight"> EC4YOU</span>
            </motion.h1>

            <div className="hero-subtitle-wrapper">
              <h2 className="hero-subtitle">
                Expert in{' '}
                <span className="typing-text">{roles[currentRole]}</span>
              </h2>
            </div>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We empower MSMEs, startups, and enterprises with innovative digital solutions. 
              From cutting-edge web development to data-driven marketing strategies, 
              we transform your vision into reality.
            </motion.p>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/services" className="btn btn-primary">
                Explore Services
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get Started
              </Link>
            </motion.div>

            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="stat-item">
                <h3 className="stat-number">500+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">200+</h3>
                <p className="stat-label">Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">50+</h3>
                <p className="stat-label">Team Members</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="hero-image-wrapper">
              <div className="floating-card card-1">
                <div className="card-icon">📊</div>
                <p>Analytics</p>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">🚀</div>
                <p>Growth</p>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">💡</div>
                <p>Innovation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

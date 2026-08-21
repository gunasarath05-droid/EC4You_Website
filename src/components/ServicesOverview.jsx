import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBullhorn, FaSearch, FaCode, FaPalette, FaMobileAlt, FaArrowRight } from 'react-icons/fa';
import './ServicesOverview.css';

const ServicesOverview = () => {
  const services = [
    {
      icon: <FaBullhorn />,
      title: 'Digital Marketing',
      description: 'Boost your online presence with data-driven marketing strategies that deliver results.',
      color: '#3b82f6',
    },
    {
      icon: <FaSearch />,
      title: 'SEO Services',
      description: 'Rank higher on search engines and drive organic traffic to your website.',
      color: '#10b981',
    },
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Build modern, responsive websites that engage users and drive conversions.',
      color: '#f97316',
    },
    {
      icon: <FaPalette />,
      title: 'Graphic Design',
      description: 'Create stunning visuals that capture attention and communicate your brand message.',
      color: '#ec4899',
    },
    {
      icon: <FaMobileAlt />,
      title: 'App Development',
      description: 'Develop powerful mobile applications that provide seamless user experiences.',
      color: '#8b5cf6',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="services-overview section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link to="/services" className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;

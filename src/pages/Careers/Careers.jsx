import React from 'react';
import SEO from '../../components/SEO';
import NewsletterSection from '../../components/Newsletter/Newsletter';
import HowWeWork from './include/HowWeWork';
import Hero from './include/Hero';
import Form from './include/Form';

const Careers = () => {
  return (
    <> 
      <SEO
        title="Careers | Join Our Innovative Team"
        description="Build your career with EC4YOU. Explore open opportunities in digital marketing, full-stack web development, UI/UX design, and creative media."
        keywords={["careers at EC4YOU", "digital marketing jobs chennai", "web developer hiring", "tech agency careers", "join our team"]}
        canonical="https://www.ec4you.in/careers"
      />
      <Hero />
      <Form/>
      <HowWeWork /> 
      <NewsletterSection />
    </>
  );
};

export default Careers;
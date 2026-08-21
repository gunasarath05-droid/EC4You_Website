import React from 'react';
import SEO from '../../components/SEO';
import Hero from './include/Hero';
import Services from './include/Services';
import AboutCompany from './include/About';
import AwardsAchievements from './include/Award';
import PortfolioSection from './include/Portfolio';
import ClientSection from './include/Client';
import TestimonialSection from './include/Testimonial';
import ContactSection from './include/Contact';
import NewsletterSection from '../../components/Newsletter/Newsletter';

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EC4YOU",
    "url": "https://www.ec4you.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.ec4you.in/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="home-page">
      <SEO
        title="Best Digital Marketing & Web Development Agency"
        description="EC4YOU is a premier digital marketing, website development, mobile app, and brand strategy agency in Chennai, India. Boost your brand visibility and ROI with our experts."
        keywords={["digital marketing agency", "web development chennai", "app development", "SEO company India", "social media marketing", "UI UX design"]}
        canonical="https://www.ec4you.in/"
        schema={homeSchema}
      />
      <Hero />
      <Services />
      <AboutCompany />
      <AwardsAchievements />
      <PortfolioSection />
      <ClientSection />
      <TestimonialSection />
      <ContactSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;

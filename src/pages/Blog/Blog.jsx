import React from 'react';
import SEO from '../../components/SEO';
import Hero from './include/Hero';
import BlogList from './include/BlogList';
import NewsLetterSection from '../../components/Newsletter/Newsletter';

const Blog = () => {
  return (
    <div>
      <SEO
        title="Our Blog | Insights, Trends & Digital Strategies"
        description="Discover cutting-edge digital marketing trends, SEO guides, modern React development strategies, and branding insights from the EC4YOU team."
        keywords={["digital marketing blog", "SEO tips 2024", "tech articles", "branding insights", "React web development tips"]}
        canonical="https://www.ec4you.in/blog"
      />
      <Hero />
      <BlogList />
      <NewsLetterSection />
    </div>
  );
};

export default Blog;

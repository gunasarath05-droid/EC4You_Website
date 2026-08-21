import React from "react";
import SEO from "../../components/SEO";
import Hero from "./include/Hero";
import Form from "./include/Form";
import NewsletterSection from "../../components/Newsletter/Newsletter";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us | Get Free Consultation"
        description="Get in touch with EC4YOU for expert digital marketing, custom website design, mobile application development, and branding consultation in Chennai, India."
        keywords={["contact EC4YOU", "digital marketing consultation", "hire web developers chennai", "get a quote", "agency contact number"]}
        canonical="https://www.ec4you.in/contact"
      />
      <Hero />
      <Form />
      <NewsletterSection/>
    </>
  );
};

export default Contact;

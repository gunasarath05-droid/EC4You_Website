import SEO from '../../components/SEO';
import Hero from './include/Hero';
import Team from './include/Team';
import Newsletter from '../../components/Newsletter/Newsletter';
import Vision from './include/Vission';
import Mission from './include/Mission';
import CompanySuccess from './include/CompanySuccess';
import Contact from './include/Contact';

const About = () => {
  

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-['Poppins']">
      <SEO
        title="About Us | Who We Are & Our Mission"
        description="Learn more about EC4YOU — our passionate team, mission, vision, and how we empower brands worldwide with innovative digital marketing and web solutions."
        keywords={["about EC4YOU", "digital agency team", "marketing company mission", "Chennai tech company", "digital strategy experts"]}
        canonical="https://www.ec4you.in/about"
      />
     <Hero/>
      <Team/>
      <Vision/>
      <Mission/>
      <CompanySuccess/>
      <Contact/>
      <Newsletter />
    </div>
  );
};

export default About;

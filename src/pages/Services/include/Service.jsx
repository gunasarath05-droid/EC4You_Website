import SEO from '../../../components/SEO';
import NewsletterSection from '../../../components/Newsletter/Newsletter';
import Hero from './Hero';
import Stats from './Stats';
import HowWeWork from './HowWeWork';
import Categories from './Categories';

export default function Service() {
  return (
    <div className="w-full overflow-x-hidden">
      <SEO
        title="Our Services | Full-Suite Digital Marketing & Development"
        description="Explore EC4YOU's comprehensive services including SEO, Social Media Marketing, Web Development, Mobile Apps, UI/UX Design, and Performance Analytics."
        keywords={["digital marketing services", "web development services", "app development", "SEO optimization", "social media management", "graphic design services"]}
        canonical="https://www.ec4you.in/services"
      />
      <Hero />
      <Stats />
      <HowWeWork />
      <Categories />
      <NewsletterSection />
    </div>
  );
}
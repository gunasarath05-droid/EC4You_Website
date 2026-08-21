import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Service from './pages/Services//include/Service';
import WebDevelopment from './pages/Services/WebDevelopment';
import DigitalMarketing from './pages/Services/DigitalMarketing';
import AppDevelopment from './pages/Services/AppDevelopment';
import GraphicDesign from './pages/Services/GraphicDesign';
import EmailMarketing from './pages/Services/EmailMarketing';
import CyberSecurity from './pages/Services/CyberSecurity';
import Careers from './pages/Careers/Careers';
import Blog from './pages/Blog/Blog';
import BlogDetails from './pages/Blog/BlogDetails';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsOfService from './pages/Legal/TermsOfService';

import NotFound from './pages/NotFound/NotFound';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/graphic-design" element={<GraphicDesign />} />
            <Route path="/services/email-marketing" element={<EmailMarketing />} />
            <Route path="/services/cyber-security" element={<CyberSecurity />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* 404 Catch-all Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

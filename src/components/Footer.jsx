import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../Image/logo1.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
  ];

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'instant' });

  return (
    <footer className="bg-[#0b5c56]">
      <div className="py-10 md:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Main Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-6 md:gap-8">

            {/* Company Block — full width on mobile, 2 cols on md, 2 cols on lg */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <Link to="/" onClick={scrollTop} className="block mb-4">
                <img src={logo} alt="ec4you" className="w-auto h-14 md:h-16 lg:h-20" />
              </Link>
              <p className="text-[#a8d5d0] text-sm leading-relaxed mb-6 max-w-xs">
                Building digital experiences that matter. We help businesses grow
                through innovative technology, creative design, and strategic
                marketing solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-11 md:h-11 rounded-2xl flex items-center justify-center text-[#a8d5d0] text-lg transition-all duration-300 border hover:bg-brand-primary hover:text-white hover:-translate-y-1 hover:shadow-xl hover:border-brand-primary"
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)' }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Block 1 — Company */}
            <div className="col-span-1">
              <h4 className="text-base md:text-lg font-bold text-white mb-6 md:mb-8 relative after:content-[''] after:absolute after:bottom-[-0.6rem] after:left-0 after:w-8 after:h-[3px] after:bg-brand-primary after:rounded-full">
                Company
              </h4>
              <ul className="space-y-3 md:space-y-4">
                {navLinks.slice(0, 3).map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      onClick={scrollTop}
                      className="text-[#a8d5d0] hover:text-brand-primary transition-all duration-300 hover:translate-x-1.5 inline-block text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Block 2 — Quick Links */}
            <div className="col-span-1">
              <h4 className="text-base md:text-lg font-bold text-white mb-6 md:mb-8 relative after:content-[''] after:absolute after:bottom-[-0.6rem] after:left-0 after:w-8 after:h-[3px] after:bg-brand-primary after:rounded-full">
                Quick Links
              </h4>
              <ul className="space-y-3 md:space-y-4">
                {navLinks.slice(3).map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      onClick={scrollTop}
                      className="text-[#a8d5d0] hover:text-brand-primary transition-all duration-300 hover:translate-x-1.5 inline-block text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Block — full width on mobile, 2 cols on md */}
            <div className="col-span-2 md:col-span-2 lg:col-span-1">
              <h4 className="text-base md:text-lg font-bold text-white mb-6 md:mb-8 relative after:content-[''] after:absolute after:bottom-[-0.6rem] after:left-0 after:w-8 after:h-[3px] after:bg-brand-primary after:rounded-full">
                Contact
              </h4>
              <ul className="space-y-4 md:space-y-5">
                <li className="flex gap-3 md:gap-4 transition-transform hover:translate-x-1.5">
                  <FaEnvelope className="text-brand-primary text-lg flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-xs mb-0.5 uppercase tracking-wider">Email Us</p>
                    <a href="mailto:info@ec4you.in" className="text-[#a8d5d0] hover:text-brand-primary transition-colors text-sm">
                      info@ec4you.in
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 md:gap-4 transition-transform hover:translate-x-1.5">
                  <FaPhone className="text-brand-primary text-lg flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-xs mb-0.5 uppercase tracking-wider">Call Us</p>
                    <a href="tel:+917010942474" className="text-[#a8d5d0] hover:text-brand-primary transition-colors text-sm">
                      +91 7010942474
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 md:gap-4 transition-transform hover:translate-x-1.5">
                  <FaMapMarkerAlt className="text-brand-primary text-lg flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-xs mb-0.5 uppercase tracking-wider">Visit Us</p>
                    <span className="text-[#a8d5d0] text-sm">Chennai, Tamil Nadu, India</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 border-t border-[rgba(255,255,255,0.08)] bg-[#094f4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
            <p className="text-[#6dbfb8] text-xs sm:text-sm">
              &copy; {currentYear} EC4YOU. Built with passion for excellence.
            </p>
            <div className="flex items-center gap-5 md:gap-8">
              <Link to="/privacy" className="text-[#6dbfb8] hover:text-brand-primary transition-colors text-xs sm:text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[#6dbfb8] hover:text-brand-primary transition-colors text-xs sm:text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

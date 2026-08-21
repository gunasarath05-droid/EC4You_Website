import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../src/Image/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
    },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <>
      <header
        className={`w-full z-[1000] sticky top-0 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/75 backdrop-blur-md border-b border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
            : 'bg-transparent border-b border-transparent shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-3.5 md:py-5">
            {/* Logo */}
            <Link
              to="/"
              onClick={handleNavClick}
              className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center transition-transform duration-300 hover:scale-[1.02]"
            >
              <img src={logo} alt="EC4YOU" className="h-9 md:h-11 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex flex-row gap-8 lg:gap-10 list-none m-0 p-0 items-center">
                {navLinks.map((link) => (
                  <li key={link.path} className="relative">
                    <Link
                      to={link.path}
                      onClick={handleNavClick}
                      className={`
                        text-[0.9375rem] font-semibold hover:text-brand-primary 
                        transition-colors relative py-1 block
                        ${location.pathname === link.path || (link.subLinks && location.pathname.startsWith(link.path)) ? 'text-brand-primary' : 'text-slate-600'}
                        after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-brand-primary after:transition-all after:duration-300
                        ${location.pathname === link.path || (link.subLinks && location.pathname.startsWith(link.path)) ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                      `}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-800 cursor-pointer w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all hover:bg-white hover:text-brand-primary hover:border-brand-primary shadow-sm active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-[1050] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <aside
        className={`
          fixed top-0 bottom-0 right-0 w-[80%] max-w-[320px] bg-white z-[1100] lg:hidden
          shadow-[-12px_0_40px_rgba(0,0,0,0.15)] flex flex-col justify-between
          transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-6 flex flex-col h-full overflow-y-auto">
          {/* Drawer Top / Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-100">
            <Link to="/" onClick={handleNavClick}>
              <img src={logo} alt="EC4YOU" className="h-8 w-auto object-contain" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:text-brand-primary hover:bg-brand-primary/10 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="py-6 flex-1">
            <ul className="flex flex-col gap-1.5 list-none m-0 p-0">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.subLinks && location.pathname.startsWith(link.path));
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={handleNavClick}
                      className={`
                        flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200
                        ${
                          isActive
                            ? 'bg-[#5d9c95]/10 text-[#5d9c95] font-bold border-l-4 border-[#5d9c95]'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-[#5d9c95]'
                        }
                      `}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5d9c95]"></span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Drawer Footer CTA */}
          <div className="pt-4 border-t border-slate-100">
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="btn-fill w-full text-center block bg-[#5d9c95] text-white font-bold py-3 rounded-xl text-sm transition-all duration-300 shadow-md cursor-pointer"
            >
              <span className="relative z-10">Get In Touch</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;

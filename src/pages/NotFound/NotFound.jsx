import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  ArrowLeft, 
  Compass, 
  Briefcase, 
  Layers, 
  Mail, 
  FileText,
  SearchAlert
} from 'lucide-react';
import SEO from '../../components/SEO';

export default function NotFound() {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'Services', path: '/services', icon: <Layers className="w-4 h-4" /> },
    { name: 'Careers', path: '/careers', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <FileText className="w-4 h-4" /> },
    { name: 'Contact Us', path: '/contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#fff5ee]/60 via-white to-[#f0f9f8] py-16 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="404 - Page Not Found"
        description="The page you are looking for does not exist or has been moved. Explore EC4YOU services and agency offerings."
        robots="noindex, nofollow"
      />

      {/* Background Decorative Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#5d9c95]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#ff7f50]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-3xl w-full text-center relative z-10">
        {/* Animated Badge & Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5d9c95]/10 text-[#509995] font-semibold text-sm mb-6 border border-[#5d9c95]/20 shadow-sm"
        >
          <Compass className="w-4 h-4 animate-spin text-[#ff7f50]" style={{ animationDuration: '10s' }} />
          <span>Error 404 • Page Not Found</span>
        </motion.div>

        {/* 404 Large Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff7f50] via-[#5d9c95] to-[#509995] select-none drop-shadow-sm">
            404
          </h1>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Oops! Look like you're lost.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#5d9c95] hover:bg-[#509995] text-white font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Quick Links Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 shadow-xl max-w-2xl mx-auto"
        >
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Popular Pages to Explore
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-50 hover:bg-[#5d9c95]/10 text-gray-700 hover:text-[#509995] border border-gray-200/70 hover:border-[#5d9c95]/30 text-sm font-medium transition-all duration-200"
              >
                <span className="text-[#5d9c95]">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

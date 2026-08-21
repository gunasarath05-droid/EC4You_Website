import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone, BarChart2, PenTool, Globe, Mail, Sparkles } from 'lucide-react';

import Rocket      from '../../../Image/services/hero/Rocket.png';
import HalfCircle  from '../../../Image/services/hero/half-circle.png';

const heroBadgesData = [
  {
    id: 'digital-marketing',
    label: 'Digital Marketing',
    icon: Megaphone,
    posClass: '-left-[4%] sm:-left-[4%] bottom-[6%] sm:bottom-[10%]',
    title: 'Elevate your online presence with Ec4you',
    desc: 'your trusted partner in digital marketing services. Discover tailored strategies that drive results and propel your brand to the forefront of the digital landscape..',
  },
  {
    id: 'seo',
    label: 'SEO',
    icon: BarChart2,
    posClass: 'left-[3%] sm:left-[6%] top-[48%] sm:top-[36%]',
    title: 'Increase Your Website Reach',
    desc: 'Researching, compiling and implementing keywords that best suit your brand and boost your website, making it visible to a larger audience.',
  },
  {
    id: 'graphic-design',
    label: 'Graphic Design',
    icon: PenTool,
    posClass: 'left-[24%] sm:left-[28%] top-[32%] sm:top-[14%]',
    title: 'A visual personality for your Brand.',
    desc: 'Creating a distinct identity that is an accurate representation of your brand. Thereby, making you stand out in your market.',
  },
  {
    id: 'web-design',
    label: 'Web Design',
    icon: Globe,
    posClass: 'right-[24%] sm:right-[28%] top-[32%] sm:top-[14%]',
    title: "Let's build a digital presence that mirrors your dedication",
    desc: 'At Ec4you, we specialize in web design that goes beyond the surface. We create websites that not only engage users but also tell your sustainability story',
  },
  {
    id: 'email-marketing',
    label: 'E-mail Marketing',
    icon: Mail,
    posClass: 'right-[3%] sm:right-[6%] top-[48%] sm:top-[36%]',
    title: 'Reach the right audience',
    desc: 'Ensures that your message reaches your target audience through email announcements',
  },
  {
    id: 'branding',
    label: 'Branding',
    icon: Sparkles,
    posClass: '-right-4 sm:-right-[4%] bottom-[6%] sm:bottom-[12%]',
    title: 'Develop your Brand',
    desc: 'Building the look and feel of your brand. Logos, stationaries, brochures and much more.',
  },
];

export default function Hero() {
  const [activeBadgeId, setActiveBadgeId] = useState('digital-marketing');

  const activeBadge = heroBadgesData.find((b) => b.id === activeBadgeId) || heroBadgesData[0];

  return (
    <section className="relative py-8 md:py-16 px-4 sm:px-6 text-center bg-white max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-4 md:mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-black tracking-tight mb-2 md:mb-3">
          Services
        </h1>

        <div className="inline-flex items-center gap-2 bg-[#ffede8] rounded-full px-4 sm:px-5 py-1 sm:py-1.5 text-sm sm:text-md font-semibold">
          <Link to="/" className="text-[#ff7f50] hover:underline">Home</Link>
          <span className="text-gray-600 text-xs">&gt;</span>
          <span className="text-[#669999]">Services</span>
        </div>
      </div>

      <div className="relative mt-10 sm:mt-20 md:mt-36 flex justify-center w-full">
        <div className="relative min-h-[280px] sm:min-h-[440px] md:min-h-[580px] w-full max-w-[920px] flex justify-center items-end">
          <img src={HalfCircle} alt="Services Dome" className="w-full max-w-[920px] object-contain block" />
          
          <motion.div
            className="absolute -top-[16px] sm:-top-[46px] md:-top-[62px] -translate-x-1 z-10"
          >
            <img src={Rocket} alt="Rocket Launch" className="w-[110px] sm:w-[170px] md:w-[240px] h-auto -rotate-[46deg] drop-shadow-lg" />
          </motion.div>

          {/* Center Dynamic Text inside Dome */}
          <div className="absolute bottom-[30px] sm:bottom-[75px] md:bottom-[125px] left-1/2 -translate-x-1/2 w-[82%] sm:w-[80%] max-w-[500px] text-center z-10 min-h-[60px] sm:min-h-[90px] md:min-h-[110px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBadge.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xs sm:text-lg md:text-3xl font-extrabold text-[#222222] mb-0.5 sm:mb-2 leading-snug">
                  {activeBadge.title}
                </h2>
                <p className="text-[9px] sm:text-sm md:text-base text-gray-600 max-w-[480px] mx-auto leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {activeBadge.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating Circular Badges along the arc */}
          {heroBadgesData.map((badge) => {
            const IconComp = badge.icon;
            const isActive = badge.id === activeBadgeId;

            return (
              <div
                key={badge.id}
                className={`absolute z-20 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 ${badge.posClass}`}
                onClick={() => setActiveBadgeId(badge.id)}
                onMouseEnter={() => setActiveBadgeId(badge.id)}
              >
                <div
                  className={`w-[52px] h-[52px] sm:w-[85px] sm:h-[85px] md:w-[120px] md:h-[120px] rounded-full flex flex-col items-center justify-center p-1 sm:p-2 text-center transition-all duration-300 ${
                    isActive
                      ? 'bg-[#467a75] shadow-[0_8px_20px_rgba(70,122,117,0.4)] border border-[#467a75]'
                      : 'bg-white shadow-[0_6px_18px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-slate-300'
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-8 md:h-8 transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#222222]'}`} />
                  <span className={`text-[7px] sm:text-xs md:text-sm font-semibold mt-0.5 sm:mt-1 leading-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-800'}`}>
                    {badge.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section> 
  );
}
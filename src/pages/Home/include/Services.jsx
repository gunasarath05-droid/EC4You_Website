import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Mail, Megaphone, TrendingUp, Share2, BarChart, PenTool } from 'lucide-react';

import analytics from "../../../Image/Home/service/analytics.png"
import Campaign from "../../../Image/Home/service/Campaign.png"
import content from "../../../Image/Home/service/content.png"
import digital from "../../../Image/Home/service/digital.png"
import email from "../../../Image/Home/service/email.png"
import social from "../../../Image/Home/service/social.png"

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      img: email,
      title: "Email Marketing",
      description: "Drive conversions and build lasting relationships with targeted, high-impact email campaigns.",
      colorClass: "bg-gradient-to-br from-yellow-400 to-orange-500",
      bgColorClass: "bg-white"
    },
    {
      img: Campaign,
      title: "Campaign",
      description: "Strategic and result-driven marketing campaigns tailored to boost brand visibility and ROI.",
      colorClass: "bg-gradient-to-br from-blue-400 to-teal-400",
      bgColorClass: "bg-rose-50"
    },
    {
      img: digital,
      title: "Digital Marketing",
      description: "Comprehensive online marketing solutions to scale your business and expand reach.",
      colorClass: "bg-gradient-to-br from-green-400 to-teal-400",
      bgColorClass: "bg-white"
    },
    {
      img: social,
      title: "Social Media",
      description: "Engage your ideal audience and grow a thriving community across social platforms.",
      colorClass: "bg-gradient-to-br from-purple-400 to-pink-400",
      bgColorClass: "bg-blue-50"
    },
    {
      img: analytics,
      title: "Analytics",
      description: "Data-driven insights and real-time tracking to make smarter, profitable decisions.",
      colorClass: "bg-gradient-to-br from-rose-400 to-orange-500",
      bgColorClass: "bg-white"
    },
    {
      img: content,
      title: "Content Creation",
      description: "Compelling visual and written creative content that connects and converts audiences.",
      colorClass: "bg-gradient-to-br from-indigo-400 to-purple-500",
      bgColorClass: "bg-yellow-50"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  const getSlidePosition = (index) => {
    const diff = (index - currentSlide + services.length) % services.length;
    if (diff === 0) return 'z-30 scale-100 translate-x-0 opacity-100 pointer-events-auto';
    if (diff === 1) return 'z-10 scale-75 translate-x-[150px] lg:translate-x-[280px] opacity-40 blur-[4px] pointer-events-none';
    if (diff === services.length - 1) return 'z-10 scale-75 -translate-x-[150px] lg:translate-x-[280px] opacity-40 blur-[4px] pointer-events-none';
    return 'opacity-0 scale-50 pointer-events-none';
  };

  return (
    <section className="relative bg-white py-8 md:py-16 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/3 flex flex-col gap-8">
          <div>
            <span className="text-brand-primary font-semibold text-base md:text-lg tracking-widest">Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#222222] leading-tight mt-0 md:mt-4">
              Our best <span className="text-brand-primary">services</span> you must admire!
            </h2>
          </div>

          <Link
            to="/about"
            className="btn-fill self-start bg-[#5d9c95] text-white hover:text-white font-bold md:px-8 px-4 py-2 md:py-3.5 rounded-lg text-base md:text-lg transition-all duration-300 shadow-md cursor-pointer -mt-8 md:mt-0"
          >
            <span className="relative z-10">Case Studies</span>
          </Link>
        </div>

        {/* Right Carousel */}
        <div className="w-full lg:w-2/3 relative -mt-20 md:mt-0">
          <div className="relative h-[500px] flex items-center justify-center">
            {services.map((service, index) => {
              const positionClasses = getSlidePosition(index);

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] w-[280px] md:w-[320px] ${positionClasses}`}
                >
                  <div className={`rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-slate-100 flex flex-col items-center text-center h-full transition-transform duration-500 group ${service.bgColorClass}`}>
                    <div className={`w-20 h-20 md:w-28 md:h-28 rounded-3xl flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:rotate-6 mb-2 ${service.colorClass}`}>
                      <img src={service.img} alt="service" className='w-full h-full object-cover'/>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-sm md:text-base text-slate-500 leading-relaxed text-left">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
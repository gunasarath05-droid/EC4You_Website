import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Hansari from '../../../Image/about/team/Hansari.jpg';
import Kaviya from '../../../Image/about/team/Kaviya.jpg';
import Kritika from '../../../Image/about/team/Kritika.jpg';
import Ramya from '../../../Image/about/team/Ramya.jpg';
import Ravi from '../../../Image/about/team/Ravi.jpg';
import Sachin from '../../../Image/about/team/Sachin.jpg';
import Sarath from '../../../Image/about/team/Sarath.jpg';
import Swathi from '../../../Image/about/team/Swathi.jpg';
import Tarika from '../../../Image/about/team/Tarika.jpg';
import Venkat from '../../../Image/about/team/Venkat.jpg';
import Vijay from '../../../Image/about/team/Vijay.jpg';

const teamMembers = [
  { name: 'Venkat',  role: 'CEO',             color: '#9ba5fa', image: Venkat  },
  { name: 'Kaviya',  role: 'Video Editor',     color: '#c5cfe8', image: Kaviya  },
  { name: 'Kritika', role: 'Digital Marketer', color: '#d5e8c5', image: Kritika },
  { name: 'Hansari', role: 'Digital Marketer', color: '#e8d5c5', image: Hansari },
  { name: 'Ramya',   role: 'Digital Marketer', color: '#c5e8e3', image: Ramya   },
  { name: 'Ravi',    role: 'App Developer',    color: '#e8e2c5', image: Ravi    },
  { name: 'Sachin',  role: 'Content Writer',   color: '#d8c5e8', image: Sachin  },
  { name: 'Sarath',  role: 'Web Developer',    color: '#c5d4e8', image: Sarath  },
  { name: 'Tarika',  role: 'CTO',              color: '#c5e8d0', image: Tarika  },
  { name: 'Vijay',   role: 'Web Developer',    color: '#e8dbc5', image: Vijay   },
];

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const pauseRef = useRef(false);
  const touchStartRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = isMobile ? teamMembers.length - 1 : teamMembers.length - 3;

  // Auto-play: advance every 3.5s, pause on interaction
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseRef.current) {
        setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const manualNav = (fn) => {
    pauseRef.current = true;
    fn();
    setTimeout(() => { pauseRef.current = false; }, 6000);
  };

  const prev = () => {
    manualNav(() => {
      setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    });
  };

  const next = () => {
    manualNav(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    });
  };

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStartRef.current - touchEnd;
    if (distance > 50) next();
    if (distance < -50) prev();
    touchStartRef.current = null;
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 md:mb-16 text-[#222222]">
          Meet The Squad
        </h2>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto select-none"
          onMouseEnter={() => { pauseRef.current = true; }}
          onMouseLeave={() => { pauseRef.current = false; }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* Sliding Track Viewport */}
          <div className="w-full overflow-hidden py-4 pb-12">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translateX(-${activeIndex * (isMobile ? 100 : (100 / 3))}%)`,
              }}
            >
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="w-full sm:w-1/3 flex-shrink-0 px-3 sm:px-4 box-border"
                >
                  <div className="relative group flex flex-col items-center justify-center cursor-pointer max-w-[290px] sm:max-w-none w-full mx-auto">
                    {/* Image Container */}
                    <div
                      className="w-full h-[360px] sm:h-[420px] rounded-[1.8rem] overflow-hidden shadow-lg"
                      style={{ background: member.color }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Badge at bottom */}
                    <div className="absolute -bottom-8 sm:-bottom-10 -left-4 sm:-left-4 bg-white/95 backdrop-blur-md px-5 sm:px-6 py-2 rounded-xl text-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300 z-10 min-w-[140px] sm:min-w-[150px]">
                      <p className="text-base sm:text-lg font-bold text-[#222222] leading-tight">{member.name}</p>
                      <p className="text-xs sm:text-sm text-[#666] font-medium -mt-3">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prev}
            className="absolute -left-3 sm:-left-5 top-[45%] -translate-y-1/2 w-8 h-10 bg-white rounded-md shadow-md flex items-center justify-center text-black hover:bg-gray-50 active:scale-95 transition-all duration-200 z-20 border border-l-0 border-gray-200 cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={next}
            className="absolute -right-3 sm:-right-5 top-[45%] -translate-y-1/2 w-8 h-10 bg-white rounded-md shadow-md flex items-center justify-center text-black hover:bg-gray-50 active:scale-95 transition-all duration-200 z-20 border border-r-0 border-gray-200 cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

        </div>

      </div>
    </section>
  );
}
import React from 'react';
import circle1 from '../../../Image/Home/hero/banner_shape01.png';
import circle2 from '../../../Image/Home/hero/banner_shape02.png';
import circle3 from '../../../Image/Home/hero/banner_shape03.png';
import bgcircle from '../../../Image/Home/hero/bg-circle.png';
import homehero from '../../../Image/Home/digital-market.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative max-h-[85vh] flex items-center overflow-hidden mt-0 pt-0 md:-mt-[88px] md:pt-[80px]">
      {/* ── Giant Left Background Circle (Soft Peach/Pink) ── */}
      <img
        src={bgcircle}
        alt="ec4you"
        aria-hidden="true"
        className="absolute -top-[50%] -left-[15%] md:top-[-40%] md:-left-[17%] md:w-[65vw] w-[110%] max-w-[900px] h-[150%] md:h-[125%] pointer-events-none select-none z-0 object-contain opacity-95"
      />

      {/* ── Mobile-Only Background Hero Illustration ── */}
      <img
        src={homehero}
        alt=""
        aria-hidden="true"
        className="block md:hidden absolute -right-6 bottom-2 w-[72vw] max-w-[320px] h-auto object-contain opacity-75 pointer-events-none select-none z-0"
      />

      <section className="w-full px-6 py-8 md:py-12 lg:py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center lg:min-h-[500px]">

            {/* ── Left Column: Main Hero Graphic & Floating 3D Circles ── */}
            <div className="hidden md:flex relative justify-center items-center order-2 lg:order-1 min-h-[420px]">

              {/* Main Illustration (Girl + Yellow Envelope + Plants) */}
              <img
                src={homehero}
                alt="Digital Marketing Illustration"
                className="relative z-10 w-full h-auto max-w-[480px] lg:max-w-[640px] drop-shadow-lg"
              />

              {/* 5. 3D Floating Shape 1 (Blue Globe) */}
              <img
                src={circle1}
                alt=""
                aria-hidden="true"
                className="absolute z-20 top-[28%] left-[48%] lg:top-[-8%] lg:left-[-38%] w-14 h-14 lg:w-16 lg:h-16 animate-spin pointer-events-none select-none drop-shadow-md"
                style={{ animationDuration: '2s' }}
              />

              {/* 6. 3D Floating Shape 2 (Pie Chart) */}  
              <div 
                className="absolute z-20 bottom-[6%] left-[62%] lg:bottom-[28%] lg:left-[-30%] animate-float pointer-events-none select-none drop-shadow-md"
                style={{ animationDuration: '4s' }}
              >
                <img
                  src={circle2}
                  alt=""
                  aria-hidden="true"
                  className="w-16 h-16 lg:w-10 lg:h-10 animate-spin"
                  style={{ animationDuration: '8s' }}
                />
              </div>

              {/* 7. 3D Floating Shape 3 (Orbiting Earth around Sun/Center) */}
              <div className="absolute inset-0 z-20 pointer-events-none select-none flex items-center justify-center top-[-90%] right-[90%]">
                <div 
                  className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[150px] lg:h-[150px] rounded-full relative animate-spin"
                  style={{ animationDuration: '12s' }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img
                      src={circle3}
                      alt=""
                      aria-hidden="true"
                      className="w-10 h-10 lg:w-6 lg:h-6 animate-spin drop-shadow-md"
                      style={{ animationDuration: '6s' }}
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* ── Right Column: Text Content ── */}
            <div className="flex flex-col gap-6 order-1 lg:order-2">

              {/* Pill Tag */}
              <div>
                <div className="inline-block bg-[#fde4d7]/70 text-slate-600 px-6 py-2 rounded-full text-base font-medium border border-[#fde4d7]">
                  Best <span className="text-[#5d9c95] font-semibold">Digital Marketing</span> agency
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#222222]">
                Elevate Your<br />
                Business with<br />
                Our Unique<br />
                Solutions.
              </h1>

              {/* CTA Button */}
              <div className="pt-2">
                <Link to="/contact" className="btn-fill bg-[#5d9c95] text-white font-bold px-8 py-3.5 rounded-lg text-lg transition-all duration-300 shadow-md cursor-pointer">
                  <span className="relative z-10">Get Started</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
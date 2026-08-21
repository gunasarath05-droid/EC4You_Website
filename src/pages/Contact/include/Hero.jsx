import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../Image/contact/hero/profile.png';
import rocket from '../../../Image/contact/hero/rocket.png';
import user from '../../../Image/contact/hero/user.png';

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Floating Left Icon (user/orange icon) */}
        <div className="absolute bottom-8 md:bottom-0 left-2 md:left-16 lg:left-24 -translate-y-1/2 z-20 pointer-events-none">
          <img
            src={user}
            alt="User Icon"
            className="w-12 h-12 md:w-20 md:h-20 object-contain blur-[2px]"
          />
        </div>

        {/* Floating Right Top Icon (blue profile bubble) */}
        <div className="absolute -top-12 md:-top-32 right-12 md:right-36 lg:right-48 z-20 pointer-events-none">
          <img
            src={profile}
            alt="Profile Icon"
            className="w-24 h-24 md:w-56 md:h-56 object-contain drop-shadow-md"
          />
        </div>

        {/* Floating Right Rocket */}
        <div className="absolute -bottom-16 md:-bottom-24 right-8 md:right-16 z-20 pointer-events-none">
          <img
            src={rocket}
            alt="Rocket Illustration"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-xl"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center text-center py-6">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#222222] mb-6">
            Contact US
          </h1>

          {/* Breadcrumb Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ffe3d5] px-8 sm:px-12 py-2 rounded-full shadow-sm text-sm md:text-lg font-medium text-slate-800">
            <Link to="/" className="text-slate-800 hover:underline hover:text-[#ff7f50] transition-colors">
              Home
            </Link>
            <span className="text-slate-800">&gt;</span>
            <span className="text-[#669999]">Contact Us</span>
          </div>
        </div>

      </div>
    </section>
  );
}
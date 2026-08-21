import React from 'react';
import portfolioImage from '../../../Image/Home/team_img_shape.png';
import team1 from '../../../Image/Home/team_img01.png';
import team2 from '../../../Image/Home/team_img04.png';
import team3 from '../../../Image/Home/team_img05.png';

export default function PortfolioSection() {
  const avatars = [
    { color: 'bg-rose-300', className: 'top-20 left-1/2 -translate-x-1/2' },
    { color: 'bg-yellow-400', className: 'top-32 left-12' },
    { color: 'bg-blue-300', className: 'top-1/2 left-20 -translate-y-1/2' },
    { color: 'bg-orange-500', className: 'bottom-20 left-24' },
    { color: 'bg-yellow-500', className: 'top-1/2 right-12 -translate-y-1/2' }
  ];

  return (
    <section className="py-8 md:py-20 px-6 lg:px-8 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side - Visual */}
          <div className="relative">
            {/* Main Card Container */}
            <div className="relative bg-transparent rounded-[3rem] md:rounded-[6rem] p-12 md:p-24 border border-gray-200">             
              <img src={portfolioImage} alt="portfolio" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-28 md:top-56 left-4 md:left-12 transform translate-x-1/2 translate-y-1/2 z-10">
              <img src={team1} alt="team" className="w-10 h-10 md:w-14 md:h-14 rounded-full" />
            </div>
            <div className="absolute top-8 md:top-14 -left-10 md:-left-9 transform translate-x-1/2 translate-y-1/2 z-10">
              <img src={team2} alt="team" className="w-10 h-10 md:w-14 md:h-14 rounded-full" />
            </div>
            <div className="absolute bottom-2 left-8 transform translate-x-1/2 translate-y-1/2 z-10">
              <img src={team3} alt="team" className="w-16 h-16 md:w-20 md:h-20 rounded-full" />
            </div>
            <div className="absolute bottom-40 right-1 transform translate-x-1/2 translate-y-1/2 z-10">
              <img src={team2} alt="team" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col gap-2 relative">
            <div className="flex flex-col gap-4">
              <span className="text-brand-primary font-semibold text-xl md:text-2xl capitalize">
                Our Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                Discover Our Portfolio
              </h2>
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              We pride ourselves in having a diverse portfolio with clients from various industries.
            </p>

            <button
              onClick={() => {
                const element = document.getElementById('client-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-fill w-fit bg-[#5d9c95] text-white font-bold px-6 md:px-8 py-2.5 md:py-3.5 rounded-lg text-base md:text-lg transition-all duration-300 shadow-md mt-2 md:mt-6 cursor-pointer"
            >
              <span className="relative z-10">See our Projects</span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

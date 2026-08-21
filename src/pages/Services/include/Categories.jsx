import React from 'react';
import { Link } from 'react-router-dom';

import WebDesignImg   from '../../../Image/services/services/web-design.png';
import GraphicImg     from '../../../Image/services/services/branding.png';
import SearchImg      from '../../../Image/services/services/Search.png';
import LinkImg        from '../../../Image/services/services/Link.png';
import SmartAdsImg    from '../../../Image/services/services/smart-ads.png';
import EmailImg       from '../../../Image/services/services/email.png';
import SEOImg         from '../../../Image/services/services/SEO.png';
import SocialImg      from '../../../Image/services/services/Social-media.png';


const serviceCards = [
  { label: 'Web Development', img: WebDesignImg, bgColor: '#e6f0fa', circleColor: '#9bbdf2',  },
  { label: 'Graphic Design', img: GraphicImg, bgColor: '#f0e6fa', circleColor: '#c0a9f7', },
  { label: 'Search', img: SearchImg, bgColor: '#e6f2fa', circleColor: '#9bc5f2', },
  { label: 'Link Building', img: LinkImg, bgColor: '#e6faf2', circleColor: '#9ee5c7', },
  { label: 'Smart Ads', img: SmartAdsImg, bgColor: '#f5f5f5', circleColor: '#cccccc',  },
  { label: 'Email Marketing', img: EmailImg, bgColor: '#faefe6', circleColor: '#f3c49f',  },
  { label: 'SEO', img: SEOImg, bgColor: '#e6faee', circleColor: '#a7f3d0',  },
  { label: 'Social Media', img: SocialImg, bgColor: '#fae6ee', circleColor: '#f4a7c2',  },
];

const duplicatedCards = [...serviceCards, ...serviceCards, ...serviceCards];

export default function Categories() {
  return (
    <section className="py-10 md:py-12 relative overflow-hidden w-full">
      <style>{`
        @keyframes categoriesMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .categories-marquee-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: categoriesMarquee 28s linear infinite;
        }
        .categories-marquee-container:hover .categories-marquee-track {
          animation-play-state: paused;
        }
        .categories-left-pad {
          padding-left: calc(1.25rem + max(0px, (100vw - 2.5rem - 80rem) / 2));
        }
        .categories-clip {
          clip-path: inset(0 0 0 calc(1.25rem + max(0px, (100vw - 2.5rem - 80rem) / 2)));
          overflow: hidden;
        }
        .categories-fade-mask {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            white 8%,
            white 88%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            white 8%,
            white 88%,
            transparent 100%
          );
        }
      `}</style>

      {/* Left fade overlay — positioned at content left edge */}
      <div
        className="absolute top-0 bottom-0 z-10 pointer-events-none"
        style={{
          left: 'calc(1.25rem + max(0px, (100vw - 2.5rem - 80rem) / 2))',
          width: '120px',
          background: 'linear-gradient(to right, #ffffff, transparent)',
        }}
      />

      <div className="categories-clip w-full overflow-hidden">
        <div className="categories-marquee-container categories-left-pad py-4">
          <div className="categories-marquee-track">
            {duplicatedCards.map((card, idx) => (
              <div
                key={idx}
                className="group flex-shrink-0 w-[170px] sm:w-[280px] h-[150px] sm:h-[200px] rounded-2xl p-7 text-center cursor-pointer transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 flex flex-col justify-between items-center"
                style={{ backgroundColor: card.bgColor }}
              >
                <Link to={card.path || '/services'} className="no-underline flex flex-col items-center justify-between h-full w-full">
                  {/* Center Circle Container */}
                  <div className="relative w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] flex items-center justify-center my-auto">
                    {/* Soft Background Circle centered in card */}
                    <div
                      className="absolute w-16 h-16 sm:w-24 sm:h-24 rounded-full transition-all duration-300 group-hover:scale-105"
                      style={{ backgroundColor: card.circleColor }}
                    />
                    {/* Icon image - initially offset to bottom-left, transitions to exact center on hover */}
                    <img
                      src={card.img}
                      alt={card.label}
                      className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 object-contain transition-all duration-300 ease-out transform -translate-x-5 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-xs sm:text-lg font-bold text-[#222222] leading-tight pt-6">
                    {card.label}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

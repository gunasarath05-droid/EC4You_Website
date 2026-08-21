import React from 'react';
import { client } from '../../../data/client';

const CourierSection = () => {
  // Extract all client images from client object exported in client.js
  const clientLogos = Object.values(client);

  // Split client images into 2 columns for staggered smooth scrolling
  const col1Images = clientLogos.filter((_, index) => index % 2 === 0);
  const col2Images = clientLogos.filter((_, index) => index % 2 !== 0);

  // Duplicate arrays for seamless vertical infinite top-to-bottom loop
  const col1 = [...col1Images, ...col1Images];
  const col2 = [...col2Images, ...col2Images];

  return (
    <>
      <style>{`
        @keyframes scrollDown1 {
          0%   { transform: translateY(-20%); }
          100% { transform: translateY(0%); }
        }
        @keyframes scrollDown2 {
          0%   { transform: translateY(20%); }
          100% { transform: translateY(0%); }
        }
        .scroll-down-1 { animation: scrollDown1 22s linear infinite; }
        .scroll-down-2 { animation: scrollDown2 22s linear infinite; }
        .client-section:hover .scroll-down-1,
        .client-section:hover .scroll-down-2
      `}</style>

      <section id="client-section" className="client-section relative bg-[#F26838] overflow-hidden rounded-tr-[5rem] md:rounded-tr-[8rem] py-14 md:py-20 scroll-mt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-10 justify-between">

            {/* Left: Text Content */}
            <div className="flex-1 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 text-white">
                From anywhere<br />
                to everywhere
              </h2>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                Our multi-courier network spread across 24000+ pin codes<br className="hidden sm:inline" />
                lets you say yes to every order, even from remote areas.
              </p>
            </div>

            {/* Right: 2-Column top-to-bottom auto-scrolling client logo grid */}
            <div
              className="w-full lg:w-auto flex gap-2 md:gap-6 justify-center items-center overflow-hidden"
              style={{ height: '340px', maxWidth: '500px' }}
            >
              {/* Column 1 */}
              <div className="flex flex-col gap-2 md:gap-4 scroll-down-1 w-[160px] sm:w-[200px] md:w-[210px]">
                {col1.map((logoSrc, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm p-2 h-[100px] md:h-[120px]"

                  >
                    <img
                      src={logoSrc}
                      alt={`Client logo ${i + 1}`}
                      className="md:max-h-16 max-h-16 md:max-w-[150px] max-w-[130px] w-auto h-auto object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-2 md:gap-4 scroll-down-2 w-[160px] sm:w-[200px] md:w-[210px]">
                {col2.map((logoSrc, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm p-2 h-[90px] md:h-[110px]"
                  >
                    <img
                      src={logoSrc}
                      alt={`Client logo ${i + 1}`}
                      className="md:max-h-16 max-h-16 md:max-w-[150px] max-w-[130px] w-auto h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CourierSection;

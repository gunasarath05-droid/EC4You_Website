import React from 'react';
import award1 from '../../../Image/Home/award/badge1.svg';
import award2 from '../../../Image/Home/award/badge2.svg';
import award3 from '../../../Image/Home/award/badge3.png';
import award4 from '../../../Image/Home/award/badge4.svg';

const awards = [
  { id: 1, src: award1, alt: 'Top Rated Agency – Sortlist' },
  { id: 2, src: award2, alt: 'Top Digital Marketing Company – Goodfirms' },
  { id: 3, src: award3, alt: 'Top 3 Digital Marketing Agency – DigitalCrawl 2023' },
  { id: 4, src: award4, alt: 'Verified Agency – Sortlist' },
];

export default function AwardsAchievements() {
  return (
    <section className="relative font-sans overflow-hidden py-8 md:py-12">
      <div className="text-center mb-2">
        <p className="font-medium tracking-wide text-gray-500 text-lg md:text-xl">
          Awards and Achievement
        </p>
      </div>
      <div className='bg-[#f7ffff] py-8 md:py-16 px-6'>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Awards Grid — 4 cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {awards.map((award) => (
              <div
                key={award.id}
                className=" w-full max-w-[100px] md:max-w-[220px] flex items-center justify-center min-h-[80px] md:min-h-[130px] "
              >
                <img
                  src={award.src}
                  alt={award.alt}
                  className="max-h-[120px] md:max-h-[150px] max-w-[180px] md:max-w-[250px] object-contain block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

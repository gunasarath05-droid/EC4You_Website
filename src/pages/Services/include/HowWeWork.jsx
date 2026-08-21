import { Link } from 'react-router-dom';
import ProcessImg  from '../../../Image/services/process/Process.png';
import CalImg      from '../../../Image/services/process/cal.png';
import EditImg     from '../../../Image/services/process/edit.png';
import ChartImg       from '../../../Image/services/process/char.png';

import shImg from '../../../Image/services/process/sh.png'



const processSteps = [
  { icon: EditImg, label: 'Design' },
  { icon: CalImg, label: 'Develop' },
  { icon: ChartImg, label: 'Elevate' },
];

export default function HowWeWork() {
    return (
       <section className="py-16 md:py-20 px-5 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Column */}
          <div className="relative">
     
                <p className="text-lg md:text-xl font-medium text-[#ff7f50] mb-2">
              Our Process
            </p>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-2">
              How We Work?
            </h2>
            <p className="text-sm md:text-lg text-gray-500 mb-8">
              Find best digital marketing services in Chennai, India with our top-rated
              agency. Elevate your online presence and surpass your competition with
              our expert strategies and personalised solutions.
            </p>

            {/* Step Badges Row */}
            <div className="flex items-center justify-start gap-2 md:gap-4 mb-8 flex-wrap">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2"
                >
                  <img src={step.icon} alt={step.label} className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
                  <span className="text-sm sm:text-md md:text-xl font-bold text-gray-800">{step.label}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div>
              <Link
                to="/contact"
                className="inline-block bg-[#52948e] text-white font-bold text-sm sm:text-base px-7 py-3 rounded-lg hover:bg-[#3f736e] hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(82,148,142,0.3)] transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Wavy Underline Decoration */}
            <div className="hidden md:block absolute left-60 -bottom-10 flex justify-center md:justify-start">
              <img src={shImg} alt="Wavy underline" className="w-[90px] h-auto object-contain hover:-translate-y-3 transition-transform duration-500" />
            </div>
          </div>

          {/* Right Image Illustration */}
          <div className="flex justify-center">
            <img src={ProcessImg} alt="How We Work Illustration" className="w-full max-w-[620px] h-auto object-contain hover:translate-y-3 transition-transform duration-500" />
          </div>
        </div>
      </section>
    )
}
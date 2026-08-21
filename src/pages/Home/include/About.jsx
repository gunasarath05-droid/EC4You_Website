import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Lightbulb, TrendingUp } from 'lucide-react';
import aboutImage from '../../../Image/Home/about.webp';

import point1 from '../../../Image/Home/about/about_icon01.png'
import point2 from '../../../Image/Home/about/about_icon02.png'
import point3 from '../../../Image/Home/about/Rectangle-1.png'

export default function AboutCompany() {
  const features = [
    {
      icon: point1,
      title: "Concept Creation",
      description: "Our innovative ideas take shape, driving your digital success with creativity and purpose",
      iconContainerClass: "bg-[#6d645e]"
    },
    {
      icon: point2,
      title: "Ideas to Masterpieces",
      description: "We'll turn your ideas into furthermore Visual Masterpieces.",
      iconContainerClass: "bg-[#2d4351]"
    },
    {
      icon: point3,
      title: "Brand Reach",
      description: "We elevate your presence in the digital world and increase your audience reach",
      iconContainerClass: "bg-[#cbdce6] text-blue-600"
    }
  ];

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto bg-[#e6eded] rounded-[1.5rem] md:rounded-[3rem] p-8 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              <span className="text-brand-primary font-semibold text-base md:text-lg">
                About Company
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222]">
                A Full Service Design and Branding Agency
              </h2>
            </div>

            <p className="text-gray-500 text-sm md:text-md mt-0 md:mt-8 leading-relaxed">
              We believe that digital marketing isn't just about technology; Digital marketing is about people and stories. Our team simplifies online success for all;
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-2 mt-2 md:mt-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white shadow-sm ${feature.iconContainerClass}`}>
                    <img src={feature.icon} alt="icon" />
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base md:text-xl font-bold text-[#222222] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-md">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-8 md:gap-32">
            {/* Image Container */}
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <img
                src={aboutImage}
                alt="about"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Services Bottom Bar */}
            <div className="flex justify-between items-center text-center gap-4 md:gap-12 px-0 md:px-4 ">
              <h3 className="text-base md:text-xl font-bold text-[#222222]">
                Providing Creative Digital Marketing Solutions
              </h3>
              <Link
                to="/services"
                className="btn-fill bg-[#5d9c95] text-white hover:text-white font-bold px-6 py-2.5 md:px-8 md:py-3.5 rounded-lg text-base md:text-lg transition-all duration-300 shadow-md whitespace-nowrap cursor-pointer"
              >
                <span className="relative z-10">Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

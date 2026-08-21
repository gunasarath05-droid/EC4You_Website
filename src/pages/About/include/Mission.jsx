import React from 'react';
import {  Infinity, TrendingUp, } from 'lucide-react';
import { FaRegLightbulb } from "react-icons/fa6";
import { FaInfinity } from "react-icons/fa";

export default function Mission() {
    return (
        <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

          {/* Mission Content */}
          <div className="flex-[1.5]">
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-[#222222]">Our Mission</h2>
              <div className="flex gap-8 mb-6 font-bold text-md sm:text-lg tracking-[1px] text-[#333]">
                <span className="flex items-center"><i className="inline-block w-[10px] h-[10px] bg-[#e8633a] rounded-full mr-4"></i> EFFECTIVE</span>
                <span className="flex items-center"><i className="inline-block w-[10px] h-[10px] bg-[#e8633a] rounded-full mr-4"></i> TRUSTWORTHY</span>
              </div>
            </div>

            <p className="text-[#555] leading-[28px] text-sm sm:text-md mb-6 sm:mb-8">
              At EC4You Digital Marketing, we are committed to providing MSMEs, cottage industries, and
              limited liability companies with high-quality digital marketing, website development, and
              app development services at accessible rates. To foster business growth, we offer
              introductory pricing until our clients make their first sale, ensuring that our services are both
              affordable and impactful from the outset. We are also dedicated to supporting startups by
              integrating emerging technologies like AI and Web 3.0 to accelerate their performance and
              growth potential.
            </p>

            <p className="text-black text-sm md:text-md font-medium">
              "An expert digital marketing team specializing in MSMEs, all under one roof—dedicated to driving
              your success with the power of cutting-edge technology"
            </p>
          </div>

          {/* Feature List (Right Side) */}
          <div className="flex-1 flex flex-col gap-[20px] w-full">
            {/* Item 1 */}
            <div className="flex items-center shadow-[0_8px_30px_rgba(0,0,0,0.10)] rounded-md overflow-hidden">
              <div className="bg-[#76a09a] w-[100px] h-[100px] flex justify-center items-center text-white hover:text-gray-600 transition-all duration-300">
                <div className="w-[42px] h-[42px] flex items-center justify-center">
                  {/* Using Lightbulb icon as replacement for icon-bulb.png */}
                  <FaRegLightbulb size={56} />
                </div>
              </div>
              <div className="bg-white flex-1 px-[25px] h-[80px] flex items-center font-semibold text-[#333]">
                Delivering Project correctly
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center shadow-[0_8px_30px_rgba(0,0,0,0.10)] rounded-md overflow-hidden">
              <div className="bg-[#76a09a] w-[100px] h-[100px] flex justify-center items-center text-white hover:text-gray-600 transition-all duration-300">
                <div className="w-[56px] h-[56px] flex items-center justify-center">
                  {/* Using Infinity icon */}
                  <FaInfinity size={58} />
                </div>
              </div>
              <div className="bg-white flex-1 px-[25px] h-[80px] flex items-center font-semibold text-[#333]">
                Trust Worthy
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center shadow-[0_8px_30px_rgba(0,0,0,0.10)] rounded-md overflow-hidden">
              <div className="bg-[#76a09a] w-[100px] h-[100px] flex justify-center items-center text-white hover:text-gray-600 transition-all duration-300">
                <div className="w-[56px] h-[56px] flex items-center justify-center">
                  {/* Using Target/Growth icon */}
                  <TrendingUp size={58} />
                </div>
              </div>
              <div className="bg-white flex-1 px-[25px] h-[80px] flex items-center font-semibold text-[#333]">
                Targeting right audience
              </div>
            </div>
          </div>

        </div>
      </section>
    );
}
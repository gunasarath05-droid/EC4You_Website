import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import googlereview from '../../../Image/Home/testimonials/GoogleReviewLogo.png';
import reviewImg from '../../../Image/Home/review.png';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'ECOKlien',
      time: '1 year ago',
      rating: 5,
      text: 'We were looking for a clean and professional website that stayed true to our brand and EC4You did just that. They are one of the very few Web Development Agencies in Chennai that deliver exactly what we want, if not better.',
      avatar: 'EC',
      avatarColor: 'bg-green-600',
    },
    {
      id: 2,
      name: 'Blackboxes',
      time: '6 months ago',
      rating: 5,
      text: 'The team at EC4You is fantastic. Their digital marketing strategies helped us reach our target audience more effectively than ever before. Highly recommended!',
      avatar: 'BB',
      avatarColor: 'bg-black',
    },
    {
      id: 3,
      name: 'SK Residency',
      time: '8 months ago',
      rating: 5,
      text: 'Exceptional service and support. They helped us modernize our hotel booking system, making it much more user-friendly for our guests.',
      avatar: 'SK',
      avatarColor: 'bg-red-600',
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-8 md:py-16 px-6 bg-white relative font-sans">

      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <div className="text-left overflow-hidden w-full">
          <div className="text-left mb-6">
            <p className="text-brand-primary font-bold text-base md:text-lg mb-2">Testimonial</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              What Our Clients say?
            </h2>
          </div>

          <div className="max-w-xl mb-8">
            <p className="text-slate-500 text-base md:text-md ">
              As a team, we consistently deliver top-notch results by harnessing the power of the latest technology and staying ahead of emerging trends, ensuring your complete satisfaction.
            </p>
          </div>

          {/* Carousel Slider */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full box-border">
                  <div className="bg-[#f4f7f9] rounded-[1.5rem] md:rounded-[2.5rem] p-4 sm:p-10 flex flex-col justify-between transition-all duration-300">
                    {/* Top Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0 ${testimonial.avatarColor}`}>
                        {testimonial.avatar}
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-bold text-slate-900 text-lg sm:text-xl leading-tight mb-0">{testimonial.name}</h4>
                        <p className="text-xs sm:text-sm text-slate-400 font-normal mt-0.5 mb-0">{testimonial.time}</p>
                      </div>
                    </div>

                    {/* Rating + Google Review Logo */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 sm:w-6 sm:h-6 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`}
                          />
                        ))}
                      </div>
                      <img src={googlereview} alt="Google Reviews" className="h-10 sm:h-12 w-auto object-contain" />
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                      <span>&ldquo;</span> {testimonial.text} <span>&rdquo;</span>
                    </p>

                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex gap-3 justify-start mt-2 md:mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-brand-primary w-8' : 'bg-slate-200 w-2'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center items-center w-full">
          <img
            src={reviewImg}
            alt="Review Illustration"
            className="w-full max-w-[850px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

import React, { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { submitFormData } from '../../services/formService';
import map from '../../Image/Home/map_img.png';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // Fixed positions to match the image layout
  const floatingIcons = [
    { id: 1, icon: '•', className: 'text-green-400 text-2xl top-[22%] left-[7%]' },
    { id: 2, icon: '+', className: 'text-[#ff6633] text-xl top-[18%] left-[30%]' },
    { id: 3, icon: '+', className: 'text-green-400 text-lg top-[12%] left-[52%]' },
    { id: 4, icon: '+', className: 'text-green-400 text-xl top-[10%] left-[80%]' },
    { id: 5, icon: '+', className: 'text-[#ff6633] text-xl top-[55%] left-[20%]' },
    { id: 6, icon: '×', className: 'text-green-400 text-xl top-[52%] left-[88%]' },
    { id: 7, icon: '+', className: 'text-[#ff6633] text-xl top-[80%] left-[45%]' },
    { id: 8, icon: '•', className: 'text-green-400 text-2xl top-[78%] left-[82%]' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const result = await submitFormData({
      formType: 'Newsletter Subscription',
      email: email,
      subject: 'Newsletter Subscription Request',
    });

    setIsSubmitting(false);

    if (result.success) {
      setStatusMessage({
        type: 'success',
        text: 'Thank you for subscribing to our newsletter!',
      });
      setEmail('');
      setTimeout(() => setStatusMessage(null), 5000);
    } else {
      setStatusMessage({
        type: 'error',
        text: result.message || 'Failed to subscribe. Please try again.',
      });
    }
  };

  return (
    <section className="bg-white relative overflow-hidden mt-8">
      {floatingIcons.map((item) => (
        <span
          key={item.id}
          className={`md:block hidden absolute pointer-events-none select-none font-bold z-10 leading-none animate-float pointer-events-none select-none ${item.className}`}
        >
          {item.icon}
        {}
        </span>
      ))}

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center py-20 md:py-28">
        <img  
          src={map}
          alt="world map"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-80"
        />
        <div className="relative z-20">
          <p className="font-semibold mb-3 uppercase tracking-[0.18em] text-[#ff6633] text-[0.85rem]">
            About Company
          </p>

          <h2 className="font-black mb-10 text-gray-900 text-3xl sm:text-4xl md:text-5xl leading-[1.2]">
            Get Latest Updates<br />
            and <span className="text-gray-900">NewsLetter</span>
          </h2>

          {statusMessage && (
            <div
              className={`mb-6 max-w-xl mx-auto p-4 rounded-xl text-sm font-medium flex items-center justify-center gap-2 ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}
            >
              {statusMessage.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />}
              <span>{statusMessage.text}</span>
            </div>
          )}

          <form
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full flex-1 px-6 py-3.5 text-[0.95rem] text-gray-600 bg-white border-[1.5px] border-gray-300 rounded-lg outline-none transition-all focus:border-[#4a7c77] focus:ring-1 focus:ring-[#4a7c77]"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-fill w-full sm:w-auto bg-[#5d9c95] text-white font-bold px-8 py-3.5 rounded-lg text-lg transition-all duration-300 shadow-md border-none cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin relative z-10" />
                  <span className="relative z-10">Submitting...</span>
                </>
              ) : (
                <span className="relative z-10">Submit</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

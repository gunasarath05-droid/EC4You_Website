import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Loader2, CheckCircle2 } from 'lucide-react';
import Captcha from '../../../components/Common/Captcha';
import { submitFormData } from '../../../services/formService';
import consultation from "../../../Image/Home/contact/consultation.png"
import paint from "../../../Image/Home/contact/paint.png"
import rocket from "../../../Image/Home/contact/rocket.png"
import target from "../../../Image/Home/contact/target.png"
import zoom from "../../../Image/Home/contact/zoom.png"

const countries = [
  "United States", "United Kingdom", "United Arab Emirates", "Canada",
  "Australia", "Singapore", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain",
  "Germany", "France", "Malaysia", "New Zealand", "South Africa", "Afghanistan",
  "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Austria",
  "Azerbaijan", "Bahamas", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
  "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
  "Brunei", "Bulgaria", "Cambodia", "Cameroon", "Chile", "China", "Colombia",
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Dominican Republic",
  "Ecuador", "Egypt", "Estonia", "Ethiopia", "Fiji", "Finland", "Georgia", "Ghana",
  "Greece", "Guatemala", "Honduras", "Hong Kong", "Hungary", "Iceland", "Indonesia","India",
  "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "South Korea", "Latvia", "Lebanon", "Lithuania",
  "Luxembourg", "Madagascar", "Maldives", "Malta", "Mauritius", "Mexico", "Monaco",
  "Mongolia", "Morocco", "Myanmar", "Nepal", "Netherlands", "Nigeria", "Norway",
  "Pakistan", "Panama", "Peru", "Philippines", "Poland", "Portugal", "Romania",
  "Russia", "Rwanda", "Serbia", "Seychelles", "Slovakia", "Slovenia", "Spain",
  "Sri Lanka", "Sweden", "Switzerland", "Taiwan", "Tanzania", "Thailand", "Turkey",
  "Uganda", "Ukraine", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen",
  "Zambia", "Zimbabwe"
];

/* Custom Brand-Styled Country Dropdown with Search Filter */
function CountrySelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef(null);
  const searchRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Auto-focus search input when dropdown opens
  useEffect(() => {
    if (open && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 50);
    }
  }, [open]);

  const filtered = countries.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full relative" ref={ref}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => { setOpen((prev) => !prev); setSearch(''); }}
        className="w-full px-6 py-4 rounded-xl border border-slate-200 text-sm md:text-lg transition-all duration-300 bg-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 flex items-center justify-between cursor-pointer"
      >
        <span className={value ? 'text-slate-800' : 'text-slate-400'}>
          {value || 'Select Country'}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-[#5d9c95]' : 'text-slate-400'}`}
        />
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden">
          {/* Brand Header with Search Input */}
          <div className="bg-[#5d9c95] px-4 py-3">
            <div className="flex items-center gap-2 bg-white/15 rounded-lg px-3 py-1.5 border border-white/20">
              <svg className="w-4 h-4 text-white/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country..."
                className="flex-1 bg-transparent text-white placeholder-white/70 text-sm outline-none min-w-0"
                onMouseDown={(e) => e.stopPropagation()}
              />
              {search && (
                <button
                  type="button"
                  onMouseDown={(e) => { e.stopPropagation(); setSearch(''); }}
                  className="text-white/70 hover:text-white text-lg leading-none flex-shrink-0"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Scrollable List */}
          <div className="max-h-56 overflow-y-auto divide-y divide-slate-50">
            {filtered.length > 0 ? (
              filtered.map((country, idx) => (
                <div
                  key={idx}
                  onMouseDown={() => { onChange(country); setOpen(false); setSearch(''); }}
                  className={`px-5 py-2.5 text-base cursor-pointer transition-colors duration-150 ${
                    value === country
                      ? 'bg-[#5d9c95] text-white font-semibold'
                      : 'text-slate-700 hover:bg-[#5d9c95]/10 hover:text-[#5d9c95]'
                  }`}
                >
                  {country}
                </div>
              ))
            ) : (
              <div className="px-5 py-5 text-center text-slate-400 text-sm">
                No country found for "<span className="font-semibold text-[#5d9c95]">{search}</span>"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const ContactSection = () => {
  const [country, setCountry] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
  });
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const captchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (captchaRef.current && !captchaRef.current.isValid()) {
      alert('Please solve the security verification puzzle correctly.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    const result = await submitFormData({
      formType: 'Home Page Connect With Us Form',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      country: country || 'Not Specified',
      subject: formData.subject,
    });

    setIsSubmitting(false);

    if (result.success) {
      setStatusMessage({
        type: 'success',
        text: 'Thank you! Your request for a free consultation has been received.',
      });
      setFormData({ name: '', email: '', phone: '', subject: '' });
      setCountry('');
      if (captchaRef.current) captchaRef.current.reset();
      setIsCaptchaValid(false);
      setTimeout(() => setStatusMessage(null), 5000);
    } else {
      setStatusMessage({
        type: 'error',
        text: result.message || 'Failed to submit form. Please try again.',
      });
    }
  };

  return (
    <section className="py-8 md:py-16 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: Contact Form Card */}
          <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-6 md:p-12 border border-slate-50 relative z-10 w-full max-w-lg mx-auto lg:mx-0">
            <h3 className="text-xl md:text-2xl font-extrabold text-[#222222] mb-2 md:mb-8 text-center tracking-tight">
              Connect With us
            </h3>

            {statusMessage && (
              <div
                className={`mb-5 p-4 rounded-xl text-sm font-medium flex items-center gap-2.5 ${
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
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-6 py-3.5 rounded-xl border border-slate-200 text-sm md:text-base transition-all duration-300 bg-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 placeholder:text-slate-400"
                  required
                />
              </div>

              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail"
                  className="w-full px-6 py-3.5 rounded-xl border border-slate-200 text-sm md:text-base transition-all duration-300 bg-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 placeholder:text-slate-400"
                  required
                />
              </div>

              <div className="w-full">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-6 py-3.5 rounded-xl border border-slate-200 text-sm md:text-base transition-all duration-300 bg-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 placeholder:text-slate-400"
                />
              </div>

              <CountrySelect value={country} onChange={setCountry} />

              <div className="w-full">
                <textarea
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject / Message"
                  rows={4}
                  className="w-full px-6 py-3.5 rounded-xl border border-slate-200 text-sm md:text-base transition-all duration-300 bg-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 placeholder:text-slate-400 resize-none"
                  required
                />
              </div>

              {/* Captcha Security Check */}
              <Captcha
                ref={captchaRef}
                onVerify={setIsCaptchaValid}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-fill w-full bg-[#5d9c95] text-white font-bold px-8 py-3.5 rounded-lg text-base md:text-lg transition-all duration-300 shadow-md mt-2 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin relative z-10" />
                    <span className="relative z-10">Submitting...</span>
                  </>
                ) : (
                  <span className="relative z-10">Free Consultation</span>
                )}
              </button>
            </form>
          </div>

          {/* Right: Content & Benefits */}
          <div className="flex flex-col ">

            {/* 3D Icon + Label */}
            <div className="flex flex-col gap-3">
              {/* 3D Icon Container */}
              <div className="md:w-20 w-16 md:h-20 h-16 mb-2">
                <img src={consultation} alt="" className="w-auto h-auto object-contain" />
              </div>

              <h4 className="text-[#ff6633] font-semibold text-base md:text-md tracking-wide">
                95% Accuracy
              </h4>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#222222]">
              Best Digital Marketing Agency in Chennai
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-base md:text-md leading-relaxed max-w-xl">
              As a team, we consistently deliver top-notch results by harnessing the power of the latest technology and staying ahead of emerging trends, ensuring your complete satisfaction.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-6 md:gap-y-12 mt-6 items-center">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <img src={target} alt="" className="md:w-16 w-12 md:h-16 h-12" />
                <div className="flex flex-col">
                  <p className="font-bold text-[#222222] text-base md:text-lg leading-snug">Faster <span className="text-[#ff6633]"> Target</span><br />Audience Reach</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <img src={paint} alt="" className="md:w-16 w-12 md:h-16 h-12" />
                <div className="flex flex-col">
                  <p className="font-bold text-[#222222] text-base md:text-lg leading-snug">Improved <span className="text-[#ff6633]"> Brand’s</span><br />Visibility</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <img src={rocket} alt="" className="md:w-16 w-12 md:h-16 h-12" />
                <div className="flex flex-col">
                  <p className="font-bold text-[#222222] text-base md:text-lg leading-snug">Convertible <span className="text-[#ff6633]"> Leads</span><br />Generation</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-4">
                <img src={zoom} alt="" className="md:w-16 w-12 md:h-16 h-12" />
                <div className="flex flex-col">
                  <p className="font-bold text-[#222222] text-base md:text-lg leading-snug">Analysed <span className="text-[#ff6633]"> Strategy</span><br />Planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

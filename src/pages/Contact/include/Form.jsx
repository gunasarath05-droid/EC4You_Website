import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Loader2, CheckCircle2 } from 'lucide-react';
import Captcha from '../../../components/Common/Captcha';
import { submitFormData } from '../../../services/formService';
import formImg from '../../../Image/contact/form.png';
import locationImg from '../../../Image/contact/location.png';
import mailImg from '../../../Image/contact/mail.png';
import peparrocketImg from '../../../Image/contact/peparrocket.png';
import phoneImg from '../../../Image/contact/phone.png';

const countryList = [
  "United States", "United Kingdom", "United Arab Emirates", "Canada",
  "Australia", "Singapore", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain",
  "Germany", "France", "Malaysia", "New Zealand", "South Africa", "Afghanistan",
  "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Austria",
  "Azerbaijan", "Bahamas", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
  "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
  "Brunei", "Bulgaria", "Cambodia", "Cameroon", "Chile", "China", "Colombia",
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Dominican Republic",
  "Ecuador", "Egypt", "Estonia", "Ethiopia", "Fiji", "Finland", "Georgia", "Ghana",
  "Greece", "Guatemala", "Honduras", "Hong Kong", "Hungary", "Iceland", "Indonesia", "India",
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
      setTimeout(() => searchRef.current?.focus(), 60);
    }
  }, [open]);

  const filtered = countryList.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div className="w-full relative" ref={ref}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => { setOpen((prev) => !prev); setSearch(''); }}
        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border border-gray-200 text-sm md:text-base transition-all duration-300 bg-white focus:outline-none focus:border-[#509995] focus:ring-1 focus:ring-[#509995]/20 flex items-center justify-between cursor-pointer text-left"
      >
        <span className={value ? 'text-slate-800 font-medium' : 'text-gray-400'}>
          {value || 'Select Country'}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-[#509995]' : 'text-gray-400'}`}
        />
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden">
          {/* Brand Header with Search Input */}
          <div className="bg-[#509995] px-4 py-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 bg-white/15 rounded-lg px-3 py-1.5 border border-white/20">
              <svg className="w-4 h-4 text-white/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="Search country..."
                className="flex-1 bg-transparent text-white placeholder-white/70 text-sm outline-none min-w-0"
              />
              {search && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setSearch(''); searchRef.current?.focus(); }}
                  className="text-white/80 hover:text-white text-lg leading-none flex-shrink-0 cursor-pointer p-0.5"
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
                  onClick={() => { onChange(country); setOpen(false); setSearch(''); }}
                  className={`px-5 py-2.5 text-sm md:text-base cursor-pointer transition-colors duration-150 ${
                    value === country
                      ? 'bg-[#509995] text-white font-semibold'
                      : 'text-slate-700 hover:bg-[#509995]/10 hover:text-[#509995]'
                  }`}
                >
                  {country}
                </div>
              ))
            ) : (
              <div className="px-5 py-5 text-center text-slate-400 text-sm">
                No country found for "<span className="font-semibold text-[#509995]">{search}</span>"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


export default function Form() {
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

    // Check captcha
    if (captchaRef.current && !captchaRef.current.isValid()) {
      alert('Please solve the security verification puzzle correctly.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    const result = await submitFormData({
      formType: 'Contact Page Inquiry',
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
        text: 'Thank you! Your message has been sent successfully. Our team will contact you soon.',
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
    <section className="py-8 md:py-16 px-4 sm:px-6 relative overflow-hidden mb-0 md:mb-20">
      
      {/* Decorative Paper Rocket line on bottom-left */}
      <div className="hidden sm:block absolute bottom-12 left-36 z-0 pointer-events-none">
        <img src={peparrocketImg} alt="Paper Rocket" className="w-24 md:w-48 object-contain" />
      </div>

      <div className="max-w-7xl mx-auto bg-[#669999] rounded-[1.5rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-14 relative z-10 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center relative">

          {/* ── Left Column: Contact Info & Map ── */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-white pr-0 lg:pr-4">
            
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Have a <span className="text-white">Cool Project?</span><br />
              Get in touch!
            </h2>

            {/* Info List */}
            <div className="flex flex-col gap-5 sm:gap-6 -mt-2 sm:mt-2">
              
              {/* E-mail */}
              <div className="flex items-center gap-4">
                <img src={mailImg} alt="Email" className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-sm flex-shrink-0" />
                <div className="flex flex-col justify-center">
                  <h4 className="text-lg sm:text-xl font-bold text-white leading-tight">E-mail</h4>
                  <a href="mailto:info@ec4you.in" className="text-xs sm:text-sm font-medium text-[#c5ece9] hover:underline hover:text-[#ff7f50] leading-tight -mt-3 sm:mt-0.5">
                    info@ec4you.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <img src={phoneImg} alt="Phone" className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-sm flex-shrink-0" />
                <div className="flex flex-col justify-center">
                  <h4 className="text-lg sm:text-xl font-bold text-white leading-tight">Phone</h4>
                  <a href="tel:+917010942474" className="text-xs sm:text-sm font-medium text-[#c5ece9] hover:underline hover:text-[#ff7f50] leading-tight -mt-3 sm:mt-0.5">
                    +91 7010942474
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <img src={locationImg} alt="Location" className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-sm flex-shrink-0" />
                <div className="flex flex-col justify-center">
                  <h4 className="text-lg sm:text-xl font-bold text-white leading-tight">Location</h4>
                </div>
              </div>

            </div>

            {/* Map Preview Box */}
            <div className="w-full sm:w-[90%] md:w-[80%] h-44 rounded-2xl overflow-hidden shadow-lg border border-white/20 -mt-3 md:mt-1">
              <iframe
                title="EC4you Digital Marketing Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.064023472308!2d80.16455327588662!3d12.903604716363684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f78462039f7%3A0x68babcec7b479448!2sEC4you%20Digital%20marketing!5e0!3m2!1sen!2sin!4v1786439118020!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

          </div>

          {/* ── 3D Character Illustration (Overlapping Middle) ── */}
          <div className="hidden lg:block absolute left-[43.4%] top-30 -translate-y-1/2 z-20 pointer-events-none">
            <img
              src={formImg}
              alt="3D Character"
              className="w-48 lg:w-56 h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* ── Right Column: Form Card ── */}
          <div className="lg:col-span-5 flex justify-end w-full relative z-10">
            <div className="w-full max-w-lg bg-white rounded-[1.5rem] md:rounded-2xl shadow-2xl p-6 sm:p-8">
              
              {statusMessage && (
                <div
                  className={`mb-4 p-4 rounded-xl text-sm font-medium flex items-center gap-2.5 ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  {statusMessage.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit}>

                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base text-slate-800 placeholder-gray-400 outline-none focus:border-[#509995] focus:ring-1 focus:ring-[#509995]/20 transition-all"
                  required
                />

                {/* E-mail */}
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base text-slate-800 placeholder-gray-400 outline-none focus:border-[#509995] focus:ring-1 focus:ring-[#509995]/20 transition-all"
                  required
                />

                {/* Phone Number */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base text-slate-800 placeholder-gray-400 outline-none focus:border-[#509995] focus:ring-1 focus:ring-[#509995]/20 transition-all"
                  required
                />

                {/* Country Custom Dropdown */}
                <CountrySelect
                  value={country}
                  onChange={setCountry}
                />

                {/* Subject / Message */}
                <textarea
                  name="subject"
                  placeholder="Subject / Message"
                  value={formData.subject}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base text-slate-800 placeholder-gray-400 outline-none focus:border-[#509995] focus:ring-1 focus:ring-[#509995]/20 transition-all resize-none"
                  required
                />

                {/* Captcha Security Check */}
                <Captcha
                  ref={captchaRef}
                  onVerify={setIsCaptchaValid}
                />

                {/* Free Consultation Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-fill w-full bg-[#509995] text-white font-bold py-3.5 rounded-xl text-base md:text-lg transition-all duration-300 shadow-md cursor-pointer mt-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
          </div>

        </div>
      </div>
    </section>
  );
}
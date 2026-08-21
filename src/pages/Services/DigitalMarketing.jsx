import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../../components/SEO';
import Captcha from '../../components/Common/Captcha';
import { submitFormData } from '../../services/formService';
import { Award, CheckCircle, CheckCircle2, TrendingUp, Users, Target, Zap, MessageSquare, MapPin, Phone, Mail, ArrowRight, Loader2 } from 'lucide-react';

const DigitalMarketing = () => {
   const containerRef = useRef(null);
   const contactFormRef = useRef(null);
   const captchaRef = useRef(null);

   const [formData, setFormData] = useState({
      phone: '',
      email: '',
      brandName: '',
      city: '',
      budget: 'Rs. 15,000 - Rs. 20,000',
      message: '',
   });
   const [selectedServices, setSelectedServices] = useState([]);
   const [isCaptchaValid, setIsCaptchaValid] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [statusMessage, setStatusMessage] = useState(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
   });

   const scrollToForm = () => {
      contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
   };

   // Card 1: Exits Left + Rotate (0 - 45%)
   const card1X = useTransform(scrollYProgress, [0, 0.45], ["0%", "-120%"]);
   const card1Rotate = useTransform(scrollYProgress, [0, 0.45], [0, -15]);
   const card1Opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

   // Card 2: Exits Right + Rotate (45% - 90%)
   const card2X = useTransform(scrollYProgress, [0.5, 0.9], ["0%", "120%"]);
   const card2Rotate = useTransform(scrollYProgress, [0.5, 0.9], [0, 15]);
   const card2Opacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);

   // Card 3: Scales up to fill focus (Finish)
   const card3Scale = useTransform(scrollYProgress, [0.8, 1], [0.9, 1]);
   const card3Opacity = useTransform(scrollYProgress, [0.8, 0.9], [0.5, 1]);

   return (
      <div className="min-h-screen bg-white font-sans selection:bg-brand-primary/10">
         <SEO
            title="Digital Marketing Services | SEO, Ads & Social Media"
            description="Drive high-converting leads, organic traffic, and revenue growth with EC4YOU's data-driven SEO, Google Ads, Meta Ads, and social media campaigns."
            keywords={["digital marketing services", "SEO marketing chennai", "Google ads management", "performance marketing", "social media marketing"]}
            canonical="https://www.ec4you.in/services/digital-marketing"
         />
         {/* 1. Hero Section: Split Layout with Certificate */}
         <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            {/* Background animated blobs */}
            <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-primary/10 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-brand-accent/15 blur-[100px] rounded-full animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <nav className="flex items-center gap-3 mb-12 text-sm font-semibold">
                  <a href="/" className="text-slate-400 hover:text-brand-primary transition-colors">Home</a>
                  <span className="text-slate-200">/</span>
                  <a href="/services" className="text-slate-400 hover:text-brand-primary transition-colors">Services</a>
                  <span className="text-slate-200">/</span>
                  <span className="text-slate-900 cursor-default">Digital Marketing</span>
               </nav>

               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="relative z-10 text-left">
                     <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                        Drive <span className="text-brand-primary relative inline-block">Real Growth<span className="absolute bottom-1 left-0 w-full h-3 bg-brand-primary/10 -z-10 rounded-full" /></span> With Data-Driven Strategies
                     </h1>
                     <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl mb-12">
                        We transform businesses through innovative digital marketing campaigns that deliver measurable ROI and sustainable long-term success.
                     </p>

                     <div className="flex flex-wrap gap-6 mb-16">
                        <button
                           onClick={scrollToForm}
                           className="px-10 py-5 bg-brand-primary text-white font-black rounded-2xl shadow-xl shadow-brand-primary/30 hover:bg-brand-primary/90 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
                        >
                           Drive Your Growth
                           <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                        </button>

                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 italic text-slate-500 font-semibold text-sm">
                           <Zap size={16} className="text-brand-primary" />
                           Expert ROI Audit Included
                        </div>
                     </div>

                     {/* Excellence Badge */}
                     <div className="flex items-center gap-6 p-6 rounded-3xl bg-brand-primary/5 border border-brand-primary/10 w-fit">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-brand-primary text-white shadow-lg shadow-brand-primary/30">
                           <Award size={24} />
                        </div>
                        <div>
                           <div className="text-lg font-black text-slate-900 leading-tight">Certified Partner</div>
                           <div className="text-sm text-slate-500 font-semibold">Google & Meta Recognized</div>
                        </div>
                     </div>
                  </div>

                  <div className="relative group">
                     {/* Data Visualization Illustration */}
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-xl"
                     >
                        <svg width="100%" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M50 350L450 350" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
                           <path d="M100 350V150" stroke="#FF6633" strokeWidth="20" strokeLinecap="round" />
                           <path d="M200 350V250" stroke="#99CCCC" strokeWidth="20" strokeLinecap="round" />
                           <path d="M300 350V100" stroke="#FF6633" strokeWidth="20" strokeLinecap="round" />
                           <path d="M400 350V200" stroke="#1e293b" strokeWidth="20" strokeLinecap="round" />
                           <circle cx="400" cy="180" r="10" fill="#FF9966" />
                           <rect x="50" y="50" width="150" height="80" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                           <rect x="60" y="70" width="100" height="10" rx="5" fill="#f1f5f9" />
                           <rect x="60" y="90" width="80" height="10" rx="5" fill="#f1f5f9" />
                        </svg>
                     </motion.div>
                     <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
               </div>
            </div>
         </section>

         {/* 2. Success Stories (Stacked Scroll) */}
         <section className="relative bg-slate-50" ref={containerRef} style={{ height: '300vh' }}>
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
               <div className="absolute top-16 w-full text-center z-10">
                  <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight">Success Stories</h2>
               </div>

               <div className="relative w-full h-full flex items-center justify-center">

                  {/* Case 1: Fashion Brand */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ x: card1X, rotate: card1Rotate, opacity: card1Opacity, zIndex: 3 }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">Fashion Brand Revenue Skyrockets by 200%</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">We rebuilt their entire digital funnel, focusing on high-intent user acquisition and retention.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              'Optimized Ad Spend for 5x ROAS',
                              'Reduced Cost Per Acquisition by 40%'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-brand-primary" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-emerald-100 to-emerald-400 p-8 flex items-center justify-center group relative border-[10px] border-white/50">
                        <TrendingUp size={120} className="text-white drop-shadow-2xl transition-transform group-hover:scale-110" />
                     </div>
                  </motion.div>

                  {/* Case 2: B2B SaaS */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ x: card2X, rotate: card2Rotate, opacity: card2Opacity, zIndex: 2 }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">B2B SaaS Leads Tripled in 90 Days</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">A comprehensive content marketing and SEO strategy that established industry authority.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              'Organic traffic increased by 150%',
                              'Generated reliable high-quality lead funnel'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-purple-500" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-purple-100 to-purple-400 p-8 flex items-center justify-center group relative border-[10px] border-white/50">
                        <Target size={120} className="text-white drop-shadow-2xl transition-transform group-hover:scale-110" />
                     </div>
                  </motion.div>

                  {/* Case 3: Restaurant */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ zIndex: 1, scale: card3Scale, opacity: card3Opacity }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">Local Restaurant Fully Booked for Months</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">Hyper-local SEO and viral social media campaigns that drove foot traffic.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              'Ranked #1 on Google Maps',
                              'Viral campaigns reached 100k+ locals'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-orange-500" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-orange-100 to-orange-400 p-8 flex items-center justify-center group relative border-[10px] border-white/50">
                        <Users size={120} className="text-white drop-shadow-2xl transition-transform group-hover:scale-110" />
                     </div>
                  </motion.div>

               </div>
            </div>
         </section>

         {/* 3. Trusted By Brands (Infinite Marquee) */}
         <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
               <h2 className="text-3xl lg:text-5xl font-black text-slate-900 text-center mb-20 tracking-tight">Trusted by Industry Leaders</h2>

               <div className="relative overflow-hidden w-full whitespace-nowrap">
                  <div className="flex gap-16 w-max animate-marquee py-8">
                     {[...Array(2)].map((_, loop) => (
                        ['TechFlow', 'GlobalSync', 'EcoLive', 'UrbanStyle', 'FinCor', 'HealthPlus', 'EduSmart', 'LogiTrans', 'Datacorp', 'NetSystems'].map((brand, i) => (
                           <div className="group opacity-40 hover:opacity-100 transition-all duration-300 hover:scale-110 px-6 cursor-default" key={`${loop}-${i}`}>
                              <span className="text-2xl font-black text-slate-900 tracking-tighter">{brand}</span>
                           </div>
                        ))
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 4. Why Choose EC4YOU */}
         <section className="py-40 bg-slate-50/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
               <div className="mb-24 text-center max-w-3xl mx-auto">
                  <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">Why Choose <span className="text-brand-primary">EC4YOU</span>?</h2>
                  <p className="text-xl text-slate-600 leading-relaxed">Empowering businesses with cutting-edge digital marketing solutions trusted by industry leaders worldwide.</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     { num: '01', icon: <TrendingUp size={24} />, title: 'Proven Track Record', desc: 'Delivered exceptional results for 100+ enterprise clients worldwide with measurable ROI.' },
                     { num: '02', icon: <Target size={24} />, title: 'Transparent Reporting', desc: 'Real-time analytics and complete visibility into your campaign metrics and performance.' },
                     { num: '03', icon: <Award size={24} />, title: 'Industry Expertise', desc: 'Deep experience across sectors with specialized digital marketing solutions tailored to you.' },
                     { num: '04', icon: <Users size={24} />, title: 'Experienced Team Support', desc: 'Dedicated support from digital marketing experts every step of the way.' }
                  ].map((item, i) => (
                     <div key={i} className="group relative bg-white p-10 rounded-[2.5rem] border border-black/[0.03] text-left hover:border-brand-primary/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
                        <span className="absolute -bottom-6 -right-4 text-9xl font-black text-brand-primary/5 group-hover:text-brand-primary/10 transition-all group-hover:-rotate-12 group-hover:scale-110 select-none">{item.num}</span>

                        <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                           {item.icon}
                        </div>
                        <h3 className="text-2xl font-black mb-4 relative z-10">{item.title}</h3>
                        <p className="leading-relaxed text-slate-500 relative z-10">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 5. Testimonials */}
         <section className="py-40 bg-gradient-to-br from-brand-secondary/10 to-brand-primary/5">
            <div className="max-w-7xl mx-auto px-6">
               <h2 className="text-4xl lg:text-6xl font-black text-slate-900 text-center mb-24 tracking-tight">What Our Clients Say</h2>

               <div className="grid lg:grid-cols-3 gap-8">
                  {[
                     { text: 'EC4YOU transformed our digital presence. Their attention to detail and strategic approach doubled our lead volume in just 3 months.', name: 'Sarah Johnson', role: 'CMO, TechGlobal', stagger: false },
                     { text: "The team is incredibly responsive and creative. They don't just execute tasks; they bring new ideas to the table constantly.", name: 'Michael Chen', role: 'Founder, StartUp Inc', stagger: true },
                     { text: 'Professional, transparent, and results-driven. Highly recommend EC4YOU for anyone looking to scale their business.', name: 'Emily Davis', role: 'Marketing Director, StyleCo', stagger: false }
                  ].map((item, i) => (
                     <div key={i} className={`bg-white/70 backdrop-blur-md p-10 rounded-[2.5rem] border border-white flex flex-col h-full hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl ${item.stagger ? 'lg:translate-y-8' : ''}`}>
                        <div className="text-6xl text-brand-accent/30 font-serif mb-6 leading-none">"</div>
                        <p className="text-lg font-medium text-slate-700 leading-relaxed mb-10 flex-grow">{item.text}</p>
                        <div className="flex items-center gap-4 pt-8 border-t border-slate-100">
                           <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-accent to-brand-primary" />
                           <div>
                              <div className="font-bold text-slate-900">{item.name}</div>
                              <div className="text-sm text-slate-500 font-semibold">{item.role}</div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 6. Split Contact Section */}
         <section ref={contactFormRef} className="py-40 bg-white">
            <div className="max-w-7xl mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-20 items-start">

                  <div className="space-y-16">
                     <div className="space-y-8">
                        <div>
                           <h2 className="text-5xl lg:text-7xl font-black leading-[1.1] text-slate-900 mb-2">Get In Touch</h2>
                           <h2 className="text-5xl lg:text-7xl font-black leading-[1.1] text-brand-primary">100+ Brands</h2>
                        </div>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                           Ready to elevate your digital presence? Let's discuss your project and how we can drive results for your business.
                        </p>
                     </div>

                     <div className="space-y-6">
                        {[
                           { icon: <MapPin size={28} />, label: 'Find Us', value: 'Chennai, India' },
                           { icon: <Phone size={28} />, label: 'Phone Us', value: '+91 7010942474' },
                           { icon: <Mail size={28} />, label: 'Email Address', value: 'info@ec4you.in' }
                        ].map((info, i) => (
                           <div key={i} className="flex items-center gap-8 p-8 rounded-[2rem] bg-slate-50 border border-slate-100/50 hover:border-brand-primary/30 transition-all group">
                              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all group-hover:scale-110">
                                 {info.icon}
                              </div>
                              <div>
                                 <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{info.label}</h4>
                                 <p className="text-xl lg:text-2xl font-black text-slate-900">{info.value}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="bg-white p-10 lg:p-16 rounded-[4rem] shadow-2xl border border-slate-100 relative overflow-hidden group">
                     {/* Abstract shape */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-[100px] pointer-events-none" />

                     {statusMessage && (
                        <div
                           className={`mb-6 p-4 rounded-2xl text-sm font-medium flex items-center gap-2.5 relative z-10 ${
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
                        className="space-y-8 relative z-10"
                        onSubmit={async (e) => {
                           e.preventDefault();
                           if (captchaRef.current && !captchaRef.current.isValid()) {
                              alert('Please solve the security verification puzzle correctly.');
                              return;
                           }
                           setIsSubmitting(true);
                           setStatusMessage(null);
                           const result = await submitFormData({
                              formType: 'Digital Marketing Service Inquiry',
                              phone: formData.phone,
                              email: formData.email,
                              name: formData.brandName,
                              city: formData.city,
                              lookingFor: selectedServices.join(', ') || 'Not specified',
                              preferredBudget: formData.budget,
                              message: formData.message,
                           });
                           setIsSubmitting(false);
                           if (result.success) {
                              setStatusMessage({
                                 type: 'success',
                                 text: 'Thank you! Your marketing inquiry has been submitted successfully.',
                              });
                              setFormData({ phone: '', email: '', brandName: '', city: '', budget: 'Rs. 15,000 - Rs. 20,000', message: '' });
                              setSelectedServices([]);
                              if (captchaRef.current) captchaRef.current.reset();
                              setIsCaptchaValid(false);
                           } else {
                              setStatusMessage({
                                 type: 'error',
                                 text: result.message || 'Failed to submit. Please try again.',
                              });
                           }
                        }}
                     >
                        <div className="grid sm:grid-cols-2 gap-8">
                           <div className="flex flex-col gap-3">
                              <label className="text-xs font-black uppercase tracking-widest text-slate-500">Phone Number <span className="text-brand-primary">*</span></label>
                              <input 
                                 type="tel" 
                                 value={formData.phone}
                                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                 className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-brand-primary/20 focus:bg-white outline-none transition-all text-slate-900 font-bold" 
                                 placeholder="Phone Number" 
                                 required
                              />
                           </div>
                           <div className="flex flex-col gap-3">
                              <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email <span className="text-brand-primary">*</span></label>
                              <input 
                                 type="email" 
                                 value={formData.email}
                                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                 className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-brand-primary/20 focus:bg-white outline-none transition-all text-slate-900 font-bold" 
                                 placeholder="test@gmail.com" 
                                 required
                              />
                           </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                           <div className="flex flex-col gap-3">
                              <label className="text-xs font-black uppercase tracking-widest text-slate-500">Your Brand Name <span className="text-brand-primary">*</span></label>
                              <input 
                                 type="text" 
                                 value={formData.brandName}
                                 onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                                 className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-brand-primary/20 focus:bg-white outline-none transition-all text-slate-900 font-bold" 
                                 placeholder="Enter brand name" 
                                 required
                              />
                           </div>
                           <div className="flex flex-col gap-3">
                              <label className="text-xs font-black uppercase tracking-widest text-slate-500">City <span className="text-brand-primary">*</span></label>
                              <input 
                                 type="text" 
                                 value={formData.city}
                                 onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                 className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-brand-primary/20 focus:bg-white outline-none transition-all text-slate-900 font-bold" 
                                 placeholder="Enter your city" 
                                 required
                              />
                           </div>
                        </div>

                        <div className="flex flex-col gap-4">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-500">Looking For <span className="text-brand-primary">*</span></label>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {['Social Media Marketing', 'SEO', 'Google Ads', 'Website Design', 'Video Production', 'App Development'].map((service, i) => (
                                 <label key={i} className="flex items-center gap-3 cursor-pointer group/item">
                                    <div className="relative">
                                       <input 
                                          type="checkbox" 
                                          checked={selectedServices.includes(service)}
                                          onChange={(e) => {
                                             if (e.target.checked) {
                                                setSelectedServices([...selectedServices, service]);
                                             } else {
                                                setSelectedServices(selectedServices.filter((s) => s !== service));
                                             }
                                          }}
                                          className="peer hidden" 
                                       />
                                       <div className="w-6 h-6 rounded-lg border-2 border-slate-200 peer-checked:bg-brand-primary peer-checked:border-brand-primary transition-all flex items-center justify-center">
                                          <div className="w-1.5 h-3 border-r-2 border-b-2 border-white rotate-45 mb-1 hidden peer-checked:block" />
                                       </div>
                                    </div>
                                    <span className="text-slate-600 font-bold text-sm group-hover/item:text-slate-900 transition-colors">{service}</span>
                                 </label>
                              ))}
                           </div>
                        </div>

                        <div className="flex flex-col gap-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-500">Preferred Budget / Month</label>
                           <select 
                              value={formData.budget}
                              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-brand-primary/20 focus:bg-white outline-none transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                           >
                              <option>Rs. 15,000 - Rs. 20,000</option>
                              <option>Rs. 20,000 - Rs. 50,000</option>
                              <option>Rs. 50,000+</option>
                           </select>
                        </div>

                        <div className="flex flex-col gap-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-500">Message <span className="text-brand-primary">*</span></label>
                           <textarea 
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-brand-primary/20 focus:bg-white outline-none transition-all text-slate-900 font-bold resize-none" 
                              rows="4" 
                              placeholder="Write your message here..."
                              required
                           ></textarea>
                        </div>

                        {/* Captcha Security Check */}
                        <Captcha
                           ref={captchaRef}
                           onVerify={setIsCaptchaValid}
                        />

                        <div className="flex items-center justify-between pt-4">
                           <span className="text-xs text-slate-500 font-semibold">Submissions are sent directly to info@ec4you.in</span>
                           <button 
                              type="submit" 
                              disabled={isSubmitting}
                              className="px-8 py-4 rounded-2xl bg-brand-primary text-white font-bold flex items-center justify-center gap-3 hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/30 group/btn cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                           >
                              {isSubmitting ? (
                                 <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Submitting...</span>
                                 </>
                              ) : (
                                 <>
                                    <span>Submit Inquiry</span>
                                    <ArrowRight size={20} color="white" className="transition-transform group-hover/btn:translate-x-1" />
                                 </>
                              )}
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default DigitalMarketing;

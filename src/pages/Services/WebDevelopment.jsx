import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../../components/SEO';
import Captcha from '../../components/Common/Captcha';
import { submitFormData } from '../../services/formService';
import {
   Code, ShoppingCart, Monitor, Server, Settings, Zap,
   Layout, Shield, Globe, Clock, Award, CheckCircle, CheckCircle2,
   MessageSquare, Cpu, Database, Cloud, Layers,
   MapPin, Phone, Mail, ArrowRight, Loader2
} from 'lucide-react';

const WebDevelopment = () => {
   const containerRef = useRef(null);
   const contactFormRef = useRef(null);
   const captchaRef = useRef(null);
   
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      requirement: 'Enterprise Web Application',
      details: '',
   });
   const [selectedTechs, setSelectedTechs] = useState([]);
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

   // Card 1: Exits Left (0 - 45%)
   const card1X = useTransform(scrollYProgress, [0, 0.45], ["0%", "-120%"]);
   const card1Rotate = useTransform(scrollYProgress, [0, 0.45], [0, -15]);
   const card1Opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

   // Card 2: Exits Right (45% - 90%)
   const card2X = useTransform(scrollYProgress, [0.5, 0.9], ["0%", "120%"]);
   const card2Rotate = useTransform(scrollYProgress, [0.5, 0.9], [0, 15]);
   const card2Opacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);

   // Card 3: Scales up (Finish)
   const card3Scale = useTransform(scrollYProgress, [0.8, 1], [0.9, 1]);
   const card3Opacity = useTransform(scrollYProgress, [0.8, 0.9], [0.5, 1]);

   return (
      <div className="min-h-screen bg-white font-sans selection:bg-brand-secondary/10">
         <SEO
            title="Custom Web Development Services | Fast, Modern Websites"
            description="Custom website and web application development with React, Next.js, and Node.js. High-performance, SEO-optimized, mobile-responsive solutions by EC4YOU."
            keywords={["custom web development", "react web development", "full stack web development", "e-commerce development", "Chennai web developers"]}
            canonical="https://www.ec4you.in/services/web-development"
         />
         {/* 1. Hero Section: Split Layout */}
         <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            {/* Technical Teal/Dark Teal Blobs */}
            <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-secondary/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-tertiary/10 blur-[100px] rounded-full animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <nav className="flex items-center gap-3 mb-12 text-sm font-semibold">
                  <a href="/" className="text-slate-400 hover:text-brand-primary transition-colors">Home</a>
                  <span className="text-slate-200">/</span>
                  <a href="/services" className="text-slate-400 hover:text-brand-primary transition-colors">Services</a>
                  <span className="text-slate-200">/</span>
                  <span className="text-slate-900 cursor-default">Web Development</span>
               </nav>

               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="relative z-10">
                     <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                        Building <span className="text-brand-secondary relative inline-block">Scalable<span className="absolute bottom-1 left-0 w-full h-3 bg-brand-secondary/10 -z-10 rounded-full" /></span> Digital Foundations
                     </h1>
                     <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl mb-12">
                        We engineer high-performance web applications that combine stunning design with robust, future-proof code architecture.
                     </p>

                     <div className="flex flex-wrap gap-6 mb-16">
                        <button
                           onClick={scrollToForm}
                           className="px-10 py-5 bg-brand-secondary text-white font-black rounded-2xl shadow-xl shadow-brand-secondary/30 hover:bg-teal-600 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
                        >
                           Start Your Project
                           <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                        </button>

                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 italic text-slate-500 font-semibold text-sm">
                           <Zap size={16} className="text-brand-secondary" />
                           Free Strategy Session Included
                        </div>
                     </div>

                     {/* Excellence Badge */}
                     <div className="flex items-center gap-6 p-6 rounded-3xl bg-brand-secondary/5 border border-brand-secondary/10 w-fit">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-brand-secondary text-white shadow-lg shadow-brand-secondary/30">
                           <Cpu size={24} />
                        </div>
                        <div>
                           <div className="text-lg font-black text-slate-900 leading-tight">Full-Stack Mastery</div>
                           <div className="text-sm text-slate-500 font-semibold">React, Next.js & Node.js Experts</div>
                        </div>
                     </div>
                  </div>

                  <div className="relative group">
                     {/* Technical SVG Illustration */}
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-xl"
                     >
                        <svg width="100%" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect x="50" y="80" width="400" height="240" rx="20" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                           <rect x="50" y="80" width="400" height="40" rx="20" fill="#f8fafc" />
                           <circle cx="80" cy="100" r="6" fill="#f87171" />
                           <circle cx="100" cy="100" r="6" fill="#fbbf24" />
                           <circle cx="120" cy="100" r="6" fill="#34d399" />
                           <path d="M100 160H250" stroke="#0ea5e9" strokeWidth="8" strokeLinecap="round" />
                           <path d="M100 200H350" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
                           <path d="M100 240H200" stroke="#0ea5e9" strokeWidth="8" strokeLinecap="round" />
                           <rect x="300" y="160" width="80" height="100" rx="10" fill="#e0f2fe" />
                           <path d="M340 180V240" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                     </motion.div>
                     <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-secondary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
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

                  {/* Case 1: Custom ERP */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ x: card1X, rotate: card1Rotate, opacity: card1Opacity, zIndex: 3 }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">Enterprise ERP for Logistics Leader</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">A zero-to-one custom platform managing 50k+ daily shipments with real-time tracking.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              'Reduced processing time by 60%',
                              'Real-time AWS Cloud synchronization'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-brand-secondary" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-brand-secondary to-brand-tertiary p-12 flex items-center justify-center group">
                        <Database size={120} color="white" className="transition-transform group-hover:scale-110 group-hover:-rotate-3 duration-500" />
                     </div>
                  </motion.div>

                  {/* Case 2: Luxury E-Commerce */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ x: card2X, rotate: card2Rotate, opacity: card2Opacity, zIndex: 2 }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">Headless E-Commerce for Luxury Retailer</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">Next.js powered 0.5s page loads with a seamless Shopify backend integration.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              '40% Increase in conversion rate',
                              'Perfect 100/100 Lighthouse score'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-violet-500" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-violet-400 to-indigo-600 p-12 flex items-center justify-center group">
                        <ShoppingCart size={120} color="white" className="transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500" />
                     </div>
                  </motion.div>

                  {/* Case 3: SaaS Dashboard */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ zIndex: 1, scale: card3Scale, opacity: card3Opacity }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">AI-Powered SaaS Analytics Dashboard</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">Complex data visualization for financial institutions with bank-grade security.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              'SOC2 Compliant architecture',
                              'Handles 10M+ data points per second'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-emerald-500" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-emerald-400 to-teal-600 p-12 flex items-center justify-center group">
                        <Layers size={120} color="white" className="transition-transform group-hover:scale-110 group-hover:-rotate-3 duration-500" />
                     </div>
                  </motion.div>

               </div>
            </div>
         </section>

         {/* 3. Tech Stack Marquee */}
         <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
               <h2 className="text-4xl lg:text-6xl font-black text-slate-900 text-center mb-20 tracking-tight">Our Technical <span className="text-brand-secondary">DNA</span></h2>

               <div className="relative overflow-hidden w-full whitespace-nowrap">
                  <div className="flex gap-12 w-max animate-marquee py-8">
                     {[...Array(2)].map((_, loop) => (
                        ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'Python', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker'].map((tech, i) => (
                           <div className="flex flex-col items-center gap-4 group opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110 px-6" key={`${loop}-${i}`}>
                              <div className="w-16 h-16 bg-brand-secondary/5 rounded-2xl flex items-center justify-center text-2xl font-black text-brand-secondary shadow-sm group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                                 {tech[0]}
                              </div>
                              <span className="font-bold text-slate-500 group-hover:text-slate-900 text-sm">{tech}</span>
                           </div>
                        ))
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 4. Why Partner With Us */}
         <section className="py-40 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-6">
               <div className="text-center mb-24 max-w-3xl mx-auto">
                  <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">Engineered for <span className="text-brand-secondary">Success</span></h2>
                  <p className="text-xl text-slate-600 leading-relaxed">We don't just write code; we build business-centric solutions that scale.</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     { icon: <Zap size={24} />, title: 'Performance-First', desc: 'Every line of code is optimized for speed, ensuring your users never have to wait.' },
                     { icon: <Shield size={24} />, title: 'Secured by Design', desc: 'We implement top-tier security protocols to protect your data and user privacy.' },
                     { icon: <Cloud size={24} />, title: 'Cloud-Native', desc: 'Built for the cloud, ensuring your platform can scale instantly as you grow.' },
                     { icon: <MessageSquare size={24} />, title: 'Agile Workflow', desc: 'Transparent development with regular iterations and continuous delivery.' }
                  ].map((item, i) => (
                     <div key={i} className="group bg-white p-12 rounded-[2.5rem] border border-black/[0.03] hover:bg-brand-secondary hover:text-white transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                        <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors">
                           {item.icon}
                        </div>
                        <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                        <p className="leading-relaxed opacity-70 group-hover:opacity-90">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 5. Split Contact Section (Web Dev Theme) */}
         <section ref={contactFormRef} className="py-40 bg-slate-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <div className="grid lg:grid-cols-2 gap-20 items-start">

                  <div className="space-y-16">
                     <div className="space-y-8">
                        <h2 className="text-5xl lg:text-7xl font-black leading-[1.1]">Start Your <span className="text-brand-secondary">Digital Transformation</span></h2>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                           Consult with our engineers to plan your next high-performance web project. We build solutions that scale with your business.
                        </p>
                     </div>

                     <div className="space-y-6">
                        {[
                           { icon: <MapPin size={28} />, label: 'Visit Our Lab', value: 'Chennai, India' },
                           { icon: <Phone size={28} />, label: 'Talk to an Engineer', value: '+91 7010942474' },
                           { icon: <Mail size={28} />, label: 'Email Support', value: 'info@ec4you.in' }
                        ].map((info, i) => (
                           <div key={i} className="flex items-center gap-8 p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-brand-secondary text-white shadow-xl shadow-brand-secondary/20 transition-transform group-hover:scale-110">
                                 {info.icon}
                              </div>
                              <div>
                                 <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{info.label}</h4>
                                 <p className="text-xl lg:text-2xl font-black">{info.value}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="bg-white p-10 lg:p-16 rounded-[3.5rem] shadow-2xl">
                     {statusMessage && (
                        <div
                           className={`mb-6 p-4 rounded-2xl text-sm font-medium flex items-center gap-2.5 ${
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
                        className="space-y-8"
                        onSubmit={async (e) => {
                           e.preventDefault();
                           if (captchaRef.current && !captchaRef.current.isValid()) {
                              alert('Please solve the security verification puzzle correctly.');
                              return;
                           }
                           setIsSubmitting(true);
                           setStatusMessage(null);
                           const result = await submitFormData({
                              formType: 'Web Development Service Inquiry',
                              name: formData.name,
                              email: formData.email,
                              projectRequirement: formData.requirement,
                              techStack: selectedTechs.join(', ') || 'Not specified',
                              message: formData.details,
                           });
                           setIsSubmitting(false);
                           if (result.success) {
                              setStatusMessage({
                                 type: 'success',
                                 text: 'Thank you! Your project request has been submitted successfully.',
                              });
                              setFormData({ name: '', email: '', requirement: 'Enterprise Web Application', details: '' });
                              setSelectedTechs([]);
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
                              <label className="text-xs font-black uppercase tracking-widest text-slate-900">Full Name <span className="text-brand-primary">*</span></label>
                              <input 
                                 type="text" 
                                 value={formData.name}
                                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                 className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-secondary focus:bg-white outline-none transition-all text-slate-900 font-bold" 
                                 placeholder="John Doe" 
                                 required
                              />
                           </div>
                           <div className="flex flex-col gap-3">
                              <label className="text-xs font-black uppercase tracking-widest text-slate-900">Work Email <span className="text-brand-primary">*</span></label>
                              <input 
                                 type="email" 
                                 value={formData.email}
                                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                 className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-secondary focus:bg-white outline-none transition-all text-slate-900 font-bold" 
                                 placeholder="john@company.com" 
                                 required
                              />
                           </div>
                        </div>

                        <div className="flex flex-col gap-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-900">Project Requirements <span className="text-brand-primary">*</span></label>
                           <select 
                              value={formData.requirement}
                              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-secondary focus:bg-white outline-none transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                           >
                              <option>Enterprise Web Application</option>
                              <option>E-Commerce Platform</option>
                              <option>SaaS Product</option>
                              <option>Corporate Website</option>
                              <option>API Development</option>
                              <option>Other</option>
                           </select>
                        </div>

                        <div className="flex flex-col gap-4">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-900">Preferred Tech Stack (Optional)</label>
                           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                              {['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Shopify', 'WordPress'].map((tech, i) => (
                                 <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative">
                                       <input 
                                          type="checkbox" 
                                          checked={selectedTechs.includes(tech)}
                                          onChange={(e) => {
                                             if (e.target.checked) {
                                                setSelectedTechs([...selectedTechs, tech]);
                                             } else {
                                                setSelectedTechs(selectedTechs.filter((t) => t !== tech));
                                             }
                                          }}
                                          className="peer hidden" 
                                       />
                                       <div className="w-6 h-6 rounded-lg border-2 border-slate-200 peer-checked:bg-brand-secondary peer-checked:border-brand-secondary transition-all flex items-center justify-center">
                                          <div className="w-1.5 h-3 border-r-2 border-b-2 border-white rotate-45 mb-1 hidden peer-checked:block" />
                                       </div>
                                    </div>
                                    <span className="text-slate-600 font-bold text-sm group-hover:text-slate-900 transition-colors">{tech}</span>
                                 </label>
                              ))}
                           </div>
                        </div>

                        <div className="flex flex-col gap-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-900">Project Details <span className="text-brand-primary">*</span></label>
                           <textarea 
                              value={formData.details}
                              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-secondary focus:bg-white outline-none transition-all text-slate-900 font-bold resize-none" 
                              rows="5" 
                              placeholder="Describe your vision, timeline, and goals..."
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
                              className="px-8 py-4 rounded-2xl bg-brand-secondary text-white font-bold flex items-center justify-center gap-3 hover:bg-teal-600 transition-all shadow-xl shadow-brand-secondary/20 hover:shadow-brand-secondary/40 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                           >
                              {isSubmitting ? (
                                 <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Submitting...</span>
                                 </>
                              ) : (
                                 <>
                                    <span>Submit Request</span>
                                    <ArrowRight size={20} color="white" className="transition-transform group-hover:translate-x-1" />
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

export default WebDevelopment;

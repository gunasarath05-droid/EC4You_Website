import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../../components/SEO';
import Captcha from '../../components/Common/Captcha';
import { submitFormData } from '../../services/formService';
import {
   Smartphone, Tablet, Layers, PenTool, Activity,
   Briefcase, Zap, ShieldCheck, CheckCircle, CheckCircle2, Users, Award,
   MessageSquare, Star, ArrowRight, Download,
   MapPin, Phone, Mail, Loader2
} from 'lucide-react';

const AppDevelopment = () => {
   const containerRef = useRef(null);
   const contactFormRef = useRef(null);
   const captchaRef = useRef(null);

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      platform: 'iOS Native (Swift)',
      concept: '',
   });
   const [selectedCategories, setSelectedCategories] = useState([]);
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
      <div className="min-h-screen bg-white font-sans selection:bg-brand-tertiary/10">
         <SEO
            title="Mobile App Development Services | iOS & Android Apps"
            description="Native iOS, Android, Flutter, and React Native mobile application development. We build scalable, secure, and intuitive apps that users love."
            keywords={["mobile app development", "iOS app development", "android app developers", "flutter development chennai", "react native agency"]}
            canonical="https://www.ec4you.in/services/app-development"
         />
         {/* 1. Hero Section: Split Layout */}
         <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            {/* Emerald/Teal Blobs */}
            <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-secondary/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-brand-tertiary/15 blur-[100px] rounded-full animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <nav className="flex items-center gap-3 mb-12 text-sm font-semibold">
                  <a href="/" className="text-slate-400 hover:text-brand-primary transition-colors">Home</a>
                  <span className="text-slate-200">/</span>
                  <a href="/services" className="text-slate-400 hover:text-brand-primary transition-colors">Services</a>
                  <span className="text-slate-200">/</span>
                  <span className="text-slate-900 cursor-default">App Development</span>
               </nav>

               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="relative z-10">
                     <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                        Mobile Experiences That <span className="text-brand-tertiary relative inline-block">Connect<span className="absolute bottom-1 left-0 w-full h-3 bg-brand-tertiary/10 -z-10 rounded-full" /></span>
                     </h1>
                     <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl mb-12">
                        We design and develop high-performance iOS and Android applications that engage users and drive business growth through cutting-edge technology.
                     </p>

                     <div className="flex flex-wrap gap-6 mb-16">
                        <button
                           onClick={scrollToForm}
                           className="px-10 py-5 bg-brand-tertiary text-white font-black rounded-2xl shadow-xl shadow-brand-tertiary/30 hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
                        >
                           Start Your Project
                           <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                        </button>

                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 italic text-slate-500 font-semibold text-sm">
                           <Zap size={16} className="text-brand-tertiary" />
                           Free Strategy Session Included
                        </div>
                     </div>

                     {/* Excellence Badge */}
                     <div className="flex items-center gap-6 p-6 rounded-3xl bg-brand-tertiary/5 border border-brand-tertiary/10 w-fit">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-brand-tertiary text-white shadow-lg shadow-brand-tertiary/30">
                           <Smartphone size={24} />
                        </div>
                        <div>
                           <div className="text-lg font-black text-slate-900 leading-tight">Mobile-First Agency</div>
                           <div className="text-sm text-slate-500 font-semibold">Native & Cross-Platform Experts</div>
                        </div>
                     </div>
                  </div>

                  <div className="relative group">
                     {/* Mobile App SVG Illustration */}
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-xl flex justify-center"
                     >
                        <svg width="280" viewBox="0 0 140 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="140" height="280" rx="20" fill="#1e293b" />
                           <rect x="10" y="15" width="120" height="220" rx="10" fill="white" />
                           <circle cx="70" cy="260" r="12" fill="#334151" />
                           <rect x="20" y="30" width="100" height="60" rx="8" fill="#f0fdfa" />
                           <rect x="20" y="100" width="100" height="15" rx="5" fill="#f1f5f9" />
                           <rect x="20" y="125" width="80" height="15" rx="5" fill="#f1f5f9" />
                        </svg>
                     </motion.div>
                     <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-tertiary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
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

                  {/* Case 1: Fitness App */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ x: card1X, rotate: card1Rotate, opacity: card1Opacity, zIndex: 3 }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">FitLife: AI Fitness Companion</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">A comprehensive health ecosystem with IoT integration reaching 500k+ active users.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              '4.8+ Play Store / App Store Rating',
                              'Real-time heart rate syncing'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-brand-tertiary" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-brand-secondary to-brand-tertiary p-12 flex items-center justify-center group relative">
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="text-center text-white">
                           <Star size={80} className="mx-auto mb-4" />
                           <div className="text-2xl font-black tracking-widest">HEALTH AI</div>
                        </motion.div>
                     </div>
                  </motion.div>

                  {/* Case 2: Fintech Wallet */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ x: card2X, rotate: card2Rotate, opacity: card2Opacity, zIndex: 2 }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">SwiftPay: Global Digital Wallet</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">Zero-fee cross-border transactions with bank-grade biometric security.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              '$2B+ Annual transaction volume',
                              'FaceID / Fingerprint Auth'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-blue-500" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-blue-400 to-indigo-600 p-12 flex items-center justify-center group">
                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="text-center text-white">
                           <Download size={80} className="mx-auto mb-4" />
                           <div className="text-2xl font-black tracking-widest">WALLET</div>
                        </motion.div>
                     </div>
                  </motion.div>

                  {/* Case 3: Delivery App */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ zIndex: 1, scale: card3Scale, opacity: card3Opacity }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">UrbanDash: Hyper-local Delivery</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">Connecting 10k+ local vendors with real-time route optimization for drivers.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              '18-min average delivery time',
                              'AI Route Optimization'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-brand-primary" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-brand-primary to-orange-600 p-12 flex items-center justify-center group">
                        <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="text-center text-white">
                           <Zap size={80} className="mx-auto mb-4" />
                           <div className="text-2xl font-black tracking-widest">DASH</div>
                        </motion.div>
                     </div>
                  </motion.div>

               </div>
            </div>
         </section>

         {/* 3. App Marquee (Marketplaces) */}
         <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
               <h2 className="text-4xl lg:text-6xl font-black text-slate-900 text-center mb-20 tracking-tight">Optimized for Every <span className="text-brand-tertiary">Marketplace</span></h2>

               <div className="relative overflow-hidden w-full whitespace-nowrap">
                  <div className="flex gap-12 w-max animate-marquee py-8">
                     {[...Array(2)].map((_, loop) => (
                        ['App Store', 'Google Play', 'React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Redux', 'Jetpack'].map((item, i) => (
                           <div className="px-10 group" key={`${loop}-${i}`}>
                              <div className="px-8 py-4 bg-slate-50 border border-slate-100 rounded-full font-bold text-slate-400 group-hover:bg-brand-tertiary group-hover:text-white group-hover:border-brand-tertiary transition-all duration-300 hover:scale-110 shadow-sm cursor-default">
                                 {item}
                              </div>
                           </div>
                        ))
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 4. Why Partner With Us */}
         <section className="py-40 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-6 text-center">
               <div className="mb-24 max-w-3xl mx-auto">
                  <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">Why Develop With <span className="text-brand-tertiary">EC4YOU</span>?</h2>
                  <p className="text-xl text-slate-600 leading-relaxed">We combine design-led thinking with deep engineering expertise to build category-leading apps.</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     { icon: <PenTool size={24} />, title: 'UI/UX Excellence', desc: 'Apps that are not just functional, but beautiful and intuitive to use.' },
                     { icon: <ShieldCheck size={24} />, title: 'Biometric Security', desc: 'Advanced security features from FaceID to end-to-end data encryption.' },
                     { icon: <Zap size={24} />, title: 'Native Performance', desc: 'Zero-lag animations and high-speed processing on all devices.' },
                     { icon: <Users size={24} />, title: 'User Centric', desc: 'Data-driven development based on real-world user behavior and feedback.' }
                  ].map((item, i) => (
                     <div key={i} className="group bg-white p-12 rounded-[2.5rem] border border-black/[0.03] text-left hover:bg-brand-tertiary hover:text-white transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                        <div className="w-14 h-14 rounded-2xl bg-brand-tertiary/10 flex items-center justify-center text-brand-tertiary mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors">
                           {item.icon}
                        </div>
                        <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                        <p className="leading-relaxed opacity-70 group-hover:opacity-90">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 5. Split Contact Section (App Theme) */}
         <section ref={contactFormRef} className="py-40 bg-slate-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-tertiary/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <div className="grid lg:grid-cols-2 gap-20 items-start">

                  <div className="space-y-16">
                     <div className="space-y-8">
                        <h2 className="text-5xl lg:text-7xl font-black leading-[1.1]">Launch Your <span className="text-brand-tertiary">App Idea</span></h2>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                           From concept to deployment, we are your strategic mobile technology partner. Let's build the next chart-topping app.
                        </p>
                     </div>

                     <div className="space-y-6">
                        {[
                           { icon: <MapPin size={28} />, label: 'Visit Our Studio', value: 'Chennai, India' },
                           { icon: <Phone size={28} />, label: 'Mobile Team', value: '+91 7010942474' },
                           { icon: <Mail size={28} />, label: 'App Inquiries', value: 'apps@ec4you.in' }
                        ].map((info, i) => (
                           <div key={i} className="flex items-center gap-8 p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-brand-tertiary text-white shadow-xl shadow-brand-tertiary/20 transition-transform group-hover:scale-110">
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
                              formType: 'App Development Service Inquiry',
                              name: formData.name,
                              email: formData.email,
                              projectRequirement: formData.platform,
                              appCategory: selectedCategories.join(', ') || 'Not specified',
                              message: formData.concept,
                           });
                           setIsSubmitting(false);
                           if (result.success) {
                              setStatusMessage({
                                 type: 'success',
                                 text: 'Thank you! Your app development inquiry has been submitted successfully.',
                              });
                              setFormData({ name: '', email: '', platform: 'iOS Native (Swift)', concept: '' });
                              setSelectedCategories([]);
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
                                 className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-tertiary focus:bg-white outline-none transition-all text-slate-900 font-bold" 
                                 placeholder="Jane Smith" 
                                 required
                              />
                           </div>
                           <div className="flex flex-col gap-3">
                              <label className="text-xs font-black uppercase tracking-widest text-slate-900">Email Address <span className="text-brand-primary">*</span></label>
                              <input 
                                 type="email" 
                                 value={formData.email}
                                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                 className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-tertiary focus:bg-white outline-none transition-all text-slate-900 font-bold" 
                                 placeholder="jane@studio.com" 
                                 required
                              />
                           </div>
                        </div>

                        <div className="flex flex-col gap-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-900">Target Platform <span className="text-brand-primary">*</span></label>
                           <select 
                              value={formData.platform}
                              onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-tertiary focus:bg-white outline-none transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                           >
                              <option>iOS Native (Swift)</option>
                              <option>Android Native (Kotlin)</option>
                              <option>Cross-Platform (Flutter)</option>
                              <option>React Native</option>
                              <option>Both iOS & Android</option>
                           </select>
                        </div>

                        <div className="flex flex-col gap-4">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-900">App Category</label>
                           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                              {['E-Commerce', 'Social Media', 'Health & Fitness', 'Fintech', 'Education', 'On-Demand', 'Enterprise'].map((cat, i) => (
                                 <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative">
                                       <input 
                                          type="checkbox" 
                                          checked={selectedCategories.includes(cat)}
                                          onChange={(e) => {
                                             if (e.target.checked) {
                                                setSelectedCategories([...selectedCategories, cat]);
                                             } else {
                                                setSelectedCategories(selectedCategories.filter((c) => c !== cat));
                                             }
                                          }}
                                          className="peer hidden" 
                                       />
                                       <div className="w-6 h-6 rounded-lg border-2 border-slate-200 peer-checked:bg-brand-tertiary peer-checked:border-brand-tertiary transition-all flex items-center justify-center">
                                          <div className="w-1.5 h-3 border-r-2 border-b-2 border-white rotate-45 mb-1 hidden peer-checked:block" />
                                       </div>
                                    </div>
                                    <span className="text-slate-600 font-bold text-sm group-hover:text-slate-900 transition-colors">{cat}</span>
                                 </label>
                              ))}
                           </div>
                        </div>

                        <div className="flex flex-col gap-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-900">App Concept Overview <span className="text-brand-primary">*</span></label>
                           <textarea 
                              value={formData.concept}
                              onChange={(e) => setFormData({ ...formData, concept: e.target.value })}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-tertiary focus:bg-white outline-none transition-all text-slate-900 font-bold resize-none" 
                              rows="5" 
                              placeholder="Briefly describe your app idea and core features..."
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
                              className="px-8 py-4 rounded-2xl bg-brand-tertiary text-white font-bold flex items-center justify-center gap-3 hover:bg-brand-secondary transition-all hover:scale-105 shadow-xl shadow-brand-tertiary/20 hover:shadow-brand-tertiary/40 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                           >
                              {isSubmitting ? (
                                 <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Submitting...</span>
                                 </>
                              ) : (
                                 <>
                                    <span>Submit App Brief</span>
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

export default AppDevelopment;

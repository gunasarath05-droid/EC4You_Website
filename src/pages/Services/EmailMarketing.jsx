import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../../components/SEO';
import Captcha from '../../components/Common/Captcha';
import { submitFormData } from '../../services/formService';
import {
   Mail, Send, Users, BarChart2, MousePointer,
   Clock, Zap, LayoutTemplate, Target, CheckCircle, CheckCircle2,
   MessageCircle, UserCheck, Inbox,
   MapPin, Phone, ArrowRight, Loader2
} from 'lucide-react';

const EmailMarketing = () => {
   const containerRef = useRef(null);
   const contactFormRef = useRef(null);
   const captchaRef = useRef(null);

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      service: 'Full Email Audit',
      challenges: '',
   });
   const [selectedPlatforms, setSelectedPlatforms] = useState([]);
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
      <div className="min-h-screen bg-white font-sans selection:bg-brand-primary/10">
         <SEO
            title="Email Marketing & Automation Services | High-Converting Campaigns"
            description="Boost customer retention and sales with automated email marketing workflows, newsletter design, list segmentation, and cold outreach by EC4YOU."
            keywords={["email marketing services", "email automation workflows", "newsletter design", "mailchimp automation", "email deliverability"]}
            canonical="https://www.ec4you.in/services/email-marketing"
         />
         {/* 1. Hero Section: Split Layout */}
         <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            {/* Background animated blobs */}
            <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-accent/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-brand-primary/15 blur-[100px] rounded-full animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <nav className="flex items-center gap-3 mb-12 text-sm font-semibold">
                  <a href="/" className="text-slate-400 hover:text-brand-primary transition-colors">Home</a>
                  <span className="text-slate-200">/</span>
                  <a href="/services" className="text-slate-400 hover:text-brand-primary transition-colors">Services</a>
                  <span className="text-slate-200">/</span>
                  <span className="text-slate-900 cursor-default">Email Marketing</span>
               </nav>

               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="relative z-10 text-left">
                     <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                        Turn Subscribers Into <span className="text-brand-accent relative inline-block">Customers<span className="absolute bottom-1 left-0 w-full h-3 bg-brand-accent/10 -z-10 rounded-full" /></span>
                     </h1>
                     <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl mb-12">
                        We craft personalized, data-driven email campaigns that cut through the noise, engage your audience, and drive measurable revenue.
                     </p>

                     <div className="flex flex-wrap gap-6 mb-16">
                        <button
                           onClick={scrollToForm}
                           className="px-10 py-5 bg-brand-accent text-white font-black rounded-2xl shadow-xl shadow-brand-accent/30 hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
                        >
                           Scale Your Revenue
                           <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                        </button>

                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 italic text-slate-500 font-semibold text-sm">
                           <Zap size={16} className="text-brand-accent" />
                           Free Strategy Audit Included
                        </div>
                     </div>

                     {/* Excellence Badge */}
                     <div className="flex items-center gap-6 p-6 rounded-3xl bg-brand-accent/5 border border-brand-accent/10 w-fit">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-brand-accent text-white shadow-lg shadow-brand-accent/30">
                           <Mail size={24} />
                        </div>
                        <div>
                           <div className="text-lg font-black text-slate-900 leading-tight">High Deliverability</div>
                           <div className="text-sm text-slate-500 font-semibold">Segmentation & Automation Experts</div>
                        </div>
                     </div>
                  </div>

                  <div className="relative group">
                     {/* Data Visualization Illustration */}
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 bg-brand-bg rounded-[3rem] border border-brand-accent/10 shadow-xl"
                     >
                        <svg width="100%" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect x="100" y="80" width="300" height="200" rx="15" fill="white" stroke="#ffccb3" strokeWidth="2" />
                           <path d="M100 80L250 180L400 80" stroke="#ffccb3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           <motion.circle
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.5, type: 'spring' }}
                              cx="350" cy="60" r="30" fill="#ff9966"
                           />
                           <motion.path
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 1, duration: 0.5 }}
                              d="M340 60L350 70L370 50" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                           />
                           <rect x="150" y="220" width="200" height="15" rx="5" fill="#f1f5f9" />
                           <rect x="150" y="245" width="140" height="15" rx="5" fill="#f1f5f9" />
                        </svg>
                     </motion.div>
                     <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
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

                  {/* Case 1: D2C Brand */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ x: card1X, rotate: card1Rotate, opacity: card1Opacity, zIndex: 3 }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">40% Revenue from Email</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">Implemented advanced flow automations (Welcome, Abandoned Cart, Win-back) for a D2C fashion brand.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              '25% Open Rate Average',
                              '6x ROI in first 3 months'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-brand-primary" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-orange-100 to-brand-primary p-8 flex items-center justify-center group relative border-[10px] border-white/50">
                        <BarChart2 size={120} className="text-white drop-shadow-2xl transition-transform group-hover:scale-110" />
                     </div>
                  </motion.div>

                  {/* Case 2: B2B Lead Gen */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ x: card2X, rotate: card2Rotate, opacity: card2Opacity, zIndex: 2 }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">B2B Cold Outreach that Converts</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">Crafted a high-touch personalized outreach sequence for a SaaS company targeting CTOs.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              '12% Reply Rate on Cold Email',
                              'Generated $500k Pipeline'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-purple-500" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-purple-100 to-purple-500 p-8 flex items-center justify-center group relative border-[10px] border-white/50">
                        <Send size={120} className="text-white drop-shadow-2xl transition-transform group-hover:scale-110" />
                     </div>
                  </motion.div>

                  {/* Case 3: Newsletter Growth */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ zIndex: 1, scale: card3Scale, opacity: card3Opacity }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">Newsletter Subscriber Explosion</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">Grew a tech newsletter from 0 to 50k subscribers with high engagement retention.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              'Organic viral loops implemented',
                              'sub 0.5% unsubscribe rate'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-emerald-500" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-emerald-100 to-emerald-500 p-8 flex items-center justify-center group relative border-[10px] border-white/50">
                        <Users size={120} className="text-white drop-shadow-2xl transition-transform group-hover:scale-110" />
                     </div>
                  </motion.div>

               </div>
            </div>
         </section>

         {/* 3. Tech Stack Marquee */}
         <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
               <h2 className="text-3xl lg:text-5xl font-black text-slate-900 text-center mb-20 tracking-tight">Tools We <span className="text-brand-accent">Master</span></h2>

               <div className="relative overflow-hidden w-full whitespace-nowrap">
                  <div className="flex gap-12 w-max animate-marquee py-8">
                     {[...Array(2)].map((_, loop) => (
                        ['Mailchimp', 'Klaviyo', 'HubSpot', 'ActiveCampaign', 'SendGrid', 'ConvertKit', 'Drip', 'Omnisend', 'Postmark', 'Brevo'].map((item, i) => (
                           <div className="px-10 py-5 bg-brand-bg border-2 border-brand-accent/20 rounded-2xl group hover:border-brand-accent transition-all duration-300" key={`${loop}-${i}`}>
                              <span className="text-lg font-black text-brand-primary">{item}</span>
                           </div>
                        ))
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 4. Why Partner With Us */}
         <section className="py-40 bg-brand-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
               <div className="mb-24 text-center max-w-3xl mx-auto">
                  <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">More Than Just <span className="text-brand-accent">Sends</span></h2>
                  <p className="text-xl text-slate-600 leading-relaxed">We focus on building relationships and trust, which ultimately leads to conversions.</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     { icon: <Target size={24} />, title: 'Precision Targeting', desc: 'Advanced segmentation ensures the right message reaches the right person at the right time.' },
                     { icon: <LayoutTemplate size={24} />, title: 'Design That Converts', desc: 'Mobile-responsive, accessible, and visually stunning email templates.' },
                     { icon: <Zap size={24} />, title: 'Automated Flows', desc: 'Set-it-and-forget-it revenue generators working 24/7 in the background.' },
                     { icon: <Inbox size={24} />, title: 'Inbox Delivery', desc: 'Technical optimization (SPF, DKIM, DMARC) to keep you out of the spam folder.' }
                  ].map((item, i) => (
                     <div key={i} className="group relative bg-white p-10 rounded-[2.5rem] border border-black/[0.03] text-left hover:border-brand-accent/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
                        <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                           {item.icon}
                        </div>
                        <h3 className="text-2xl font-black mb-4 relative z-10">{item.title}</h3>
                        <p className="leading-relaxed text-slate-500 relative z-10">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 5. Split Contact Section */}
         <section ref={contactFormRef} className="py-40 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-20 items-start">

                  <div className="space-y-16">
                     <div className="space-y-8">
                        <div>
                           <h2 className="text-5xl lg:text-7xl font-black leading-[1.1] text-slate-900 mb-2 tracking-tight">Ignite Your <span className="text-brand-accent">Growth</span></h2>
                        </div>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                           Ready to scale? Get a free audit of your current email strategy and discover hidden revenue opportunities waiting in your list.
                        </p>
                     </div>

                     <div className="space-y-6">
                        {[
                           { icon: <MapPin size={28} />, label: 'Marketing HQ', value: 'Chennai, India' },
                           { icon: <Phone size={28} />, label: 'Strategy Team', value: '+91 7010942474' },
                           { icon: <Mail size={28} />, label: 'Campaign Support', value: 'growth@ec4you.in' }
                        ].map((info, i) => (
                           <div key={i} className="flex items-center gap-8 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-brand-accent/30 transition-all group">
                              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white text-brand-accent shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all group-hover:scale-110">
                                 {info.icon}
                              </div>
                              <div>
                                 <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{info.label}</h4>
                                 <p className="text-xl lg:text-2xl font-black text-slate-900">{info.value}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="bg-slate-50 p-10 lg:p-16 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden group">
                     {/* Mesh overlay */}
                     <div className="absolute inset-0 bg-grid-slate-900/[0.02] pointer-events-none" />

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
                              formType: 'Email Marketing Service Inquiry',
                              name: formData.name,
                              email: formData.email,
                              projectRequirement: formData.service,
                              currentPlatform: selectedPlatforms.join(', ') || 'Not specified',
                              message: formData.challenges,
                           });
                           setIsSubmitting(false);
                           if (result.success) {
                              setStatusMessage({
                                 type: 'success',
                                 text: 'Thank you! Your email marketing inquiry has been submitted successfully.',
                              });
                              setFormData({ name: '', email: '', service: 'Full Email Audit', challenges: '' });
                              setSelectedPlatforms([]);
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
                              <label className="text-xs font-black uppercase tracking-widest text-slate-500">Full Name <span className="text-brand-accent">*</span></label>
                              <input 
                                 type="text" 
                                 value={formData.name}
                                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                 className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-white focus:border-brand-accent/20 outline-none transition-all text-slate-900 font-bold" 
                                 placeholder="Sarah Jones" 
                                 required
                              />
                           </div>
                           <div className="flex flex-col gap-3">
                              <label className="text-xs font-black uppercase tracking-widest text-slate-500">Work Email <span className="text-brand-accent">*</span></label>
                              <input 
                                 type="email" 
                                 value={formData.email}
                                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                 className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-white focus:border-brand-accent/20 outline-none transition-all text-slate-900 font-bold" 
                                 placeholder="sarah@brand.com" 
                                 required
                              />
                           </div>
                        </div>

                        <div className="flex flex-col gap-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-500">How can we help? <span className="text-brand-accent">*</span></label>
                           <select 
                              value={formData.service}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                              className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-white focus:border-brand-accent/20 outline-none transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                           >
                              <option>Full Email Audit</option>
                              <option>Campaign Management</option>
                              <option>Flow Automation Setup</option>
                              <option>List Cleaning & Hygiene</option>
                           </select>
                        </div>

                        <div className="flex flex-col gap-4">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-500">Current Platform (Optional)</label>
                           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                              {['Mailchimp', 'Klaviyo', 'HubSpot', 'ActiveCampaign', 'SendGrid', 'None / Other'].map((platform, i) => (
                                 <label key={i} className="flex items-center gap-3 cursor-pointer group/item">
                                    <div className="relative">
                                       <input 
                                          type="checkbox" 
                                          checked={selectedPlatforms.includes(platform)}
                                          onChange={(e) => {
                                             if (e.target.checked) {
                                                setSelectedPlatforms([...selectedPlatforms, platform]);
                                             } else {
                                                setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform));
                                             }
                                          }}
                                          className="peer hidden" 
                                       />
                                       <div className="w-6 h-6 rounded-lg border-2 border-slate-200 peer-checked:bg-brand-accent peer-checked:border-brand-accent transition-all flex items-center justify-center">
                                          <div className="w-1.5 h-3 border-r-2 border-b-2 border-white rotate-45 mb-1 hidden peer-checked:block" />
                                       </div>
                                    </div>
                                    <span className="text-slate-600 font-bold text-xs group-hover/item:text-slate-900 transition-colors">{platform}</span>
                                 </label>
                              ))}
                           </div>
                        </div>

                        <div className="flex flex-col gap-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-500">Current Challenges / Goals <span className="text-brand-accent">*</span></label>
                           <textarea 
                              value={formData.challenges}
                              onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                              className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-white focus:border-brand-accent/20 outline-none transition-all text-slate-900 font-bold resize-none" 
                              rows="4" 
                              placeholder="Briefly tell us about your goals or pain points..."
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
                              className="px-8 py-4 rounded-2xl bg-brand-primary text-white font-bold flex items-center justify-center gap-3 hover:bg-brand-accent transition-all hover:scale-105 shadow-xl shadow-brand-accent/10 group/btn cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                           >
                              {isSubmitting ? (
                                 <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Submitting...</span>
                                 </>
                              ) : (
                                 <>
                                    <span>Submit Request</span>
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

export default EmailMarketing;

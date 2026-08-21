import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../../components/SEO';
import Captcha from '../../components/Common/Captcha';
import { submitFormData } from '../../services/formService';
import {
   Shield, Lock, Server, AlertTriangle, FileCheck,
   UserCheck, ShieldAlert, Key, Globe, Eye, Award,
   CheckCircle, CheckCircle2, MessageSquare, Zap, ShieldCheck,
   MapPin, Phone, Mail, ArrowRight, Loader2
} from 'lucide-react';

const CyberSecurity = () => {
   const containerRef = useRef(null);
   const contactFormRef = useRef(null);
   const captchaRef = useRef(null);

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      assessmentType: 'Infrastructure Penetration Testing',
      scope: '',
   });
   const [selectedFocus, setSelectedFocus] = useState([]);
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
            title="Cyber Security & Website Protection Services | EC4YOU"
            description="Protect your digital assets with EC4YOU's cyber security audits, web application firewalls, SSL security, malware protection, and vulnerability assessments."
            keywords={["cyber security services", "web application security", "SSL certification", "website malware cleanup", "vulnerability assessment"]}
            canonical="https://www.ec4you.in/services/cyber-security"
         />
         {/* 1. Hero Section: Split Layout */}
         <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            {/* Dark Teal/Neutral Blobs */}
            <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-tertiary/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-brand-neutral/10 blur-[100px] rounded-full animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <nav className="flex items-center gap-3 mb-12 text-sm font-semibold">
                  <a href="/" className="text-slate-400 hover:text-brand-primary transition-colors">Home</a>
                  <span className="text-slate-200">/</span>
                  <a href="/services" className="text-slate-400 hover:text-brand-primary transition-colors">Services</a>
                  <span className="text-slate-200">/</span>
                  <span className="text-slate-900 cursor-default">Cyber Security</span>
               </nav>

               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="relative z-10 text-left">
                     <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                        Fortifying Your Digital <span className="text-brand-tertiary relative inline-block">Frontier<span className="absolute bottom-1 left-0 w-full h-3 bg-brand-tertiary/10 -z-10 rounded-full" /></span>
                     </h1>
                     <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl mb-12">
                        We provide bank-grade security solutions and proactive threat intelligence to protect your most valuable digital assets and maintain customer trust.
                     </p>

                     <div className="flex flex-wrap gap-6 mb-16">
                        <button
                           onClick={scrollToForm}
                           className="px-10 py-5 bg-brand-tertiary text-white font-black rounded-2xl shadow-xl shadow-brand-tertiary/30 hover:bg-teal-600 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
                        >
                           Secure Your Future
                           <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                        </button>

                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 italic text-slate-500 font-semibold text-sm">
                           <Zap size={16} className="text-brand-tertiary" />
                           Free Vulnerability Scan Included
                        </div>
                     </div>

                     {/* Excellence Badge */}
                     <div className="flex items-center gap-6 p-6 rounded-3xl bg-brand-tertiary/5 border border-brand-tertiary/10 w-fit">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-brand-tertiary text-white shadow-lg shadow-brand-tertiary/30">
                           <ShieldCheck size={24} />
                        </div>
                        <div>
                           <div className="text-lg font-black text-slate-900 leading-tight">ISO 27001 Certified</div>
                           <div className="text-sm text-slate-500 font-semibold">Global Security Standards Compliant</div>
                        </div>
                     </div>
                  </div>

                  <div className="relative group">
                     {/* Security Illustration */}
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative p-12 bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl overflow-hidden"
                     >
                        <div className="absolute inset-0 bg-grid-slate-800/[0.2] [mask-image:radial-gradient(white,transparent_85%)]" />
                        <svg width="100%" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                           <path d="M250 50L400 120V250C400 320 250 370 250 370C250 370 100 320 100 250V120L250 50Z" fill="rgba(102, 153, 153, 0.05)" stroke="#669999" strokeWidth="4" />
                           <circle cx="250" cy="180" r="60" fill="rgba(255, 255, 255, 0.05)" stroke="#669999" strokeWidth="2" />
                           <motion.path
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 2, repeat: Infinity }}
                              d="M230 180L245 195L275 165" stroke="#669999" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
                           />
                           <path d="M150 120H350" stroke="#669999" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" />
                        </svg>
                     </motion.div>
                     <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-tertiary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
               </div>
            </div>
         </section>

         {/* 2. Protection Showcases (Stacked Scroll) */}
         <section className="relative bg-slate-50" ref={containerRef} style={{ height: '300vh' }}>
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
               <div className="absolute top-16 w-full text-center z-10">
                  <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight">Success Stories</h2>
               </div>

               <div className="relative w-full h-full flex items-center justify-center">

                  {/* Case 1: Banking */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ x: card1X, rotate: card1Rotate, opacity: card1Opacity, zIndex: 3 }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">Global Bank: Zero-Trust Defense</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">Implemented a comprehensive zero-trust architecture preventing 1M+ monthly intrusion attempts.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              '100% Uptime during DDoS',
                              'Real-time AI threat mitigation'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-brand-tertiary" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-slate-900 p-12 flex items-center justify-center group relative">
                        <Shield size={160} className="text-brand-tertiary transition-transform group-hover:scale-110 duration-500 drop-shadow-[0_0_30px_rgba(102,153,153,0.3)]" />
                     </div>
                  </motion.div>

                  {/* Case 2: Healthcare */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ x: card2X, rotate: card2Rotate, opacity: card2Opacity, zIndex: 2 }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">HealthConnect: HIPAA Secure</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">End-to-end encrypted storage for 10M+ patient records with strict access controls.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              'Zero data breaches since launch',
                              'Fully GDPR & HIPAA Compliant'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-brand-secondary" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-slate-900 p-12 flex items-center justify-center group relative">
                        <Lock size={160} className="text-brand-secondary transition-transform group-hover:scale-110 duration-500 drop-shadow-[0_0_30px_rgba(153,204,204,0.3)]" />
                     </div>
                  </motion.div>

                  {/* Case 3: Infrastructure */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ zIndex: 1, scale: card3Scale, opacity: card3Opacity }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">GovInfra: Critical Systems Audit</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">Full-spectrum VAPT and disaster recovery planning for national utility infrastructure.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              'Identified 240+ vulnerabilities',
                              '24/7 Red-team monitoring'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-brand-tertiary" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-slate-900 p-12 flex items-center justify-center group relative">
                        <Server size={160} className="text-brand-tertiary transition-transform group-hover:scale-110 duration-500 drop-shadow-[0_0_30px_rgba(102,153,153,0.3)]" />
                     </div>
                  </motion.div>

               </div>
            </div>
         </section>

         {/* 3. Compliance Marquee */}
         <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
               <h2 className="text-3xl lg:text-5xl font-black text-slate-900 text-center mb-20 tracking-tight">Compliance & <span className="text-brand-tertiary">Standards</span></h2>

               <div className="relative overflow-hidden w-full whitespace-nowrap">
                  <div className="flex gap-12 w-max animate-marquee py-8">
                     {[...Array(2)].map((_, loop) => (
                        ['SOC 2 Type II', 'GDPR', 'HIPAA', 'ISO 27001', 'PCI DSS', 'NIST', 'CIS Controls', 'OWASP Top 10', 'CCPA', 'CMMC'].map((item, i) => (
                           <div className="px-10 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl group hover:border-brand-tertiary/30 transition-all duration-300" key={`${loop}-${i}`}>
                              <span className="text-lg font-black text-slate-700">{item}</span>
                           </div>
                        ))
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 4. Why Partner With Us */}
         <section className="py-40 bg-slate-50/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
               <div className="mb-24 text-center max-w-3xl mx-auto">
                  <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">Security Without <span className="text-brand-tertiary">Compromise</span></h2>
                  <p className="text-xl text-slate-600 leading-relaxed">Our multi-layered defense strategy ensures your business remains resilient against evolving cyber threats.</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     { icon: <ShieldAlert size={24} />, title: 'Proactive VAPT', desc: 'We find and fix vulnerabilities before they can be exploited by malicious actors.' },
                     { icon: <Eye size={24} />, title: '24/7 Monitoring', desc: 'Continuous surveillance of your infrastructure to detect and neutralize threats instantly.' },
                     { icon: <FileCheck size={24} />, title: 'Full Compliance', desc: 'Navigate complex regulatory landscapes with our expert compliance auditing services.' },
                     { icon: <Zap size={24} />, title: 'Instant Response', desc: 'Expert incident response teams ready to minimize impact and ensure business continuity.' }
                  ].map((item, i) => (
                     <div key={i} className="group relative bg-white p-10 rounded-[2.5rem] border border-black/[0.03] text-left hover:border-brand-tertiary/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
                        <div className="w-16 h-16 rounded-2xl bg-brand-tertiary/10 flex items-center justify-center text-brand-tertiary mb-8 group-hover:bg-brand-tertiary group-hover:text-white transition-all duration-300 group-hover:rotate-6">
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
         <section ref={contactFormRef} className="py-40 bg-slate-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-20 items-start">

                  <div className="space-y-16">
                     <div className="space-y-8">
                        <div>
                           <h2 className="text-5xl lg:text-7xl font-black leading-[1.1] text-white mb-2 tracking-tight">Secure Your <span className="text-brand-tertiary">Future</span> Today</h2>
                        </div>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                           Threats don't wait. Schedule a comprehensive security audit and vulnerability assessment for your organization now.
                        </p>
                     </div>

                     <div className="space-y-6">
                        {[
                           { icon: <MapPin size={28} />, label: 'Security Ops Center', value: 'Chennai, India' },
                           { icon: <Phone size={28} />, label: '24/7 Hotline', value: '+91 7010942474' },
                           { icon: <Mail size={28} />, label: 'Report Incident', value: 'security@ec4you.in' }
                        ].map((info, i) => (
                           <div key={i} className="flex items-center gap-8 p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-brand-tertiary/30 transition-all group">
                              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/[0.05] text-brand-tertiary shadow-sm group-hover:bg-brand-tertiary group-hover:text-white transition-all group-hover:scale-110">
                                 {info.icon}
                              </div>
                              <div>
                                 <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{info.label}</h4>
                                 <p className="text-xl lg:text-2xl font-black text-white">{info.value}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="bg-white p-10 lg:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                     {/* Security mesh overlay */}
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
                              formType: 'Cyber Security Service Inquiry',
                              name: formData.name,
                              email: formData.email,
                              projectRequirement: formData.assessmentType,
                              focusAreas: selectedFocus.join(', ') || 'Not specified',
                              message: formData.scope,
                           });
                           setIsSubmitting(false);
                           if (result.success) {
                              setStatusMessage({
                                 type: 'success',
                                 text: 'Thank you! Your security assessment request has been submitted successfully.',
                              });
                              setFormData({ name: '', email: '', assessmentType: 'Infrastructure Penetration Testing', scope: '' });
                              setSelectedFocus([]);
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
                              <label className="text-xs font-black uppercase tracking-widest text-slate-500">Security Officer / POC <span className="text-brand-tertiary">*</span></label>
                              <input 
                                 type="text" 
                                 value={formData.name}
                                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                 className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-brand-tertiary/20 focus:bg-white outline-none transition-all text-slate-900 font-bold" 
                                 placeholder="Name" 
                                 required
                              />
                           </div>
                           <div className="flex flex-col gap-3">
                              <label className="text-xs font-black uppercase tracking-widest text-slate-500">Corporate Email <span className="text-brand-tertiary">*</span></label>
                              <input 
                                 type="email" 
                                 value={formData.email}
                                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                 className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-brand-tertiary/20 focus:bg-white outline-none transition-all text-slate-900 font-bold" 
                                 placeholder="security@company.com" 
                                 required
                              />
                           </div>
                        </div>

                        <div className="flex flex-col gap-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-500">Assessment Type <span className="text-brand-tertiary">*</span></label>
                           <select 
                              value={formData.assessmentType}
                              onChange={(e) => setFormData({ ...formData, assessmentType: e.target.value })}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-brand-tertiary/20 focus:bg-white outline-none transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                           >
                              <option>Infrastructure Penetration Testing</option>
                              <option>Web App Security Audit</option>
                              <option>Compliance (SOC2 / ISO 27001)</option>
                              <option>Managed SOC (24/7)</option>
                           </select>
                        </div>

                        <div className="flex flex-col gap-4">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-500">Focus Areas</label>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {['Network Security', 'Cloud Security', 'Endpoints', 'Zero Trust Architecture', 'Data Privacy', 'Incident Response'].map((area, i) => (
                                 <label key={i} className="flex items-center gap-3 cursor-pointer group/item">
                                    <div className="relative">
                                       <input 
                                          type="checkbox" 
                                          checked={selectedFocus.includes(area)}
                                          onChange={(e) => {
                                             if (e.target.checked) {
                                                setSelectedFocus([...selectedFocus, area]);
                                             } else {
                                                setSelectedFocus(selectedFocus.filter((a) => a !== area));
                                             }
                                          }}
                                          className="peer hidden" 
                                       />
                                       <div className="w-6 h-6 rounded-lg border-2 border-slate-200 peer-checked:bg-brand-tertiary peer-checked:border-brand-tertiary transition-all flex items-center justify-center">
                                          <div className="w-1.5 h-3 border-r-2 border-b-2 border-white rotate-45 mb-1 hidden peer-checked:block" />
                                       </div>
                                    </div>
                                    <span className="text-slate-600 font-bold text-sm group-hover/item:text-slate-900 transition-colors">{area}</span>
                                 </label>
                              ))}
                           </div>
                        </div>

                        <div className="flex flex-col gap-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-500">Scope of Assessment <span className="text-brand-tertiary">*</span></label>
                           <textarea 
                              value={formData.scope}
                              onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-brand-tertiary/20 focus:bg-white outline-none transition-all text-slate-900 font-bold resize-none" 
                              rows="4" 
                              placeholder="Describe infrastructure size or specific concerns..."
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
                              className="px-8 py-4 rounded-2xl bg-brand-neutral text-white font-bold flex items-center justify-center gap-3 hover:bg-brand-tertiary transition-all hover:scale-105 shadow-xl shadow-brand-tertiary/10 group/btn cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                           >
                              {isSubmitting ? (
                                 <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Submitting...</span>
                                 </>
                              ) : (
                                 <>
                                    <span>Request Audit</span>
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

export default CyberSecurity;

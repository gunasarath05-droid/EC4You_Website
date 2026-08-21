import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../../components/SEO';
import Captcha from '../../components/Common/Captcha';
import { submitFormData } from '../../services/formService';
import {
   Palette, PenTool, Image, Layout, Package, Brush,
   Heart, Eye, Award, Layers, CheckCircle, CheckCircle2, MessageSquare,
   Sparkles, MousePointer2, Box, Palette as PaletteIcon,
   MapPin, Phone, Mail, ArrowRight, Zap, Loader2
} from 'lucide-react';

const GraphicDesign = () => {
   const containerRef = useRef(null);
   const contactFormRef = useRef(null);
   const captchaRef = useRef(null);

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      service: 'Brand Identity System',
      brief: '',
   });
   const [selectedStyles, setSelectedStyles] = useState([]);
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
            title="UI/UX & Graphic Design Services | Branding & Visual Identity"
            description="Professional brand identity, UI/UX design, marketing creatives, and packaging design. Stand out from competitors with stunning visuals crafted by EC4YOU."
            keywords={["graphic design services", "UI UX design agency", "brand identity design", "logo design chennai", "creative marketing graphics"]}
            canonical="https://www.ec4you.in/services/graphic-design"
         />
         {/* 1. Hero Section: Split Layout */}
         <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            {/* Background animated blobs */}
            <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-primary/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-brand-secondary/15 blur-[100px] rounded-full animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <nav className="flex items-center gap-3 mb-12 text-sm font-semibold">
                  <a href="/" className="text-slate-400 hover:text-brand-primary transition-colors">Home</a>
                  <span className="text-slate-200">/</span>
                  <a href="/services" className="text-slate-400 hover:text-brand-primary transition-colors">Services</a>
                  <span className="text-slate-200">/</span>
                  <span className="text-slate-900 cursor-default">Graphic Design</span>
               </nav>

               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="relative z-10 text-left">
                     <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                        Visual Stories That <span className="text-brand-primary relative inline-block">Inspire<span className="absolute bottom-1 left-0 w-full h-3 bg-brand-primary/10 -z-10 rounded-full" /></span>
                     </h1>
                     <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl mb-12">
                        We blend artistic vision with strategic thinking to create impactful designs that elevate your brand and captivate your audience.
                     </p>

                     <div className="flex flex-wrap gap-6 mb-16">
                        <button
                           onClick={scrollToForm}
                           className="px-10 py-5 bg-brand-primary text-white font-black rounded-2xl shadow-xl shadow-brand-primary/30 hover:bg-brand-primary/90 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
                        >
                           Start Your Vision
                           <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                        </button>

                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 italic text-slate-500 font-semibold text-sm">
                           <Zap size={16} className="text-brand-primary" />
                           Free Design Concept Included
                        </div>
                     </div>

                     {/* Excellence Badge */}
                     <div className="flex items-center gap-6 p-6 rounded-3xl bg-brand-primary/5 border border-brand-primary/10 w-fit">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-brand-primary text-white shadow-lg shadow-brand-primary/30">
                           <PaletteIcon size={24} />
                        </div>
                        <div>
                           <div className="text-lg font-black text-slate-900 leading-tight">Award-Winning Studio</div>
                           <div className="text-sm text-slate-500 font-semibold">Visual Identity & Branding Experts</div>
                        </div>
                     </div>
                  </div>

                  <div className="relative group">
                     {/* Creative Illustration */}
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative p-12 bg-brand-bg rounded-[3rem] border border-brand-primary/10 shadow-xl overflow-hidden"
                     >
                        <div className="absolute inset-0 bg-grid-slate-900/[0.02] [mask-image:radial-gradient(white,transparent)]" />
                        <svg width="100%" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                           <circle cx="250" cy="200" r="150" fill="rgba(255, 102, 51, 0.03)" />
                           <motion.path
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 2, repeat: Infinity }}
                              d="M150 200L250 100L350 200L250 300L150 200Z" fill="white" stroke="#ff9966" strokeWidth="2"
                           />
                           <rect x="230" y="150" width="40" height="100" rx="20" fill="#ff6633" opacity="0.1" />
                           <rect x="180" y="180" width="140" height="40" rx="20" fill="#ff6633" opacity="0.1" />
                           <path d="M250 120V280M170 200H330" stroke="#ff6633" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" />
                           <circle cx="250" cy="200" r="20" fill="#ff6633" />
                        </svg>
                     </motion.div>
                     <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
               </div>
            </div>
         </section>

         {/* 2. Portfolio Showcases (Stacked Scroll) */}
         <section className="relative bg-slate-50" ref={containerRef} style={{ height: '300vh' }}>
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
               <div className="absolute top-16 w-full text-center z-10">
                  <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight">Success Stories</h2>
               </div>

               <div className="relative w-full h-full flex items-center justify-center">

                  {/* Case 1: Eco Branding */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ x: card1X, rotate: card1Rotate, opacity: card1Opacity, zIndex: 3 }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">EcoSphere: Green Identity</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">A comprehensive minimalist design system focusing on sustainability and modern aesthetics.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              'Unified 50+ Brand Assets',
                              'Custom Typographic System'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-brand-primary" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-brand-primary p-8 flex items-center justify-center group relative border-[10px] border-white/50">
                        <Palette size={120} className="text-white drop-shadow-2xl transition-transform group-hover:scale-110 duration-500" />
                     </div>
                  </motion.div>

                  {/* Case 2: Tech Summit */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ x: card2X, rotate: card2Rotate, opacity: card2Opacity, zIndex: 2 }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">NextGen: Tech Summit 2024</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">High-energy visual language for a global conference including stage graphics and digital collateral.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              'Impacted 20k+ Attendees',
                              'Vibrant Dynamic Visuals'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-brand-secondary" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-brand-secondary p-8 flex items-center justify-center group relative border-[10px] border-white/50">
                        <Sparkles size={120} className="text-white drop-shadow-2xl transition-transform group-hover:scale-110 duration-500" />
                     </div>
                  </motion.div>

                  {/* Case 3: Premium Skincare */}
                  <motion.div
                     className="absolute w-[85vw] max-w-6xl h-fit lg:h-[500px] bg-white rounded-[3.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl border border-black/5 overflow-hidden origin-bottom"
                     style={{ zIndex: 1, scale: card3Scale, opacity: card3Opacity }}
                  >
                     <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-8">
                        <div>
                           <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">Lumia: Luxury Skincare</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">Artisan packaging design that combines tactile elements with high-end typography.</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                           {[
                              '30% Boost in retail sales',
                              'Premium Packaging System'
                           ].map((point, i) => (
                              <li key={i} className="bg-slate-50 p-5 rounded-2xl flex flex-col gap-3 font-bold text-slate-700 border border-black/5 hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all">
                                 <CheckCircle className="text-slate-400" />
                                 <span className="text-sm">{point}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden bg-slate-100 p-8 flex items-center justify-center group relative border-[10px] border-white/50">
                        <Box size={120} className="text-slate-400 drop-shadow-2xl transition-transform group-hover:scale-110 duration-500" />
                     </div>
                  </motion.div>

               </div>
            </div>
         </section>

         {/* 3. Creative Tools Marquee */}
         <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
               <h2 className="text-3xl lg:text-5xl font-black text-slate-900 text-center mb-20 tracking-tight">Our Creative <span className="text-brand-primary">Arsenal</span></h2>

               <div className="relative overflow-hidden w-full whitespace-nowrap">
                  <div className="flex gap-12 w-max animate-marquee py-8">
                     {[...Array(2)].map((_, loop) => (
                        ['Photoshop', 'Illustrator', 'Figma', 'After Effects', 'InDesign', 'Procreate', 'Spline', 'Cinema 4D', 'Maya', 'Blender'].map((item, i) => (
                           <div className="px-10 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl group hover:border-brand-primary/30 transition-all duration-300" key={`${loop}-${i}`}>
                              <span className="text-lg font-black text-slate-700">{item}</span>
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
                  <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">Design with <span className="text-brand-primary">Purpose</span></h2>
                  <p className="text-xl text-slate-600 leading-relaxed">We convert complex ideas into simple, powerful, and beautiful visual experiences.</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     { icon: <Heart size={24} />, title: 'Human-Centered', desc: 'We design for people, ensuring an emotional connection with your audience.' },
                     { icon: <MousePointer2 size={24} />, title: 'Strategic Visuals', desc: 'Every pixel has a purpose. We align design with your business objectives.' },
                     { icon: <Layers size={24} />, title: 'Full-Spectrum', desc: 'From logo ideation to complete brand architectures and digital experiences.' },
                     { icon: <Award size={24} />, title: 'Premium Quality', desc: 'Uncompromising attention to detail that sets your brand apart from the rest.' }
                  ].map((item, i) => (
                     <div key={i} className="group relative bg-white p-10 rounded-[2.5rem] border border-black/[0.03] text-left hover:border-brand-primary/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
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

         {/* 5. Split Contact Section */}
         <section ref={contactFormRef} className="py-40 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-20 items-start">

                  <div className="space-y-16">
                     <div className="space-y-8">
                        <div>
                           <h2 className="text-5xl lg:text-7xl font-black leading-[1.1] text-slate-900 mb-2 tracking-tight">Start Your <span className="text-brand-primary">Vision</span></h2>
                        </div>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                           Let's collaborate to build a visual identity that resonates and endures. We turn complex ideas into beautiful realities.
                        </p>
                     </div>

                     <div className="space-y-6">
                        {[
                           { icon: <MapPin size={28} />, label: 'Design Studio', value: 'Chennai, India' },
                           { icon: <Phone size={28} />, label: 'Creative Director', value: '+91 7010942474' },
                           { icon: <Mail size={28} />, label: 'Design Briefs', value: 'design@ec4you.in' }
                        ].map((info, i) => (
                           <div key={i} className="flex items-center gap-8 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-brand-primary/30 transition-all group">
                              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all group-hover:scale-110">
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
                              formType: 'Graphic Design Service Inquiry',
                              name: formData.name,
                              email: formData.email,
                              projectRequirement: formData.service,
                              stylePreferences: selectedStyles.join(', ') || 'Not specified',
                              message: formData.brief,
                           });
                           setIsSubmitting(false);
                           if (result.success) {
                              setStatusMessage({
                                 type: 'success',
                                 text: 'Thank you! Your design inquiry has been submitted successfully.',
                              });
                              setFormData({ name: '', email: '', service: 'Brand Identity System', brief: '' });
                              setSelectedStyles([]);
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
                              <label className="text-xs font-black uppercase tracking-widest text-slate-500">Artist/Founder Name <span className="text-brand-primary">*</span></label>
                              <input 
                                 type="text" 
                                 value={formData.name}
                                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                 className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-white focus:border-brand-primary/20 outline-none transition-all text-slate-900 font-bold" 
                                 placeholder="Alex Rivera" 
                                 required
                              />
                           </div>
                           <div className="flex flex-col gap-3">
                              <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email Address <span className="text-brand-primary">*</span></label>
                              <input 
                                 type="email" 
                                 value={formData.email}
                                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                 className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-white focus:border-brand-primary/20 outline-none transition-all text-slate-900 font-bold" 
                                 placeholder="alex@brand.com" 
                                 required
                              />
                           </div>
                        </div>

                        <div className="flex flex-col gap-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-500">What do you need? <span className="text-brand-primary">*</span></label>
                           <select 
                              value={formData.service}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                              className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-white focus:border-brand-primary/20 outline-none transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                           >
                              <option>Brand Identity System</option>
                              <option>Logo Design</option>
                              <option>Marketing Collateral</option>
                              <option>UI/UX Visual Design</option>
                              <option>Packaging Design</option>
                           </select>
                        </div>

                        <div className="flex flex-col gap-4">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-500">Style Preferences</label>
                           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                              {['Minimalist', 'Bold & Vibrant', 'Corporate', 'Retro', 'Geometric', 'Hand-drawn'].map((style, i) => (
                                 <label key={i} className="flex items-center gap-3 cursor-pointer group/item">
                                    <div className="relative">
                                       <input 
                                          type="checkbox" 
                                          checked={selectedStyles.includes(style)}
                                          onChange={(e) => {
                                             if (e.target.checked) {
                                                setSelectedStyles([...selectedStyles, style]);
                                             } else {
                                                setSelectedStyles(selectedStyles.filter((s) => s !== style));
                                             }
                                          }}
                                          className="peer hidden" 
                                       />
                                       <div className="w-6 h-6 rounded-lg border-2 border-slate-200 peer-checked:bg-brand-primary peer-checked:border-brand-primary transition-all flex items-center justify-center">
                                          <div className="w-1.5 h-3 border-r-2 border-b-2 border-white rotate-45 mb-1 hidden peer-checked:block" />
                                       </div>
                                    </div>
                                    <span className="text-slate-600 font-bold text-xs group-hover/item:text-slate-900 transition-colors">{style}</span>
                                 </label>
                              ))}
                           </div>
                        </div>

                        <div className="flex flex-col gap-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-500">Design Brief / Vision <span className="text-brand-primary">*</span></label>
                           <textarea 
                              value={formData.brief}
                              onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                              className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-white focus:border-brand-primary/20 outline-none transition-all text-slate-900 font-bold resize-none" 
                              rows="4" 
                              placeholder="Describe your brand personality or goals..."
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
                              className="px-8 py-4 rounded-2xl bg-brand-neutral text-white font-bold flex items-center justify-center gap-3 hover:bg-brand-primary transition-all shadow-xl shadow-brand-primary/10 group/btn cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                           >
                              {isSubmitting ? (
                                 <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Submitting...</span>
                                 </>
                              ) : (
                                 <>
                                    <span>Submit Brief</span>
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

export default GraphicDesign;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Target, Smartphone, Palette, ShieldCheck, Mail, Zap, TrendingUp, BarChart } from 'lucide-react';
import NewsletterSection from '../../components/Newsletter/Newsletter';

const Services = () => {
  // Brand Palette Colors (Used for dynamic styles)
  const masterServices = [
    {
      name: 'Digital Marketing',
      desc: 'Drive growth with data-driven SEO, PPC, and social strategies.',
      icon: <Target size={32} />,
      path: '/services/digital-marketing',
      accent: '#ff6633', // Brand Primary
      bg: '#fff5ee'      // Brand BG
    },
    {
      name: 'Web Development',
      desc: 'Building high-performance, scalable web applications.',
      icon: <Cpu size={32} />,
      path: '/services/web-development',
      accent: '#99cccc', // Brand Secondary
      bg: '#e6f2f2'      // Light Teal
    },
    {
      name: 'App Development',
      desc: 'Innovative mobile experiences for iOS and Android.',
      icon: <Smartphone size={32} />,
      path: '/services/app-development',
      accent: '#669999', // Brand Tertiary
      bg: '#f0fcfc'
    },
    {
      name: 'Graphic Design',
      desc: 'Visual storytelling that captivates and elevates your brand.',
      icon: <Palette size={32} />,
      path: '/services/graphic-design',
      accent: '#333333', // Brand Neutral
      bg: '#f5f5f5'
    },
    {
      name: 'Cyber Security',
      desc: 'Protecting your digital frontier with bank-grade security.',
      icon: <ShieldCheck size={32} />,
      path: '/services/cyber-security',
      accent: '#669999', // Brand Tertiary
      bg: '#f0fcfc'
    },
    {
      name: 'Email Marketing',
      desc: 'Engage and convert with targeted email campaigns.',
      icon: <Mail size={32} />,
      path: '/services/email-marketing',
      accent: '#ff9966', // Brand Supporting
      bg: '#fff5ee'
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-primary/10">
      {/* 1. Master Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white">
        {/* Decorative Blobs */}
        <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-brand-primary/10 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute -bottom-[5%] -left-[5%] w-[500px] h-[500px] bg-brand-secondary/10 blur-[100px] rounded-full animate-pulse delay-700" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-3 mb-12 text-sm font-semibold">
            <a href="/" className="text-slate-400 hover:text-brand-primary transition-colors">Home</a>
            <span className="text-slate-200">/</span>
            <span className="text-slate-900 cursor-default">Services</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-8xl mb-10 inline-block animate-bounce [animation-duration:3s]">🚀</div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Accelerate Your Digital <span className="text-brand-primary">Evolution</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
                From code to creative, we provide the full-spectrum of technology and marketing services to transform your business into a digital industry leader.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="relative py-16 bg-white z-20 -mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white/70 backdrop-blur-3xl p-10 lg:p-14 rounded-[3rem] border border-black/5 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { val: '500+', label: 'Projects Delivered' },
              { val: '98%', label: 'Client Retention' },
              { val: '10+', label: 'Years Excellence' },
              { val: '24/7', label: 'Expert Support' }
            ].map((stat, i) => (
              <div key={i} className={`text-center flex flex-col gap-2 ${i < 3 ? 'lg:border-r border-black/5' : ''}`}>
                <span className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">{stat.val}</span>
                <p className="text-xs lg:text-sm text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Trusted By Brands (Infinite Marquee) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 text-center mb-16">Trusted by Industry Leaders</h2>

          <div className="relative overflow-hidden w-full whitespace-nowrap">
            <div className="flex gap-16 w-max animate-marquee">
              {/* Loop brands 2x for infinite scroll */}
              {[...Array(2)].map((_, loop) => (
                ['TechFlow', 'GlobalSync', 'EcoLive', 'UrbanStyle', 'FinCor', 'HealthPlus', 'EduSmart', 'LogiTrans', 'Datacorp', 'NetSystems'].map((brand, i) => (
                  <div className="opacity-40 hover:opacity-100 transition-opacity cursor-default px-8" key={`${loop}-${i}`}>
                    <span className="text-2xl font-black text-slate-400 uppercase tracking-tighter select-none">{brand}</span>
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Hub Grid */}
      <section className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <p className="text-brand-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Expertise</p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Comprehensive Digital Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {masterServices.map((service, index) => (
              <motion.a
                key={index}
                href={service.path}
                className="group relative bg-white rounded-[2.5rem] p-10 lg:p-14 flex flex-col gap-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-black/[0.03] hover:border-black/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Subtle top accent bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundColor: service.accent }} />

                <div
                  className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm"
                  style={{ color: service.accent, backgroundColor: service.bg }}
                >
                  {service.icon}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 group-hover:text-brand-primary transition-colors">{service.name}</h3>
                  <p className="text-base lg:text-lg text-slate-600 leading-relaxed">{service.desc}</p>
                </div>

                <div className="flex items-center gap-3 font-bold mt-auto text-base" style={{ color: service.accent }}>
                  Explore Service <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Work / Process */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <p className="text-brand-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Strategic Execution</p>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">Our Proven Methodology</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                We bridge the gap between complex technical challenges and business success through a meticulous three-stage process.
              </p>

              <div className="flex flex-wrap items-center gap-4 lg:gap-6 mb-16">
                {['Audit', '→', 'Strategy', '→', 'Scaling'].map((step, i) => (
                  <span key={i} className={`
                    ${step === '→' ? 'text-slate-300 font-normal lg:text-2xl' : 'px-8 py-3 rounded-full font-black text-sm lg:text-base transition-all duration-300'}
                    ${step === 'Audit' ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/30' : 'bg-slate-100 text-slate-500'}
                  `}>
                    {i === 0 && '1. '}{i === 2 && '2. '}{i === 4 && '3. '}{step}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                {[
                  { icon: <Zap size={24} />, label: 'Rapid Delivery' },
                  { icon: <BarChart size={24} />, label: 'ROI Focused' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-brand-bg/50 border border-brand-primary/10">
                    <div className="text-brand-primary">{item.icon}</div>
                    <span className="font-extrabold text-slate-800">{item.label}</span>
                  </div>
                ))}
              </div>

              <button className="mt-16 px-12 py-5 bg-brand-primary text-white font-black rounded-full text-lg transition-all duration-300 hover:bg-orange-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/40">
                Start Your Journey
              </button>
            </div>

            <div className="relative lg:pl-10">
              <div className="aspect-square bg-gradient-to-tr from-brand-bg to-brand-primary/5 rounded-[4rem] flex items-center justify-center relative overflow-hidden group">
                <div className="text-[12rem] opacity-10 animate-[spin_20s_linear_infinite] group-hover:opacity-20 transition-opacity">⚙️</div>
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-4 border-dashed border-brand-primary/20 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Shared Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default Services;

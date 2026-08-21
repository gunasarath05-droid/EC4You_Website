import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  UserCheck, 
  Bell, 
  Globe, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "August 15, 2025";

  const sections = [
    {
      id: "information-collection",
      icon: <Database className="w-6 h-6 text-brand-primary" />,
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you interact with EC4YOU—by contacting us, subscribing to newsletters, requesting consultations, or utilizing our digital marketing and tech solutions—we may collect personal details such as your full name, email address, phone number, company name, job title, and billing details."
        },
        {
          subtitle: "Usage & Technical Data",
          text: "We automatically collect technical data when you browse our website, including your IP address, browser type and version, operating system, pages visited, time spent on pages, and referral sources to optimize performance."
        },
        {
          subtitle: "Cookies & Tracking Technologies",
          text: "We use essential, analytical, and marketing cookies to enhance user experience, remember your preferences, and measure website traffic and campaign effectiveness."
        }
      ]
    },
    {
      id: "how-we-use",
      icon: <Eye className="w-6 h-6 text-teal-600" />,
      title: "2. How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery & Execution",
          text: "To provide, maintain, and tailor our digital marketing, web/app development, branding, SEO, and analytics services according to your business needs."
        },
        {
          subtitle: "Communication & Updates",
          text: "To respond to your inquiries, send project updates, newsletters, marketing communications, and critical administrative notices."
        },
        {
          subtitle: "Analytics & Optimization",
          text: "To analyze website traffic, assess marketing campaign ROI, and improve our services, user interface, and digital solutions."
        }
      ]
    },
    {
      id: "data-sharing",
      icon: <Globe className="w-6 h-6 text-purple-600" />,
      title: "3. Information Sharing & Disclosure",
      content: [
        {
          subtitle: "No Selling of Data",
          text: "EC4YOU never sells, rents, or trades your personal information to third parties for their promotional purposes."
        },
        {
          subtitle: "Trusted Service Providers",
          text: "We may share relevant data with trusted third-party service providers (e.g., cloud hosting, payment gateways, analytics providers, email services) strictly under confidentiality agreements to facilitate our services."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required to do so by applicable laws, regulations, legal processes, or governmental requests."
        }
      ]
    },
    {
      id: "data-security",
      icon: <Lock className="w-6 h-6 text-emerald-600" />,
      title: "4. Data Security & Storage",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard administrative, technical, and physical safeguards (including SSL encryption, firewall protection, and restricted data access) to protect your personal information against unauthorized access, loss, or misuse."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy, satisfy legal/accounting requirements, or resolve disputes."
        }
      ]
    },
    {
      id: "your-rights",
      icon: <UserCheck className="w-6 h-6 text-amber-500" />,
      title: "5. Your Privacy Rights",
      content: [
        {
          subtitle: "Access, Correction & Deletion",
          text: "You have the right to request access to the personal data we hold about you, request corrections to inaccurate details, or ask for the deletion of your personal records."
        },
        {
          subtitle: "Opt-Out of Marketing",
          text: "You can unsubscribe from our marketing emails at any time by clicking the 'Unsubscribe' link in the email or contacting us directly."
        },
        {
          subtitle: "Cookie Preferences",
          text: "You can adjust your browser settings to refuse or alert you about cookies. Note that disabling certain cookies may affect website functionality."
        }
      ]
    },
    {
      id: "policy-updates",
      icon: <Bell className="w-6 h-6 text-blue-500" />,
      title: "6. Updates to This Policy",
      content: [
        {
          subtitle: "Policy Changes",
          text: "We may periodically update this Privacy Policy to reflect changes in our practices or legal requirements. Any modifications will be posted here with an updated 'Last Updated' date."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <SEO
        title="Privacy Policy | EC4YOU Data Protection & Terms"
        description="Read EC4YOU's Privacy Policy to understand how we collect, protect, and handle your personal data and information with total transparency."
        keywords={["privacy policy", "data protection", "EC4YOU legal", "cookie policy"]}
        canonical="https://www.ec4you.in/privacy-policy"
      />
      {/* Header Banner */}
      <section className="relative bg-gradient-to-br from-[#0b5c56] via-[#094f4a] to-[#063330] text-white py-20 px-6 sm:px-12 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-brand-secondary text-sm font-medium mb-6 border border-white/15">
            <Shield className="w-4 h-4 text-brand-primary" />
            <span>Legal & Data Protection</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white">
            Privacy <span className="text-brand-primary">Policy</span>
          </h1>

          <p className="text-base sm:text-lg text-teal-100/90 max-w-2xl mx-auto leading-relaxed mb-6">
            Your privacy matters to us. Learn how EC4YOU collects, protects, and handles your personal information with complete transparency.
          </p>

          <div className="inline-block bg-white/10 px-4 py-1.5 rounded-lg text-xs font-semibold text-[#a8d5d0]">
            Last Updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Quick Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((sec, idx) => (
                  <a
                    key={idx}
                    href={`#${sec.id}`}
                    className="block text-sm text-slate-600 hover:text-brand-primary hover:translate-x-1 transition-all py-1.5 font-medium border-l-2 border-transparent hover:border-brand-primary pl-2"
                  >
                    {sec.title}
                  </a>
                ))}
                <a
                  href="#contact-info"
                  className="block text-sm text-slate-600 hover:text-brand-primary hover:translate-x-1 transition-all py-1.5 font-medium border-l-2 border-transparent hover:border-brand-primary pl-2"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="lg:col-span-3 space-y-10">
            
            {/* Overview Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <FileText className="w-7 h-7 text-brand-primary" />
                Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Welcome to <strong>EC4YOU</strong> ("we", "our", or "us"). We are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, utilize our digital marketing, web/app development, content creation, or consulting services.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By accessing or using our website and services, you consent to the practices described in this policy. If you do not agree with the terms, please discontinue using our services.
              </p>
            </div>

            {/* Individual Detailed Sections */}
            {sections.map((section, idx) => (
              <div 
                key={idx} 
                id={section.id} 
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 scroll-mt-28 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    {section.icon}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, itemIdx) => (
                    <div key={itemIdx}>
                      <h4 className="text-base font-semibold text-slate-800 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        {item.subtitle}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed pl-6">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact Box */}
            <div id="contact-info" className="bg-gradient-to-br from-[#0b5c56] to-[#073d39] text-white p-8 sm:p-10 rounded-3xl shadow-xl scroll-mt-28">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Questions About Our Privacy Policy?
              </h3>
              <p className="text-[#a8d5d0] text-sm leading-relaxed mb-8 max-w-xl">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our privacy team.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase font-bold text-teal-200">Email</p>
                    <a href="mailto:info@ec4you.in" className="text-sm font-semibold text-white hover:text-brand-primary transition-colors">
                      info@ec4you.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase font-bold text-teal-200">Phone</p>
                    <p className="text-sm font-semibold text-white">+91 7010942474</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase font-bold text-teal-200">Location</p>
                    <p className="text-sm font-semibold text-white">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-brand-primary/30 text-sm"
              >
                Contact Support <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

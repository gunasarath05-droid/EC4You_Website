import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { 
  FileCheck2, 
  Layers, 
  UserCheck, 
  Award, 
  CreditCard, 
  AlertTriangle, 
  Scale, 
  XCircle, 
  RefreshCw, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function TermsOfService() {
  const lastUpdated = "August 15, 2025";

  const sections = [
    {
      id: "acceptance",
      icon: <FileCheck2 className="w-6 h-6 text-brand-primary" />,
      title: "1. Acceptance of Terms",
      content: [
        {
          subtitle: "Binding Agreement",
          text: "By accessing our website (ec4you.in) or hiring EC4YOU for digital marketing, web/app development, branding, campaign management, or creative services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service."
        },
        {
          subtitle: "Eligibility",
          text: "You represent and warrant that you are at least 18 years of age or possess legal authority to enter into binding commercial contracts on behalf of your organization."
        }
      ]
    },
    {
      id: "services-scope",
      icon: <Layers className="w-6 h-6 text-teal-600" />,
      title: "2. Services & Project Scope",
      content: [
        {
          subtitle: "Service Offerings",
          text: "EC4YOU provides professional services including Digital Marketing, Search Engine Optimization (SEO), Social Media Marketing, Email Campaigns, Graphic Design, Content Creation, and Custom Web & App Development."
        },
        {
          subtitle: "Scope & Deliverables",
          text: "Specific deliverables, timelines, and milestones will be outlined in individual project proposals, statements of work (SOW), or service agreements approved by both parties."
        }
      ]
    },
    {
      id: "user-obligations",
      icon: <UserCheck className="w-6 h-6 text-purple-600" />,
      title: "3. Client Obligations & Content",
      content: [
        {
          subtitle: "Accurate Information",
          text: "Clients agree to provide accurate, timely information, credentials, assets, and feedback necessary for EC4YOU to perform agreed services."
        },
        {
          subtitle: "Content Ownership & Legality",
          text: "You guarantee that all text, logos, trademarks, images, and materials supplied to EC4YOU do not infringe upon any third-party intellectual property rights or violate applicable laws."
        }
      ]
    },
    {
      id: "intellectual-property",
      icon: <Award className="w-6 h-6 text-indigo-600" />,
      title: "4. Intellectual Property Rights",
      content: [
        {
          subtitle: "Final Deliverables",
          text: "Upon full payment of all agreed fees, the client owns the rights to customized deliverables created specifically for their project (e.g., custom website designs, logos, marketing copy)."
        },
        {
          subtitle: "EC4YOU Proprietary Assets",
          text: "EC4YOU retains ownership of all proprietary code libraries, preliminary concepts, reusable toolsets, and general marketing frameworks developed prior to or outside the scope of custom client work."
        },
        {
          subtitle: "Portfolio Rights",
          text: "Unless explicitly requested in writing under a non-disclosure agreement (NDA), EC4YOU reserves the right to showcase completed projects in our portfolio, case studies, and marketing materials."
        }
      ]
    },
    {
      id: "payments-billing",
      icon: <CreditCard className="w-6 h-6 text-emerald-600" />,
      title: "5. Fees, Billing & Payments",
      content: [
        {
          subtitle: "Payment Terms",
          text: "Invoices must be settled in accordance with the payment schedule specified in the proposal/agreement (e.g., upfront deposit, milestone-based payments, or monthly retainer)."
        },
        {
          subtitle: "Late Payments",
          text: "Late payments may result in the temporary suspension of ongoing services, campaigns, or delivery of project files until outstanding balances are cleared."
        }
      ]
    },
    {
      id: "liability-warranties",
      icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
      title: "6. Limitation of Liability & Disclaimers",
      content: [
        {
          subtitle: "Marketing Results Disclaimer",
          text: "While EC4YOU employs proven strategies and industry best practices, we cannot guarantee specific sales figures, viral engagement, or definitive top Google rankings due to algorithmic changes and market conditions."
        },
        {
          subtitle: "Limitation of Damages",
          text: "In no event shall EC4YOU be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services."
        }
      ]
    },
    {
      id: "termination",
      icon: <XCircle className="w-6 h-6 text-rose-500" />,
      title: "7. Cancellation & Termination",
      content: [
        {
          subtitle: "Termination Notice",
          text: "Either party may terminate ongoing retainer contracts by providing written notice as specified in the agreed contract (typically 15 to 30 days)."
        },
        {
          subtitle: "Settlement upon Termination",
          text: "Upon termination, the client shall pay for all work completed up to the date of termination, and EC4YOU will deliver applicable completed project files."
        }
      ]
    },
    {
      id: "governing-law",
      icon: <Scale className="w-6 h-6 text-blue-500" />,
      title: "8. Governing Law & Jurisdiction",
      content: [
        {
          subtitle: "Jurisdiction",
          text: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India."
        }
      ]
    },
    {
      id: "modifications",
      icon: <RefreshCw className="w-6 h-6 text-cyan-600" />,
      title: "9. Modifications to Terms",
      content: [
        {
          subtitle: "Revisions",
          text: "EC4YOU reserves the right to modify these Terms at any time. Continued use of our website or services following any updates constitutes acceptance of the new Terms."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <SEO
        title="Terms of Service | EC4YOU Client Agreement"
        description="Review the Terms of Service governing your use of EC4YOU's website, marketing solutions, web development, and digital consulting services."
        keywords={["terms of service", "client agreement", "EC4YOU legal terms", "service policy"]}
        canonical="https://www.ec4you.in/terms-of-service"
      />
      {/* Header Banner */}
      <section className="relative bg-gradient-to-br from-[#0b5c56] via-[#094f4a] to-[#063330] text-white py-20 px-6 sm:px-12 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-brand-secondary text-sm font-medium mb-6 border border-white/15">
            <Scale className="w-4 h-4 text-brand-primary" />
            <span>Agreement & Guidelines</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white">
            Terms of <span className="text-brand-primary">Service</span>
          </h1>

          <p className="text-base sm:text-lg text-teal-100/90 max-w-2xl mx-auto leading-relaxed mb-6">
            Please read these terms carefully before utilizing our services or browsing our website.
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
                <FileCheck2 className="w-7 h-7 text-brand-primary" />
                Agreement Overview
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                These Terms of Service constitute a legally binding agreement between you (whether personally or on behalf of an entity) and <strong>EC4YOU</strong> ("we", "us", or "our"), concerning your access to and use of our website as well as our digital marketing, web/app design & development, branding, and advertising services.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By engaging our services or accessing our platform, you agree that you have read, understood, and agreed to be bound by all of these Terms of Service.
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
                Have Any Inquiries Regarding Our Terms?
              </h3>
              <p className="text-[#a8d5d0] text-sm leading-relaxed mb-8 max-w-xl">
                We believe in full transparency and honest communication. If you need clarification on any terms or service agreements, get in touch with us.
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
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

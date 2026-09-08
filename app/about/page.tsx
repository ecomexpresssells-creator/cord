"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Globe, Mail, Phone, MapPin, CheckCircle,
  ArrowLeft, ArrowRight, Linkedin, Menu, X,
  ShieldCheck, Scale, ClipboardCheck, Package
} from "lucide-react"

const partners = [
  {
    name: "PRATHAM PATEL",
    role: "Co-Founder & Director",
    company: "ZHENSEA INTERNATIONAL LLP",
    location: "India Operations Desk",
    bio: "Bringing deep operational insight and rigorous oversight to the company's core operations, PRATHAM PATEL leads global sourcing, multi-tiered supplier management, and end-to-end supply chain execution. Strategically anchored in India, he manages vendor networks, directs quality assurance protocols, and oversees multi-channel distribution pipelines.",
    highlights: [
      {
        title: "Strategic Sourcing & Procurement",
        desc: "Negotiating direct-from-source manufacturing partnerships to optimize margin structures and guarantee product authenticity."
      },
      {
        title: "Quality Control Frameworks",
        desc: "Implementing multi-point quality control measures to ensure 100% compliance with international standards prior to export."
      },
      {
        title: "Logistics & Inventory Management",
        desc: "Streamlining warehouse management, freight forwarding, and cross-border fulfillment for optimal turnaround times."
      }
    ],
    image: "/images/partners/partner1.jpg",
    email: "zhensea.services@gmail.com",
    linkedin: "https://www.linkedin.com/in/pratham-patel"
  },
  {
    name: "FORAM PATEL",
    role: "Co-Founder & Director",
    company: "ZHENSEA INTERNATIONAL LLP",
    location: "London, UK Desk",
    bio: "Driving global market expansion and commercial strategy, FORAM PATEL leads international client acquisition, regulatory compliance, and cross-border trade operations. Operating out of London, UK, he aligns company capabilities with Western market expectations, establishing strategic alliances across international jurisdictions.",
    highlights: [
      {
        title: "International Market Expansion",
        desc: "Identifying emerging demand patterns and establishing retail and distribution footprints across key global markets."
      },
      {
        title: "Regulatory & Export Compliance",
        desc: "Ensuring full alignment with cross-border trade regulations, international tariffs, and consumer protection standards."
      },
      {
        title: "Strategic Client Relations",
        desc: "Structuring key corporate accounts, high-value client engagements, and long-term supply agreements."
      }
    ],
    image: "/images/partners/partner2.jpg",
    email: "zhensea.services@gmail.com",
    linkedin: "https://www.linkedin.com/in/foram-patel"
  }
]

const coreCapabilities = [
  {
    title: "End-to-End Asset Traceability",
    desc: "From farm harvests and artisanal tanneries to precision electronics assembly lines, every batch is recorded, inspected, and verified before container loading."
  },
  {
    title: "Direct Port Logistics Corridors",
    desc: "By maintaining direct relationships with key maritime shipping lines and major ports in the UK, Europe, and the Americas, we eliminate costly freight delays and unverified middlemen."
  },
  {
    title: "Customized OEM & Bulk Packaging",
    desc: "We provide tailored branding, barcoding, and export-grade pallet packaging designed to meet the strict entry requirements of international retail and industrial clients."
  },
  {
    title: "Sovereign & Statutory Assurance",
    desc: "Fully compliant with DGFT India, FSSAI certifications, CE/WEEE standards, and customs ICEGATE interfaces for smooth clearing at all international trade borders."
  }
]

export default function AboutUsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-black">
      
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07090c]/95 backdrop-blur-xl border-b border-slate-700/80">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4 group cursor-pointer">
            <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="Zhen Sea International Logo"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <div>
              <h1 className="text-base font-black tracking-wider uppercase text-white group-hover:text-sky-400 transition-colors">
                Zhen Sea International
              </h1>
              <p className="text-[10px] text-sky-400 tracking-[0.3em] uppercase font-mono font-black">
                Global Supply Chain LLP
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-[12px] uppercase tracking-wider font-bold">
            <Link href="/" className="flex items-center gap-1.5 text-sky-400 hover:text-white transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Main Site
            </Link>
            <Link href="/about" className="text-white border-b-2 border-sky-400 pb-0.5">About Us</Link>
            <Link href="/#marketplace" className="text-slate-300 hover:text-white transition-colors">Asset Portfolio</Link>
            <Link href="/#corridors" className="text-slate-300 hover:text-white transition-colors">Trade Corridors</Link>
            <Link href="/#contact" className="bg-white text-black px-5 py-2.5 font-black hover:bg-slate-200 transition-colors">Inquire Freight</Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white border border-slate-800 rounded bg-slate-900"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-sky-400" /> : <Menu className="w-6 h-6 text-sky-400" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#07090c] border-b border-slate-800 px-6 py-4 flex flex-col gap-4 font-mono text-xs uppercase font-bold tracking-wider">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sky-400 py-1"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Main Site
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white bg-slate-900 px-3 py-2 border-l-2 border-sky-400"
            >
              About Us
            </Link>
            <Link 
              href="/#marketplace" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white py-1"
            >
              Asset Portfolio
            </Link>
            <Link 
              href="/#corridors" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white py-1"
            >
              Trade Corridors
            </Link>
            <Link 
              href="/#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="bg-white text-black px-4 py-2.5 text-center font-black mt-2"
            >
              Inquire Freight
            </Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-[#07090c] border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          <div className="flex justify-center mb-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/90 px-4 py-2 text-xs font-mono font-bold text-sky-400 hover:text-white hover:border-sky-400 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Main Platform
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 border border-slate-600 bg-slate-900/80 px-4 py-1.5 mb-6">
            <Globe className="w-4 h-4 text-sky-400" />
            <span className="text-[11px] uppercase tracking-widest text-white font-mono font-black">Corporate Infrastructure & Executive Leadership</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white leading-tight mb-6">
            Architecting Transnational <br />
            <span className="italic text-sky-400">Trade Reliability</span>
          </h1>
          
          <p className="text-slate-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-normal">
            Zhen Sea International LLP stands at the forefront of structured multi-category exports. Operating direct clearing nodes between India, the United Kingdom, Europe, and North America, we build resilient end-to-end supply bridges for sovereign and enterprise buyers worldwide.
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 border-b border-slate-800 bg-[#0b0e14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-mono font-black tracking-[0.3em] uppercase text-sky-400 block">
                ABOUT ZHENSEA INTERNATIONAL LLP
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-white leading-tight">
                Empowering international commerce with <span className="italic text-sky-400">uncompromising precision.</span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">
                Zhen Sea International LLP was established as an integrated multi-commodity export enterprise designed to bridge the structural gaps between regional manufacturing hubs and demanding global markets. We oversee the entire lifecycle of export commodities—ranging from high-precision electronics, hardware, and handcrafted leather goods to authentic Indian spices, garments, marble, and industrial packaging solutions.
              </p>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">
                By maintaining dual leadership desks in India (Procurement & Sourcing) and London, UK (International Operations & Client Strategy), Zhen Sea International LLP ensures total operational clarity, strict regulatory compliance, and seamless customs transit across all key trade corridors.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="grid gap-4">
                {coreCapabilities.map((cap, idx) => (
                  <div key={idx} className="bg-[#0f131c] border border-slate-800 p-5 hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                      <h3 className="font-mono text-xs md:text-sm font-black uppercase text-white tracking-wider">{cap.title}</h3>
                    </div>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed pl-7 font-normal">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Side-by-Side Executive Leadership Section */}
      <section className="py-24 bg-[#05070a] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-mono font-black tracking-[0.3em] uppercase text-sky-400 block mb-3">
              EXECUTIVE LEADERSHIP
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">Board & Co-Founders</h2>
            <p className="text-slate-400 text-sm mt-4 font-normal">
              Directing global procurement and international commercial expansion from India and the United Kingdom.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-[#0b0e14] border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row overflow-hidden shadow-2xl">
                
                {/* LEFT SIDE: Partner Photo */}
                <div className="w-full md:w-5/12 relative min-h-80 md:min-h-full bg-slate-950 border-b md:border-b-0 md:border-r border-slate-800 shrink-0">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500 opacity-90"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0b0e14] via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-[#0b0e14]/40" />
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-slate-800 px-3 py-1 font-mono text-[10px] text-sky-400 font-bold uppercase tracking-wider">
                    {partner.location}
                  </div>
                </div>

                {/* RIGHT SIDE: Details, Bio & LinkedIn */}
                <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">{partner.name}</h3>
                        <p className="text-sky-400 font-mono text-xs font-bold uppercase tracking-wider mt-1">
                          {partner.role} — <span className="text-slate-300">{partner.company}</span>
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed my-4 font-normal">
                      {partner.bio}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 border-t border-slate-800/80 pt-4 my-4">
                      {partner.highlights.map((h, i) => (
                        <div key={i} className="space-y-0.5">
                          <h4 className="font-mono text-[11px] font-bold uppercase text-white tracking-wider flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-sky-400 shrink-0" />
                            {h.title}
                          </h4>
                          <p className="text-slate-400 text-xs leading-relaxed pl-3 font-normal">{h.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Contact & LinkedIn Row */}
                  <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between gap-4">
                    <a
                      href={`mailto:${partner.email}`}
                      className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300 hover:text-sky-400 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="truncate">{partner.email}</span>
                    </a>

                    {/* LinkedIn Button */}
                    <a
                      href={partner.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-sky-400 hover:text-sky-400 px-3 py-1.5 text-xs font-mono font-bold text-slate-300 transition-all rounded-sm shrink-0"
                      aria-label={`${partner.name} LinkedIn Profile`}
                    >
                      <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#07090c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-6">
            Ready to partner with our executive team?
          </h2>
          <p className="text-slate-400 text-sm mb-8 font-normal">
            Our trade directors are available to prepare customized freight allocations, product specification sheets, and CIF schedules.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-mono font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all"
            >
              Dispatch Order Specification <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-900 text-slate-300 px-8 py-4 font-mono font-bold text-xs uppercase tracking-widest hover:text-white hover:border-slate-500 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back To Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030508] pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">

            <div className="col-span-2 md:col-span-2 lg:col-span-2 pr-0 lg:pr-6">
              <Link href="/" className="flex items-center gap-3 mb-5 group cursor-pointer">
                <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/logo.jpg"
                    alt="Zhen Sea International Logo"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <div>
                  <span className="font-serif font-black text-white text-lg tracking-wider uppercase group-hover:text-sky-400 transition-colors">Zhen Sea International</span>
                  <span className="text-[11px] text-sky-400 font-mono tracking-widest ml-2 font-bold">LLP</span>
                </div>
              </Link>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                A globally accredited multi-category export enterprise ensuring container mapping efficiency, rigorous raw material auditing parameters, and direct-to-port logistics corridors.
              </p>
            </div>

            <div>
              <h5 className="font-mono text-[11px] font-black uppercase tracking-widest text-slate-300 mb-4 flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 text-sky-400" /> Navigation
              </h5>
              <ul className="space-y-2 text-xs font-mono font-bold text-slate-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home Platform</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/#marketplace" className="hover:text-white transition-colors">Asset Directory</Link></li>
                <li><Link href="/#corridors" className="hover:text-white transition-colors">Trade Corridors</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-mono text-[11px] font-black uppercase tracking-widest text-slate-300 mb-4 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-sky-400" /> Corporate Desk
              </h5>
              <ul className="space-y-2 text-xs font-mono font-bold text-slate-400">
                <li><Link href="/#contact" className="hover:text-white transition-colors">Procurement Inbound</Link></li>
                <li><a href="mailto:zhensea.services@gmail.com" className="hover:text-white transition-colors">Direct Trunk Email</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-mono text-[11px] font-black uppercase tracking-widest text-slate-300 mb-4 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" /> Global Hubs
              </h5>
              <div className="space-y-4 text-xs text-slate-400 font-mono">
                
                {/* Primary India Office Link */}
                <div>
                  <p className="font-black text-white uppercase tracking-wider text-[10px]">Primary India Office</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Petlad,+Gujarat,+India,+388450"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-300 hover:text-sky-400 transition-colors block underline decoration-slate-700 underline-offset-2 hover:decoration-sky-400"
                  >
                    Petlad, Gujarat, India, 388450
                  </a>
                  <p className="text-[10px] text-sky-400 font-bold mt-0.5">Procurement Node</p>
                </div>

                {/* United Kingdom Branch Link */}
                <div className="pt-2 border-t border-slate-800">
                  <p className="font-black text-white uppercase tracking-wider text-[10px]">United Kingdom Branch</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Littlehampton,+West+Sussex,+UK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-300 hover:text-sky-400 transition-colors block underline decoration-slate-700 underline-offset-2 hover:decoration-sky-400"
                  >
                    Littlehampton, West Sussex, UK
                  </a>
                  <p className="text-[10px] text-sky-400 font-bold mt-0.5">Clearing Logistics Hub</p>
                </div>

              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] font-mono text-slate-400 font-bold">
            <p>© 2026 Zhen Sea International LLP. Infrastructure Hub Registry.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-slate-500 font-bold">
              <Link href="/terms" className="hover:text-slate-300 transition-colors inline-flex items-center gap-1">
                <Scale className="w-3 h-3" /> Terms
              </Link>
              <Link href="/privacy" className="hover:text-slate-300 transition-colors inline-flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Privacy Policy
              </Link>
              <Link href="/guidelines" className="hover:text-slate-300 transition-colors inline-flex items-center gap-1">
                <ClipboardCheck className="w-3.5 h-3.5" /> Supply Guidelines
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons Matrix */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="tel:+447741385820" className="w-12 h-12 bg-sky-600 border border-sky-400 text-white flex items-center justify-center shadow-2xl hover:bg-sky-500 transition-all group relative">
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-slate-900 text-[11px] font-mono uppercase tracking-widest px-3 py-1 text-white border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">Call UK Desk</span>
        </a>
        <a href="tel:+916354538750" className="w-12 h-12 bg-slate-900 border border-slate-600 text-sky-400 flex items-center justify-center shadow-2xl hover:bg-slate-800 transition-all group relative">
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-slate-900 text-[11px] font-mono uppercase tracking-widest px-3 py-1 text-white border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">Call India Desk</span>
        </a>
        <a href="mailto:zhensea.services@gmail.com" className="w-12 h-12 bg-slate-900 border border-slate-600 text-sky-400 flex items-center justify-center shadow-2xl hover:bg-slate-800 transition-all group relative">
          <Mail className="w-5 h-5" />
          <span className="absolute right-14 bg-slate-900 text-[11px] font-mono uppercase tracking-widest px-3 py-1 text-white border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">Email Inbound</span>
        </a>

        <a href="https://wa.me/916354538750" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25D366] text-black flex items-center justify-center shadow-2xl hover:bg-[#20ba59] transition-all group relative rounded-full">
          <Image src="/whatsapp.png" alt="WhatsApp Contact" width={88} height={88} className="z-10" />
          <span className="absolute right-14 bg-slate-900 text-[11px] font-mono uppercase tracking-widest px-3 py-1 text-white border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">
            WhatsApp INDIA Desk
          </span>
        </a>
      </div>

    </div>
  )
}
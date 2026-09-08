"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft, Globe, ArrowRight, BookOpen, Shield, Mail, Phone,
  FileText, Download, Scale, ShieldCheck, ClipboardCheck, Linkedin,
  Instagram, Facebook, Youtube
} from "lucide-react"

export default function PracticalLearningPage() {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-black flex flex-col justify-between">

      {/* Sticky Header Navigation */}
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
              <h1 className="text-base font-black tracking-wider uppercase text-white group-hover:text-sky-400 transition-colors">Zhen Sea International</h1>
              <p className="text-[10px] text-sky-400 tracking-[0.3em] uppercase font-mono font-black">Global Supply Chain LLP</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-mono text-[12px] uppercase tracking-wider font-bold">
            <Link href="/#about" className="text-slate-300 hover:text-white transition-colors">About Us</Link>
            <Link href="/#marketplace" className="text-slate-300 hover:text-white transition-colors">Asset Portfolio</Link>
            <Link href="/#corridors" className="text-slate-300 hover:text-white transition-colors">Trade Corridors</Link>
            <Link href="/#contact" className="bg-white text-black px-5 py-2.5 font-black hover:bg-slate-200 transition-colors">Inquire Freight</Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-28 pb-20 flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 hover:text-sky-300 mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>

          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 border border-slate-600 bg-slate-900/80 px-4 py-1.5 mb-6">
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span className="text-[11px] uppercase tracking-widest text-white font-mono font-black">Knowledge & Protocol Hub</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-light text-white mb-6 leading-tight">
              Practical Learning About <span className="italic text-sky-400">EXIM Protocols</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Explore hands-on export-import mechanics, international trade documentation workflows, custom clearance gateways, and freight optimization protocols designed for global supply chain operations.
            </p>
          </div>

          {/* Learning Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Customs Clearance & ICEGATE",
                desc: "Understanding statutory compliance, export declarations, and automated customs interfaces in cross-border trade.",
                tag: "Module 01"
              },
              {
                title: "Incoterms & Freight Contracts",
                desc: "Deep dive into EXW, FOB, CIF, CFR mechanisms and risk allocation between buyer and seller.",
                tag: "Module 02"
              },
              {
                title: "Container Loading & Logistics",
                desc: "Best practices for containerization, palettization, and volumetric optimization for maritime shipments.",
                tag: "Module 03"
              }
            ].map((module, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                <div>
                  <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest font-bold block mb-3">{module.tag}</span>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">{module.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{module.desc}</p>
                </div>
                <div className="border-t border-slate-800 pt-4 flex items-center justify-between font-mono text-xs text-slate-400 font-bold">
                  <span>Comprehensive Guide</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Floating Action Desk Matrix */}
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

        <a href="https://wa.me/916354538750" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#25D366] text-black flex items-center justify-center shadow-2xl hover:bg-[#20ba59] transition-all group relative rounded-full">
          <Image src="/whatsapp.png" alt="WhatsApp" width={88} height={88} className="z-10" />
          <span className="absolute right-14 bg-slate-900 text-[11px] font-mono uppercase tracking-widest px-3 py-1 text-white border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">
            WhatsApp INDIA Desk
          </span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-[#030508] pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] font-mono text-slate-400 font-bold">
            <p>© 2026 Zhen Sea International LLP. Infrastructure Hub Registry.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-slate-500 font-bold">
              <a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center gap-1">
                <Scale className="w-3 h-3" /> Terms
              </a>
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Privacy Policy
              </a>
              <a href="/guidelines" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center gap-1">
                <ClipboardCheck className="w-3.5 h-3.5" /> Supply Guidelines
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
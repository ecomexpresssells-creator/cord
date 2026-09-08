"use client"

import React from "react"
import Image from "next/image"
import { Scale, ArrowLeft, Download, ShieldCheck, Mail, Globe } from "lucide-react"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-black pb-24">
      
      {/* Header / Nav Line */}
      <header className="border-b border-slate-800/80 bg-[#07090c]/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.jpg"
                alt="Zhen Sea International Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div>
              <h1 className="text-xs font-black tracking-wider uppercase text-white group-hover:text-sky-400 transition-colors">
                Zhen Sea International
              </h1>
              <p className="text-[8px] text-sky-400 tracking-[0.25em] uppercase font-mono font-black">
                Global Supply Chain LLP
              </p>
            </div>
          </a>
          
          <a href="/" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </a>
        </div>
      </header>

      {/* Main Content Arena */}
      <main className="max-w-4xl mx-auto px-6 pt-16 md:pt-24">
        
        {/* Title Area */}
        <div className="border-b border-slate-850 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/60 px-3 py-1 mb-6">
            <Scale className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-[10px] uppercase tracking-widest text-white font-mono font-black">
              Legal Compliance Frame
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-light text-white tracking-tight">
                Terms & <span className="italic text-sky-400">Conditions</span>
              </h1>
              <p className="text-xs text-slate-400 font-mono mt-3 uppercase tracking-wider">
                Last Revision: July 2026 • Code: ZS-T&C-2026-V1
              </p>
            </div>

            {/* HIGH-CONVERTING PDF DOWNLOAD BUTTON */}
            <a
              href="/terms.pdf"
              download="Zhen_Sea_Terms_And_Conditions.pdf"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-black hover:bg-slate-200 transition-all px-6 py-3.5 text-xs font-mono font-black uppercase tracking-widest self-start md:self-auto shadow-lg"
            >
              <Download className="w-4 h-4 text-black" />
              Download Official PDF
            </a>
          </div>
        </div>

        {/* Content Matrix Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Side: Navigation Links / Fast Anchors */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 self-start">
            <div className="bg-[#0f131c] border border-slate-800 p-6">
              <h3 className="font-mono text-[11px] font-black uppercase tracking-widest text-slate-300 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400" /> Integrity Gates
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                These legal parameters represent our strict commitment to container optimization, verified product sourcing, and regulatory port clearance laws.
              </p>
              
              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3 text-xs font-mono text-slate-400 font-bold">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                  <span>DGFT India Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                  <span>Customs ICEGATE Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                  <span>Sovereign Trade Compliant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Legal Articles (Text matches your site style) */}
          <div className="lg:col-span-8 space-y-10 text-slate-300 text-sm md:text-base leading-relaxed font-normal">
            
            <section className="space-y-3">
              <h2 className="text-white font-mono text-xs uppercase tracking-widest font-black flex items-center gap-2">
                <span className="text-sky-400">01.</span> Agreement to Terms & Parties
              </h2>
              <p>
                By accessing, browsing, or initiating supply agreements with Zhen Sea International LLP, you officially agree to be bound by these corporate terms and conditions. These clauses manage all cargo bookings, legal proforma valuations, raw material clearances, and logistics corridors handled by our multi-region hubs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-white font-mono text-xs uppercase tracking-widest font-black flex items-center gap-2">
                <span className="text-sky-400">02.</span> Consignment Sourcing & MOQ
              </h2>
              <p>
                Minimum Order Quantity (MOQ) limits are determined on a case-by-case basis inside negotiated proforma invoices. Product references displayed on our portals (including leather, agro-spices, electronics, garments, stone, and packaging) serve for baseline visualization. Custom packaging, sizing, and branding formats remain subject to written verification before dispatch.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-white font-mono text-xs uppercase tracking-widest font-black flex items-center gap-2">
                <span className="text-sky-400">03.</span> Shipping, Lead Times & Freight Liabilities
              </h2>
              <p>
                Freight transit milestones (ranging from 15 days to 60 days based on product class) represent normal seasonal estimates. Zhen Sea International LLP operates under standardized international trade codes (EXW, FOB, CIF, CFR). We do not assume direct liability for delays resulting from sovereign customs audits, terminal gridlocks, weather hazards, or global container shortages.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-white font-mono text-xs uppercase tracking-widest font-black flex items-center gap-2">
                <span className="text-sky-400">04.</span> Regulatory Audits & Quality Clearance
              </h2>
              <p>
                Every outbound shipment passes through rigorous quality control gates matching international standards (such as CE, WEEE, ISO, and FSSAI where applicable). Clients have the right to nominate authorized third-party inspectors at their own cost prior to cargo seal-locking at Indian shipping ports.
              </p>
            </section>

            {/* Support Blockquote */}
            <div className="bg-[#0f131c] border-l-2 border-sky-400 p-6 my-8">
              <p className="text-xs text-slate-300 font-mono uppercase tracking-wider font-black mb-2">Legal Helpdesk & Dispute Node</p>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Any legal concerns, adjustments to ongoing proforma matrices, or dispute resolutions are strictly governed by Indian arbitration laws inside Gujarat jurisdiction, or through direct operational coordination offices in the United Kingdom.
              </p>
            </div>

            {/* Footer Sign-off Contact Links */}
            <div className="border-t border-slate-800 pt-8 mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400 font-bold">
              <a href="mailto:zhensea.services@gmail.com" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                <Mail className="w-4 h-4 text-sky-400" /> zhensea.services@gmail.com
              </a>
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-sky-400" /> Zhen Sea International LLP
              </span>
            </div>

          </div>

        </div>

      </main>

    </div>
  )
}
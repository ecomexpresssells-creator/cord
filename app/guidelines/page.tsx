"use client"

import React from "react"
import Image from "next/image"
import { ClipboardCheck, ArrowLeft, Download, ShieldAlert, Mail, Globe, Coins, Ban } from "lucide-react"

export default function SupplyGuidelines() {
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
          <div className="inline-flex items-center gap-2 border border-red-900/50 bg-red-950/20 px-3 py-1 mb-6">
            <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
            <span className="text-[10px] uppercase tracking-widest text-red-400 font-mono font-black">
              B2B Compliance: Absolute Risk Mitigation
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-light text-white tracking-tight">
                Supply <span className="italic text-sky-400">Guidelines</span>
              </h1>
              <p className="text-xs text-slate-400 font-mono mt-3 uppercase tracking-wider">
                Effective Date: July 16, 2026 • Ref: ZSI/SG/2026-V1
              </p>
            </div>

            {/* PDF DOWNLOAD BUTTON */}
            <a
              href="/Supply_Guidelines.pdf"
              download="Zhen_Sea_Supply_Guidelines.pdf"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-black hover:bg-slate-200 transition-all px-6 py-3.5 text-xs font-mono font-black uppercase tracking-widest self-start md:self-auto shadow-lg"
            >
              <Download className="w-4 h-4 text-black" />
              Download Official PDF
            </a>
          </div>
        </div>

        {/* Content Matrix Grid */}
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Left Side: Critical Protection Box */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 self-start">
            <div className="bg-[#120d0d] border border-red-900/40 p-6">
              <h3 className="font-mono text-[11px] font-black uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2">
                <Ban className="w-4 h-4 text-red-400" /> Zero Liability Notice
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                All trade relationships, container routing protocols, and sales manifests are governed strictly under these rigid, zero-risk seller frameworks.
              </p>
            </div>
          </div>

          {/* Right Side: Strict Clauses */}
          <div className="lg:col-span-8 space-y-10 text-slate-300 text-sm md:text-base leading-relaxed font-normal">

            <section className="space-y-3">
              <h2 className="text-white font-mono text-xs uppercase tracking-widest font-black flex items-center gap-2">
                <span className="text-sky-400">01.</span> Stalwart Order Confirmation Policy
              </h2>
              <p className="text-slate-400 text-sm">
                Once an order is formally confirmed via proforma invoice execution or initial deposit clearings, it shall be deemed absolute, final, and irrevocable. <strong className="text-white">Under no circumstances and in no situation whatsoever</strong> shall the buyer have the right to cancel, reduce, or modify the established transaction parameters.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-white font-mono text-xs uppercase tracking-widest font-black flex items-center gap-2">
                <span className="text-sky-400">02.</span> Absolute No-Return Protocol & Insurance Custody
              </h2>
              <p className="text-slate-400 text-sm">
                Zhen Sea International LLP operates under a strict, non-negotiable zero-return protocol. Once cargo leaves the load port, no return matrix or stock reversal will be accepted. In the event of transit anomalies, loss, or contamination, the buyer must immediately <strong className="text-white">contact and settle claims directly with the marine insurance provider</strong>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-white font-mono text-xs uppercase tracking-widest font-black flex items-center gap-2">
                <span className="text-sky-400">03.</span> Paid Product Evaluation Samples
              </h2>
              <p className="text-slate-400 text-sm">
                No industrial trade evaluation samples (including Spices, Garments, or Leather portfolios) shall be disbursed free of charge. Any requested samples require <strong className="text-white">independent commercial payment</strong>, which includes the standalone product valuation cost alongside all corresponding international express courier fees.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-white font-mono text-xs uppercase tracking-widest font-black flex items-center gap-2">
                <span className="text-sky-400">04.</span> Buyer Default & Forfeiture Terms
              </h2>
              <p className="text-slate-400 text-sm">
                Failure by the buyer to settle balance payments or clear destination port arrivals results in instantaneous token forfeiture. The seller retains complete rights to re-route or liquidate shipments to recover operational overheads, completely eliminating risk toward the buyer's actions.
              </p>
            </section>

            {/* Footer Contact Sign-off */}
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
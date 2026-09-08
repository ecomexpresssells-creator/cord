"use client"

import React from "react"
import Image from "next/image"
import { EyeOff, ArrowLeft, Download, ShieldCheck, Mail, Globe, MapPin } from "lucide-react"

export default function PrivacyPolicy() {
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
            <EyeOff className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-[10px] uppercase tracking-widest text-white font-mono font-black">
              Security Classification: High Assurance
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-light text-white tracking-tight">
                Privacy & <span className="italic text-sky-400">Security</span>
              </h1>
              <p className="text-xs text-slate-400 font-mono mt-3 uppercase tracking-wider">
                Effective Date: July 16, 2026 • Ref: ZSI/PP/2026-V1
              </p>
            </div>

            {/* PDF DOWNLOAD BUTTON */}
            <a
              href="/privacy.pdf"
              download="Zhen_Sea_Privacy_Policy.pdf"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-black hover:bg-slate-200 transition-all px-6 py-3.5 text-xs font-mono font-black uppercase tracking-widest self-start md:self-auto shadow-lg"
            >
              <Download className="w-4 h-4 text-black" />
              Download Official PDF
            </a>
          </div>
        </div>

        {/* Content Matrix Grid */}
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Left Side: Info Box */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 self-start">
            <div className="bg-[#0f131c] border border-slate-800 p-6">
              <h3 className="font-mono text-[11px] font-black uppercase tracking-widest text-slate-300 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400" /> Global Standard
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Zhen Sea International LLP values your corporate and personal privacy. We implement programmatic security measures to shield corporate transaction details and user metrics.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-850 space-y-3 text-xs font-mono text-slate-400 font-bold">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                  <span>DPDP Act (India) Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                  <span>SSL Encrypted Node</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Privacy Articles */}
          <div className="lg:col-span-8 space-y-10 text-slate-300 text-sm md:text-base leading-relaxed font-normal">

            <section className="space-y-3">
              <h2 className="text-white font-mono text-xs uppercase tracking-widest font-black flex items-center gap-2">
                <span className="text-sky-400">01.</span> Information We Collect
              </h2>
              <p className="text-slate-300">
                To process cross-border consignments and answer B2B inquiries effectively, we collect details in two primary pathways:
              </p>

              <div className="space-y-4 mt-3 pl-4 border-l border-slate-800">
                <div>
                  <h4 className="text-white font-mono text-xs font-bold mb-1">A. Direct Corporate Submission</h4>
                  <p className="text-xs text-slate-400">
                    When you complete an inbound query, we collect essential identifiers including: Legal representative full name, registered corporate entity/trade name, official corporate email, contact numbers (including WhatsApp routing), target asset focus, and target shipment metrics.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-mono text-xs font-bold mb-1">B. Technical and Traffic Metrics</h4>
                  <p className="text-xs text-slate-400">
                    To enhance our global supply chain app experience, we automatically receive traffic markers including IP address, geographical location, browser metadata, operating system, and referral paths.
                  </p>
                </div>
              </div>
            </section>

            {/* AUTHORIZED USE TABLE */}
            <section className="space-y-3">
              <h2 className="text-white font-mono text-xs uppercase tracking-widest font-black flex items-center gap-2">
                <span className="text-sky-400">02.</span> How We Utilize Collected Information
              </h2>
              <div className="overflow-x-auto border border-slate-800 bg-[#090d14]">
                <table className="min-w-full text-xs font-mono text-slate-300 divide-y divide-slate-800">
                  <thead className="bg-[#0f131c]">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-sky-400 uppercase tracking-wider border-r border-slate-800">Data Category</th>
                      <th className="px-4 py-3 text-left font-bold text-sky-400 uppercase tracking-wider">Authorized Enterprise Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr>
                      <td className="px-4 py-3 font-bold text-white border-r border-slate-800">Corporate Contacts</td>
                      <td className="px-4 py-3 text-slate-400">Compiling detailed EXW, FOB, CIF, or CFR proforma valuations, managing custom clearances, and issuing sales manifestations.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-white border-r border-slate-800">WhatsApp & Calls</td>
                      <td className="px-4 py-3 text-slate-400">Real-time logistics status delivery, urgent custom clearance notifications, and active dispatch routing confirmations.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-white border-r border-slate-800">Site Tech Metrics</td>
                      <td className="px-4 py-3 text-slate-400">Securing the web interface, resolving system performance errors, and preventing fraudulent inquiry entries.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-white font-mono text-xs uppercase tracking-widest font-black flex items-center gap-2">
                <span className="text-sky-400">03.</span> Data Security and Custody Measures
              </h2>
              <p>
                We apply robust administrative, physical, and electronic security measures to safeguard corporate assets and database logs. Transmitted data is encrypted over Secured Socket Layer (SSL) standards, and database storage nodes are guarded by strict programmatic controls. Despite robust protocols, no digital system can guarantee complete immunity against external cyber events. We urge buyers to safeguard official trade communication credentials.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-white font-mono text-xs uppercase tracking-widest font-black flex items-center gap-2">
                <span className="text-sky-400">04.</span> Global Data Sharing & Third-Party Routing
              </h2>
              <p>
                We do not lease, trade, or distribute your corporate identifier databases to unverified third-party advertisers. Information is only shared under active business necessity, such as:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-slate-400">
                <li><strong className="text-white font-mono">Sovereign Customs Nodes:</strong> Sharing mandatory compliance datasets with India's ICEGATE interface, HM Revenue & Customs (UK), or US Customs and Border Protection.</li>
                <li><strong className="text-white font-mono">Maritime Shipping Lines:</strong> Transferring container booking data to partnered logistics channels servicing major port nodes like Felixstowe, Southampton, LA, Hamburg, or Rotterdam.</li>
                <li><strong className="text-white font-mono">Sovereign Mandates:</strong> Disclosing information if required by court orders, anti-money laundering regulations, or direct directives from authorized global enforcement bodies.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-white font-mono text-xs uppercase tracking-widest font-black flex items-center gap-2">
                <span className="text-sky-400">05.</span> Your Legal Rights and Controls
              </h2>
              <p>
                As a global enterprise partner, depending on your geographic location (such as the United Kingdom or European Union under GDPR, or Indian Digital Personal Data Protection Act regulations), you have rights including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-slate-400">
                <li><strong className="text-white font-mono">Right to Review:</strong> Request copies of the corporate identifiers stored in our system.</li>
                <li><strong className="text-white font-mono">Right to Rectify:</strong> Ask us to correct any outdated or incomplete business contacts.</li>
                <li><strong className="text-white font-mono">Right to Erasure:</strong> Request the deletion of inactive communication data from our system logs.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-white font-mono text-xs uppercase tracking-widest font-black flex items-center gap-2">
                <span className="text-sky-400">06.</span> Third-Party Web Links
              </h2>
              <p>
                Our Site may contain links directing users to third-party stores (like Google Play or Apple App Store links for our global applications). We do not administer the privacy standards of external nodes, and we encourage you to review their local privacy parameters upon landing.
              </p>
            </section>

            {/* Inbound support box */}
            <div className="bg-[#0f131c] border-l-2 border-sky-400 p-6 my-8 space-y-4">
              <p className="text-xs text-slate-300 font-mono uppercase tracking-wider font-black flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" /> Primary Head Office
              </p>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Zhen Sea International LLP<br />
                Petlad, Anand District, Gujarat, India, 388450
              </p>
            </div>

            {/* Footer Sign-off */}
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
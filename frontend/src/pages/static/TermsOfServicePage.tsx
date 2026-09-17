import { ShieldAlert, ShieldCheck, CheckCircle2, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsOfServicePage() {
  return (
    <div className="space-y-8 text-zinc-300">
      <div className="border-b border-zinc-800 pb-6">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-2 text-xs font-medium text-zinc-400">
          Last Updated: August 15, 2026 • Effective Date: January 1, 2026
        </p>
      </div>

      <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 backdrop-blur-sm">
        <h2 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
          <CheckCircle2 className="h-4 w-4 text-[#0095B6]" />
          Quick Summary for Aviators & Creators
        </h2>
        <p className="text-xs text-zinc-400 leading-relaxed">
          SkyFlix is a specialized general aviation media platform. By uploading content or browsing the site, you agree to adhere to civil aviation authority safety standards, respect copyright laws, and avoid uploading dangerous, illegal, or unauthorized cockpit material.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          1. Acceptance of Terms & Aviation Scope
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          By accessing or using SkyFlix, you agree to be bound by these Terms of Service and all applicable aviation media standards. If you do not agree with any part of these terms, you may not access or use our platform services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          2. Content Upload & Regulatory Compliance
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Creators retain ownership rights to their uploaded media. By publishing footage on SkyFlix, you grant us a worldwide, non-exclusive, royalty-free license to host, transcode, and stream your content across our platform network.
        </p>
        <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 text-xs text-amber-300/90 flex items-start gap-3">
          <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5" />
          <span>
            <strong>Aviation Safety Warning:</strong> Content demonstrating intentional airspace violations, deliberate low-altitude buzzing, classified military telemetry breaches, or unsafe aircraft operations will be removed and reported where legally required.
          </span>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          3. Cockpit Intercom & ATC Audio
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          When uploading footage containing air traffic control (ATC) communications or cockpit intercom recordings, you warrant that you possess all necessary rights and clearances under your local telecommunications and aviation spectrum regulations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          4. User Accounts & Platform Security
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          You are responsible for maintaining the confidentiality of your account credentials. SkyFlix reserves the right to suspend or terminate accounts that engage in automated telemetry scraping, spamming, unauthorized API calls, or malicious re-uploads.
        </p>
      </section>

      <section className="space-y-4">
        <Link to="/t/privacy" className="block group">
          <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 backdrop-blur-sm group-hover:border-[#0095B6]/50 transition-colors">
            <h2 className="text-sm font-bold text-white flex items-center justify-between mb-2">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#0095B6]" />
                Continue to Privacy Policy
              </span>
              <MoveRight className="h-5 w-5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Our Privacy Policy outlines how we handle tail number privacy, telemetry storage, flight metadata, and user personal data.
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
}
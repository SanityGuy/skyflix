import { ShieldCheck, ShieldAlert, CheckCircle2, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8 text-zinc-300">
      <div className="border-b border-zinc-800 pb-6">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs font-medium text-zinc-400">
          Last Updated: August 15, 2026 • Effective Date: January 1, 2026
        </p>
      </div>

      <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 backdrop-blur-sm">
        <h2 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
          <ShieldCheck className="h-5 w-5 text-[#0095B6]" />
          Aviation Data Privacy Commitment
        </h2>
        <p className="text-xs text-zinc-400 leading-relaxed">
          This Privacy Policy details how SkyFlix collects, uses, and safeguards information specific to pilots, creators, and general aviation viewers across our global platform.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          1. Information We Collect
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          We collect personal and technical information when you register an account, publish flight media, or interact with streams:
        </p>
        <ul className="list-disc pl-6 text-sm text-zinc-400 space-y-1">
          <li>Account credentials (name, email address, profile preferences).</li>
          <li>Flight telemetry data voluntarily attached to videos (GPX/KML track logs).</li>
          <li>Device diagnostic metrics, IP address, and streaming performance data.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          2. Aircraft Tail Numbers & Geolocation
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          SkyFlix respects pilot privacy. Creators maintain full control over whether to display aircraft registration numbers or precise GPS track logs in their published flight media.
        </p>
        <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 text-xs text-amber-300/90 flex items-start gap-3">
          <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5" />
          <span>
            <strong>Public Registry Notice:</strong> Aircraft registration numbers visible inside video frames are indexed within public civil aviation registries (such as the FAA N-Number Registry). SkyFlix does not modify raw video pixels automatically.
          </span>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          3. How We Share & Disclose Data
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          We do not sell personal identification data or raw flight logs to third-party data brokers. Data may be shared strictly with service infrastructure providers under binding privacy agreements or in response to official legal mandates from aviation safety boards (such as NTSB or FAA inquiries).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          4. Security & Data Storage Standards
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          We utilize industry-standard cryptographic protocols to protect network transmissions. All stored account credentials and uploaded telemetry assets are encrypted at rest using TLS 1.3 and AES-256 standard specifications.
        </p>
      </section>

      <section className="space-y-4">
        <Link to="/t/guidelines" className="block group">
          <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 backdrop-blur-sm group-hover:border-[#0095B6]/50 transition-colors">
            <h2 className="text-sm font-bold text-white flex items-center justify-between mb-2">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#0095B6]" />
                Continue to Community Guidelines
              </span>
              <MoveRight className="h-5 w-5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Review our code of conduct for safe cockpit reporting, airshow footage, incident debriefings, and community conduct.
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
}
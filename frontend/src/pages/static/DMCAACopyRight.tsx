import { ShieldAlert, CheckCircle2, MoveRight, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function DmcaCopyrightPage() {
  return (
    <div className="space-y-8 text-zinc-300">
      <div className="border-b border-zinc-800 pb-6">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          DMCA & Copyright Policy
        </h1>
        <p className="mt-2 text-xs font-medium text-zinc-400">
          Last Updated: August 15, 2026 • Effective Date: January 1, 2026
        </p>
      </div>

      <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 backdrop-blur-sm">
        <h2 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
          <AlertCircle className="h-5 w-5 text-[#0095B6]" />
          Intellectual Property & Creator Protection
        </h2>
        <p className="text-xs text-zinc-400 leading-relaxed">
          SkyFlix respects intellectual property rights and complies with the Digital Millennium Copyright Act (DMCA). We provide tools for creators to protect their cockpit footage, airshow broadcasts, and educational flight media.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          1. Submitting a DMCA Takedown Notice
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          If you believe your copyrighted video or audio has been uploaded to SkyFlix without authorization, please submit a notice containing the following details to our designated copyright agent:
        </p>
        <ul className="list-disc pl-6 text-sm text-zinc-400 space-y-1">
          <li>Direct URL link(s) of the alleged infringing content.</li>
          <li>Identification of the copyrighted work claimed to have been infringed.</li>
          <li>Your official contact information (full name, email address, physical address).</li>
          <li>A statement made under penalty of perjury that you are authorized to act on behalf of the copyright owner.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          2. Educational Fair Use in Flight Analysis
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          SkyFlix supports educational flight safety analysis. Utilizing brief clips of aviation media for constructive critique, safety debriefing, or news commentary may qualify as Fair Use under applicable law.
        </p>
        <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 text-xs text-amber-300/90 flex items-start gap-3">
          <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5" />
          <span>
            <strong>Legal Warning:</strong> Filing deliberate false or bad-faith DMCA claims against educational safety analysis videos may result in civil legal liability under 17 U.S.C. § 512(f).
          </span>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          3. Counter-Notification Process
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          If your content was removed due to a DMCA notice and you believe this was an error or misidentification, you may file a counter-notification containing your signature, identification of the material removed, and consent to local jurisdiction.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          4. Contact Copyright Agent
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Direct all legal copyright correspondence to:{" "}
          <a href="mailto:copyright@skyflix.com" className="text-[#0095B6] underline hover:text-white transition-colors">
            copyright@skyflix.com
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <Link to="/t/terms" className="block group">
          <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 backdrop-blur-sm group-hover:border-[#0095B6]/50 transition-colors">
            <h2 className="text-sm font-bold text-white flex items-center justify-between mb-2">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#0095B6]" />
                Return to Terms of Service
              </span>
              <MoveRight className="h-5 w-5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Review our primary platform terms, creator licenses, and aviation service operational scope.
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
}
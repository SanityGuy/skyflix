import { ShieldAlert, CheckCircle2, MoveRight, Scale } from "lucide-react";
import { Link } from "react-router-dom";

export default function CommunityGuidelinesPage() {
  return (
    <div className="space-y-8 text-zinc-300">
      <div className="border-b border-zinc-800 pb-6">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Community Guidelines
        </h1>
        <p className="mt-2 text-xs font-medium text-zinc-400">
          Last Updated: August 15, 2026 • Effective Date: January 1, 2026
        </p>
      </div>

      <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 backdrop-blur-sm">
        <h2 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
          <Scale className="h-5 w-5 text-[#0095B6]" />
          Cockpit & Hangar Code of Conduct
        </h2>
        <p className="text-xs text-zinc-400 leading-relaxed">
          SkyFlix is built to foster safety, flight education, and camaraderie across general aviation. We enforce strict standards to protect aviators, passengers, ground personnel, and viewers.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          1. Safe Operation & Reckless Flying
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Media that encourages or demonstrates reckless flight behavior is prohibited. This includes unapproved low-altitude buzz passes, acrobatics performed in non-acrobatic certified aircraft, or flying under the influence of drugs or alcohol.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          2. Restricted Airspace & Sensitive Telemetry
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Do not publish media recorded within prohibited airspace (such as P-56), active Temporary Flight Restrictions (TFRs) without authorization, or sensitive military operational zones.
        </p>
        <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 text-xs text-amber-300/90 flex items-start gap-3">
          <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5" />
          <span>
            <strong>Enforcement Policy:</strong> Video content uploaded solely to glorify intentional airspace violations will result in permanent account suspension and moderation review.
          </span>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          3. Incident & Accident Debriefing
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          We encourage educational safety debriefs of flight incidents. However, content designed purely for sensationalism, exploiting tragic mishaps, or mocking pilot emergencies is strictly banned.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
          4. Respectful Community Interactions
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Harassment, hate speech, dangerous misinformation regarding flight safety procedures, or impersonation of aviation officials or creators will not be tolerated in comments, descriptions, or live streams.
        </p>
      </section>

      <section className="space-y-4">
        <Link to="/t/copyright" className="block group">
          <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 backdrop-blur-sm group-hover:border-[#0095B6]/50 transition-colors">
            <h2 className="text-sm font-bold text-white flex items-center justify-between mb-2">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#0095B6]" />
                Continue to DMCA & Copyright
              </span>
              <MoveRight className="h-5 w-5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Learn how we handle copyright claims, intellectual property protection, airshow broadcast rights, and takedown procedures.
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
}
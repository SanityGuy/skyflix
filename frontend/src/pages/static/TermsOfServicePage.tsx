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
            Quick Summary for Pilots & Creators
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
            SkyFlix is an aviation video sharing platform. By uploading content or browsing the site, you agree to follow aviation media regulations, respect copyright laws, and avoid uploading dangerous, illegal, or unauthorized cockpit material.
            </p>
        </div>

        <section className="space-y-4">
            <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
            1. Acceptance of Terms
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
            By accessing or using SkyFlix, you agree to be bound by these Terms of Service and all applicable aviation broadcasting standards. If you do not agree with any part of these terms, you may not use our platform.
            </p>
        </section>

        <section className="space-y-4">
            <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
            2. Content Upload & Aviation Compliance
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
            Creators retain ownership rights to their uploaded videos. However, by publishing content on SkyFlix, you grant us a worldwide, non-exclusive license to host and distribute your content.
            </p>
            <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 text-xs text-amber-300/90 flex items-start gap-3">
            <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5" />
            <span>
                <strong>Important Notice:</strong> Content demonstrating intentional airspace violations, classified military telemetry breaches, or unsafe aircraft operation will be removed immediately.
            </span>
            </div>
        </section>

        <section className="space-y-4">
            <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
            3. User Accounts & Security
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
            You are responsible for maintaining the security of your account credentials. SkyFlix reserves the right to suspend accounts that engage in spamming, illegal content distribution, or unauthorized API scraping.
            </p>
        </section>

        <section className="space-y-4">
            <Link to="/t/privacy" className="text-sm font-medium text-white">
                <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 backdrop-blur-sm">
                    <h2 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                    <ShieldCheck size={20} className="text-[#0095B6]" />
                    Continue to Privacy Policy
                    <MoveRight size={20} className="text-zinc-400" />
                    </h2>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                    Our Privacy Policy outlines how we collect, use, and protect your personal information. By using SkyFlix, you agree to our Privacy Policy.
                    </p>
                </div>
            </Link>
        </section>
        </div>
    );
}
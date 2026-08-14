import { Link } from "react-router-dom";
import { ShieldCheck, Scale, AlertOctagon, FileCode2, Mail, ArrowLeft } from "lucide-react";

export default function TermsOfService() {
    return (
        <div className="min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 py-8 text-zinc-300">
        <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-[#0095B6] transition-colors mb-6"
        >
            <ArrowLeft size={16} />
            Back to Home
        </Link>

        <div className="border-b border-zinc-800 pb-6 mb-8">
            <div className="flex items-center gap-3">
            <ShieldCheck size={32} className="text-[#0095B6]" />
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Terms of Service & Legal Disclaimer
                </h1>
                <p className="text-xs text-zinc-500 font-mono mt-1">
                Last Updated: August 2026 • SkyFlix Web Application
                </p>
            </div>
            </div>
        </div>

        <div className="space-y-6 text-sm leading-relaxed">
            <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 flex gap-3 text-amber-200/90">
            <AlertOctagon size={22} className="shrink-0 text-amber-400 mt-0.5" />
            <div className="text-xs space-y-1">
                <p className="font-semibold text-amber-300">Educational & Non-Commercial Notice</p>
                <p>
                SkyFlix is an independent web application built strictly for portfolio, educational, and demonstration purposes. It is not intended for commercial exploitation or monetized distribution.
                </p>
            </div>
            </div>

            <section className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold text-base mb-2">
                <Scale size={18} className="text-[#0095B6]" />
                <h2>1. Acceptance of Terms</h2>
            </div>
            <p>
                By accessing or using SkyFlix (the "Service"), you agree to be bound by these Terms of Service. If you do not agree to all terms, you are prohibited from accessing or using the Service.
            </p>
            </section>

            <section className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold text-base mb-2">
                <FileCode2 size={18} className="text-[#0095B6]" />
                <h2>2. Trademark & Non-Affiliation Disclaimer</h2>
            </div>
            <p>
                SkyFlix is an original software design inspired by modern video platforms. 
                <strong> SkyFlix is NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with YouTube, Google LLC, Alphabet Inc., or any of their subsidiaries or affiliates.</strong>
            </p>
            <p className="text-xs text-zinc-400 pt-1">
                All product names, logos, brands, trademarks, and registered trademarks displayed within the application are the property of their respective owners.
            </p>
            </section>

            <section className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold text-base mb-2">
                <ShieldCheck size={18} className="text-[#0095B6]" />
                <h2>3. Limitation of Liability & No Warranties</h2>
            </div>
            <p>
                THE SERVICE IS PROVIDED ON AN <strong>"AS IS"</strong> AND <strong>"AS AVAILABLE"</strong> BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE DEVELOPER(S) AND MAINTAINERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUE, WHETHER INCURRED DIRECTLY OR INDIRECTLY, ARISING FROM YOUR USE OF THE SERVICE.
            </p>
            </section>

            <section className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold text-base mb-2">
                <Mail size={18} className="text-[#0095B6]" />
                <h2>4. Copyright, DMCA & Takedown Requests</h2>
            </div>
            <p>
                SkyFlix does not host or store copyrighted video streams on its private servers unless explicitly marked. If you believe any content accessible via this application infringes upon your copyright, please issue a formal notice or DMCA takedown request.
            </p>
            <p className="text-xs text-zinc-400">
                For inquiries or legal concerns, please contact the repository maintainer directly via GitHub at{" "}
                <a
                href="https://github.com/SanityGuy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0095B6] hover:underline"
                >
                github.com/SanityGuy
                </a>.
            </p>
            </section>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-500 font-mono">
            © 2026 SkyFlix. Designed & Developed by SanityGuy. All rights reserved.
        </div>
        </div>
        </div>
    );
}
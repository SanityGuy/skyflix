import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
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
            <ShieldCheck size={20} className="text-[#0095B6]" />
            Introduction
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
            This Privacy Policy outlines how we collect, use, and protect your personal information. By using SkyFlix, you agree to our Privacy Policy.
            </p>
        </div>

        <section className="space-y-4">
            <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
            1. Information We Collect
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
            We collect information from you when you register an account, submit a video, or browse the site. This information may include your name, email address, and other contact information.
            </p>
        </section>

        <section className="space-y-4">
            <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
            2. Information We Share
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
            We may share your information with third-party service providers who assist us in operating the site. These service providers may include third-party analytics providers, content delivery networks, and advertising networks.
            </p>
        </section>

        <section className="space-y-4">
            <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
            3. Information We Use
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
            We use your information to operate the site and provide services to you. We may use your information to improve our services, personalize your experience, and provide you with relevant content.
            </p>
        </section>

        <section className="space-y-4">
            <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
            4. Information We Disclose
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
            We may disclose your information in response to a subpoena, court order, or other legal process. We may also disclose your information if required by law or in self-defense.
            </p>
        </section>

        <section className="space-y-4">
            <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
            5. Information We Secure
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
            We use industry-standard security measures to protect your information. We encrypt data transmissions using SSL/TLS protocols and store data securely on our servers.
            </p>
        </section>

        <section className="space-y-4">
            <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
            6. Information We Disclose to Third Parties
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
            We may disclose your information to third parties for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-sm text-zinc-400">
            <li>To provide you with services or to communicate with you.</li>
            <li>To comply with legal obligations.</li>
            <li>To protect our rights or property.</li>
            <li>To respond to a subpoena, court order, or other legal process.</li>
            <li>To enforce our terms and conditions.</li>
            <li>To detect and prevent fraud.</li>
            </ul>
        </section>

        <section className="space-y-4">
            <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
            7. Changes to This Privacy Policy
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
            We may update this Privacy Policy from time to time. We encourage you to review this Privacy Policy regularly for any changes. Your continued use of the site after any changes to this Privacy Policy will constitute your acceptance of those changes.
            </p>
        </section>

        <section className="space-y-4">
            <h2 className="text-lg font-bold text-white border-l-2 border-[#0095B6] pl-3">
            8. Contact Us
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
                If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:contact@skyflix.com">contact@skyflix.com</a>.
                </p>
        </section>
        </div>
    );
}   
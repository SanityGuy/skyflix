import { useState } from "react"
import { Link } from "react-router-dom";
import { 
    Lock, 
    Mail, 
    ArrowRight,
    ArrowLeft, 
} from "lucide-react";

import logoUrl from "../../assets/logo/skyflix/skyflix_logo_dark.png";

export default function ForgetPage() {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    const sendCode = () => {
        console.log("Sending code to:", email, code);
    };

    return (
        <div className="min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0095B6]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#0095B6]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="absolute top-1 left-1">
            <Link to="/" 
            className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-zinc-400 hover:text-[#0095B6] transition-colors mb-2 justify-center px-0"
            >
            <ArrowLeft size={16} className="shrink-0" />
            <span>Back to SkyFlix</span>
            </Link>
        </div>
        <div className="w-full max-w-md bg-zinc-900/80 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative z-10">
            <div className="flex flex-col items-center text-center mb-8">
            <Link to="/" className="flex items-center space-x-2 group mb-2">
                <img src={logoUrl} alt="SkyFlix Logo" className="h-30 w-auto object-contain" />
            </Link>
            <h1 className="text-xl font-bold text-white tracking-tight">
                Account Recovery
            </h1>
            <p className="text-xs text-zinc-400 mt-1">
                Enter your email address and we'll send you a link to reset your password.
            </p>
            </div>

            <form className="space-y-4">
            <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Email Address
                </label>
                <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sanityguy@skyflix.com"
                    className="w-full bg-zinc-950/70 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#0095B6] focus:ring-1 focus:ring-[#0095B6] transition-all"
                />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-medium text-zinc-300">
                    Verfication Code
                </label>
                </div>
                <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <input
                    type="password"
                    required
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-zinc-950/70 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#0095B6] focus:ring-1 focus:ring-[#0095B6] transition-all"
                />
                </div>
            </div>

            <button
                type="submit"
                onClick={sendCode}
                className="w-full flex items-center justify-center gap-2 bg-[#0095B6] hover:bg-[#0083a1] active:scale-[0.99] text-white font-semibold text-sm rounded-xl py-2.5 px-4 shadow-lg shadow-[#0095B6]/20 transition-all duration-200 mt-2"
            >
                <span>Send Code</span>
                <ArrowRight className="h-4 w-4" />
            </button>
            </form>

            <div className="mt-6 text-center text-xs text-zinc-400">
            Ready to login to your account?{" "}
            <Link
                to="/login"
                className="text-[#0095B6] font-semibold hover:underline"
            >
                Sign in
            </Link>
            </div>
        </div>
        </div>
    )
}
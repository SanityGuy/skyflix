import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Mail, User, ArrowRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import logoUrl from "../assets/logo/skyflix/skyflix_logo_dark.png";

export default function RegisterPage() {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreedToTos, setAgreedToTos] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreedToTos) {
        setError("You must agree to the Terms of Service to create an account.");
        return;
        }
        setError("");
        console.log("Registering user:", { displayName, email, password });
    };

    const handleGoogleSignUp = () => {
        console.log("Google Sign-Up clicked");
    };

    return (
        <div className="min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0095B6]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#0095B6]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="w-full max-w-md bg-zinc-900/80 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative z-10">
            <div className="flex flex-col items-center text-center mb-8">
            <Link to="/" className="flex items-center space-x-2 group mb-2">
                <img src={logoUrl} alt="SkyFlix Logo" className="h-30 w-auto object-contain" />
            </Link>
            <h1 className="text-xl font-bold text-white tracking-tight">
                Create an account
            </h1>
            <p className="text-xs text-zinc-400 mt-1">
                Join the cockpit and start sharing flight content
            </p>
            </div>

            <button
            type="button"
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center gap-3 bg-zinc-800/90 hover:bg-zinc-800 text-zinc-100 border border-zinc-700/80 rounded-xl py-2.5 px-4 font-medium text-sm transition-all duration-200 hover:border-zinc-600 active:scale-[0.99] shadow-sm"
            >
            <FcGoogle className="h-5 w-5" />
            <span>Continue with Google</span>
            </button>

            <div className="relative my-6 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800" />
            </div>
            <span className="relative bg-zinc-900 px-3 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                or fill details
            </span>
            </div>

            {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                {error}
            </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Display Name / Callsign
                </label>
                <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <input
                    type="text"
                    required
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="e.g. SanityGuy"
                    className="w-full bg-zinc-950/70 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#0095B6] focus:ring-1 focus:ring-[#0095B6] transition-all"
                />
                </div>
            </div>

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
                    placeholder="pilot@skyflix.com"
                    className="w-full bg-zinc-950/70 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#0095B6] focus:ring-1 focus:ring-[#0095B6] transition-all"
                />
                </div>
            </div>

            <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Password
                </label>
                <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <input
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className="w-full bg-zinc-950/70 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#0095B6] focus:ring-1 focus:ring-[#0095B6] transition-all"
                />
                </div>
            </div>

            <div className="pt-1">
                <label className="flex items-start space-x-2.5 cursor-pointer group">
                <input
                    type="checkbox"
                    required
                    checked={agreedToTos}
                    onChange={(e) => {
                    setAgreedToTos(e.target.checked);
                    if (e.target.checked) setError("");
                    }}
                    className="mt-0.5 rounded border-zinc-700 bg-zinc-950 text-[#0095B6] focus:ring-[#0095B6]/20 focus:ring-offset-0 h-4 w-4 shrink-0 cursor-pointer"
                />
                <span className="text-xs text-zinc-400 group-hover:text-zinc-300 leading-tight transition-colors">
                    I agree to the{" "}
                    <Link
                    to="/terms"
                    className="text-[#0095B6] hover:underline font-medium"
                    >
                    Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                    to="/policy"
                    className="text-[#0095B6] hover:underline font-medium"
                    >
                    Privacy Policy
                    </Link>
                    .
                </span>
                </label>
            </div>

            <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#0095B6] hover:bg-[#0083a1] active:scale-[0.99] text-white font-semibold text-sm rounded-xl py-2.5 px-4 shadow-lg shadow-[#0095B6]/20 transition-all duration-200 mt-2"
            >
                <span>Create Account</span>
                <ArrowRight className="h-4 w-4" />
            </button>
            </form>

            <div className="mt-6 text-center text-xs text-zinc-400">
            Already have an account?{" "}
            <Link
                to="/login"
                className="text-[#0095B6] font-semibold hover:underline"
            >
                Sign in
            </Link>
            </div>
        </div>
        </div>
    );
}
"use client";

import { useState } from "react";
import Link from "next/link";

interface PasteDisplayProps {
    id: string;
    text: string;
}

export default function PasteDisplay({ id, text }: PasteDisplayProps) {
    const [copiedText, setCopiedText] = useState(false);
    const [copiedUrl, setCopiedUrl] = useState(false);

    const copyToClipboard = async (content: string, isUrl: boolean) => {
        try {
            await navigator.clipboard.writeText(content);
            if (isUrl) {
                setCopiedUrl(true);
                setTimeout(() => setCopiedUrl(false), 2000);
            } else {
                setCopiedText(true);
                setTimeout(() => setCopiedText(false), 2000);
            }
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    return (
        <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-indigo-500/30">
            {/* Background decoration */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-20">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center text-slate-400 hover:text-indigo-400 transition-colors mb-4 group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tight">
                            Paste <span className="text-indigo-500">#{id}</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => copyToClipboard(text, false)}
                            className="px-4 py-2.5 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-xl transition-all duration-200 flex items-center gap-2 backdrop-blur-sm group active:scale-95"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 transition-colors ${copiedText ? 'text-green-400' : 'text-slate-400 group-hover:text-indigo-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {copiedText ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m-7 10h7m-7-4h7" />
                                )}
                            </svg>
                            <span className="text-sm font-medium">{copiedText ? 'Copied Content!' : 'Copy Content'}</span>
                        </button>

                        <button
                            onClick={() => copyToClipboard(currentUrl, true)}
                            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all duration-200 flex items-center gap-2 shadow-lg shadow-indigo-500/20 active:scale-95"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {copiedUrl ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                )}
                            </svg>
                            <span className="text-sm font-medium">{copiedUrl ? 'URL Copied!' : 'Copy URL'}</span>
                        </button>
                    </div>
                </div>

                {/* Content Box */}
                <div className="relative group">
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/25 to-purple-500/25 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-[#0b1120]/80 border border-slate-800 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-indigo-500/50">
                        <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-900/50 border-b border-slate-800">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                            <span className="ml-2 text-xs font-mono text-slate-500 uppercase tracking-widest">Plaintext Content</span>
                        </div>
                        <div className="p-6 md:p-8 min-h-[400px]">
                            <pre className="font-mono text-sm md:text-base leading-relaxed text-slate-300 whitespace-pre-wrap break-words">
                                <code>{text}</code>
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Footer info */}
                <div className="mt-6 flex justify-center">
                    <p className="text-slate-500 text-sm">
                        This paste is public. Anyone with the link can view it.
                    </p>
                </div>
            </main>
        </div>
    );
}

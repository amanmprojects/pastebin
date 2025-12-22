"use client";

import { useState } from "react";

export default function PasteCreateForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [text, setText] = useState("");

    const handleSubmit = () => {
        setIsSubmitting(true);
        // The form will naturally submit via the action, but we set local state for UI
    };

    return (
        <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-indigo-500/30">
            {/* Background decoration */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[130px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[130px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center">
                {/* Logo/Header */}
                <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                            Instant
                        </span>{" "}
                        <span className="text-indigo-500">Paste</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
                        Share your code snippets and text instantly. Secure, fast, and beautifully formatted.
                    </p>
                </div>

                {/* Form Container */}
                <form
                    action="/api/create-paste"
                    method="post"
                    onSubmit={handleSubmit}
                    className="w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200"
                >
                    <div className="relative group">
                        {/* Glow effect on hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />

                        <div className="relative bg-[#0b1120]/80 border border-slate-800 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-focus-within:border-indigo-500/50">
                            {/* Fake window controls */}
                            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-b border-slate-800">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                                </div>
                                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] font-bold">New Paste Editor</div>
                                <div className="w-12" /> {/* Spacer to center text */}
                            </div>

                            <textarea
                                name="text"
                                id="text"
                                rows={12}
                                required
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Paste your code or text here..."
                                className="w-full bg-transparent p-6 md:p-8 font-mono text-sm md:text-base text-slate-300 placeholder:text-slate-600 focus:outline-none resize-none scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent"
                            />

                            <div className="flex items-center justify-between px-6 py-4 bg-slate-900/30 border-t border-slate-800/50">
                                <div className="text-xs font-mono text-slate-500">
                                    {text.length} characters
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting || !text.trim()}
                                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2 shadow-lg shadow-indigo-500/20 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Creating...
                                        </>
                                    ) : (
                                        <>
                                            Create Paste
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

                {/* Footer Features */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full animate-in fade-in duration-1000 delay-500">
                    <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm">
                        <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-slate-200 mb-2">Secure Sharing</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Your pastes are stored safely and accessible only via the generated unique identifier.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm">
                        <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-slate-200 mb-2">Lighting Fast</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Optimized for speed. No bloat, just your text shared instantly with the world.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm">
                        <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-slate-200 mb-2">Clean UI</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Distraction-free interface designed for developers and writers alike.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Top gradient glow */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[420px] bg-gradient-to-b from-emerald-400/30 via-fuchsia-500/20 to-transparent blur-3xl" />

      {/* Page wrapper */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        {/* NAV */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-fuchsia-500 shadow-lg shadow-emerald-500/40">
              <span className="text-lg font-black tracking-tight">W</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-300">
                Wovo
              </span>
              <span className="text-sm text-slate-300">AI & Media</span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#ai" className="hover:text-white">Wovo AI</a>
            <a href="#agency" className="hover:text-white">Agency</a>
            <a href="#proof" className="hover:text-white">Results</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a
              href="#ai"
              className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-950 shadow-md shadow-emerald-400/30 hover:bg-emerald-100"
            >
              Try AI Free
            </a>
          </nav>
        </header>

        {/* HERO SECTION */}
        <section className="grid gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          {/* Hero text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>24/7 AI assistant + real human team</span>
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cute little AI that
              <span className="block bg-gradient-to-r from-emerald-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
                runs your marketing for you.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Wovo turns your website, menu, and photos into daily content,
              smart ads, and Google updates automatically — and when you want
              the{" "}
              <span className="font-semibold text-emerald-200">
                serious done-for-you help
              </span>
              , our Wovo Media team steps in and runs everything for you.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#ai"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-fuchsia-500 px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/40 hover:brightness-110"
              >
                Try Wovo AI Free
              </a>
              <a
                href="#agency"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-2.5 text-sm font-semibold text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
              >
                Hire Wovo Media
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              No contracts. Start with AI, upgrade to full-service whenever you're ready.
            </p>
          </div>

          {/* Mascot */}
          <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
            <div className="absolute inset-0 translate-y-6 rounded-[40px] bg-gradient-to-br from-emerald-400/40 via-fuchsia-500/30 to-sky-500/30 blur-3xl" />

            <div className="relative flex w-full flex-col items-center gap-4 rounded-[32px] border border-slate-800 bg-slate-900/60 px-6 pb-6 pt-7 shadow-2xl shadow-emerald-500/25 backdrop-blur">
              <div className="relative flex h-40 w-40 items-center justify-center">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-50 to-slate-200" />
                <div className="relative flex h-28 w-28 flex-col items-center justify-center">
                  <div className="flex h-14 w-24 items-center justify-center">
                    <div className="flex h-10 w-full items-center justify-between px-4">
                      <div className="h-4 w-4 rounded-full bg-slate-900" />
                      <div className="h-4 w-4 rounded-full bg-slate-900" />
                    </div>
                  </div>
                  <div className="h-4 w-10 rounded-full border-b-4 border-slate-900/80" />
                  <div className="mt-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-emerald-400/60 via-sky-400/60 to-fuchsia-400/60 blur-sm" />
                </div>
              </div>

              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Meet Wovi
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Your AI marketing buddy
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Learns your brand, writes your posts, and nudges customers when they’re ready to buy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

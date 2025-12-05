"use client";

import { useState } from "react";
import type { MouseEvent } from "react";

export default function Home() {
  // mouse tracking for the 3D mascot
  const [eyePos, setEyePos] = useState({ x: 0.5, y: 0.5 });

  const handleMascotMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // clamp between 0–1
    const clampedX = Math.min(1, Math.max(0, x));
    const clampedY = Math.min(1, Math.max(0, y));

    setEyePos({ x: clampedX, y: clampedY });
  };

  const handleMascotLeave = () => {
    // return eyes + tilt to center when mouse leaves
    setEyePos({ x: 0.5, y: 0.5 });
  };

  // convert eyePos into pixel offsets + tilt
  const eyeOffsetX = (eyePos.x - 0.5) * 10; // left/right
  const eyeOffsetY = (eyePos.y - 0.5) * 6; // up/down
  const tiltX = (0.5 - eyePos.y) * 10; // card tilt up/down
  const tiltY = (eyePos.x - 0.5) * 14; // card tilt left/right

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
            <a href="#ai" className="hover:text-white">
              Wovo AI
            </a>
            <a href="#agency" className="hover:text-white">
              Agency
            </a>
            <a href="#proof" className="hover:text-white">
              Results
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
            <a
              href="#ai"
              className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-950 shadow-md shadow-emerald-400/30 hover:bg-emerald-100"
            >
              Try AI Free
            </a>
          </nav>
        </header>

        {/* HERO */}
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
              No contracts. Start with AI, upgrade to full-service whenever
              you’re ready.
            </p>
          </div>

          {/* 3D Mascot card */}
          <div
            className="relative mx-auto flex w-full max-w-sm items-center justify-center"
            onMouseMove={handleMascotMove}
            onMouseLeave={handleMascotLeave}
          >
            {/* Gradient blob behind card */}
            <div className="absolute inset-0 translate-y-6 rounded-[40px] bg-gradient-to-br from-emerald-400/40 via-fuchsia-500/30 to-sky-500/30 blur-3xl" />

            {/* Card that tilts in 3D */}
            <div
              className="relative flex w-full flex-col items-center gap-4 rounded-[32px] border border-slate-800 bg-slate-900/70 px-6 pb-7 pt-7 shadow-2xl shadow-emerald-500/25 backdrop-blur"
              style={{
                transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 120ms ease-out",
              }}
            >
              {/* Mascot body */}
              <div className="relative flex h-48 w-40 flex-col items-center justify-start">
                {/* Body sphere */}
                <div className="absolute top-3 h-32 w-32 rounded-[28px] bg-gradient-to-b from-slate-50 to-slate-300 shadow-lg shadow-slate-900/40" />
                {/* Shadow under feet */}
                <div className="absolute bottom-1 h-3 w-24 rounded-full bg-slate-900/80 blur-sm" />

                {/* Face */}
                <div className="relative mt-6 flex h-16 w-24 items-center justify-center">
                  <div className="flex h-10 w-full items-center justify-between px-6">
                    {/* LEFT EYE */}
                    <div
                      className="h-4 w-4 rounded-full bg-slate-900"
                      style={{
                        transform: `translate(${eyeOffsetX}px, ${eyeOffsetY}px)`,
                        transition: "transform 80ms linear",
                      }}
                    />
                    {/* RIGHT EYE */}
                    <div
                      className="h-4 w-4 rounded-full bg-slate-900"
                      style={{
                        transform: `translate(${eyeOffsetX}px, ${eyeOffsetY}px)`,
                        transition: "transform 80ms linear",
                      }}
                    />
                  </div>
                </div>

                {/* Little smile */}
                <div className="relative mt-1 flex items-center justify-center">
                  <div className="h-4 w-10 rounded-full border-b-4 border-slate-900/80" />
                </div>

                {/* Simple arms + legs to sell “body” */}
                <div className="relative mt-3 flex w-full items-center justify-center gap-2">
                  {/* Arms */}
                  <div className="h-8 w-3 rounded-full bg-gradient-to-b from-slate-200 to-slate-300 shadow-sm shadow-slate-900/30 -translate-x-4 rotate-[-10deg]" />
                  <div className="h-8 w-3 rounded-full bg-gradient-to-b from-slate-200 to-slate-300 shadow-sm shadow-slate-900/30 translate-x-4 rotate-[10deg]" />
                </div>
                <div className="relative mt-4 flex w-full items-center justify-center gap-4">
                  {/* Legs */}
                  <div className="h-10 w-4 rounded-full bg-gradient-to-b from-slate-200 to-slate-300 shadow-sm shadow-slate-900/30" />
                  <div className="h-10 w-4 rounded-full bg-gradient-to-b from-slate-200 to-slate-300 shadow-sm shadow-slate-900/30" />
                </div>
              </div>

              {/* Text under mascot */}
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Meet Wovi
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Your AI marketing buddy
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Move your mouse around — Wovi’s watching and ready to write
                  posts, ads, and ideas that match your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SIMPLE PLACEHOLDER SECTIONS – we can flesh these out later */}
        <section id="ai" className="space-y-3">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Wovo AI
          </h2>
          <p className="max-w-xl text-sm text-slate-300">
            AI tools for small businesses. Generate posts, captions, ideas and
            offers in your brand’s voice. We’ll plug your pricing and plans in
            here next (Free, $9.99, $19.99).
          </p>
        </section>

        <section id="agency" className="space-y-3">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Wovo Media Agency
          </h2>
          <p className="max-w-xl text-sm text-slate-300">
            Done-for-you social media, Google updates, website changes, events
            and more — starting around $300/month, month-to-month. This is
            where we’ll drop your Campbell Station case study.
          </p>
        </section>

        <section id="proof" className="space-y-3">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Results
          </h2>
          <p className="max-w-xl text-sm text-slate-300">
            We’ll plug in your real numbers here — website views, engagement
            and before/after stats.
          </p>
        </section>

        <section id="contact" className="space-y-3">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Contact
          </h2>
          <p className="max-w-xl text-sm text-slate-300">
            Text <span className="font-semibold text-emerald-300">931-458-3255</span>{" "}
            or email{" "}
            <span className="font-semibold text-emerald-300">
              support@wovomedia.com
            </span>{" "}
            and tell us about your business. We’ll help you decide if you just
            need Wovo AI or want the full Wovo Media treatment.
          </p>
          <p className="pt-2 text-[11px] text-slate-500">
            © {new Date().getFullYear()} Wovo Media. Built with ❤️ in Tennessee.
          </p>
        </section>
      </div>
    </main>
  );
}

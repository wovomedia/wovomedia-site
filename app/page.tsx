"use client";

import { useState } from "react";
import type { MouseEvent } from "react";

export default function Home() {
  // mouse tracking for mascot / hero
  const [eyePos, setEyePos] = useState({ x: 0.5, y: 0.5 });

  const handleHeroMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const clampedX = Math.min(1, Math.max(0, x));
    const clampedY = Math.min(1, Math.max(0, y));
    setEyePos({ x: clampedX, y: clampedY });
  };

  const handleHeroLeave = () => {
    setEyePos({ x: 0.5, y: 0.5 });
  };

  // convert eyePos into pixel offsets + tilt
  const eyeOffsetX = (eyePos.x - 0.5) * 18;
  const eyeOffsetY = (eyePos.y - 0.5) * 12;
  const tiltX = (0.5 - eyePos.y) * 10;
  const tiltY = (eyePos.x - 0.5) * 16;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Top gradient glow */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[420px] bg-gradient-to-b from-emerald-400/40 via-emerald-500/20 to-transparent blur-3xl" />

      {/* Page wrapper */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        {/* NAV */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-lime-400 shadow-lg shadow-emerald-500/40">
              <span className="text-lg font-black tracking-tight">W</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-300">
                Wovo
              </span>
              <span className="text-sm text-slate-300">AI &amp; Media</span>
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

        {/* HERO – mouse move over whole section */}
        <section
          className="grid gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center"
          onMouseMove={handleHeroMove}
          onMouseLeave={handleHeroLeave}
        >
          {/* Hero text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>24/7 AI assistant + real human team</span>
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cute little AI that
              <span className="block bg-gradient-to-r from-emerald-300 via-lime-300 to-sky-300 bg-clip-text text-transparent">
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
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-lime-400 to-sky-400 px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/40 hover:brightness-110"
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
              you&apos;re ready.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-[10px]">
                    🥩
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-500/20 text-[10px]">
                    🍕
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-[10px]">
                    💈
                  </span>
                </div>
                <span>Local restaurants, shops &amp; salons love us.</span>
              </div>
              <div className="h-4 w-px bg-slate-700" />
              <div>Built in Tennessee • Powered by AI</div>
            </div>
          </div>

          {/* BIG ROUND 3D WOVI */}
          <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
            {/* Glow behind */}
            <div className="absolute inset-0 translate-y-7 rounded-[46px] bg-[radial-gradient(circle_at_top,_#22c55e55,_transparent_60%),radial-gradient(circle_at_bottom,_#0ea5e955,_transparent_60%)] blur-3xl" />

            {/* Card that tilts */}
            <div
              className="relative flex w-full flex-col items-center gap-4 rounded-[36px] border border-emerald-500/40 bg-slate-950/80 px-6 pb-7 pt-7 shadow-[0_26px_60px_rgba(16,185,129,0.45)] backdrop-blur"
              style={{
                transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 100ms ease-out",
              }}
            >
              {/* 3D blob mascot */}
              <div className="relative flex h-64 w-64 flex-col items-center justify-center">
                {/* base body */}
                <div className="absolute inset-x-4 top-4 bottom-6 rounded-[999px] bg-gradient-to-b from-slate-50 to-slate-300 shadow-[0_24px_50px_rgba(15,23,42,0.8)]" />

                {/* green rim light */}
                <div className="pointer-events-none absolute inset-x-6 top-6 bottom-10 rounded-[999px] border border-emerald-300/30 shadow-[0_-12px_30px_rgba(74,222,128,0.55),0_18px_30px_rgba(15,23,42,1)]" />

                {/* face area */}
                <div className="relative mt-8 flex h-28 w-32 flex-col items-center justify-start">
                  <div className="flex h-16 w-full items-center justify-between px-6">
                    {/* eyes */}
                    <div
                      className="h-5 w-5 rounded-full bg-slate-900"
                      style={{
                        transform: `translate(${eyeOffsetX}px, ${eyeOffsetY}px)`,
                        transition: "transform 60ms linear",
                      }}
                    />
                    <div
                      className="h-5 w-5 rounded-full bg-slate-900"
                      style={{
                        transform: `translate(${eyeOffsetX}px, ${eyeOffsetY}px)`,
                        transition: "transform 60ms linear",
                      }}
                    />
                  </div>
                  {/* smile */}
                  <div className="mt-1 flex items-center justify-center">
                    <div className="h-4 w-14 rounded-full border-b-[5px] border-slate-900/80" />
                  </div>
                </div>

                {/* little arms */}
                <div className="absolute inset-x-10 bottom-16 flex items-center justify-between">
                  <div className="h-9 w-5 rounded-[999px] bg-gradient-to-b from-slate-100 to-slate-300 shadow-md shadow-slate-900/50 -rotate-[10deg]" />
                  <div className="h-9 w-5 rounded-[999px] bg-gradient-to-b from-slate-100 to-slate-300 shadow-md shadow-slate-900/50 rotate-[10deg]" />
                </div>

                {/* legs */}
                <div className="absolute bottom-8 flex items-end justify-center gap-6">
                  <div className="h-9 w-6 rounded-[999px] bg-gradient-to-b from-slate-100 to-slate-300 shadow-md shadow-slate-900/60" />
                  <div className="h-9 w-6 rounded-[999px] bg-gradient-to-b from-slate-100 to-slate-300 shadow-md shadow-slate-900/60" />
                </div>

                {/* floor shadow */}
                <div className="absolute bottom-3 h-4 w-32 rounded-full bg-slate-950/85 blur-md" />
              </div>

              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Meet Wovi
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Your AI marketing buddy
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Move your mouse around — Wovi&apos;s eyes follow you while it
                  dreams up posts, ads and ideas that match your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WOVO AI SECTION (pricing) */}
        <section id="ai" className="space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Wovo AI: small-business marketing on autopilot.
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Paste your website, menu, or socials and Wovi learns your brand’s
              voice. Then it writes posts, ads, captions, emails and more —
              ready for you to copy, tweak, or schedule.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Free Plan
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Try Wovo AI with a small watermark
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Generate content for your business for free. A tiny “Made with
                Wovo” tag helps spread the word.
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                <li>• X credits per month to test things out</li>
                <li>• Social posts, captions &amp; ideas</li>
                <li>• Works great for restaurants &amp; local shops</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-500/60 bg-slate-900 p-5 shadow-lg shadow-emerald-400/40">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Pro — $9.99/mo
                </p>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-200">
                  Most popular
                </span>
              </div>
              <p className="mt-2 text-lg font-semibold text-white">
                Remove watermark. Look fully pro.
              </p>
              <p className="mt-2 text-sm text-slate-300">
                All of Wovo’s features, no watermark on your content, plus
                higher limits so you can post more often.
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                <li>• No watermark on any outputs</li>
                <li>• More monthly credits</li>
                <li>• Great for growing brands</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
                Unlimited — $19.99/mo
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Unlimited credits for heavy users
              </p>
              <p className="mt-2 text-sm text-slate-300">
                For agencies, creators, and brands that want to go all-in with
                AI and never worry about usage.
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                <li>• Unlimited generations*</li>
                <li>• No watermark, ever</li>
                <li>• Priority generation speeds</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AGENCY VS SELF-SERVE */}
        <section
          id="agency"
          className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]"
        >
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Done-for-you Agency
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
              Too busy to learn AI? We’ll just run it for you.
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              For serious businesses that want everything handled: daily posts,
              Google updates, website changes, events, photos and more. This is
              the same hands-on service we use for our Tennessee clients.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Daily social posts on Facebook, Instagram &amp; more</li>
              <li>• Google Business profile updates &amp; review replies</li>
              <li>• Website edits, promos, menus, seasonal campaigns</li>
              <li>• Ideas for events &amp; promotions to drive real traffic</li>
            </ul>
            <p className="mt-4 text-sm font-semibold text-emerald-200">
              Starting around $300/month — month-to-month, no contracts.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-400/30 hover:bg-emerald-100"
            >
              Talk to Wovo Media
            </a>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              Self-serve AI
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
              Want to do it yourself? Wovi’s got your back.
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Use Wovo AI like a little creative teammate. Tell it what
              you’re planning, and it turns that into content, ads and
              campaigns in your voice.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Ask it for daily post ideas</li>
              <li>• Generate offers, captions &amp; emails in seconds</li>
              <li>• Keep everything on-brand for your business</li>
              <li>• Upgrade anytime to unlock more power</li>
            </ul>
            <a
              href="#ai"
              className="mt-5 inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-emerald-400/60"
            >
              Start with AI free
            </a>
          </div>
        </section>

        {/* PROOF / RESULTS */}
        <section id="proof" className="space-y-5">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Real results for real local businesses.
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Plug in your own numbers here later — Campbell Station, local
              restaurants, and shops that saw big jumps in views, calls, and
              bookings.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-sm font-semibold text-white">
                +X% website views
              </p>
              <p className="mt-1 text-xs text-slate-400">
                After consistent social + Google posts.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-sm font-semibold text-white">
                +Y new followers
              </p>
              <p className="mt-1 text-xs text-slate-400">
                For a single local restaurant in a few months.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-sm font-semibold text-white">
                Zx more engagement
              </p>
              <p className="mt-1 text-xs text-slate-400">
                When we started pairing Wovo AI with done-for-you posting.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <section
          id="contact"
          className="mt-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7"
        >
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
            <div>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Ready to plug Wovo into your business?
              </h2>
              <p className="mt-3 text-sm text-slate-300 sm:text-base">
                Text or call and tell us what kind of business you run. We’ll
                help you decide if you just need Wovo AI or you’re ready for
                the full Wovo Media treatment.
              </p>
              <div className="mt-4 space-y-1 text-sm text-slate-200">
                <p>
                  <span className="font-semibold text-emerald-300">Text:</span>{" "}
                  931-458-3255
                </p>
                <p>
                  <span className="font-semibold text-emerald-300">
                    Email:
                  </span>{" "}
                  support@wovomedia.com
                </p>
              </div>
            </div>
            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-300">
              <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-300">
                How people use Wovo
              </p>
              <ul className="space-y-1.5">
                <li>• Restaurant owners who just want more butts in seats</li>
                <li>• Local shops that need someone to “just post every day”</li>
                <li>• Creators/marketers who want an AI sidekick</li>
              </ul>
              <p className="pt-1 text-[11px] text-slate-500">
                Start with AI. Upgrade to the agency when you’re ready to let
                go of the wheel.
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-[11px] text-slate-500">
            © {new Date().getFullYear()} Wovo Media. Built with ❤️ in Tennessee.
          </p>
        </section>
      </div>
    </main>
  );
}

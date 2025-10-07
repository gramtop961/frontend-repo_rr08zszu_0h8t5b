import React from 'react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.35),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.35),transparent_40%)] pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            Hello World
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80">
            A minimal, beautiful landing page to say hello to the world. Built with React, Vite, and Tailwind CSS.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#features"
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-white/90"
            >
              Explore Features
            </a>
            <a href="#about" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

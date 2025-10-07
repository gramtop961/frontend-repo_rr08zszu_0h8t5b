import React from 'react';
import { Star, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Simplicity First',
    description:
      'Clean design and focused content to make a strong first impression.',
  },
  {
    icon: Zap,
    title: 'Fast by Default',
    description:
      'Vite + React + Tailwind deliver instant feedback and blazing fast loads.',
  },
  {
    icon: Shield,
    title: 'Robust Foundation',
    description:
      'Production-ready structure with accessible components and best practices.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Features</h2>
          <p className="mt-4 text-white/70">
            Essentials you need for a crisp, modern landing page.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/20 backdrop-blur transition hover:translate-y-[-2px] hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-4 text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

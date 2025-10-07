import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-500 text-white">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">HelloWorld</span>
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
        <a
          href="#get-started"
          className="rounded-md bg-white px-3 py-2 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

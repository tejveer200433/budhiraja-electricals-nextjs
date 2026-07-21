"use client";

/* eslint-disable @next/next/no-html-link-for-pages */

import type { ReactNode } from "react";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

const NAV = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Blog", "/blog"],
  ["Testimonials", "/testimonials"],
  ["Contact", "/contact"],
] as const;

export function SitePageShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-[color:var(--color-ink)]">
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-xl">
        <div className="container-x flex h-20 items-center justify-between">
          <a href="/" className="flex items-center gap-2.5" aria-label="Budhiraja Electricals home">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-[color:var(--color-brand)] text-white"><Zap className="h-5 w-5" /></span>
            <span className="font-display text-[15px] font-bold leading-tight">BUDHIRAJA<br /><span className="text-[10px] font-semibold tracking-[0.28em] text-[color:var(--color-mute)]">ELECTRICALS · 1971</span></span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {NAV.map(([label, href]) => <a key={href} href={href} className="text-[13px] font-semibold text-[color:var(--color-ink-2)] hover:text-[color:var(--color-brand)]">{label}</a>)}
          </nav>
          <a href="/contact" className="btn-yellow hidden sm:inline-flex">Get a Quote</a>
          <button type="button" aria-label="Toggle menu" aria-expanded={open} aria-controls="page-mobile-menu" onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && <nav id="page-mobile-menu" className="border-t border-line bg-white lg:hidden"><div className="container-x flex flex-col py-3">{NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-line py-3 text-sm font-semibold last:border-0">{label}</a>)}</div></nav>}
      </header>
      <main>{children}</main>
      <footer className="bg-[color:var(--color-ink)] py-10 text-white">
        <div className="container-x flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <span className="font-display font-bold">BUDHIRAJA ELECTRICALS · SINCE 1971</span>
          <div className="flex flex-wrap gap-6 text-white/65"><a href="/about">About</a><a href="/services">Services</a><a href="/projects">Projects</a><a href="/blog">Blog</a><a href="/testimonials">Testimonials</a><a href="/contact">Contact</a></div>
        </div>
      </footer>
    </div>
  );
}

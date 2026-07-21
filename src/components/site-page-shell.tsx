"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Award, ArrowUpRight, Mail, Menu, MessageCircle, Phone, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

import { trackEvent } from "@/lib/analytics";
import { SITE_CONTACT, SITE_NAV } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Budhiraja Electricals home">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-[color:var(--color-brand)] text-white"><Zap className="h-5 w-5" /></span>
          <span className="font-display text-[15px] font-bold leading-tight">BUDHIRAJA<br /><span className="text-[10px] font-semibold tracking-[0.24em] text-[color:var(--color-mute)]">ELECTRICALS · SINCE 1971</span></span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Primary navigation">
          {SITE_NAV.map(({ label, href }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return <Link key={href} href={href} aria-current={active ? "page" : undefined} className={`text-[13px] font-semibold transition-colors ${active ? "text-[color:var(--color-brand)]" : "text-[color:var(--color-ink-2)] hover:text-[color:var(--color-brand)]"}`}>{label}</Link>;
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="hidden items-center gap-2 rounded-full border border-amber-300/70 bg-amber-50 px-3 py-2 text-amber-950 xl:inline-flex">
            <Award className="h-4 w-4 text-amber-600" />
            <span className="font-display text-[10px] font-bold tracking-[0.08em]">50+ YEAR LEGACY</span>
          </div>
          <Link href="/contact" onClick={() => trackEvent("start_project_click", { location: "header" })} className="btn-yellow hidden sm:inline-flex">
            Start Your Project <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button type="button" aria-label="Toggle menu" aria-expanded={open} aria-controls="page-mobile-menu" onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="page-mobile-menu" className="border-t border-line bg-white lg:hidden">
          <div className="container-x py-4">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {SITE_NAV.map(({ label, href }) => <Link key={href} href={href} className="border-b border-line py-3 text-sm font-semibold last:border-0">{label}</Link>)}
            </nav>
            <Link href="/contact" onClick={() => trackEvent("start_project_click", { location: "mobile_menu" })} className="btn-primary mt-4 w-full">Start Your Project <ArrowUpRight className="h-4 w-4" /></Link>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <a href={`tel:${SITE_CONTACT.phoneHref}`} onClick={() => trackEvent("phone_click", { location: "mobile_menu" })} className="flex flex-col items-center gap-1.5 rounded-xl border border-line p-3 text-[10px] font-bold"><Phone className="h-4 w-4 text-[color:var(--color-brand)]" />Call</a>
              <a href={SITE_CONTACT.whatsappHref} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "mobile_menu" })} className="flex flex-col items-center gap-1.5 rounded-xl border border-line p-3 text-[10px] font-bold"><MessageCircle className="h-4 w-4 text-emerald-600" />WhatsApp</a>
              <a href={`mailto:${SITE_CONTACT.email}`} onClick={() => trackEvent("email_click", { location: "mobile_menu" })} className="flex flex-col items-center gap-1.5 rounded-xl border border-line p-3 text-[10px] font-bold"><Mail className="h-4 w-4 text-[color:var(--color-brand)]" />Email</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--color-ink)] py-14 text-white">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--color-brand)]"><Zap className="h-5 w-5" /></span>
              <span className="font-display text-lg font-bold leading-tight">BUDHIRAJA<br /><span className="text-[10px] font-semibold tracking-[0.22em] text-white/55">ELECTRICALS · SINCE 1971</span></span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">Turnkey electrical engineering, substations, lighting, automation and integrated infrastructure solutions delivered across India.</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--color-accent-yellow)]"><Award className="h-4 w-4" />50+ years of engineering legacy</div>
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">Explore</div>
            <nav className="mt-5 grid gap-3" aria-label="Footer navigation">
              {SITE_NAV.map(({ label, href }) => <Link key={href} href={href} className="w-fit text-sm text-white/70 transition-colors hover:text-white">{label}</Link>)}
            </nav>
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">Start a conversation</div>
            <div className="mt-5 space-y-4 text-sm">
              <a href={`tel:${SITE_CONTACT.phoneHref}`} onClick={() => trackEvent("phone_click", { location: "footer" })} className="flex items-center gap-3 text-white/75 transition-colors hover:text-white"><Phone className="h-4 w-4 text-[color:var(--color-accent-yellow)]" />{SITE_CONTACT.phoneDisplay}</a>
              <a href={SITE_CONTACT.whatsappHref} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "footer" })} className="flex items-center gap-3 text-white/75 transition-colors hover:text-white"><MessageCircle className="h-4 w-4 text-emerald-400" />Chat on WhatsApp</a>
              <a href={`mailto:${SITE_CONTACT.email}`} onClick={() => trackEvent("email_click", { location: "footer" })} className="flex items-center gap-3 text-white/75 transition-colors hover:text-white"><Mail className="h-4 w-4 text-[color:var(--color-accent-yellow)]" />{SITE_CONTACT.email}</a>
            </div>
            <Link href="/contact" onClick={() => trackEvent("start_project_click", { location: "footer" })} className="btn-yellow mt-6">Start Your Project <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Budhiraja Electricals. All rights reserved.</span>
          <span>Class-I Electrical Contractor · New Delhi, India</span>
        </div>
      </div>
    </footer>
  );
}

export function SitePageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[color:var(--color-ink)]">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

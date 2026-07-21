/* eslint-disable @next/next/no-html-link-for-pages */

import { ArrowRight, ArrowUpRight, ClipboardCheck, Download, FileCheck2, Quote, ShieldCheck, Users, Zap } from "lucide-react";

const governmentImg = "/images/project-government.jpg";
const industrialImg = "/images/project-industrial.jpg";
const substationImg = "/images/project-substation.jpg";
import { SitePageShell } from "@/components/site-page-shell";

const TESTIMONIALS = [
  {
    name: "Rajesh Malhotra",
    role: "Project Director, Infrastructure Ltd.",
    sector: "Power infrastructure",
    initials: "RM",
    image: substationImg,
    projectHref: "/projects/66-kv-grid-substation",
    projectTitle: "Related substation work",
    projectMeta: "Grid substation · Uttar Pradesh",
    quote: "Budhiraja delivered our 33 kV substation ahead of schedule with zero non-conformances. Engineering discipline you rarely see at this scale.",
  },
  {
    name: "Ananya Verma",
    role: "Head of Facilities, Fortune 500 OEM",
    sector: "Industrial electrification",
    initials: "AV",
    image: industrialImg,
    projectHref: "/projects/manufacturing-plant-electrification",
    projectTitle: "Manufacturing plant electrification",
    projectMeta: "Gurugram · 2024",
    quote: "Their turnkey electrification of our Gurugram plant set a new bar for our vendor panel. Documentation, safety and finish were world-class.",
  },
  {
    name: "Col. (Retd.) V. Singh",
    role: "CPWD Consultant",
    sector: "Government projects",
    initials: "VS",
    image: governmentImg,
    projectHref: "/projects/government-complex-retrofit",
    projectTitle: "Government complex retrofit",
    projectMeta: "New Delhi · 2024",
    quote: "A rare Class-I contractor that reads drawings, questions them where needed, and executes without escalation. Exactly what a client wants.",
  },
];

const CLIENT_PRIORITIES = [
  { icon: Zap, title: "Engineering discipline", text: "Technical decisions and site execution remain connected throughout delivery." },
  { icon: ClipboardCheck, title: "Clear documentation", text: "Testing, records and handover information are treated as part of the work." },
  { icon: ShieldCheck, title: "Responsible execution", text: "Safety, quality and accountability guide how projects move forward." },
];

export default function TestimonialsPage() {
  const featured = TESTIMONIALS[0];

  return (
    <SitePageShell>
      <section className="relative overflow-hidden bg-white pb-20 pt-14 md:pb-28 md:pt-20">
        <div className="pointer-events-none absolute -left-48 -top-64 h-[560px] w-[560px] rounded-full bg-[color:var(--color-brand-50)] blur-3xl" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="eyebrow mb-6"><Users className="h-3.5 w-3.5" />Client voices</div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">Trust earned through delivery.</h1>
            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-[color:var(--color-mute)]">Perspectives from project leaders, consultants and facility teams who have worked with Budhiraja Electricals.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#client-feedback" className="btn-primary">Read client feedback <ArrowRight className="h-4 w-4" /></a><a href="/projects" className="btn-ghost">Explore our projects</a></div>
          </div>

          <div className="group relative min-h-[520px] overflow-hidden rounded-[32px] bg-black shadow-[var(--shadow-soft)]">
            <img src={featured.image} alt="Electrical substation project" className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/15" />
            <div className="relative flex min-h-[520px] flex-col justify-end p-8 text-white sm:p-10">
              <Quote className="h-10 w-10 text-[color:var(--color-accent-yellow)]" />
              <blockquote className="mt-6 font-display text-2xl font-semibold leading-relaxed sm:text-3xl">“{featured.quote}”</blockquote>
              <div className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6"><span className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--color-brand)] font-display text-sm font-bold">{featured.initials}</span><div><div className="font-display font-bold">{featured.name}</div><div className="mt-1 text-xs text-white/55">{featured.role}</div></div></div>
            </div>
          </div>
        </div>

        <div className="container-x relative mt-16"><dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)] lg:grid-cols-4">{[["1971", "Established"], ["Class-I", "Contractor"], ["66 kV", "Capability"], ["Pan India", "Execution"]].map(([value, label]) => <div key={label} className="border-b border-r border-line p-6 text-center last:border-r-0 lg:border-b-0"><dt className="font-display text-2xl font-bold">{value}</dt><dd className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--color-mute)]">{label}</dd></div>)}</dl></div>
      </section>

      <section id="client-feedback" className="scroll-mt-24 bg-[color:var(--color-surface-alt)] py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center"><div className="eyebrow mb-5">In their words</div><h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">What clients remember after handover.</h2><p className="mt-5 text-[color:var(--color-mute)]">Feedback across power infrastructure, industrial facilities and government work.</p></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((item, index) => (
              <article key={item.name} className="group flex overflow-hidden rounded-[28px] border border-line bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex w-full flex-col">
                  <div className="relative h-44 overflow-hidden bg-black"><img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" /><div className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">{item.sector}</div><div className="absolute right-5 top-5 font-display text-xs font-bold text-white/60">0{index + 1}</div></div>
                  <div className="flex flex-1 flex-col p-7"><Quote className="h-8 w-8 text-[color:var(--color-brand)]/25" /><blockquote className="mt-5 flex-1 font-display text-lg font-semibold leading-relaxed">“{item.quote}”</blockquote><div className="mt-7 flex items-center gap-3 border-t border-line pt-6"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[color:var(--color-brand-50)] font-display text-xs font-bold text-[color:var(--color-brand)]">{item.initials}</span><div><div className="font-display text-sm font-bold">{item.name}</div><div className="mt-1 text-[11px] text-[color:var(--color-mute)]">{item.role}</div></div></div><a href={item.projectHref} className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-[color:var(--color-surface-alt)] p-4 transition-colors hover:bg-[color:var(--color-brand-50)]"><span><span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--color-brand)]">Explore related work</span><span className="mt-1 block font-display text-sm font-bold">{item.projectTitle}</span><span className="mt-1 block text-[11px] text-[color:var(--color-mute)]">{item.projectMeta}</span></span><ArrowUpRight className="h-5 w-5 shrink-0 text-[color:var(--color-brand)]" /></a></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div><div className="eyebrow mb-5">Evidence you can inspect</div><h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">Proof beyond the quote.</h2><p className="mt-5 max-w-xl leading-relaxed text-[color:var(--color-mute)]">Review our credentials, explore relevant project work and speak directly with the team responsible for delivery.</p><a href="/Budhiraja-Electricals-Company-Profile.pdf" download className="btn-primary mt-8">Download company profile <Download className="h-4 w-4" /></a></div>
          <div className="overflow-hidden rounded-3xl border border-line bg-[color:var(--color-surface-alt)] shadow-[var(--shadow-card)]">
            {[
              { icon: ShieldCheck, number: "01", title: "Company credentials", text: "Established in 1971, Class-I contractor capability and C&S Electric channel partnership.", href: "/about", link: "Review credentials" },
              { icon: FileCheck2, number: "02", title: "Detailed project case studies", text: "See project context, delivery disciplines, scope and related work across sectors.", href: "/projects", link: "Explore projects" },
              { icon: Users, number: "03", title: "Direct project conversation", text: "Discuss your requirements with the project and engineering team responsible for delivery.", href: "/contact", link: "Contact the team" },
            ].map(({ icon: ProofIcon, number, title, text, href, link }) => <article key={title} className="grid gap-5 border-b border-line p-6 last:border-0 sm:grid-cols-[56px_1fr_auto] sm:items-center sm:p-7"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-[color:var(--color-brand)] shadow-sm"><ProofIcon className="h-6 w-6" /></span><div><div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-brand)]">{number}</div><h3 className="mt-1 font-display text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[color:var(--color-mute)]">{text}</p></div><a href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand)]">{link}<ArrowRight className="h-4 w-4" /></a></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] py-20 text-white md:py-28">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"><div><div className="eyebrow mb-5 !text-[color:var(--color-accent-yellow)]">What matters to clients</div><h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">The experience behind the outcome.</h2><p className="mt-5 max-w-xl leading-relaxed text-white/60">Strong project relationships are built through clarity, accountability and a consistent standard of execution.</p></div><div className="grid gap-4 sm:grid-cols-3">{CLIENT_PRIORITIES.map(({ icon: PriorityIcon, title, text }) => <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"><PriorityIcon className="h-6 w-6 text-[color:var(--color-accent-yellow)]" /><h3 className="mt-8 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/55">{text}</p></article>)}</div></div>
          <div className="mt-12 flex flex-col gap-7 rounded-3xl bg-[color:var(--color-brand)] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10"><div><div className="font-display text-2xl font-bold">Looking for the same standard on your project?</div><p className="mt-2 text-sm text-white/70">Tell us what you are planning and where you need technical support.</p></div><a href="/contact" className="btn-yellow shrink-0">Talk to our team <ArrowRight className="h-4 w-4" /></a></div>
        </div>
      </section>
    </SitePageShell>
  );
}

/* eslint-disable @next/next/no-html-link-for-pages */

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { SitePageShell } from "@/components/site-page-shell";
import { getProject, PROJECTS } from "@/data/projects";

const APPROACH = [
  ["01", "Scope clarity", "Requirements, interfaces and responsibilities aligned before execution."],
  ["02", "Site coordination", "Engineering, procurement and installation managed as one delivery stream."],
  ["03", "Quality assurance", "Testing, commissioning and documentation built into project delivery."],
  ["04", "Lifecycle support", "Maintenance and technical support beyond project handover."],
] as const;

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: projectId } = await params;
  const project = getProject(projectId);

  if (!project) {
    return (
      <SitePageShell>
        <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
          <div className="eyebrow mb-5">Project not found</div>
          <h1 className="font-display text-4xl font-bold">This case study is unavailable.</h1>
          <a href="/projects" className="btn-primary mt-8"><ArrowLeft className="h-4 w-4" />Back to projects</a>
        </section>
      </SitePageShell>
    );
  }

  const related = PROJECTS.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <SitePageShell>
      <section className="relative min-h-[620px] overflow-hidden bg-black text-white">
        <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        <div className="container-x relative flex min-h-[620px] flex-col justify-between py-10 md:py-14">
          <a href="/projects" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"><ArrowLeft className="h-4 w-4" />All projects</a>
          <div className="max-w-4xl pb-8">
            <div className="mb-5 flex flex-wrap items-center gap-3"><span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur">{project.tag}</span><span className="text-xs font-semibold text-[color:var(--color-accent-yellow)]">Case study</span></div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[76px]">{project.title}</h1>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70"><span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[color:var(--color-accent-yellow)]" />{project.location}</span><span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[color:var(--color-accent-yellow)]" />{project.year}</span></div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 pb-20 md:pb-28">
        <div className="container-x">
          <dl className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-soft)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Client", project.client],
              ["Location", project.location],
              ["Completed", project.year],
              ["Delivery", "Coordinated execution"],
            ].map(([label, value]) => <div key={label} className="border-b border-line p-6 last:border-0 sm:border-r lg:border-b-0"><dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-mute)]">{label}</dt><dd className="mt-2 font-display text-lg font-bold">{value}</dd></div>)}
          </dl>

          <div className="mt-20 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <div>
              <div className="eyebrow mb-5">Project overview</div>
              <h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">A coordinated response to a complex requirement.</h2>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-mute)]">{project.overview}</p>
              <div className="mt-10 rounded-3xl bg-[color:var(--color-surface-alt)] p-7 sm:p-8">
                <div className="flex items-center gap-3"><ClipboardCheck className="h-6 w-6 text-[color:var(--color-brand)]" /><h3 className="font-display text-xl font-bold">Scope of work</h3></div>
                <ul className="mt-6 space-y-4">{project.scope.map((item) => <li key={item} className="flex items-start gap-3 text-sm font-semibold"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-brand)]" />{item}</li>)}</ul>
              </div>
            </div>

            <aside className="lg:pt-10">
              <div className="rounded-3xl bg-[color:var(--color-ink)] p-7 text-white shadow-[var(--shadow-soft)] sm:p-8">
                <ShieldCheck className="h-8 w-8 text-[color:var(--color-accent-yellow)]" />
                <div className="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">Delivery disciplines</div>
                <div className="mt-4 flex flex-wrap gap-2">{project.services.map((service) => <span key={service} className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-xs font-semibold">{service}</span>)}</div>
                <p className="mt-7 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/60">Detailed technical documentation and client-specific project information can be discussed with our team for relevant enquiries.</p>
                <a href="/contact" className="mt-7 inline-flex items-center gap-2 font-semibold text-[color:var(--color-accent-yellow)]">Request project details <ArrowRight className="h-4 w-4" /></a>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-line p-5"><Building2 className="h-5 w-5 text-[color:var(--color-brand)]" /><div className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--color-mute)]">Sector</div><div className="mt-1 font-display font-bold">{project.tag}</div></div>
                <div className="rounded-2xl border border-line p-5"><Wrench className="h-5 w-5 text-[color:var(--color-brand)]" /><div className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--color-mute)]">Support</div><div className="mt-1 font-display font-bold">Lifecycle ready</div></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-surface-alt)] py-20 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center"><div className="eyebrow mb-5">Delivery approach</div><h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">From scope to dependable handover.</h2></div>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{APPROACH.map(([number, title, text]) => <li key={number} className="rounded-3xl border border-line bg-white p-6"><div className="font-display text-sm font-bold text-[color:var(--color-brand)]">{number}</div><h3 className="mt-8 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[color:var(--color-mute)]">{text}</p></li>)}</ol>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6"><div><div className="eyebrow mb-4">More work</div><h2 className="font-display text-3xl font-bold md:text-4xl">Related projects</h2></div><a href="/projects" className="hidden items-center gap-2 text-sm font-semibold text-[color:var(--color-brand)] sm:inline-flex">View all <ArrowRight className="h-4 w-4" /></a></div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">{related.map((item) => <a key={item.slug} href={`/projects/${item.slug}`} className="group overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)]"><div className="aspect-[4/3] overflow-hidden bg-black"><img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" /></div><div className="p-5"><div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-brand)]">{item.tag}</div><h3 className="mt-2 font-display text-xl font-bold leading-tight">{item.title}</h3><div className="mt-4 flex items-center gap-2 text-xs text-[color:var(--color-mute)]"><MapPin className="h-3.5 w-3.5" />{item.location}</div></div></a>)}</div>
        </div>
      </section>

      <section className="pb-20 md:pb-24"><div className="container-x"><div className="flex flex-col gap-7 rounded-[32px] bg-[color:var(--color-brand)] p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between"><div><div className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Plan your project</div><h2 className="mt-4 font-display text-3xl font-bold">Have a similar technical requirement?</h2><p className="mt-3 text-sm text-white/70">Share your project stage, location and scope with our engineering team.</p></div><a href="/contact" className="btn-yellow shrink-0">Start a conversation <ArrowRight className="h-4 w-4" /></a></div></div></section>
    </SitePageShell>
  );
}

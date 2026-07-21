import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ClipboardCheck,
  MapPin,
  ShieldCheck,
  Zap,
} from "lucide-react";

const pIndustrial = "/images/project-industrial.jpg";
const pStadium = "/images/project-stadium.jpg";
const pSubstation = "/images/project-substation.jpg";
import { SitePageShell } from "@/components/site-page-shell";
import { PROJECTS } from "@/data/projects";

const DELIVERY_STEPS = [
  { icon: ClipboardCheck, title: "Scope clarity", text: "Requirements, interfaces and responsibilities aligned before execution." },
  { icon: Building2, title: "Site coordination", text: "Engineering, procurement and installation managed as one delivery stream." },
  { icon: ShieldCheck, title: "Quality assurance", text: "Testing, commissioning and documentation built into project delivery." },
  { icon: Zap, title: "Lifecycle support", text: "Maintenance and technical support beyond project handover." },
];

export default function ProjectsPage() {
  return (
    <SitePageShell>
      <section className="relative overflow-hidden bg-white pb-20 pt-14 md:pb-28 md:pt-20">
        <div className="pointer-events-none absolute -left-48 -top-64 h-[560px] w-[560px] rounded-full bg-[color:var(--color-brand-50)] blur-3xl" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <div className="eyebrow mb-6"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />Selected project portfolio</div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">Engineering made visible.</h1>
            <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-[color:var(--color-mute)]">A cross-section of electrical work spanning substations, stadiums, industrial plants, commercial developments and public infrastructure.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#portfolio" className="btn-primary">View selected work <ArrowRight className="h-4 w-4" /></a>
              <a href="/contact" className="btn-ghost">Discuss your project</a>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-5 border-t border-line pt-8 sm:grid-cols-4">
              {[["6", "Project sectors"], ["66 kV", "Capability"], ["Turnkey", "Delivery"], ["Pan India", "Execution"]].map(([value, label]) => (
                <div key={label}><dt className="font-display text-2xl font-bold">{value}</dt><dd className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--color-mute)]">{label}</dd></div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto grid w-full max-w-2xl grid-cols-[1.15fr_0.85fr] gap-4 lg:mx-0">
            <div className="group relative row-span-2 min-h-[500px] overflow-hidden rounded-[32px] bg-black">
              <img src={pSubstation} alt="66 kV grid substation project" className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 text-white"><div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent-yellow)]">Power infrastructure</div><div className="mt-2 font-display text-2xl font-bold">66 kV capability</div></div>
            </div>
            <div className="group relative min-h-60 overflow-hidden rounded-[28px] bg-black">
              <img src={pStadium} alt="Stadium floodlighting project" className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 font-display text-lg font-bold text-white">Sports lighting</div>
            </div>
            <div className="group relative min-h-60 overflow-hidden rounded-[28px] bg-black">
              <img src={pIndustrial} alt="Industrial electrification project" className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 font-display text-lg font-bold text-white">Industrial systems</div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-24 bg-[color:var(--color-surface-alt)] py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl"><div className="eyebrow mb-5">Selected work</div><h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">Complex requirements. Coordinated delivery.</h2></div>
            <p className="max-w-md text-sm leading-relaxed text-[color:var(--color-mute)]">Each project combines the disciplines, equipment and site coordination required for its operating environment.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <article key={project.title} className="group flex overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-brand)]/25 hover:shadow-xl">
                <div className="flex w-full flex-col">
                  <a href={`/projects/${project.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-black" aria-label={`View ${project.title} case study`}>
                    <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">{project.tag}</span>
                    <span className="absolute right-5 top-5 font-display text-xs font-bold text-white/70">{String(index + 1).padStart(2, "0")}</span>
                    <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-semibold text-white"><MapPin className="h-4 w-4 text-[color:var(--color-accent-yellow)]" />{project.location}<span className="text-white/40">/</span>{project.year}</div>
                  </a>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-bold leading-tight"><a href={`/projects/${project.slug}`} className="transition-colors hover:text-[color:var(--color-brand)]">{project.title}</a></h3>
                    <div className="mt-5 border-t border-line pt-5"><div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-mute)]">Client</div><div className="mt-1.5 text-sm font-semibold">{project.client}</div></div>
                    <ul className="mt-5 flex flex-wrap gap-2">{project.services.map((service) => <li key={service} className="rounded-full bg-[color:var(--color-brand-50)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[color:var(--color-brand)]">{service}</li>)}</ul>
                    <a href={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand)]">View case study <ArrowUpRight className="h-4 w-4" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] py-20 text-white md:py-28">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div><div className="eyebrow mb-5 !text-[color:var(--color-accent-yellow)]">Project assurance</div><h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">A disciplined path to handover.</h2><p className="mt-5 max-w-xl leading-relaxed text-white/60">Our delivery model keeps technical decisions, site execution and accountability connected through every project stage.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {DELIVERY_STEPS.map(({ icon: StepIcon, title, text }, index) => (
                <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition-colors hover:border-[color:var(--color-accent-yellow)]/40">
                  <div className="flex items-center justify-between"><StepIcon className="h-6 w-6 text-[color:var(--color-accent-yellow)]" /><span className="font-display text-xs font-bold text-white/30">0{index + 1}</span></div>
                  <h3 className="mt-7 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/55">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-6 rounded-3xl bg-[color:var(--color-brand)] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9"><div><div className="font-display text-2xl font-bold">Planning a project with similar requirements?</div><p className="mt-2 text-sm text-white/70">Share your scope, location and project stage with our engineering team.</p></div><a href="/contact" className="btn-yellow shrink-0">Start a project conversation <ArrowRight className="h-4 w-4" /></a></div>
        </div>
      </section>
    </SitePageShell>
  );
}


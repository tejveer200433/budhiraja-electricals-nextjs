"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight, ArrowRight, Zap, X,
  Star, ChevronLeft, ChevronRight, ChevronDown, Quote, Award, Users, Globe, Activity,
} from "lucide-react";
import { Toaster } from "sonner";
import { SiteFooter, SiteHeader } from "@/components/site-page-shell";
import { trackEvent } from "@/lib/analytics";
import { SERVICES as SERVICE_DATA } from "@/lib/services";

const heroImg = "/images/hero-substation.jpg";
const aboutImg = "/images/about-team.jpg";
const pSubstation = "/images/project-substation.jpg";
const pStadium = "/images/project-stadium.jpg";
const pIndustrial = "/images/project-industrial.jpg";
const pCommercial = "/images/project-commercial.jpg";
const pInfra = "/images/project-infrastructure.jpg";
const pGov = "/images/project-government.jpg";
const blog1 = "/images/blog-1.jpg";
const blog2 = "/images/blog-2.jpg";
const blog3 = "/images/blog-3.jpg";

// ---------- helpers ----------
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("reveal");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.disconnect();
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

// ---------- data ----------
const SERVICES = SERVICE_DATA;

const PROJECTS = [
  { img: pSubstation, tag: "Substations", title: "66 kV Grid Substation", location: "Uttar Pradesh", client: "State Utility", services: "EPC · Testing · Commissioning", year: "2024", span: "row-span-2" },
  { img: pStadium, tag: "Sports Stadiums", title: "International Cricket Stadium Lighting", location: "New Delhi", client: "Sports Authority", services: "Floodlighting · Controls", year: "2023", span: "" },
  { img: pIndustrial, tag: "Industrial Plants", title: "Manufacturing Plant Electrification", location: "Gurugram", client: "Fortune 500 OEM", services: "HT/LT · Bus Trunking · Panels", year: "2024", span: "" },
  { img: pCommercial, tag: "Commercial Buildings", title: "Grade-A Corporate Campus", location: "Bengaluru", client: "Confidential", services: "MEP · Automation · Security", year: "2025", span: "row-span-2" },
  { img: pInfra, tag: "Infrastructure", title: "National Highway Illumination", location: "NH-48 Corridor", client: "NHAI", services: "Highway Lighting · SCADA", year: "2023", span: "" },
  { img: pGov, tag: "Government Projects", title: "Government Complex Retrofit", location: "New Delhi", client: "CPWD", services: "Electrification · Smart Systems", year: "2024", span: "" },
];

const CLIENTS = [
  { name: "NHAI", img: pInfra },
  { name: "NTPC", img: pSubstation },
  { name: "PWD", img: pCommercial },
  { name: "CPWD", img: pGov },
  { name: "DDA", img: pStadium },
  { name: "IOCL", img: pIndustrial },
  { name: "BHEL", img: pSubstation },
  { name: "Tata Projects", img: pCommercial },
  { name: "L&T", img: pIndustrial },
  { name: "Adani", img: pInfra },
  { name: "Reliance", img: pGov },
  { name: "GAIL", img: pStadium },
  { name: "DMRC", img: pSubstation },
  { name: "AIIMS", img: pCommercial },
  { name: "IIT Delhi", img: pIndustrial },
  { name: "Sports Authority", img: pStadium },
];

const TESTIMONIALS = [
  { name: "Rajesh Malhotra", role: "Project Director, Infrastructure Ltd.", quote: "Budhiraja delivered our 33 kV substation ahead of schedule with zero non-conformances. Engineering discipline you rarely see at this scale." },
  { name: "Ananya Verma", role: "Head of Facilities, Fortune 500 OEM", quote: "Their turnkey electrification of our Gurugram plant set a new bar for our vendor panel. Documentation, safety and finish were world-class." },
  { name: "Col. (Retd.) V. Singh", role: "CPWD Consultant", quote: "A rare Class-I contractor that reads drawings, questions them where needed, and executes without escalation. Exactly what a client wants." },
];

const BLOG = [
  { img: blog1, tag: "Engineering", title: "Designing 66 kV Substations for India's Load Growth", read: "8 min read" },
  { img: blog2, tag: "Electrical Safety", title: "Arc-Flash Protection: What Every Facility Manager Must Know", read: "6 min read" },
  { img: blog3, tag: "Infrastructure", title: "The Smart City Backbone Is Built on Reliable Power", read: "5 min read" },
];

const SERVICE_BACKGROUNDS = [
  pSubstation,
  pInfra,
  pIndustrial,
  pStadium,
  pGov,
  pCommercial,
  pIndustrial,
  pSubstation,
  pCommercial,
  pGov,
  pInfra,
  aboutImg,
];

// ---------- components ----------
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      {/* soft grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0000000a 1px, transparent 1px), linear-gradient(to bottom, #0000000a 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 60% 30%, black 40%, transparent 75%)",
        }}
      />
      <div className="container-x relative grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10 items-center">
        <div>
          <div className="eyebrow mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />
            Class-I Electrical Contractor · Since 1971
          </div>
          <h1 className="font-display text-[44px] leading-[1.02] font-bold tracking-[-0.03em] sm:text-6xl lg:text-[88px] xl:text-[104px]">
            Powering India's<br />
            Infrastructure<br />
            <span className="relative inline-block">
              Since <span className="text-[color:var(--color-brand)]">1971</span>
              <svg viewBox="0 0 300 12" className="absolute -bottom-3 left-0 w-full" fill="none">
                <path d="M2 8 Q80 -2 160 6 T298 4" stroke="#FFC400" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-[color:var(--color-mute)]">
            Turnkey electrical engineering — substations up to 66 kV, power distribution, stadium lighting,
            industrial electrification, automation and smart infrastructure solutions delivered across India.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/services" className="btn-primary">Explore Services <ArrowRight className="h-4 w-4" /></Link>
            <a href="#projects" className="btn-ghost">View Projects</a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-line pt-8">
            {[
              { k: <><Counter to={50} suffix="+" /></>, v: "Years Experience" },
              { k: <><Counter to={1000} suffix="+" /></>, v: "Projects" },
              { k: "Pan India", v: "Execution" },
              { k: "66 kV", v: "Expertise" },
            ].map((s, i) => (
              <div key={i}>
                <dt className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-[color:var(--color-mute)] font-semibold">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right visual */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-[color:var(--color-ink)]">
            <img
              src={heroImg}
              alt="High-voltage electrical substation at dusk"
              width={1600}
              height={1400}
              className="h-full w-full object-cover opacity-90"
            />
            {/* blueprint overlay */}
            <svg
              aria-hidden
              viewBox="0 0 400 500"
              className="absolute inset-0 h-full w-full text-white/40"
              fill="none"
            >
              <g stroke="currentColor" strokeWidth="1">
                <path d="M20 80 H180 V220 H340" strokeDasharray="6 6" />
                <path d="M40 460 V300 H240" strokeDasharray="4 8" />
                <circle cx="180" cy="220" r="6" fill="#FFC400" stroke="none" />
                <circle cx="340" cy="220" r="4" fill="#FFC400" stroke="none" />
                <circle cx="240" cy="300" r="4" fill="#FFC400" stroke="none" />
              </g>
            </svg>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <div className="text-[10px] tracking-[0.28em] font-semibold uppercase text-white/70">Live Grid</div>
                <div className="font-display text-xl font-bold">66 kV / 33 kV</div>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--color-accent-yellow)] text-[color:var(--color-ink)]">
                <Zap className="h-5 w-5" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* floating card */}
          <div className="absolute -left-6 bottom-16 hidden md:flex animate-[float_6s_ease-in-out_infinite] items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-line px-4 py-3 shadow-[var(--shadow-card)]">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--color-brand-50)] text-[color:var(--color-brand)]">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-bold text-sm">Class-I Contractor</div>
              <div className="text-[11px] text-[color:var(--color-mute)]">Pan-India licensed</div>
            </div>
          </div>

          <div className="absolute -right-4 top-10 hidden md:flex animate-[float_7s_ease-in-out_infinite] items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-line px-4 py-3 shadow-[var(--shadow-card)]">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--color-accent-yellow)]/20 text-[color:var(--color-ink)]">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-bold text-sm">99.98% Uptime</div>
              <div className="text-[11px] text-[color:var(--color-mute)]">SLA-backed O&M</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24 md:py-32 bg-[color:var(--color-surface-alt)]">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
        <div ref={ref} className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[28px]">
            <img src={aboutImg} alt="Engineering team reviewing plans" width={1400} height={1600} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:right-8 rounded-2xl bg-[color:var(--color-brand)] text-white p-6 shadow-[var(--shadow-soft)] max-w-[240px]">
            <div className="font-display text-5xl font-bold leading-none">50+</div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] font-semibold opacity-80">Years of engineering excellence</div>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-5">About Budhiraja</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em]">
            Building India's<br />Electrical Future.
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-[color:var(--color-mute)] max-w-lg">
            Since 1971, Budhiraja Electricals has engineered mission-critical power infrastructure
            for utilities, industry and government across India. As a licensed Class-I Electrical
            Contractor, we deliver turnkey EPC solutions with the discipline of an engineering firm
            and the accountability of a builder.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { k: "Since 1971", v: "Three generations of engineering" },
              { k: "Class-I Contractor", v: "Licensed for HT & LT works" },
              { k: "Pan India", v: "Execution & O&M footprint" },
              { k: "Turnkey EPC", v: "Design → Build → Maintain" },
            ].map((f) => (
              <li key={f.k} className="rounded-2xl border border-line bg-white p-5">
                <div className="font-display text-lg font-bold">{f.k}</div>
                <div className="mt-1 text-sm text-[color:var(--color-mute)]">{f.v}</div>
              </li>
            ))}
          </ul>

          <Link href="/projects" className="mt-10 inline-flex btn-primary">Learn More <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container-x">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="eyebrow mb-5">Capabilities</div>
            <h2 className="font-display text-4xl font-bold tracking-[-0.03em] md:text-5xl lg:text-6xl">
              Six core capabilities.<br />One engineering standard.
            </h2>
          </div>
          <p className="max-w-md text-[color:var(--color-mute)]">
            From 66 kV substations to integrated infrastructure, these are the capabilities clients request most often.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line">
          {SERVICES.slice(0, 6).map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="group relative min-h-[300px] overflow-hidden bg-[color:var(--color-ink)] p-7 text-white">
                <img src={SERVICE_BACKGROUNDS[index]} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/60 to-black/90" />
                <div className="relative z-10 flex min-h-[244px] flex-col">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/20 bg-white/15 text-white backdrop-blur-md transition-colors group-hover:bg-[color:var(--color-accent-yellow)] group-hover:text-[color:var(--color-ink)]"><Icon className="h-5 w-5" /></span>
                    <span className="font-display text-xs font-bold text-white/60">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="mt-auto pt-8">
                    <h3 className="font-display text-xl font-bold tracking-tight">{service.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/75">{service.desc}</p>
                    <Link href={`/services/${service.slug}`} onClick={() => trackEvent("service_interest", { service_slug: service.slug, location: "homepage" })} className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent-yellow)]">
                      Read More <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-9 text-center">
          <Link href="/services" onClick={() => trackEvent("service_interest", { interaction: "view_all", location: "homepage" })} className="btn-primary">
            View All 12 Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <style>{`
        #services .grid.gap-px { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 640px) { #services .grid.gap-px { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (min-width: 1024px) { #services .grid.gap-px { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
      `}</style>
    </section>
  );
}

function Projects() {
  const [open, setOpen] = useState<null | typeof PROJECTS[number]>(null);
  return (
    <section id="projects" className="bg-[color:var(--color-surface-alt)] py-24 md:py-32">
      <div className="container-x">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="eyebrow mb-5">Selected Work</div>
            <h2 className="font-display text-4xl font-bold tracking-[-0.03em] md:text-5xl lg:text-6xl">Projects that power<br />the country.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Substations", "Industrial", "Stadiums", "Commercial", "Infrastructure", "Government"].map((tag) => <span key={tag} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">{tag}</span>)}
          </div>
        </div>

        <div className="grid auto-rows-[260px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <button
              key={project.title}
              onClick={() => {
                trackEvent("project_view", { project_title: project.title, location: "homepage" });
                setOpen(project);
              }}
              className={`group relative overflow-hidden rounded-3xl bg-black text-left card-lift ${project.span}`}
            >
              <img src={project.img} alt={project.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-[900ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6 text-white">
                <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] backdrop-blur">{project.tag}</span>
                <h3 className="mt-3 max-w-[90%] font-display text-xl font-bold leading-tight md:text-2xl">{project.title}</h3>
                <div className="mt-2 text-xs text-white/70">{project.location} · {project.year}</div>
              </div>
              <div className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-transform group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in" onClick={() => setOpen(null)}>
          <div onClick={(event) => event.stopPropagation()} className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <button onClick={() => setOpen(null)} aria-label="Close project details" className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-line bg-white/90"><X className="h-5 w-5" /></button>
            <img src={open.img} alt={open.title} className="h-72 w-full object-cover" />
            <div className="p-8">
              <span className="eyebrow">{open.tag}</span>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight">{open.title}</h3>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                {[["Location", open.location], ["Client", open.client], ["Services", open.services], ["Completion", open.year]].map(([key, value]) => (
                  <div key={key} className="rounded-xl bg-[color:var(--color-surface-alt)] p-4">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--color-mute)]">{key}</dt>
                    <dd className="mt-1 text-sm font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function WhyUs() {
  return (
    <section className="relative py-24 md:py-32 bg-[color:var(--color-ink)] text-white overflow-hidden grain">
      {/* faint blueprint */}
      <svg aria-hidden viewBox="0 0 1200 400" className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.05]" fill="none">
        <g stroke="currentColor" strokeWidth="1">
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i} x1={i * 60} y1="0" x2={i * 60} y2="400" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={"h" + i} x1="0" y1={i * 60} x2="1200" y2={i * 60} />
          ))}
        </g>
      </svg>

      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="eyebrow mb-5 !text-[color:var(--color-accent-yellow)]">Why Choose Us</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em]">
            Engineering discipline.<br />Turnkey accountability.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, k: <><Counter to={54} />+</>, t: "Years", d: "Trusted since 1971 by utilities and industry." },
            { icon: Globe, k: "Pan India", t: "Execution", d: "Projects delivered across every major state." },
            { icon: Zap, k: "Turnkey", t: "EPC Solutions", d: "Design, build, test, commission and maintain." },
            { icon: Users, k: "Engineers", t: "In-House Team", d: "Certified electrical engineers on every site." },
          ].map((c) => {
            const I = c.icon;
            return (
              <div key={c.t} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm hover:border-[color:var(--color-accent-yellow)]/60 transition-colors">
                <I className="h-7 w-7 text-[color:var(--color-accent-yellow)]" strokeWidth={2} />
                <div className="mt-6 font-display text-5xl font-bold leading-none">{c.k}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] font-semibold text-white/60">{c.t}</div>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">{c.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section className="py-16 border-y border-line bg-white overflow-hidden">
      <div className="container-x mb-8">
        <div className="text-center text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--color-mute)]">
          Trusted by leading government, industrial & commercial clients
        </div>
      </div>
      <div className="relative py-3">
        <div className="flex w-max animate-[marquee_45s_linear_infinite] gap-5 px-8 hover:[animation-play-state:paused]">
          {row.map((client, index) => {
            const monogram = client.name.length <= 5
              ? client.name
              : client.name.split(/\s+/).map((word) => word[0]).slice(0, 2).join("");

            return (
              <div
                key={`${client.name}-${index}`}
                aria-hidden={index >= CLIENTS.length}
                className="group flex min-w-[210px] items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[color:var(--color-brand-50)] font-display text-xs font-bold tracking-tight text-[color:var(--color-brand)] transition-colors group-hover:bg-[color:var(--color-brand)] group-hover:text-white">
                  {monogram}
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-[color:var(--color-mute)]">
                    Trusted Partner
                  </div>
                  <div className="mt-1 whitespace-nowrap font-display text-lg font-bold tracking-tight text-[color:var(--color-ink)]">
                    {client.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const cur = TESTIMONIALS[i];
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[color:var(--color-surface-alt)]">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20 items-center">
        <div>
          <div className="eyebrow mb-5">Client Voices</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.03em]">
            What our clients say.
          </h2>
          <div className="mt-8 flex gap-2">
            <button aria-label="Previous" onClick={() => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white hover:bg-[color:var(--color-ink)] hover:text-white transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button aria-label="Next" onClick={() => setI((v) => (v + 1) % TESTIMONIALS.length)} className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white hover:bg-[color:var(--color-ink)] hover:text-white transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative rounded-[28px] border border-white/60 bg-white/60 backdrop-blur-xl p-8 md:p-12 shadow-[var(--shadow-card)]">
          <Quote className="h-10 w-10 text-[color:var(--color-brand)]/20" strokeWidth={1.5} />
          <div key={i} className="mt-4 animate-in fade-in-50 duration-500">
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight text-[color:var(--color-ink)]">
              "{cur.quote}"
            </p>
            <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--color-brand)] text-white font-display font-bold">
                  {cur.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="font-display font-bold">{cur.name}</div>
                  <div className="text-xs text-[color:var(--color-mute)]">{cur.role}</div>
                </div>
              </div>
              <div className="flex gap-0.5 text-[color:var(--color-accent-yellow)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <div className="eyebrow mb-5">Journal</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em]">
              Notes from the field.
            </h2>
          </div>
          <a href="#" className="btn-ghost">All Articles <ArrowRight className="h-4 w-4" /></a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {BLOG.map((b) => (
            <article key={b.title} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={b.img} alt={b.title} loading="lazy" width={1000} height={700} className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[color:var(--color-brand)]">{b.tag}</span>
                <span className="text-[10px] text-[color:var(--color-mute)]">· {b.read}</span>
              </div>
              <h3 className="mt-3 font-display text-xl md:text-2xl font-bold tracking-tight leading-snug group-hover:text-[color:var(--color-brand)] transition-colors">
                {b.title}
              </h3>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                Read more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <div className="bg-white text-[color:var(--color-ink)]">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyUs />
        <Clients />
        <Testimonials />
        <Blog />
      </main>
      <SiteFooter />
      <Toaster position="bottom-right" richColors />

    </div>
  );
}

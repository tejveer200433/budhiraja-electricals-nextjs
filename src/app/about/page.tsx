/* eslint-disable @next/next/no-html-link-for-pages */

import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Download,
  Handshake,
  Lightbulb,
  Mail,
  Phone,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";

const aboutImg = "/images/about-team.jpg";
const substationImg = "/images/project-substation.jpg";
import { SitePageShell } from "@/components/site-page-shell";

const VALUES = [
  {
    icon: Target,
    title: "Accountability",
    text: "Clear ownership from design coordination through testing, commissioning and handover.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & quality",
    text: "Disciplined execution, documented checks and attention to the standards each project demands.",
  },
  {
    icon: Lightbulb,
    title: "Practical innovation",
    text: "Modern technology selected for reliability, maintainability and real operating value.",
  },
  {
    icon: Handshake,
    title: "Client focus",
    text: "Responsive communication and solutions shaped around the client’s operational priorities.",
  },
];

const TIMELINE = [
  {
    label: "1971",
    title: "The company is established",
    text: "Budhiraja Electricals begins its journey in commercial and industrial electrical contracting.",
  },
  {
    label: "Growth",
    title: "Turnkey power capabilities expand",
    text: "The business grows across substations, distribution, switchgear, controls and maintenance services.",
  },
  {
    label: "Major projects",
    title: "Sports and public infrastructure",
    text: "Delivery expands into international-standard stadium lighting, government institutions and public facilities.",
  },
  {
    label: "Today",
    title: "Integrated infrastructure solutions",
    text: "Power, lighting, automation, security, access and parking systems are coordinated through one project team.",
  },
];

const CREDENTIALS = [
  {
    title: "Class-I Electrical Contractor",
    text: "Registered capability for HT and LT electrical works and turnkey project execution.",
  },
  {
    title: "C&S Electric Channel Partner",
    text: "Authorized OEM-backed supply and support for bus trunking, rising mains, panels and switchgear.",
  },
  {
    title: "IS / IEC aligned solutions",
    text: "Products and assemblies selected to meet applicable Indian and international standards.",
  },
  {
    title: "Type-tested assemblies",
    text: "OEM certification, warranty support and service assurance for specified product systems.",
  },
];

export default function AboutPage() {
  return (
    <SitePageShell>
      <section className="relative overflow-hidden bg-white pb-20 pt-14 md:pb-28 md:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-56 h-[540px] w-[540px] rounded-full bg-[color:var(--color-brand-50)] blur-3xl"
        />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="eyebrow mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />
              Established in 1971
            </div>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
              Engineering trust into every connection.
            </h1>
            <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-[color:var(--color-mute)]">
              Budhiraja Electricals is a Class-I electrical contractor delivering turnkey power,
              lighting and integrated infrastructure solutions for government, industrial and
              commercial clients across India.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="/projects" className="btn-primary">
                Explore our projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/contact" className="btn-ghost">Start a conversation</a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8 sm:grid-cols-4">
              {[
                ["1971", "Established"],
                ["Class-I", "Contractor"],
                ["66 kV", "Capability"],
                ["Pan India", "Execution"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-bold tracking-tight">{value}</dt>
                  <dd className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--color-mute)]">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-[color:var(--color-ink)] shadow-[0_30px_80px_-35px_rgb(0_0_0_/_0.35)]">
              <img
                src={aboutImg}
                alt="Budhiraja Electricals engineering team reviewing project plans"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 text-white">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
                  Our approach
                </div>
                <div className="mt-2 font-display text-2xl font-bold">
                  Design. Build. Test. Commission. Maintain.
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-4 flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-card)] sm:left-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--color-accent-yellow)] text-[color:var(--color-ink)]">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-sm font-bold">Five decades of experience</div>
                <div className="text-[11px] text-[color:var(--color-mute)]">Built across generations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-surface-alt)] py-20 md:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative">
            <div className="aspect-[5/4] overflow-hidden rounded-[28px]">
              <img
                src={substationImg}
                alt="Electrical substation infrastructure"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-5 max-w-[240px] rounded-2xl bg-[color:var(--color-brand)] p-5 text-white shadow-[var(--shadow-soft)]">
              <Zap className="h-6 w-6" />
              <p className="mt-3 font-display text-lg font-bold leading-snug">
                Powering infrastructure that people depend on.
              </p>
            </div>
          </div>

          <div>
            <div className="eyebrow mb-5">Our story</div>
            <h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">
              Experience that moves projects forward.
            </h2>
            <p className="mt-6 leading-relaxed text-[color:var(--color-mute)]">
              What began in 1971 has grown into a multidisciplinary electrical engineering business.
              Today, Budhiraja Electricals works across substations, distribution, sports lighting,
              industrial electrification, automation, panels, security, access and parking systems.
            </p>
            <p className="mt-4 leading-relaxed text-[color:var(--color-mute)]">
              Our role is straightforward: bring engineering, procurement and site execution together
              so clients have one responsible team from planning to handover.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Engineering-led project planning",
                "In-house project coordination",
                "OEM-backed product solutions",
                "Maintenance and lifecycle support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-brand)]" />
                  <span className="text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <div className="eyebrow mb-5">Our journey</div>
              <h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">
                Built over decades. Ready for what comes next.
              </h2>
              <p className="mt-5 leading-relaxed text-[color:var(--color-mute)]">
                The company has evolved with the needs of India&apos;s infrastructure while keeping the same focus on dependable execution.
              </p>
            </div>

            <ol className="relative space-y-5 before:absolute before:bottom-10 before:left-[25px] before:top-10 before:w-px before:bg-line">
              {TIMELINE.map((item, index) => (
                <li key={item.label} className="relative grid grid-cols-[52px_1fr] gap-5 rounded-3xl border border-line bg-white p-5 sm:p-6">
                  <div className="relative z-10 grid h-[52px] w-[52px] place-items-center rounded-2xl bg-[color:var(--color-brand)] font-display text-sm font-bold text-white shadow-[var(--shadow-soft)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="pt-1">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--color-brand)]">{item.label}</div>
                    <h3 className="mt-2 font-display text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-mute)]">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] py-20 text-white md:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <div className="eyebrow mb-5 !text-[color:var(--color-accent-yellow)]">Leadership & delivery</div>
              <h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">
                Direct access to the people responsible for delivery.
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-white/65">
                Project enquiries are connected to the appropriate engineering and delivery team, keeping communication clear from the first discussion onward.
              </p>

              <div className="mt-9 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur sm:p-7">
                <div className="flex items-center gap-4">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[color:var(--color-brand)] font-display text-xl font-bold">KB</div>
                  <div>
                    <h3 className="font-display text-xl font-bold">Karan Budhiraja</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Project & business contact</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a href="tel:+919811511737" className="flex items-center gap-3 rounded-xl bg-white/[0.06] p-4 text-sm font-semibold hover:bg-white/[0.1]"><Phone className="h-4 w-4 text-[color:var(--color-accent-yellow)]" />+91 98115 11737</a>
                  <a href="mailto:info@budhirajaelectricals.com" className="flex items-center gap-3 rounded-xl bg-white/[0.06] p-4 text-sm font-semibold hover:bg-white/[0.1]"><Mail className="h-4 w-4 text-[color:var(--color-accent-yellow)]" />Email the team</a>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4 rounded-2xl border border-white/10 p-5">
                <Users className="h-6 w-6 shrink-0 text-[color:var(--color-accent-yellow)]" />
                <p className="text-sm leading-relaxed text-white/65"><strong className="text-white">One coordinated team:</strong> engineering, project management, procurement, installation, testing and maintenance.</p>
              </div>
            </div>

            <div>
              <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="eyebrow mb-3 !text-[color:var(--color-accent-yellow)]">Credentials</div>
                  <h2 className="font-display text-3xl font-bold">Qualified. Authorized. Supported.</h2>
                </div>
                <a href="/Budhiraja-Electricals-Company-Profile.pdf" download className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-accent-yellow)] hover:text-white">
                  <Download className="h-4 w-4" /> Download profile
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {CREDENTIALS.map((item, index) => (
                  <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition-colors hover:border-[color:var(--color-accent-yellow)]/45">
                    <div className="flex items-center justify-between">
                      <ShieldCheck className="h-6 w-6 text-[color:var(--color-accent-yellow)]" />
                      <span className="font-display text-xs font-bold text-white/30">0{index + 1}</span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{item.text}</p>
                  </article>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-white/40">
                Supporting authorization and product-compliance documentation can be shared during tender or vendor-qualification review.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-5">What guides us</div>
            <h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">
              Strong engineering starts with strong values.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="group rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-brand)]/30 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl bg-[color:var(--color-brand-50)] text-[color:var(--color-brand)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-xs font-bold text-[color:var(--color-mute)]/60">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-mute)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[32px] bg-[color:var(--color-ink)] px-7 py-12 text-white sm:px-12 md:py-16 lg:px-16">
            <div aria-hidden="true" className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[color:var(--color-brand)]/35 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 text-[color:var(--color-accent-yellow)]">
                  <Building2 className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em]">Build with us</span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Have an electrical infrastructure project in mind?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65">
                  Share the scope, location and timeline. Our team will connect you with the right technical lead.
                </p>
              </div>
              <a href="/contact" className="btn-yellow shrink-0">
                Discuss your project <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}

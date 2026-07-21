import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Cable,
  CalendarDays,
  Car,
  CheckCircle2,
  CircuitBoard,
  ClipboardCheck,
  Cpu,
  Download,
  Factory,
  Handshake,
  KeyRound,
  LayoutGrid,
  Lightbulb,
  Shield,
  ShieldCheck,
  TreePine,
  Wrench,
  Zap,
} from "lucide-react";

const heroImg = "/images/hero-substation.jpg";
const aboutTeamImg = "/images/about-team.jpg";
const blogOneImg = "/images/blog-1.jpg";
const blogTwoImg = "/images/blog-2.jpg";
const blogThreeImg = "/images/blog-3.jpg";
const commercialImg = "/images/project-commercial.jpg";
const governmentImg = "/images/project-government.jpg";
const industrialImg = "/images/project-industrial.jpg";
const infrastructureImg = "/images/project-infrastructure.jpg";
const stadiumImg = "/images/project-stadium.jpg";
const substationImg = "/images/project-substation.jpg";
import { SitePageShell } from "@/components/site-page-shell";
import { TrackedLink } from "@/components/tracked-link";

const SERVICES = [
  {
    id: "electrical-substations",
    category: "Power systems",
    icon: Zap,
    image: substationImg,
    title: "Electrical Substations",
    summary: "Turnkey substations up to 66 kV, coordinated from engineering through energisation.",
    points: ["Design and equipment coordination", "Supply, installation and cabling", "Testing and commissioning"],
  },
  {
    id: "power-distribution",
    category: "Power systems",
    icon: Cable,
    image: heroImg,
    title: "Power Distribution",
    summary: "HT and LT distribution networks engineered for reliable commercial and industrial operation.",
    points: ["Primary and secondary extensions", "Cable systems and terminations", "Emergency restoration"],
  },
  {
    id: "industrial-electrification",
    category: "Power systems",
    icon: Factory,
    image: industrialImg,
    title: "Industrial Electrification",
    summary: "Complete plant and manufacturing-campus electrification with coordinated equipment power.",
    points: ["Plant power infrastructure", "Equipment and process wiring", "Utility coordination"],
  },
  {
    id: "electrical-panels",
    category: "Power systems",
    icon: CircuitBoard,
    image: blogTwoImg,
    title: "Electrical Panels",
    summary: "LT, MCC, PCC, APFC and custom panels for safe control and distribution.",
    points: ["Design and fabrication", "Testing and labelling", "Installation and integration"],
  },
  {
    id: "stadium-lighting",
    category: "Lighting",
    icon: Lightbulb,
    image: stadiumImg,
    title: "Stadium Lighting",
    summary: "International-standard sports lighting for cricket, football, hockey and athletics venues.",
    points: ["LED mast floodlighting", "DMX lighting controls", "Testing and aiming"],
  },
  {
    id: "landscape-lighting",
    category: "Lighting",
    icon: TreePine,
    image: infrastructureImg,
    title: "Landscape & Architectural Lighting",
    summary: "Exterior, facade, landscape and fountain lighting designed for safety and visual impact.",
    points: ["Facade illumination", "Landscape and pathway lighting", "Programmable fountain lighting"],
  },
  {
    id: "bus-trunking",
    category: "Distribution products",
    icon: LayoutGrid,
    image: commercialImg,
    title: "Bus Trunking Systems",
    summary: "OEM-backed bus ducts, rising mains and trackway systems for high-current applications.",
    points: ["Sandwich and air-insulated systems", "Plug-in bus ducts", "High-rise rising mains"],
  },
  {
    id: "automation-controls",
    category: "Smart systems",
    icon: Cpu,
    image: blogThreeImg,
    title: "Automation & Controls",
    summary: "PLC, DCS, BMS and integrated controls for efficient infrastructure and industrial operation.",
    points: ["PLC and DCS systems", "Control-panel integration", "Monitoring and automation"],
  },
  {
    id: "security-solutions",
    category: "Smart systems",
    icon: Shield,
    image: governmentImg,
    title: "Smart Security Solutions",
    summary: "Integrated surveillance, perimeter and command solutions for critical facilities and public venues.",
    points: ["CCTV and video management", "Perimeter protection", "Security screening systems"],
  },
  {
    id: "access-control",
    category: "Smart systems",
    icon: KeyRound,
    image: aboutTeamImg,
    title: "Access Control",
    summary: "Controlled pedestrian, staff and vehicle access for enterprise and public infrastructure.",
    points: ["Turnstiles and smart doors", "Vehicle access management", "Attendance integration"],
  },
  {
    id: "parking-solutions",
    category: "Smart systems",
    icon: Car,
    image: commercialImg,
    title: "Parking Solutions",
    summary: "Parking management, guidance and automated systems for efficient vehicle movement.",
    points: ["Parking guidance systems", "Permit and revenue control", "Stack parking solutions"],
  },
  {
    id: "maintenance-services",
    category: "Lifecycle support",
    icon: Wrench,
    image: blogOneImg,
    title: "Maintenance Services",
    summary: "Preventive and corrective support that protects equipment performance throughout its lifecycle.",
    points: ["Preventive maintenance", "Equipment relocation and alteration", "Emergency response"],
  },
];

const PROCESS = [
  ["01", "Understand", "Site, scope and operating priorities"],
  ["02", "Engineer", "Design, coordination and product selection"],
  ["03", "Deliver", "Supply, installation and project controls"],
  ["04", "Commission", "Testing, documentation and handover"],
  ["05", "Support", "Maintenance and lifecycle assistance"],
];

const SPECIALISED_SYSTEMS = [
  {
    icon: CircuitBoard,
    title: "Intelligent Traffic & Toll Management",
    text: "Integrated lane, highway-traffic and fleet-management systems designed for reliable operations and transparent revenue control.",
    tags: ["Toll management", "HTMS", "Fleet systems"],
  },
  {
    icon: Shield,
    title: "ANPR, UVSS & Vehicle Security",
    text: "Advanced vehicle identification, under-vehicle scanning and automated access solutions for high-security entrances.",
    tags: ["ANPR", "UVSS", "Boom barriers"],
  },
  {
    icon: LayoutGrid,
    title: "E-Ticketing & Digital Information",
    text: "Connected ticketing, information-display and queue-management systems for stadiums, public venues and transport facilities.",
    tags: ["E-ticketing", "Smart displays", "Queue management"],
  },
];

export default function ServicesPage() {
  return (
    <SitePageShell>
      <section className="relative overflow-hidden bg-white pb-20 pt-14 md:pb-28 md:pt-20">
        <div className="pointer-events-none absolute -left-48 -top-64 h-[560px] w-[560px] rounded-full bg-[color:var(--color-brand-50)] blur-3xl" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="eyebrow mb-6"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />Engineering capabilities</div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">One partner across the electrical lifecycle.</h1>
            <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-[color:var(--color-mute)]">From substations and distribution to lighting, automation and smart infrastructure, our teams coordinate engineering, supply, installation, testing and support.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#service-list" className="btn-primary">Explore capabilities <ArrowRight className="h-4 w-4" /></a><a href="/contact" className="btn-ghost">Discuss your requirement</a></div>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[["66 kV", "Substations"], ["12", "Capabilities"], ["Turnkey", "Delivery"], ["Pan India", "Execution"]].map(([value, label]) => <div key={label} className="border-l-2 border-[color:var(--color-brand)] pl-4"><div className="font-display text-2xl font-bold">{value}</div><div className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--color-mute)]">{label}</div></div>)}
            </div>
          </div>

          <div className="relative mx-auto grid w-full max-w-xl grid-cols-2 gap-4 lg:mx-0">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[30px] bg-black"><img src={heroImg} alt="High-voltage electrical substation" className="h-full w-full object-cover opacity-90" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" /><div className="absolute bottom-6 left-6 text-white"><div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Power infrastructure</div><div className="mt-1 font-display text-2xl font-bold">Up to 66 kV</div></div></div>
            <div className="rounded-3xl bg-[color:var(--color-brand)] p-6 text-white"><Building2 className="h-7 w-7" /><div className="mt-8 font-display text-xl font-bold">Commercial & industrial</div><p className="mt-2 text-xs leading-relaxed text-white/70">Coordinated building and plant systems.</p></div>
            <div className="relative overflow-hidden rounded-3xl bg-black"><img src={stadiumImg} alt="Stadium lighting project" className="absolute inset-0 h-full w-full object-cover opacity-65" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" /><div className="relative flex min-h-48 h-full flex-col justify-end p-6 text-white"><div className="font-display text-xl font-bold">Sports lighting</div><p className="mt-2 text-xs text-white/70">Venue systems and controls.</p></div></div>
          </div>
        </div>
      </section>

      <section id="service-list" className="scroll-mt-24 bg-[color:var(--color-surface-alt)] py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center"><div className="eyebrow mb-5">What we deliver</div><h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">Twelve disciplines. One engineering standard.</h2><p className="mt-5 text-[color:var(--color-mute)]">Each capability can be delivered independently or coordinated as part of a turnkey package.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <article id={service.id} key={service.id} className="group relative min-h-[460px] scroll-mt-24 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img src={service.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/25" />
                  <div className="relative flex min-h-[460px] flex-col p-7 text-white">
                    <div className="flex items-start justify-between"><span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/10 text-[color:var(--color-accent-yellow)] backdrop-blur-sm"><Icon className="h-6 w-6" /></span><span className="font-display text-xs font-bold text-white/50">{String(index + 1).padStart(2, "0")}</span></div>
                    <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent-yellow)]">{service.category}</div>
                    <h3 className="mt-2 font-display text-2xl font-bold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{service.summary}</p>
                    <ul className="mt-auto space-y-2 border-t border-white/15 pt-5">{service.points.map((point) => <li key={point} className="flex items-start gap-2 text-xs font-semibold text-white/80"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-accent-yellow)]" />{point}</li>)}</ul>
                    <TrackedLink href="/contact" eventName="service_interest" eventParams={{ service: service.title, location: "services_page" }} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-accent-yellow)]">Request consultation <ArrowUpRight className="h-4 w-4" /></TrackedLink>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14 overflow-hidden rounded-[30px] bg-[color:var(--color-ink)] p-7 text-white sm:p-9 lg:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent-yellow)]">Houston Systems portfolio</div>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight">Specialised integrated systems.</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">Three focused technology capabilities for secure, connected and efficiently managed infrastructure.</p>
              </div>
              <TrackedLink href="/contact" eventName="service_interest" eventParams={{ service: "Houston Systems portfolio", location: "services_page" }} className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-accent-yellow)]">Discuss a system requirement <ArrowRight className="h-4 w-4" /></TrackedLink>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {SPECIALISED_SYSTEMS.map(({ icon: SystemIcon, title, text, tags }) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition-colors hover:border-white/25 hover:bg-white/[0.08]">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--color-accent-yellow)] text-[color:var(--color-ink)]"><SystemIcon className="h-5 w-5" /></span>
                  <h4 className="mt-6 font-display text-lg font-bold leading-snug">{title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/60">{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <div className="eyebrow mb-5">Built on accountability</div>
              <h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">Confidence before work begins.</h2>
              <p className="mt-5 max-w-lg leading-relaxed text-[color:var(--color-mute)]">Technical capability matters. So do clear ownership, recognized credentials and dependable support from first discussion through handover.</p>
              <div className="mt-8 rounded-3xl bg-[color:var(--color-ink)] p-7 text-white shadow-[var(--shadow-soft)]">
                <ShieldCheck className="h-8 w-8 text-[color:var(--color-accent-yellow)]" />
                <p className="mt-6 font-display text-2xl font-bold leading-snug">One responsible team across engineering, procurement, installation and commissioning.</p>
                <TrackedLink href="/Budhiraja-Electricals-Company-Profile.pdf" download eventName="profile_download" eventParams={{ location: "services_page" }} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-accent-yellow)]">Download company profile <Download className="h-4 w-4" /></TrackedLink>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: CalendarDays, value: "Since 1971", title: "Proven continuity", text: "More than five decades of electrical engineering and project-delivery experience." },
                { icon: ShieldCheck, value: "Class-I", title: "Qualified execution", text: "Contractor capability for complex government, industrial and commercial requirements." },
                { icon: Handshake, value: "C&S Electric", title: "Channel partner", text: "OEM-backed product selection and coordinated electrical distribution solutions." },
                { icon: ClipboardCheck, value: "End to end", title: "Documented handover", text: "Testing, commissioning, project documentation and lifecycle support are built into delivery." },
              ].map(({ icon: TrustIcon, value, title, text }) => (
                <article key={title} className="group rounded-3xl border border-line bg-[color:var(--color-surface-alt)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-brand)]/25 hover:shadow-[var(--shadow-card)]">
                  <div className="flex items-start justify-between gap-5">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[color:var(--color-brand)] shadow-sm"><TrustIcon className="h-5 w-5" /></span>
                    <span className="rounded-full bg-[color:var(--color-brand-50)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--color-brand)]">{value}</span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-mute)]">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-[color:var(--color-brand)]/15 bg-[color:var(--color-brand-50)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div><div className="font-display text-xl font-bold">Want to verify technical fit before requesting a quote?</div><p className="mt-2 text-sm text-[color:var(--color-mute)]">Share your scope, drawings or project stage directly with our team.</p></div>
            <TrackedLink href="/contact" eventName="start_project_click" eventParams={{ location: "services_page" }} className="btn-primary shrink-0">Speak with the project team <ArrowRight className="h-4 w-4" /></TrackedLink>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] py-20 text-white md:py-24">
        <div className="container-x"><div className="max-w-3xl"><div className="eyebrow mb-5 !text-[color:var(--color-accent-yellow)]">How we work</div><h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">A clear path from requirement to reliable operation.</h2></div><ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{PROCESS.map(([number, title, text]) => <li key={number} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><div className="font-display text-sm font-bold text-[color:var(--color-accent-yellow)]">{number}</div><h3 className="mt-5 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/55">{text}</p></li>)}</ol></div>
      </section>

      <section className="py-20 md:py-24"><div className="container-x"><div className="relative overflow-hidden rounded-[32px] bg-[color:var(--color-brand)] px-7 py-12 text-white sm:px-12 md:py-16"><div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><div className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">Plan your project</div><h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl">Need a coordinated electrical solution?</h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">Tell us the application, site and project stage. We’ll connect you with the appropriate technical team.</p></div><a href="/contact" className="btn-yellow shrink-0">Talk to our team <ArrowRight className="h-4 w-4" /></a></div></div></div></section>
    </SitePageShell>
  );
}

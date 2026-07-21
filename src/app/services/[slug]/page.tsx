import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { getServiceBySlug, getServiceSlugs } from "@/lib/services";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getServiceSlugs();
}

export default function ServicePage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  return (
    <main className="min-h-screen bg-[color:var(--color-surface-alt)] py-20">
      <div className="container-x">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="eyebrow mb-3">Services</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-[-0.04em]">
              {service.title}
            </h1>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-3 text-sm font-semibold transition hover:bg-[color:var(--color-brand)] hover:text-white">
            Back to homepage <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-10 xl:grid-cols-[1.5fr_0.9fr]">
          <section className="rounded-[2rem] border border-line bg-white p-10 shadow-[var(--shadow-soft)]">
            <div className="mb-8 rounded-3xl bg-[color:var(--color-brand-50)] p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-brand)]">Overview</p>
              <p className="mt-5 text-lg leading-8 text-[color:var(--color-ink-2)]">{service.desc}</p>
            </div>

            <div className="space-y-8 text-[color:var(--color-ink-2)]">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight">What we deliver</h2>
                <p className="mt-4 leading-relaxed text-[color:var(--color-mute)]">
                  {service.detail}
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold tracking-tight">Our approach</h3>
                <p className="mt-4 leading-relaxed text-[color:var(--color-mute)]">
                  We combine technical discipline, site-focused execution and strong project controls so every stage of delivery aligns with client expectations. This includes risk management, coordination with stakeholders and detailed testing before handover.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold tracking-tight">Why Budhiraja</h3>
                <ul className="mt-4 space-y-3 text-[color:var(--color-mute)]">
                  <li className="flex gap-3"><span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[color:var(--color-brand)]" /> Proven track record across utilities, industrial and government projects.</li>
                  <li className="flex gap-3"><span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[color:var(--color-brand)]" /> Single-source execution for engineering, procurement and commissioning.</li>
                  <li className="flex gap-3"><span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[color:var(--color-brand)]" /> Strong safety, quality and compliance systems built into every delivery.</li>
                </ul>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-line bg-white p-8 shadow-[var(--shadow-soft)]">
              <h2 className="font-display text-xl font-bold tracking-tight">Key offerings</h2>
              <ul className="mt-5 space-y-3 text-[color:var(--color-mute)]">
                {service.offerings.map((item) => (
                  <li key={item} className="rounded-2xl bg-[color:var(--color-surface-alt)] p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-line bg-white p-8 shadow-[var(--shadow-soft)]">
              <h2 className="font-display text-xl font-bold tracking-tight">Suitable sectors</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {service.sectors.map((sector) => (
                  <span key={sector} className="rounded-full border border-line bg-[color:var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[color:var(--color-ink)]">
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-line bg-[color:var(--color-brand)] p-8 text-white shadow-[var(--shadow-soft)]">
              <p className="text-sm uppercase tracking-[0.18em] text-[rgba(255,255,255,0.75)]">Project success</p>
              <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em]">Delivered across India</h3>
              <p className="mt-4 leading-relaxed text-white/85">
                Budhiraja has executed complex power and electrical projects for government, industrial and commercial clients since 1971.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

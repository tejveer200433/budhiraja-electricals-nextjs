import { ArrowRight, ArrowUpRight, BookOpen, Clock3, Factory, ShieldCheck, Zap } from "lucide-react";

import { SitePageShell } from "@/components/site-page-shell";
import { ARTICLES } from "@/data/articles";

const TOPICS = [
  { icon: Zap, title: "Power engineering", text: "Substations, distribution and dependable electrical-system planning." },
  { icon: ShieldCheck, title: "Safety & reliability", text: "Practical thinking for safer operation, protection and maintenance." },
  { icon: Factory, title: "Infrastructure delivery", text: "Coordination lessons across industrial, commercial and public projects." },
];

export default function BlogPage() {
  const articles = ARTICLES;

  return (
    <SitePageShell>
      <section className="relative overflow-hidden bg-white pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="pointer-events-none absolute -right-48 -top-64 h-[560px] w-[560px] rounded-full bg-[color:var(--color-brand-50)] blur-3xl" />
        <div className="container-x relative">
          <div className="max-w-4xl"><div className="eyebrow mb-6"><BookOpen className="h-3.5 w-3.5" />Engineering journal</div><h1 className="font-display text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">Practical knowledge from the field.</h1><p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-[color:var(--color-mute)]">Clear perspectives on electrical engineering, safety and infrastructure—written for the people who plan, operate and deliver complex projects.</p></div>

        </div>
      </section>

      <section className="bg-[color:var(--color-surface-alt)] py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div className="max-w-3xl"><div className="eyebrow mb-5">Latest insights</div><h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">Ideas for safer, smarter delivery.</h2></div><p className="max-w-sm text-sm leading-relaxed text-[color:var(--color-mute)]">Technical subjects explained with a practical project and operations perspective.</p></div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="group flex overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex w-full flex-col">
                  <a href={`/blog/${article.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-black">
                    <img src={article.image} alt={article.title} loading="lazy" className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">{article.tag}</span>
                  </a>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-xs text-[color:var(--color-mute)]"><Clock3 className="h-4 w-4" />{article.read}</div>
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug"><a href={`/blog/${article.slug}`} className="hover:text-[color:var(--color-brand)]">{article.title}</a></h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-[color:var(--color-mute)]">{article.excerpt}</p>
                    <a href={`/blog/${article.slug}`} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[color:var(--color-brand)]">Read article <ArrowUpRight className="h-4 w-4" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x"><div className="mx-auto max-w-3xl text-center"><div className="eyebrow mb-5">What we explore</div><h2 className="font-display text-4xl font-bold tracking-[-0.035em] md:text-5xl">Knowledge grounded in delivery.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-3">{TOPICS.map(({ icon: TopicIcon, title, text }, index) => <article key={title} className="rounded-3xl border border-line p-7 transition-colors hover:border-[color:var(--color-brand)]/30"><div className="flex items-center justify-between"><span className="grid h-13 w-13 place-items-center rounded-2xl bg-[color:var(--color-brand-50)] text-[color:var(--color-brand)]"><TopicIcon className="h-6 w-6" /></span><span className="font-display text-xs font-bold text-[color:var(--color-mute)]/50">0{index + 1}</span></div><h3 className="mt-8 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[color:var(--color-mute)]">{text}</p></article>)}</div></div>
      </section>

      <section className="pb-20 md:pb-24"><div className="container-x"><div className="flex flex-col gap-7 rounded-[32px] bg-[color:var(--color-brand)] p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between"><div><div className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Need technical guidance?</div><h2 className="mt-4 font-display text-3xl font-bold">Discuss your requirement with our engineering team.</h2><p className="mt-3 text-sm text-white/70">Share the project stage, application and questions you need resolved.</p></div><a href="/contact" className="btn-yellow shrink-0">Start a conversation <ArrowRight className="h-4 w-4" /></a></div></div></section>
    </SitePageShell>
  );
}

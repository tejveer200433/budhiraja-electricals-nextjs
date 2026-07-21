/* eslint-disable @next/next/no-html-link-for-pages */

import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, CheckCircle2, Clock3, Info } from "lucide-react";

import { SitePageShell } from "@/components/site-page-shell";
import { ARTICLES, getArticle } from "@/data/articles";

function sectionId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: articleId } = await params;
  const article = getArticle(articleId);

  if (!article) {
    return (
      <SitePageShell>
        <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center"><div className="eyebrow mb-5">Article not found</div><h1 className="font-display text-4xl font-bold">This insight is unavailable.</h1><a href="/blog" className="btn-primary mt-8"><ArrowLeft className="h-4 w-4" />Back to the journal</a></section>
      </SitePageShell>
    );
  }

  const related = ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <SitePageShell>
      <article>
        <header className="relative min-h-[620px] overflow-hidden bg-black text-white">
          <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          <div className="container-x relative flex min-h-[620px] flex-col justify-between py-10 md:py-14">
            <a href="/blog" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"><ArrowLeft className="h-4 w-4" />Engineering journal</a>
            <div className="max-w-5xl pb-8"><div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em]"><span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur">{article.tag}</span><span className="flex items-center gap-1.5 text-[color:var(--color-accent-yellow)]"><Clock3 className="h-3.5 w-3.5" />{article.read}</span></div><h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-[72px]">{article.title}</h1><div className="mt-7 flex items-center gap-3 text-sm text-white/60"><span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--color-brand)] font-display text-xs font-bold text-white">BE</span><span>Budhiraja Electricals Engineering Team</span></div></div>
          </div>
        </header>

        <section className="py-20 md:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-3xl border border-line bg-[color:var(--color-surface-alt)] p-6"><div className="flex items-center gap-2 font-display font-bold"><BookOpen className="h-5 w-5 text-[color:var(--color-brand)]" />In this article</div><nav className="mt-5 border-l border-line">{article.sections.map((section, index) => <a key={section.heading} href={`#${sectionId(section.heading)}`} className="block border-l-2 border-transparent py-2 pl-4 text-xs font-semibold leading-relaxed text-[color:var(--color-mute)] transition-colors hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]">{String(index + 1).padStart(2, "0")}. {section.heading}</a>)}</nav></div>
              <div className="mt-5 rounded-3xl bg-[color:var(--color-ink)] p-6 text-white"><div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent-yellow)]">Have a project question?</div><p className="mt-3 text-sm leading-relaxed text-white/60">Connect with our team for a discussion grounded in your site and requirements.</p><a href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-accent-yellow)]">Ask our team <ArrowRight className="h-4 w-4" /></a></div>
            </aside>

            <div className="min-w-0">
              <p className="border-l-4 border-[color:var(--color-brand)] pl-6 font-display text-2xl font-semibold leading-relaxed text-[color:var(--color-ink-2)] md:text-3xl">{article.introduction}</p>
              <div className="mt-14 space-y-14">{article.sections.map((section, index) => <section key={section.heading} id={sectionId(section.heading)} className="scroll-mt-28"><div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--color-brand)]">Section {String(index + 1).padStart(2, "0")}</div><h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.025em] md:text-4xl">{section.heading}</h2><div className="mt-6 space-y-5">{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-[17px] leading-[1.85] text-[color:var(--color-mute)]">{paragraph}</p>)}</div>{section.points && <ul className="mt-7 grid gap-3 sm:grid-cols-2">{section.points.map((point) => <li key={point} className="flex items-start gap-3 rounded-2xl bg-[color:var(--color-surface-alt)] p-4 text-sm font-semibold"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-brand)]" />{point}</li>)}</ul>}</section>)}</div>
              <div className="mt-14 flex gap-4 rounded-3xl border border-[color:var(--color-brand)]/15 bg-[color:var(--color-brand-50)] p-6"><Info className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-brand)]" /><p className="text-sm leading-relaxed text-[color:var(--color-mute)]"><strong className="text-[color:var(--color-ink)]">Technical note:</strong> This article provides general information. Electrical design, protection and safety decisions should be based on project-specific assessment by qualified professionals.</p></div>
            </div>
          </div>
        </section>
      </article>

      <section className="bg-[color:var(--color-surface-alt)] py-20 md:py-24">
        <div className="container-x"><div className="flex items-end justify-between gap-6"><div><div className="eyebrow mb-4">Continue reading</div><h2 className="font-display text-3xl font-bold md:text-4xl">Related insights</h2></div><a href="/blog" className="hidden items-center gap-2 text-sm font-semibold text-[color:var(--color-brand)] sm:inline-flex">View journal <ArrowRight className="h-4 w-4" /></a></div><div className="mt-9 grid gap-6 md:grid-cols-2">{related.map((item) => <a key={item.slug} href={`/blog/${item.slug}`} className="group grid overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)] sm:grid-cols-[0.42fr_0.58fr]"><div className="min-h-56 overflow-hidden bg-black"><img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" /></div><div className="flex flex-col justify-center p-6"><div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-brand)]">{item.tag}</div><h3 className="mt-3 font-display text-xl font-bold leading-tight">{item.title}</h3><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Read article <ArrowUpRight className="h-4 w-4" /></span></div></a>)}</div></div>
      </section>
    </SitePageShell>
  );
}

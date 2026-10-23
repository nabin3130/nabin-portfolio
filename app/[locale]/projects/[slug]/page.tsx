import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { messages } from "@/data/messages";
import { projects } from "@/data/portfolio";
import { isLocale, pageMetadata, publicPath } from "@/lib/locale";

export function generateStaticParams() {
  return (["en", "ko"] as const).flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = projects.find((item) => item.slug === slug);
  const copy = messages[locale].projects[slug as keyof typeof messages.en.projects];
  if (!project || !copy) return {};

  const title = `${project.title} | ${locale === "ko" ? "김나빈" : "Nabin Kim"}`;
  return pageMetadata(locale, { title, description: copy.summary, path: `/projects/${project.slug}` });
}

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = projects.find((item) => item.slug === slug);
  const copy = messages[locale].projects[slug as keyof typeof messages.en.projects];
  if (!project || !copy) notFound();
  const labels = messages[locale].project;
  const path = `/projects/${project.slug}`;

  return (
    <main>
      <Header locale={locale} path={path} />
      <article className="case shell">
        <Link href={publicPath(locale, "/work/ecosystem")} className="back">
          {labels.back}
        </Link>
        <p className="eyebrow">{copy.subtitle}</p>
        <h1>{project.title}</h1>
        <p className="case-lead">{copy.summary}</p>
        <div className="case-meta">
          <div>
            <span>{labels.role}</span>
            <p>{copy.role}</p>
          </div>
          <div>
            <span>{labels.capabilities}</span>
            <p>{copy.tags.join(" · ")}</p>
          </div>
        </div>
        <section>
          <p className="eyebrow">{labels.challenge}</p>
          <h2>{copy.challenge}</h2>
        </section>
        <section>
          <p className="eyebrow">{labels.actions}</p>
          <ol>
            {copy.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ol>
        </section>
        <section>
          <p className="eyebrow">{labels.outcomes}</p>
          <div className="outcome-grid">
            {copy.outcomes.map((outcome) => (
              <div key={outcome}>{outcome}</div>
            ))}
          </div>
        </section>
        <section>
          <p className="eyebrow">{labels.artifacts}</p>
          <div className="artifact-grid">
            {copy.artifacts.map((artifact) => (
              <div key={artifact}>
                <span>{labels.placeholder}</span>
                <p>{artifact}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="takeaway">
          <p className="eyebrow">{labels.takeaway}</p>
          <h2>{copy.takeaway}</h2>
        </section>
      </article>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { projects } from "@/data/portfolio";

export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return {};

  const title = `${project.title} | Nabin Kim`;
  const url = `/projects/${project.slug}`;

  return {
    title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: { title, description: project.summary, url },
    twitter: { title, description: project.summary },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  return <main><Header />
    <article className="case shell">
      <Link href="/work/ecosystem" className="back">← Back to work</Link>
      <p className="eyebrow">{project.subtitle}</p><h1>{project.title}</h1><p className="case-lead">{project.summary}</p>
      <div className="case-meta"><div><span>Role & scope</span><p>{project.role}</p></div><div><span>Capabilities</span><p>{project.tags.join(" · ")}</p></div></div>
      <section><p className="eyebrow">THE CHALLENGE</p><h2>{project.challenge}</h2></section>
      <section><p className="eyebrow">WHAT I DID</p><ol>{project.actions.map(a => <li key={a}>{a}</li>)}</ol></section>
      <section><p className="eyebrow">OUTCOMES</p><div className="outcome-grid">{project.outcomes.map(o => <div key={o}>{o}</div>)}</div></section>
      <section><p className="eyebrow">SELECTED ARTIFACTS</p><div className="artifact-grid">{project.artifacts.map(a => <div key={a}><span>PLACEHOLDER</span><p>{a}</p></div>)}</div></section>
      <section className="takeaway"><p className="eyebrow">TRANSFERABLE CAPABILITY</p><h2>{project.takeaway}</h2></section>
    </article>
  </main>
}

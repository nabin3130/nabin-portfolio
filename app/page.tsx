import Link from "next/link";
import { Header } from "@/components/Header";
import { expertise, metrics, projects, supportingWork } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero shell">
        <p className="eyebrow">GO-TO-MARKET · ECOSYSTEM GROWTH</p>
        <h1>Turning complex Web3 products into experiences people understand and adopt.</h1>
        <div className="hero-bottom">
          <p>I connect products with users, partners, creators, and communities through product education, partnerships, content, and global programs.</p>
          <div className="actions"><a href="#projects" className="button primary">View selected work</a><a href="#contact" className="button">Contact me</a></div>
        </div>
      </section>

      <section className="metrics shell">
        {metrics.map((m) => <div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}
      </section>

      <section id="expertise" className="section shell">
        <div className="section-heading"><p className="eyebrow">CORE EXPERTISE</p><h2>How I move products closer to the people they need.</h2></div>
        <div className="expertise-grid">{expertise.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section id="projects" className="section shell">
        <div className="section-heading"><p className="eyebrow">SELECTED PROJECTS</p><h2>Three stories that show how I think and execute.</h2></div>
        <div className="project-list">{projects.map((p) => <Link href={`/projects/${p.slug}`} className="project-card" key={p.slug}><span className="project-index">{p.index}</span><div><p className="project-subtitle">{p.subtitle}</p><h3>{p.title}</h3><p>{p.summary}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div><span className="arrow">↗</span></Link>)}</div>
      </section>

      <section id="work" className="section shell">
        <div className="section-heading"><p className="eyebrow">SUPPORTING WORK</p><h2>A broader toolkit, organized by the outcome it supports.</h2></div>
        <div className="work-grid">{supportingWork.map(item => <article key={item.category}><p className="work-category">{item.category}</p><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section id="about" className="section about shell">
        <p className="eyebrow">ABOUT</p>
        <div><h2>Bilingual Web3 operator working across product, partnerships, content, and community.</h2><p>I have worked across a cryptocurrency exchange, blockchain infrastructure, ecosystem development, community programs, and early-stage products. My strongest skill is translating technical products into clear value for different audiences, then building the content, relationships, and programs that help them act.</p></div>
      </section>

      <section id="contact" className="contact shell">
        <p className="eyebrow">LET’S CONNECT</p><h2>Building something that needs a bridge between product and people?</h2>
        <div className="contact-links"><a href="mailto:hello@example.com">Email ↗</a><a href="#">LinkedIn ↗</a><a href="#">Telegram ↗</a><a href="#">Resume ↗</a></div>
      </section>
      <footer className="shell"><span>© 2026 Nabin Kim</span><span>Seoul · Open to global opportunities</span></footer>
    </main>
  );
}

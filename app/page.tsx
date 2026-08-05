import Link from "next/link";
import { Header } from "@/components/Header";
import { expertise, metrics, projects, supportingWork } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero shell">
        <p className="eyebrow">NABIN KIM · SEOUL · KR / EN</p>
        <h1>I build growth for Web3 products through partnerships, content, and community.</h1>
        <div className="hero-bottom">
          <p>Go-to-market, ecosystem growth, and product communication.</p>
          <div className="actions">
            <a href="#projects" className="button primary">View work</a>
          </div>
        </div>
      </section>

      <section className="metrics shell">
        {metrics.slice(0, 3).map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section id="expertise" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">CORE EXPERTISE</p>
          <h2>What I do.</h2>
        </div>
        <div className="expertise-grid">
          {expertise.slice(0, 4).map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">FEATURED PROJECTS</p>
          <h2>Selected case studies.</h2>
        </div>

        <div className="featured-grid">
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              className={`featured-card featured-card-${index + 1}`}
              key={project.slug}
            >
              <div className="featured-topline">
                <span>{project.index}</span>
                <span>View ↗</span>
              </div>
              <div className="featured-body">
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="work" className="section shell supporting-section">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>More of what I have built.</h2>
        </div>
        <div className="work-grid">
          {supportingWork.map((item, index) => (
            <article key={item.category}>
              <div className="work-number">0{index + 1}</div>
              <p className="work-category">{item.category}</p>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about shell">
        <p className="eyebrow">ABOUT</p>
        <div>
          <h2>7+ years across exchange, blockchain infrastructure, ecosystem, and early-stage products.</h2>
          <p>Based in Seoul. Working in Korean and English.</p>
        </div>
      </section>

      <section id="contact" className="contact shell">
        <p className="eyebrow">CONTACT</p>
        <h2>Let’s connect.</h2>
        <div className="contact-links">
          <a href="mailto:hello@example.com">Email ↗</a>
          <a href="#">LinkedIn ↗</a>
          <a href="#">Resume ↗</a>
        </div>
      </section>

      <footer className="shell">
        <span>© 2026 Nabin Kim</span>
        <span>Seoul · Open to global opportunities</span>
      </footer>
    </main>
  );
}

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
          <p>
            I connect products with users, partners, creators, and communities through
            product education, partnerships, content, and global programs.
          </p>
          <div className="actions">
            <a href="#projects" className="button primary">View selected work</a>
            <a href="#contact" className="button">Contact me</a>
          </div>
        </div>
      </section>

      <section className="metrics shell">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section id="expertise" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">CORE EXPERTISE</p>
          <h2>How I move products closer to the people they need.</h2>
        </div>
        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">FEATURED PROJECTS</p>
          <h2>Three stories that show how I think, connect, and execute.</h2>
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
                <span>Case study ↗</span>
              </div>
              <div className="featured-body">
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="work" className="section shell supporting-section">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>A broader toolkit, organized by the outcome it supports.</h2>
        </div>
        <div className="work-grid">
          {supportingWork.map((item, index) => (
            <article key={item.category}>
              <div className="work-number">0{index + 1}</div>
              <p className="work-category">{item.category}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about shell">
        <p className="eyebrow">ABOUT</p>
        <div>
          <h2>Bilingual Web3 operator working across product, partnerships, content, and community.</h2>
          <p>
            I have worked across a cryptocurrency exchange, blockchain infrastructure,
            ecosystem development, community programs, and early-stage products. My strongest
            skill is translating technical products into clear value for different audiences,
            then building the content, relationships, and programs that help them act.
          </p>
        </div>
      </section>

      <section id="contact" className="contact shell">
        <p className="eyebrow">LET’S CONNECT</p>
        <h2>Building something that needs a bridge between product and people?</h2>
        <div className="contact-links">
          <a href="mailto:hello@example.com">Email ↗</a>
          <a href="#">LinkedIn ↗</a>
          <a href="#">Telegram ↗</a>
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

import Link from "next/link";
import { Header } from "@/components/Header";
import { projects } from "@/data/portfolio";

const experience = [
  { period: "2025–", company: "Tomato", role: "Co-founder" },
  { period: "2024–", company: "CaveDAO / Kaia Chain Fund", role: "Event Host & Marketing" },
  { period: "2021–2024", company: "PiLab · Bifrost Network", role: "BD & Ecosystem" },
  { period: "2017–2019", company: "Streami · GOPAX", role: "Service Marketing" },
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero shell">
        <p className="eyebrow">NABIN KIM · SEOUL · KR / EN</p>
        <h1>Ecosystem growth, partnerships, and product marketing for Web3.</h1>
      </section>

      <section id="about" className="section about shell">
        <p className="eyebrow">ABOUT</p>
        <div>
          <h2>7+ years across crypto exchanges, blockchain infrastructure, ecosystem growth, and early-stage products.</h2>
          <p>I turn complex products into clear stories, partnerships, and programs that people can understand and join.</p>
        </div>
      </section>

      <section id="projects" className="section shell selected-projects">
        <div className="section-heading">
          <p className="eyebrow">SELECTED PROJECTS</p>
          <h2>Three projects that show how I work.</h2>
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
                <span>↗</span>
              </div>
              <div className="featured-body">
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="experience" className="section experience shell">
        <div className="section-heading">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>Where I have worked.</h2>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article key={`${item.period}-${item.company}`}>
              <span>{item.period}</span>
              <h3>{item.company}</h3>
              <p>{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="shell">
        <span>© 2026 Nabin Kim</span>
        <span>Resume · LinkedIn · Email</span>
      </footer>
    </main>
  );
}

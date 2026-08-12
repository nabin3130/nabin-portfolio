import { Header } from "@/components/Header";

export default function BeyondWorkPage() {
  return (
    <main className="beyond-page">
      <Header />

      <section className="beyond-page-content">
        <header className="beyond-page-heading">
          <p>Beyond Work</p>
          <h1>Projects and ideas I explore outside of my professional work.</h1>
        </header>

        <a
          className="digital-legacy-project"
          href="https://digital-legacy-five.vercel.app/en"
          target="_blank"
          rel="noreferrer"
        >
          <div className="digital-legacy-copy">
            <span>Personal Project</span>
            <h2>Digital Legacy</h2>
            <p>
              A personal project exploring how we manage our digital accounts
              and data after death.
            </p>
          </div>
          <div className="digital-legacy-visual">
            <img
              src="/images/beyond/logout.jpg"
              alt="Digital Legacy project homepage"
            />
          </div>
        </a>
      </section>

      <footer className="home-footer">
        <div className="home-shell">
          <span>Nabin Kim</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}

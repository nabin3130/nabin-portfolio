import { Header } from "@/components/Header";

const workItems = [
  {
    number: "01",
    title: "Ecosystem Growth",
    subtitle: "Bifrost Network",
    className: "work-visual ecosystem-visual",
  },
  {
    number: "02",
    title: "Content",
    subtitle: "PR · GitBook",
    className: "work-visual content-visual",
  },
  {
    number: "03",
    title: "Events",
    subtitle: "Global Conferences",
    className: "work-visual events-visual",
  },
  {
    number: "04",
    title: "Media",
    subtitle: "Real Homies Club",
    className: "work-visual media-visual",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="home-hero">
        <div className="home-shell hero-layout">
          <div className="hero-copy">
            <p className="hero-name">Nabin Kim</p>
            <h1>Ecosystem Growth</h1>
            <p className="hero-tagline">
              Helping blockchain projects grow.
            </p>
          </div>

          <div className="hero-profile">
            <img
              src="/images/cat-profile.svg"
              alt="Temporary cat profile"
            />
          </div>
        </div>
      </section>

      <section id="work" className="home-section">
        <div className="home-shell">
          <div className="section-title-row">
            <h2>Selected Work</h2>
            <span>Four areas of work</span>
          </div>

          <div className="work-grid">
            {workItems.map((item) => (
              <article className="work-card" key={item.number}>
                <div className={item.className}>
                  <span className="work-number">{item.number}</span>
                </div>

                <div className="work-card-copy">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="beyond" className="home-section beyond-section">
        <div className="home-shell">
          <div className="section-title-row">
            <h2>Beyond Work</h2>
            <span>A few things I care about</span>
          </div>

          <div className="beyond-grid">
            <article className="beyond-card food-card">
              <div className="beyond-visual food-visual" />

              <div className="beyond-copy">
                <p className="beyond-label">Food</p>
                <h3>Exploring local restaurants.</h3>

                <div className="beyond-links">
                  <a
                    href="https://blog.naver.com/nbk1313"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read Blog ↗
                  </a>

                  <a
                    href="https://naver.me/GArYudxL"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Watch Clips ↗
                  </a>
                </div>
              </div>
            </article>

            <article className="beyond-card fragrance-card">
              <div className="beyond-visual fragrance-visual">
              </div>

              <div className="beyond-copy">
                <p className="beyond-label">Fragrance</p>
                <span className="small-label">Current favorite</span>
                <h3>Bois d&apos;Argent</h3>
                <p>by Dior</p>
              </div>
            </article>

            <article className="beyond-card mission-card">
              <div className="beyond-visual mission-visual">

              <div className="beyond-copy">
                <p className="beyond-label">Mission</p>
                <h3>Digital Legacy Navigator</h3>
                <p>Helping people prepare their digital lives.</p>

                <a
                  className="mission-link"
                  href="https://digital-legacy-five.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project ↗
                </a>
              </div>
            </article>
          </div>
        </div>
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

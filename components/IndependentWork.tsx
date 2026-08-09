import Link from "next/link";

const independentApproach = [
  { number: "01", title: "Problem Discovery", text: "Start with a real, observed user problem." },
  { number: "02", title: "Research", text: "Use interviews and structured information to clarify it." },
  { number: "03", title: "Build", text: "Turn the insight into a focused, testable experience." },
  { number: "04", title: "Launch", text: "Prepare the product and communication for real users." },
];

const tomatoProcess = [
  { number: "01", title: "User Research", text: "Interviewed users about event discovery habits and pain points." },
  { number: "02", title: "Product Structure", text: "Structured event information and recommendation concepts." },
  { number: "03", title: "MVP Design", text: "Designed the core experience and flows in Figma." },
  { number: "04", title: "Launch Support", text: "Maintained event data and supported communication across Telegram and X." },
];

const logoutFocus = [
  "Pre-planning guidance",
  "Steps after a death",
  "Required documents",
  "Official request paths",
];

export function IndependentWork() {
  return (
    <div className="independent-work">
      <section className="work-hero independent-hero">
        <div className="work-hero-copy">
          <p className="work-kicker"><span>05</span> / Independent</p>
          <h1>Independent<br />Projects</h1>
          <p className="independent-subtitle">Product Discovery · Research · Build</p>
          <p className="work-intro">
            Exploring practical problems and shaping focused digital products
            beyond company and client work.
          </p>
        </div>

        <div className="independent-approach" aria-label="Independent product approach">
          {independentApproach.map((item) => (
            <article key={item.title}>
              <span>{item.number}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="independent-project tomato-project">
        <div className="independent-project-copy">
          <div className="project-heading-row">
            <p className="work-section-number">05.1</p>
            <span>Crypto event discovery</span>
          </div>
          <h2>Tomato</h2>
          <p className="independent-project-lead">
            An early-stage product concept that helps users find relevant crypto
            events without searching across fragmented channels.
          </p>
          <div className="project-role-row">
            <span>Role</span>
            <p>Co-founder · Product discovery · UX direction · Early-stage GTM</p>
          </div>
          <Link className="independent-project-link" href="/projects/tomato">
            View case study →
          </Link>
        </div>

        <div className="tomato-process-board">
          <div className="tomato-board-heading">
            <span>Problem to MVP</span>
            <strong>Making crypto events<br />easier to discover.</strong>
          </div>
          <div className="tomato-process-grid">
            {tomatoProcess.map((step) => (
              <article key={step.title}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="independent-project logout-project">
        <div className="independent-project-copy">
          <div className="project-heading-row">
            <p className="work-section-number">05.2</p>
            <span>Digital legacy navigator</span>
          </div>
          <h2>Logout</h2>
          <p className="independent-project-lead">
            Helping people prepare their digital lives with practical guidance
            for accounts, services, documents, and official processes.
          </p>
          <a
            className="independent-project-link"
            href="https://digital-legacy-five.vercel.app/en"
            target="_blank"
            rel="noreferrer"
          >
            View English project ↗
          </a>
        </div>

        <div className="logout-presentation">
          <a
            className="logout-image"
            href="https://digital-legacy-five.vercel.app/en"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the English Logout project"
          >
            <img src="/images/beyond/logout.jpg" alt="Logout digital legacy navigator English homepage" />
            <span>Open live project ↗</span>
          </a>
          <div className="logout-focus-grid">
            {logoutFocus.map((item, index) => (
              <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

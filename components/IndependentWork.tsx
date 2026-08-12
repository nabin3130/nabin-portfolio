import Link from "next/link";

const approach = [
  { icon: "?", title: "Problem Discovery" },
  { icon: "◎", title: "Validation & Research" },
  { icon: "↗", title: "Build & Launch" },
  { icon: "+", title: "Community & Impact" },
];

const tomatoDetails = [
  {
    label: "Problem",
    text: "Crypto events were fragmented across channels and difficult to discover by interest or location.",
  },
  {
    label: "Solution",
    text: "A focused event discovery concept with structured information and recommendation ideas.",
  },
  {
    label: "Role",
    text: "Co-founder responsible for research, UX direction, event data, and early-stage GTM.",
  },
];

const tomatoProcess = [
  { number: "01", title: "Product Validation", text: "User interviews and problem research." },
  { number: "02", title: "Information Structure", text: "Event data and recommendation concepts." },
  { number: "03", title: "UX & MVP", text: "Core product flows designed in Figma." },
  { number: "04", title: "Launch Support", text: "Event data and communication across Telegram and X." },
];

const logoutDetails = [
  {
    label: "Problem",
    text: "Digital accounts, documents, and official processes are difficult to organize and prepare in advance.",
  },
  {
    label: "Solution",
    text: "Practical guidance that brings preparation steps and request paths into one place.",
  },
  {
    label: "Purpose",
    text: "Help people prepare their digital lives and reduce confusion for the people they leave behind.",
  },
];

const logoutFeatures = [
  { number: "01", title: "Guides", text: "Service and process guidance." },
  { number: "02", title: "Preparation", text: "Steps for organizing digital life." },
  { number: "03", title: "Documents", text: "Required information and records." },
  { number: "04", title: "English", text: "A shareable English experience." },
];

function ProjectDetails({ items }: { items: { label: string; text: string }[] }) {
  return (
    <div className="independent-detail-list">
      {items.map((item, index) => (
        <div key={item.label}>
          <span>0{index + 1}</span>
          <p><strong>{item.label}</strong>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function IndependentWork() {
  return (
    <div className="independent-work independent-reference-layout">
      <section className="work-hero independent-hero">
        <div className="work-hero-copy">
          <p className="work-kicker"><span>05</span> / Independent</p>
          <h1>Independent<br />Projects</h1>
          <p className="work-intro">
            Building products and solutions beyond company and client work.
          </p>
          <div className="independent-summary">
            <div><strong>2</strong><span>Projects</span></div>
            <div><strong>Research-led</strong><span>Process</span></div>
            <div><strong>User First</strong><span>Mindset</span></div>
          </div>
        </div>

        <div className="independent-hero-side">
          <p>
            Exploring ideas, validating products, and building focused
            solutions for practical problems in Web3 and digital life.
          </p>
          <div className="independent-approach">
            {approach.map((item) => (
              <article key={item.title}>
                <span>{item.icon}</span>
                <strong>{item.title}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="independent-project reference-independent-project tomato-project">
        <div className="independent-project-copy">
          <div className="independent-title-row"><span aria-hidden="true">●</span><h2>Tomato</h2></div>
          <p className="independent-project-subtitle">Crypto Event Discovery Platform</p>
          <p className="independent-project-lead">
            An early-stage product concept that helps users find relevant crypto
            events without searching across fragmented channels.
          </p>
          <ul className="independent-tags">
            <li>Product</li><li>User Research</li><li>UX</li><li>GTM</li>
          </ul>
          <ProjectDetails items={tomatoDetails} />
          <Link className="independent-project-link" href="/projects/tomato">View case study →</Link>
        </div>

        <div className="independent-project-presentation tomato-presentation">
          <div className="tomato-product-video">
            <video autoPlay muted loop playsInline preload="metadata" aria-label="Tomato crypto event discovery product demo">
              <source src="/videos/tomato-demo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="independent-process-grid">
            {tomatoProcess.map((step) => (
              <article key={step.title}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="independent-project reference-independent-project logout-project">
        <div className="independent-project-copy">
          <div className="independent-title-row logout-title-row"><span aria-hidden="true">↗</span><h2>Logout</h2></div>
          <p className="independent-project-subtitle">Digital Legacy Navigator</p>
          <p className="independent-project-lead">
            Helping people prepare their digital lives with practical guidance
            for accounts, documents, services, and official processes.
          </p>
          <ul className="independent-tags">
            <li>Product</li><li>Research</li><li>Content</li><li>Web</li>
          </ul>
          <ProjectDetails items={logoutDetails} />
          <a className="independent-project-link" href="https://digital-legacy-five.vercel.app/en" target="_blank" rel="noreferrer">
            View English project ↗
          </a>
        </div>

        <div className="independent-project-presentation logout-reference-presentation">
          <a className="logout-reference-image" href="https://digital-legacy-five.vercel.app/en" target="_blank" rel="noreferrer">
            <img src="/images/beyond/logout.jpg" alt="Logout digital legacy navigator English homepage" />
            <span>Open live project ↗</span>
          </a>
          <div className="independent-process-grid logout-feature-grid">
            {logoutFeatures.map((feature) => (
              <article key={feature.title}><span>{feature.number}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

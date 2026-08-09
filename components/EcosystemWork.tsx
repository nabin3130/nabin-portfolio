const ecosystemMetrics = [
  { value: "100+", label: "Partners onboarded" },
  { value: "50,000+", label: "Community reach" },
  { value: "10%", label: "Staking participation increase" },
];

const partnershipProcess = [
  "Partner Sourcing",
  "Value Proposition",
  "Enablement Assets",
  "Launch & Growth",
];

const partnershipOutputs = [
  "One-page pitch deck",
  "Validator deck",
  "Partner materials",
  "Conference materials",
];

const communityWork = [
  {
    label: "Editorial",
    title: "Medium & PR",
    text: "Product and ecosystem stories in Korean and English.",
    className: "ecosystem-community-editorial",
  },
  {
    label: "Education",
    title: "User Guides",
    text: "Clear explanations for technical product journeys.",
    className: "ecosystem-community-guides",
  },
  {
    label: "Community",
    title: "Social Content",
    text: "Editorial planning and multi-channel communication.",
    className: "ecosystem-community-social",
  },
  {
    label: "Campaigns",
    title: "Creator Partnerships",
    text: "Research, outreach, scripts, negotiation, and delivery.",
    className: "ecosystem-community-creator",
  },
];

const productSteps = [
  "Product Testing & Research",
  "Messaging & Positioning",
  "Documentation & Content",
  "Launch & Community Education",
];

export function EcosystemWork() {
  return (
    <div className="ecosystem-work ecosystem-reference-layout">
      <section className="work-hero ecosystem-reference-hero">
        <div className="work-hero-copy">
          <p className="work-kicker"><span>01</span> / Ecosystem Growth</p>
          <h1>Bifrost<br />Network</h1>
          <p className="work-intro">
            Connecting a Web3 infrastructure product with users, partners, and
            communities through education, content, enablement, and ecosystem communication.
          </p>
          <div className="ecosystem-reference-metrics" aria-label="Selected ecosystem outcomes">
            {ecosystemMetrics.map((metric) => (
              <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
            ))}
          </div>
        </div>

        <div className="ecosystem-reference-map" aria-label="Bifrost ecosystem map">
          <div className="ecosystem-reference-orbits"><i /><i /><i /></div>
          <div className="ecosystem-reference-center">BIFROST</div>
          <div className="reference-map-node map-community">
            <b>01</b><strong>Community</strong><span>Users · Education · Content</span>
          </div>
          <div className="reference-map-node map-partners">
            <b>02</b><strong>Partners</strong><span>Validators · Infrastructure</span>
          </div>
          <div className="reference-map-node map-product">
            <b>03</b><strong>Product</strong><span>Bridge · Staking · Wallet</span>
          </div>
        </div>
      </section>

      <section className="work-story-section compact-ecosystem-section">
        <div className="work-story-copy ecosystem-section-intro">
          <h2>Partnerships &amp;<br />Ecosystem</h2>
          <p>Built partner-facing materials for validators, infrastructure providers, and ecosystem stakeholders.</p>
          <ol className="ecosystem-inline-process">
            {partnershipProcess.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}
          </ol>
        </div>

        <div className="ecosystem-partnership-board">
          <div className="ecosystem-board-heading">
            <span>Bifrost Network</span>
            <strong>Strategic partnership<br />enablement.</strong>
            <p>Technical product value translated into clear, audience-specific materials.</p>
          </div>
          <div className="ecosystem-board-output">
            {partnershipOutputs.map((output, index) => <div key={output}><span>0{index + 1}</span><strong>{output}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="work-story-section compact-ecosystem-section">
        <div className="work-story-copy ecosystem-section-intro">
          <h2>Community &amp;<br />Growth</h2>
          <p>Sustained community growth through editorial, education, social content, and creator campaigns.</p>
          <div className="ecosystem-featured-metric"><strong>50,000+</strong><span>community reach</span></div>
        </div>

        <div className="ecosystem-community-grid">
          {communityWork.map((item, index) => (
            <article className="ecosystem-community-card" key={item.title}>
              <div className={`ecosystem-community-visual ${item.className}`}>
                <span>0{index + 1}</span><strong>{item.label}</strong>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-story-section compact-ecosystem-section">
        <div className="work-story-copy ecosystem-section-intro">
          <h2>Product &amp; GTM</h2>
          <p>Made bridging, staking, wallets, and validator infrastructure easier to understand and adopt.</p>
          <ol className="ecosystem-product-process">
            {productSteps.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}
          </ol>
        </div>

        <div className="ecosystem-product-grid">
          <article className="ecosystem-product-card">
            <div className="ecosystem-docs-visual">
              <span>Bifrost Documentation</span>
              <strong>Getting Started<br />with Bifrost</strong>
              <i /><i /><i />
            </div>
            <h3>GitBook &amp; Product Docs</h3>
            <p>Bilingual guides, GIF tutorials, and product documentation.</p>
          </article>
          <article className="ecosystem-product-card">
            <div className="ecosystem-video-visual">
              <span>Product Education</span>
              <strong>Wallet &amp; Bridge<br />How-to Videos</strong>
              <b aria-hidden="true">▶</b>
            </div>
            <h3>Product Videos</h3>
            <p>YouTube tutorials for wallet and bridge features.</p>
          </article>
        </div>
      </section>
    </div>
  );
}

const metrics = [
  { value: "5,000+", label: "Article views" },
  { value: "10%", label: "Staking participation increase" },
  { value: "50,000+", label: "Community reach" },
  { value: "25%", label: "Higher engagement" },
];

const partnershipOutputs = [
  "One-page pitch deck",
  "Validator deck",
  "Partner-facing materials",
  "Conference materials",
];

const productSteps = [
  "Product Testing & Research",
  "Messaging & Positioning",
  "Documentation & Content",
  "Launch & Community Education",
];

export function EcosystemWork() {
  return (
    <div className="ecosystem-work">
      <section className="work-hero">
        <div className="work-hero-copy">
          <p className="work-kicker"><span>01</span> / Ecosystem Growth</p>
          <h1>Bifrost<br />Network</h1>
          <p className="work-intro">
            Connecting a Web3 infrastructure product with users, partners, and
            communities through education, content, sales materials, and
            ecosystem communications.
          </p>

          <div className="work-metrics" aria-label="Selected outcomes">
            {metrics.map((metric) => (
              <div className="work-metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ecosystem-map" aria-label="Bifrost ecosystem network">
          <div className="ecosystem-orbit orbit-one" />
          <div className="ecosystem-orbit orbit-two" />
          <div className="ecosystem-orbit orbit-three" />
          <div className="ecosystem-center">BIFROST</div>
          <div className="ecosystem-node node-partners">
            <strong>Partners</strong>
            <span>Validators · Infrastructure</span>
          </div>
          <div className="ecosystem-node node-community">
            <strong>Community</strong>
            <span>Users · Education</span>
          </div>
          <div className="ecosystem-node node-product">
            <strong>Product</strong>
            <span>Bridge · Staking · Wallets</span>
          </div>
        </div>
      </section>

      <section className="work-story-section">
        <div className="work-story-copy">
          <p className="work-section-number">01.1</p>
          <h2>Partnerships &amp;<br />Ecosystem</h2>
          <p>
            Translated technical product value into audience-specific materials
            for validators, partners, and ecosystem stakeholders.
          </p>
          <ol className="work-process compact-process">
            <li>Audience research</li>
            <li>Value proposition</li>
            <li>Enablement assets</li>
            <li>Ecosystem communication</li>
          </ol>
        </div>

        <div className="partnership-sample" aria-label="Partnership work outputs">
          <div className="sample-heading">
            <span>Bifrost Network</span>
            <strong>Partner enablement<br />across the ecosystem.</strong>
          </div>
          <div className="sample-output-grid">
            {partnershipOutputs.map((output, index) => (
              <div key={output}>
                <span>0{index + 1}</span>
                <strong>{output}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work-story-section community-section">
        <div className="work-story-copy">
          <p className="work-section-number">01.2</p>
          <h2>Community &amp;<br />Growth</h2>
          <div className="featured-metric">
            <strong>50,000+</strong>
            <span>community reach</span>
          </div>
          <p>
            Sustained community-facing execution through bilingual editorial,
            PR, social content, and educational touchpoints.
          </p>
        </div>

        <div className="community-samples">
          <article className="community-sample sample-red">
            <span>Editorial</span>
            <strong>Medium &amp; PR</strong>
            <p>Product stories and ecosystem communications in Korean and English.</p>
          </article>
          <article className="community-sample sample-black">
            <span>Education</span>
            <strong>User Guides</strong>
            <p>Clear explanations for technical product journeys.</p>
          </article>
          <article className="community-sample sample-paper">
            <span>Distribution</span>
            <strong>Social Content</strong>
            <p>Editorial planning and multi-channel community communication.</p>
          </article>
        </div>
      </section>

      <section className="work-story-section product-section">
        <div className="work-story-copy">
          <p className="work-section-number">01.3</p>
          <h2>Product &amp; GTM</h2>
          <p>
            Made bridging, staking, wallet, and validator infrastructure easier
            to understand and adopt.
          </p>
          <ol className="work-process">
            {productSteps.map((step, index) => (
              <li key={step}><span>0{index + 1}</span>{step}</li>
            ))}
          </ol>
        </div>

        <div className="product-samples">
          <article className="product-sample docs-sample">
            <div className="docs-browser">
              <span>Bifrost Documentation</span>
              <strong>Getting started with Bifrost</strong>
              <i />
              <i />
              <i />
            </div>
            <h3>GitBook &amp; Product Docs</h3>
            <p>Bilingual guides, GIF tutorials, and product documentation.</p>
          </article>
          <article className="product-sample video-sample">
            <div className="video-frame">
              <span>Product education</span>
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

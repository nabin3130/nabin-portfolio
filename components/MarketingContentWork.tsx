const marketingMetrics = [
  { value: "5,000+", label: "Article views" },
  { value: "50,000+", label: "Community reach" },
  { value: "25%", label: "Higher engagement" },
  { value: "KR / EN", label: "Bilingual content" },
];

const communicationOutputs = [
  {
    type: "PR & Editorial",
    title: "Product Communications",
    text: "PR, Medium, and social content that clarified technical product value.",
  },
  {
    type: "Partner Enablement",
    title: "Partnership Communications",
    text: "Stakeholder-specific messaging and materials for ecosystem partners.",
  },
  {
    type: "Distribution",
    title: "Editorial Planning",
    text: "Content calendars and coordinated Korean and English distribution.",
  },
];

const productContent = [
  {
    number: "01",
    title: "GitBook & Documentation",
    text: "Bilingual product guides for core user journeys.",
    className: "marketing-docs-visual",
  },
  {
    number: "02",
    title: "GIF Tutorials",
    text: "Step-by-step visual support for technical product actions.",
    className: "marketing-tutorial-visual",
  },
  {
    number: "03",
    title: "Product Videos",
    text: "YouTube how-to content for wallet and bridge features.",
    className: "marketing-video-visual",
  },
];

export function MarketingContentWork() {
  return (
    <div className="marketing-work">
      <section className="work-hero marketing-hero">
        <div className="work-hero-copy">
          <p className="work-kicker"><span>02</span> / Marketing &amp; Content</p>
          <h1>Marketing &amp;<br />Content</h1>
          <p className="marketing-subtitle">Campaigns · PR · Product Content</p>
          <p className="work-intro">
            Translating technical products into coordinated campaigns,
            communications, and educational content for Web3 audiences.
          </p>
        </div>

        <div className="marketing-metrics" aria-label="Selected marketing outcomes">
          {marketingMetrics.map((metric, index) => (
            <div className="marketing-metric" key={metric.label}>
              <span>0{index + 1}</span>
              <strong>{metric.value}</strong>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="work-story-section marketing-section">
        <div className="work-story-copy">
          <p className="work-section-number">02.1</p>
          <h2>Campaigns</h2>
          <p>
            Planned editorial and creator-facing work across the channels used
            to educate, engage, and reach Web3 communities.
          </p>
        </div>

        <div className="campaign-samples">
          <article className="campaign-sample campaign-editorial">
            <div>
              <span>Editorial system</span>
              <strong>From content planning<br />to distribution.</strong>
            </div>
            <p>Medium · PR · Social · Community</p>
          </article>
          <article className="campaign-sample campaign-creator">
            <div>
              <span>Creator partnerships</span>
              <strong>Outreach to<br />campaign execution.</strong>
            </div>
            <p>Research · Scripts · Negotiation · Delivery</p>
          </article>
        </div>
      </section>

      <section className="work-story-section marketing-section">
        <div className="work-story-copy">
          <p className="work-section-number">02.2</p>
          <h2>PR &amp;<br />Communications</h2>
          <p>
            Built clear communications for product updates, partnerships, and
            ecosystem audiences in Korean and English.
          </p>
        </div>

        <div className="communications-grid">
          {communicationOutputs.map((output, index) => (
            <article className="communication-output" key={output.title}>
              <div className="communication-meta">
                <span>{output.type}</span>
                <b>0{index + 1}</b>
              </div>
              <h3>{output.title}</h3>
              <p>{output.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-story-section marketing-section">
        <div className="work-story-copy">
          <p className="work-section-number">02.3</p>
          <h2>Product<br />Content</h2>
          <p>
            Created documentation, tutorials, and videos that made wallet,
            bridge, staking, and validator journeys easier to understand.
          </p>
        </div>

        <div className="marketing-content-grid">
          {productContent.map((item) => (
            <article className="marketing-content-item" key={item.title}>
              <div className={`marketing-content-visual ${item.className}`}>
                <span>{item.number}</span>
                <strong>{item.title}</strong>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="marketing-channels" aria-label="Marketing channels">
        <div>
          <span>Tools &amp; Channels</span>
          <strong>Built for coordinated distribution.</strong>
        </div>
        <ul>
          <li>Medium</li>
          <li>Social</li>
          <li>Discord</li>
          <li>Telegram</li>
          <li>YouTube</li>
          <li>Email</li>
        </ul>
      </section>
    </div>
  );
}

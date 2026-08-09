const marketingMetrics = [
  { icon: "↗", value: "5,000+", label: "Article views" },
  { icon: "◎", value: "50,000+", label: "Community reach" },
  { icon: "+", value: "25%", label: "Higher engagement" },
  { icon: "A", value: "KR / EN", label: "Bilingual content" },
];

const campaignWork = [
  {
    label: "Campaign Planning",
    title: "Integrated Campaigns",
    text: "Campaign planning and coordinated distribution across Web3 audiences.",
    detail: "Planning · Content · Distribution",
    visual: "campaign-plan-visual",
  },
  {
    label: "Creator Partnerships",
    title: "Influencer Campaigns",
    text: "Research, outreach, scripts, negotiation, and campaign delivery.",
    detail: "Research · Outreach · Execution",
    visual: "creator-campaign-visual",
  },
];

const communications = [
  {
    label: "Product Communication",
    title: "Launch Announcements",
    text: "Clear market-facing communication for product updates and launches.",
  },
  {
    label: "Partner Communication",
    title: "Partnership Announcements",
    text: "Stakeholder-specific messaging for ecosystem partnerships.",
  },
  {
    label: "PR & Editorial",
    title: "Press & Medium Content",
    text: "Korean and English editorial content for products and communities.",
  },
];

const productContent = [
  {
    label: "Documentation",
    title: "GitBook & Product Docs",
    text: "Bilingual guides and developer-facing product documentation.",
    className: "marketing-docs-visual",
    tags: ["GitBook", "Docs", "EN / KR"],
  },
  {
    label: "Tutorial",
    title: "Product Tutorials",
    text: "Step-by-step GIF support for wallet, bridge, and staking journeys.",
    className: "marketing-tutorial-visual",
    tags: ["Tutorials", "How-to", "EN / KR"],
  },
  {
    label: "Video",
    title: "Product Videos",
    text: "YouTube how-to content for wallet and bridge features.",
    className: "marketing-video-visual",
    tags: ["Video", "Education", "YouTube"],
  },
];

const channels = ["Medium", "X", "Discord", "Telegram", "YouTube", "Email", "Notion", "Canva"];

export function MarketingContentWork() {
  return (
    <div className="marketing-work marketing-reference-layout">
      <section className="work-hero marketing-hero">
        <div className="work-hero-copy">
          <p className="work-kicker"><span>02</span> / Marketing &amp; Content</p>
          <h1>Marketing &amp;<br />Content</h1>
          <p className="marketing-subtitle">Campaigns · PR · Product Content</p>
          <p className="work-intro">
            End-to-end marketing execution and content creation that supports
            awareness, education, and adoption across Web3 products and communities.
          </p>
        </div>

        <div className="marketing-metrics" aria-label="Selected marketing outcomes">
          {marketingMetrics.map((metric) => (
            <div className="marketing-metric" key={metric.label}>
              <span className="marketing-metric-icon" aria-hidden="true">{metric.icon}</span>
              <strong>{metric.value}</strong>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="work-story-section marketing-section compact-marketing-section">
        <div className="work-story-copy marketing-section-intro">
          <h2>Campaigns</h2>
          <p>
            Planned and executed integrated marketing work to build awareness,
            educate users, and coordinate distribution.
          </p>
        </div>

        <div className="campaign-samples">
          {campaignWork.map((item) => (
            <article className="campaign-work-card" key={item.title}>
              <div className={`campaign-work-visual ${item.visual}`}>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
              </div>
              <div className="campaign-work-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>{item.detail}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-story-section marketing-section compact-marketing-section">
        <div className="work-story-copy marketing-section-intro">
          <h2>PR &amp;<br />Communications</h2>
          <p>
            Managed product, partnership, and ecosystem communications in
            Korean and English.
          </p>
        </div>

        <div className="communications-grid">
          {communications.map((item, index) => (
            <article className="communication-output" key={item.title}>
              <div className="communication-meta">
                <span>{item.label}</span>
                <b>0{index + 1}</b>
              </div>
              <div className="communication-mark" aria-hidden="true">
                <span>BIFROST</span><i>×</i><strong>{index === 0 ? "PRODUCT" : index === 1 ? "PARTNER" : "MEDIA"}</strong>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-story-section marketing-section compact-marketing-section">
        <div className="work-story-copy marketing-section-intro">
          <h2>Product<br />Content</h2>
          <p>
            Created documentation, tutorials, and educational videos that made
            technical products easier to understand and use.
          </p>
        </div>

        <div className="marketing-content-grid">
          {productContent.map((item, index) => (
            <article className="marketing-content-item" key={item.title}>
              <div className={`marketing-content-visual ${item.className}`}>
                <span>0{index + 1}</span>
                <strong>{item.label}</strong>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul>
                {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="marketing-channels" aria-label="Marketing channels">
        <div>
          <span>Tools &amp; Channels</span>
          <strong>Used across campaigns, content, and community communication.</strong>
        </div>
        <ul>
          {channels.map((channel, index) => (
            <li key={channel}><span>0{index + 1}</span><strong>{channel}</strong></li>
          ))}
        </ul>
      </section>
    </div>
  );
}

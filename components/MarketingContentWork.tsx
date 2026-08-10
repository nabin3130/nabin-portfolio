const contentExamples = [
  { type: "Product Launch", title: "The BIFROST Network is Live!", channel: "X · Telegram · Medium", image: "/images/work/marketing-announcement-mainnet.png", href: "https://medium.com/bifrost/the-bifrost-network-is-live-b66aaa19b203" },
  { type: "Network Update", title: "Bifrost Now Supporting Base", channel: "X · Telegram · Medium", image: "/images/work/marketing-announcement-base.png", href: "https://medium.com/bifrost/bifrost-now-supporting-base-e0e3d0f58b34" },
  { type: "Guide", title: "Introducing BFC Staking on the BIFROST Network", channel: "Medium · GitBook", image: "/images/work/marketing-announcement-staking.png", href: "https://medium.com/bifrost/introducing-bfc-staking-on-the-bifrost-network-73bbef03254f" },
  { type: "Product Explanation", title: "Everything you need to know about BIFROST", channel: "Medium", href: "https://medium.com/bifrost/everything-you-need-to-know-about-bifrost-8f8943107ace" },
];

const communicationHighlights = [
  "Product launch communications",
  "Partnership announcements",
  "Bilingual press releases",
  "Content planning",
  "Publishing and distribution",
];

const influencerWork = [
  "Researched and contacted 50+ crypto influencers across Korea and global markets",
  "Negotiated campaign pricing and terms",
  "Drafted contracts, processed influencer payments, and coordinated campaign execution and content launch",
];

const influencerVideos = [
  { title: "Summoner Influencer Content 01", href: "https://youtu.be/1IrJ5sl2XKo?si=XtnaNF-IlizdpyRk", image: "/images/work/marketing-summoner-1.jpg" },
  { title: "Summoner Influencer Content 02", href: "https://youtu.be/He4pYOQlqMc?si=M12ZbezbpS2hBv6x", image: "/images/work/marketing-summoner-2.jpg" },
];

const workflow = ["Research", "Outreach", "Negotiation", "Contract & Payment", "Content Launch"];

const documentationTopics = ["Add Network", "Stake / Unstake", "Bridge Deposit / Withdrawal", "Wallet Features", "Transfer Protection"];

const tutorialVideos = [
  {
    title: "How to Bridge BFC from Ethereum to Polygon",
    href: "https://youtu.be/jvKY9UBmIQk?si=zOFZVtVB6HslfBpZ",
    image: "/images/work/marketing-bridge-video.jpg",
  },
  {
    title: "Biport Wallet / Transfer Protection",
    href: "https://youtu.be/7HSqfMfXDJY?si=Ty73RskKQFXKEuD0",
    image: "/images/work/marketing-biport-video.jpg",
  },
];

function MarketingHeading({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <header className="marketing-case-heading">
      <h2><span>{number}</span>{title}</h2>
      <p>{text}</p>
    </header>
  );
}

function VideoCard({ title, href, image }: { title: string; href: string; image: string }) {
  return (
    <a className="marketing-video-card" href={href} target="_blank" rel="noreferrer">
      <div><img src={image} alt={`${title} video thumbnail`} /><span aria-hidden="true">▶</span></div>
      <h3>{title}</h3>
      <p>Watch on YouTube ↗</p>
    </a>
  );
}

export function MarketingContentWork() {
  return (
    <div className="marketing-case-study">
      <aside className="marketing-case-sidebar">
        <p className="work-kicker"><span>02</span> / Marketing &amp; Content</p>
        <h1>Marketing<br />&amp; Content</h1>
        <p>Planned, created, and executed impactful content and communications across announcements, PR, community campaigns, influencer marketing, and educational materials.</p>
        <nav aria-label="Marketing and Content case study sections">
          <a href="#content-announcements"><span>01</span>Content &amp; Announcements</a>
          <a href="#pr-communications"><span>02</span>PR &amp; Communications</a>
          <a href="#influencer-marketing"><span>03</span>Influencer Marketing</a>
          <a href="#education-content"><span>04</span>Education &amp; How-to Content</a>
        </nav>
      </aside>

      <main className="marketing-case-content">
        <section className="marketing-case-section" id="content-announcements">
          <MarketingHeading number="01" title="Content & Announcements" text="Created and managed multi-channel announcements, updates, product content, and guides across Bifrost Network’s communication channels." />
          <div className="marketing-channel-strip">
            <div><span>Channels</span><strong>Medium · X · Telegram · Discord</strong></div>
            <div><span>Languages</span><strong>Korean · English</strong></div>
            <div><span>Scope</span><strong>Writing · Planning · Publishing</strong></div>
          </div>
          <div className="content-showcase">
            <div className="recent-content-examples">
              <h3>Recent Content Examples</h3>
              <div className="announcement-collage">
              {contentExamples.map((item, index) => (
                <a href={item.href} target="_blank" rel="noreferrer" className={item.image ? "has-image" : ""} key={item.title}>
                  {item.image ? <img src={item.image} alt={`${item.title} announcement artwork`} /> : null}
                  <div><span>0{index + 1}</span><small>{item.type}</small><h4>{item.title}</h4><p>{item.channel}</p></div>
                </a>
              ))}
              </div>
            </div>
            <div className="content-management-proof">
              <h3>Content Management</h3>
              <div className="content-management-placeholder">
                <strong>Notion content management</strong>
                <p>Screenshot to be added</p>
              </div>
              <p>Structured announcements, product updates, guides, and ecosystem communications across multiple channels.</p>
            </div>
          </div>
        </section>

        <section className="marketing-case-section" id="pr-communications">
          <MarketingHeading number="02" title="PR & Communications" text="Created bilingual PR and editorial content in Korean and English for product, partnership, and ecosystem communications." />
          <a className="bilingual-pr-feature" href="https://medium.com/dsrv/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8%EC%9D%98-%EB%AF%B8%EB%9E%98%EB%A5%BC-%EC%97%AC%EB%8A%94-%EB%B0%94%EC%9D%B4%ED%94%84%EB%A1%9C%EC%8A%A4%ED%8A%B8-btcfi%EB%A1%9C-%EB%94%94%ED%8C%8C%EC%9D%B4%EB%A5%BC-%EC%9E%AC%EB%B0%9C%EA%B2%AC%ED%95%98%EB%8B%A4-builders-vibe-part-2-00bc43f69b3d" target="_blank" rel="noreferrer">
            <div className="bilingual-pr-image">
              <img src="/images/work/marketing-pr-builders-vibe.webp" alt="Builder’s Vibe Bifrost article artwork" />
            </div>
            <div><p>Bilingual PR / Editorial Writing</p><h3>블록체인의 미래를 여는 바이프로스트! BTCFi로 디파이를 재발견하다 [Builder’s Vibe – Part.2]</h3><span>Read featured article ↗</span></div>
          </a>
          <div className="communication-highlight-list">
            {communicationHighlights.map((item) => <div key={item}><span>✓</span><p>{item}</p></div>)}
          </div>
        </section>

        <section className="marketing-case-section" id="influencer-marketing">
          <MarketingHeading number="03" title="Influencer Marketing" text="Executed influencer campaigns from research and outreach through negotiation, contracting, payment, and content launch." />
          <div className="influencer-case-panel">
            <div className="influencer-case-copy">
              <span>Summoner | MMORPG Game</span>
              <h3>Influencer Partnership / Campaign Execution</h3>
              <ul>{influencerWork.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="influencer-video-grid">
              {influencerVideos.map((video) => <VideoCard {...video} key={video.href} />)}
            </div>
          </div>
          <ol className="influencer-workflow">
            {workflow.map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong></li>)}
          </ol>
        </section>

        <section className="marketing-case-section" id="education-content">
          <MarketingHeading number="04" title="Education & How-to Content" text="Turned technical blockchain products and concepts into practical, easy-to-follow educational content." />
          <div className="education-subsection">
            <header><span>A</span><div><h3>Product Documentation — GitBook</h3><p>Bifrost Network · Korean / English documentation</p></div></header>
            <div className="documentation-showcase">
              <div className="documentation-image"><img src="/images/work/product-gitbook.jpg" alt="Bifrost Network GitBook documentation" /></div>
              <div className="documentation-topic-grid">{documentationTopics.map((topic, index) => <div key={topic}><span>0{index + 1}</span><strong>{topic}</strong></div>)}</div>
            </div>
            <ul className="education-support-list"><li>Korean / English documentation</li><li>Step-by-step product guides</li><li>Visual GIF tutorials</li><li>Network, staking, bridge, and wallet functionality</li></ul>
          </div>

          <div className="education-subsection">
            <header><span>B</span><div><h3>Video Tutorials — YouTube</h3><p>Bifrost Network / Biport Wallet</p></div></header>
            <div className="tutorial-video-layout">
              <div className="tutorial-video-grid">{tutorialVideos.map((video) => <VideoCard {...video} key={video.href} />)}</div>
              <div className="video-production-block"><strong>Full Production</strong><p>Script Writing</p><p>Filming</p><p>Editing</p><p>Publishing</p></div>
            </div>
          </div>

          <div className="education-subsection gopax-education">
            <header><span>C</span><div><h3>Blockchain Education &amp; Awareness — GOPAX</h3><p>Accessible educational and marketing materials for general audiences.</p></div></header>
            <div className="gopax-education-grid">
              <div className="gopax-placeholder"><span>Educational e-book</span></div>
              <div className="gopax-asset"><img src="/images/work/event-btl-marketing.jpg" alt="GOPAX metro advertising" /><span>Metro Advertising</span></div>
              <div className="gopax-placeholder"><span>Infographics</span></div>
              <div className="gopax-placeholder"><span>Seasonal / Community Content</span></div>
            </div>
            <p>Translated technical blockchain and digital asset concepts into accessible educational and marketing materials for general audiences.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

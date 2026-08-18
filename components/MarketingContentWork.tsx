"use client";

import { useEffect, useState } from "react";

const publishedContent = [
  { channel: "Telegram", image: "/images/work/marketing-theori-telegram.png", alt: "Theori validator announcement published on Telegram" },
  { channel: "X (Twitter)", image: "/images/work/marketing-theori-x.png", alt: "Theori validator announcement published on X" },
  { channel: "Medium (EN)", image: "/images/work/marketing-theori-medium-en.png", alt: "English Medium article announcing Theori as a Bifrost Network validator", href: "https://medium.com/bifrost/announcing-theori-as-a-bifrost-network-validator-e0e2d7964ec9" },
  { channel: "Medium (KR)", image: "/images/work/marketing-theori-medium-kr.png", alt: "Korean Medium article announcing Theori as a Bifrost Network validator", href: "https://medium.com/bifrost-blog-kor/%EB%B0%94%EC%9D%B4%ED%94%84%EB%A1%9C%EC%8A%A4%ED%8A%B8-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EB%B0%B8%EB%A6%AC%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A1%9C-%ED%8B%B0%EC%98%A4%EB%A6%AC-%ED%95%A9%EB%A5%98-a561ca3b73fe" },
];

const communicationHighlights = [
  "Product launch communications",
  "Partnership announcements",
  "Bilingual PR",
  "Content planning",
  "Distribution",
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

const documentationGuides = [
  { title: "Add Network", href: "https://docs.bifrostnetwork.com/bifrost-network/add-network/metamask" },
  { title: "Stake BFC", href: "https://docs.bifrostnetwork.com/bifrost-network/staking/staking-guide/stake-bfc" },
  { title: "Bridge Deposit", href: "https://docs.bifrostnetwork.com/bifrost-network/bridge/bridge-guide/depositing-to-the-bifrost-network" },
  { title: "Bridge Withdrawal", href: "https://docs.bifrostnetwork.com/bifrost-network/bridge/bridge-guide/withdrawing-to-another-network" },
  { title: "Transfer Protection", href: "https://docs.bifi.finance/biport-guide/how-to-use/transfer-protection" },
];

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
    </a>
  );
}

export function MarketingContentWork() {
  const [activeSection, setActiveSection] = useState("content-announcements");

  useEffect(() => {
    const sectionIds = ["content-announcements", "pr-communications", "influencer-marketing", "education-content"];
    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.35;
      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="marketing-case-study">
      <aside className="marketing-case-sidebar">
        <p className="work-kicker"><span>02</span> / Marketing &amp; Content</p>
        <h1>Marketing<br />&amp; Content</h1>
        <p>Planned, created, and executed impactful content and communications across announcements, PR, community campaigns, influencer marketing, and educational materials.</p>
        <nav aria-label="Marketing and Content case study sections">
          <a className={activeSection === "content-announcements" ? "active" : ""} href="#content-announcements"><span>01</span>Content &amp; Announcements</a>
          <a className={activeSection === "pr-communications" ? "active" : ""} href="#pr-communications"><span>02</span>PR &amp; Communications</a>
          <a className={activeSection === "influencer-marketing" ? "active" : ""} href="#influencer-marketing"><span>03</span>Influencer Marketing</a>
          <a className={activeSection === "education-content" ? "active" : ""} href="#education-content"><span>04</span>Education &amp; How-to Content</a>
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
          <div className="content-publishing-layout">
            <div className="published-content-proof">
              <h3>Published Content Examples</h3>
              <p>Partnership announcement published across multiple channels and languages.</p>
              <div className="published-content-grid">
                {publishedContent.map((item) => {
                  const content = <><span>{item.channel}</span><div><img src={item.image} alt={item.alt} /></div></>;
                  return item.href ? <a href={item.href} target="_blank" rel="noreferrer" className="medium-card" key={item.channel}>{content}</a> : <article key={item.channel}>{content}</article>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="marketing-case-section" id="pr-communications">
          <MarketingHeading number="02" title="PR & Communications" text="Created bilingual PR and editorial content in Korean and English for product, partnership, and ecosystem communications." />
          <div className="communication-highlight-list">
            {communicationHighlights.map((item) => <div key={item}><p>{item}</p></div>)}
          </div>
          <a className="bilingual-pr-feature" href="https://medium.com/dsrv/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8%EC%9D%98-%EB%AF%B8%EB%9E%98%EB%A5%BC-%EC%97%AC%EB%8A%94-%EB%B0%94%EC%9D%B4%ED%94%84%EB%A1%9C%EC%8A%A4%ED%8A%B8-btcfi%EB%A1%9C-%EB%94%94%ED%8C%8C%EC%9D%B4%EB%A5%BC-%EC%9E%AC%EB%B0%9C%EA%B2%AC%ED%95%98%EB%8B%A4-builders-vibe-part-2-00bc43f69b3d" target="_blank" rel="noreferrer">
            <div className="bilingual-pr-image">
              <img src="/images/work/marketing-pr-builders-vibe.webp" alt="Builder’s Vibe Bifrost article artwork" />
            </div>
            <div><p>Bilingual PR / Editorial Writing</p><h3>블록체인의 미래를 여는 바이프로스트! BTCFi로 디파이를 재발견하다 [Builder’s Vibe – Part.2]</h3><span>Read the article</span></div>
          </a>
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
        </section>

        <section className="marketing-case-section" id="education-content">
          <MarketingHeading number="04" title="Education & How-to Content" text="Turned technical blockchain products and concepts into practical, easy-to-follow educational content." />
          <div className="education-subsection documentation-section">
            <div className="documentation-layout">
              <div className="documentation-overview">
                <header><div><h3>Product Documentation — GitBook</h3><p>Bifrost Network · Korean / English documentation</p></div></header>
                <p className="documentation-description">Created step-by-step guides and documentation for Bifrost Network’s products and features in Korean and English.</p>
                <div className="documentation-image"><img src="/images/work/product-gitbook.jpg" alt="Bifrost Network GitBook documentation" /></div>
              </div>
              <div className="selected-guides">
                <h3>Selected Guides</h3>
                <div className="selected-guide-list">
                  {documentationGuides.map((guide, index) => (
                    <a href={guide.href} target="_blank" rel="noreferrer" key={guide.title}>
                      <span>0{index + 1}</span><strong>{guide.title}</strong>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="education-subsection">
            <header><div><h3>Video Tutorials — YouTube</h3><p>Bifrost Network / Biport Wallet</p><p className="video-production-meta">Script Writing · Filming · Editing · Publishing</p></div></header>
            <div className="tutorial-video-layout">
              <div className="tutorial-video-grid">{tutorialVideos.map((video) => <VideoCard {...video} key={video.href} />)}</div>
            </div>
          </div>

          <div className="education-subsection content-campaigns">
            <header><div><h3>Content Campaigns</h3><p>Selected marketing and educational content created for different audiences and channels.</p></div></header>
            <div className="content-campaign-grid">
              <article><div className="campaign-visual campaign-education"><img src="/images/work/marketing-gopax-education.png" alt="GOPAX Bitcoin Cash educational content" /></div><span>01</span><h4>Educational Content</h4><p>GOPAX</p></article>
              <article><div className="campaign-visual campaign-metro"><img src="/images/work/event-btl-marketing.jpg" alt="GOPAX metro campaign" /></div><span>02</span><h4>Metro Campaign</h4><p>GOPAX</p></article>
              <article><div className="campaign-visual"><img src="/images/work/marketing-nft-campaign-01.png" alt="NFT marketplace community campaign artwork" /></div><span>03</span><h4>Community Campaign</h4><p>NFT Marketplace</p></article>
              <article><div className="campaign-visual"><img src="/images/work/marketing-nft-campaign-02.png" alt="NFT marketplace raffle community campaign artwork" /></div><span>04</span><h4>Raffle Campaign</h4><p>NFT Marketplace</p></article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

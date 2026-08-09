const socialLinks = [
  { label: "TikTok", short: "TT", href: "https://www.tiktok.com/@realhomiesclub" },
  { label: "YouTube", short: "YT", href: "https://www.youtube.com/@realhomiesclub" },
  { label: "Instagram", short: "IG", href: "https://www.instagram.com/realhomiesclub" },
  { label: "X", short: "X", href: "https://x.com/real_BD_2025" },
];

const interviews = [
  {
    number: "01",
    title: "First Crypto",
    text: "“What was your first crypto?”",
    href: "https://www.tiktok.com/@realhomiesclub/video/7668248794181537054?is_from_webapp=1&sender_device=pc&web_id=7595780493363414550",
    image: "/images/work/media.jpg",
  },
  {
    number: "02",
    title: "Bitcoin in 2011",
    text: "“Yeah, it was Bitcoin back in 2011”",
    href: "https://www.tiktok.com/@realhomiesclub/video/7607831708485815583?is_from_webapp=1&sender_device=pc&web_id=7595780493363414550",
    image: "/images/work/media-bitcoin-2011.jpg",
  },
  {
    number: "03",
    title: "NFT Experience",
    text: "“Have you traded NFT before?”",
    href: "https://www.tiktok.com/@realhomiesclub/video/7606734391443836190?is_from_webapp=1&sender_device=pc&web_id=7595780493363414550",
    image: "/images/work/media-nft.jpg",
  },
];

export function MediaWork() {
  return (
    <div className="media-case-study">
      <aside className="media-case-sidebar">
        <p className="work-kicker"><span>04</span> / Media</p>
        <h1>Media</h1>
        <p>
          Co-founded and grew an independent crypto media, creating short-form
          interviews and on-the-ground content.
        </p>
        <nav aria-label="Media case study sections">
          <a href="#media-interviews"><span>01</span>Interviews</a>
          <a href="#media-partnership"><span>03</span>Media Partnership</a>
        </nav>
      </aside>

      <main className="media-case-content">
        <section className="rhc-summary" aria-labelledby="rhc-title">
          <div className="rhc-summary-brand">
            <img className="rhc-logo" src="/images/work/real-homies-club-logo.png" alt="Real Homies Club logo" />
            <div>
              <h2 id="rhc-title">Real Homies Club</h2>
              <p>Independent crypto media capturing conversations, people, and stories across the global crypto ecosystem.</p>
            </div>
          </div>
          <div className="rhc-summary-metrics" aria-label="Real Homies Club selected metrics">
            <div><strong>50+</strong><span>Interviews</span></div>
            <div><strong>1.6K+</strong><span>Followers</span></div>
            <div><strong>1K+</strong><span>Likes</span></div>
          </div>
          <div className="rhc-socials">
            <p>Published across</p>
            <div>
              {socialLinks.map((social) => (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open Real Homies Club on ${social.label}`}
                  title={social.label}
                  key={social.label}
                >
                  {social.short}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="media-case-section" id="media-interviews">
          <header className="media-case-section-heading">
            <div>
              <h2><span>01</span> Interviews</h2>
              <p>Conversations with founders, builders, and community members across the crypto ecosystem.</p>
            </div>
            <a href="https://www.tiktok.com/@realhomiesclub" target="_blank" rel="noreferrer">View all interviews →</a>
          </header>
          <div className="selected-interview-grid">
            {interviews.map((interview) => (
              <a
                className={`selected-interview-card${interview.image ? " has-image" : ""}`}
                href={interview.href}
                target="_blank"
                rel="noreferrer"
                key={interview.title}
              >
                <div className="selected-interview-visual">
                  {interview.image ? <img src={interview.image} alt={`${interview.title} interview thumbnail`} /> : <span>Thumbnail to be added</span>}
                  <b aria-hidden="true">↗</b>
                </div>
                <span>{interview.number}</span>
                <h3>{interview.title}</h3>
                <p>{interview.text}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="media-case-section" id="media-partnership">
          <header className="media-case-section-heading">
            <div>
              <h2><span>03</span> Media Partnership</h2>
              <p>Official media partner for a global crypto conference.</p>
            </div>
          </header>
          <div className="media-partnership-panel">
            <div className="media-partnership-title">
              <span>Southeast Asia Blockchain Week</span>
              <h3>Media Partner</h3>
            </div>
            <div className="media-partnership-role">
              <h3>What I did</h3>
              <ul>
                <li>On-site interviews</li>
                <li>Short-form content production</li>
                <li>Interviewed founders, builders, and ecosystem participants</li>
                <li>Distributed content across social channels</li>
              </ul>
            </div>
            <div className="media-partnership-placeholder">
              <span>Conference visual to be added</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

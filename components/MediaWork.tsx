const mediaHighlights = [
  { icon: "●", value: "Interviews", label: "Builder & community voices" },
  { icon: "◎", value: "Global", label: "On-site conversations" },
  { icon: "＋", value: "4", label: "Distribution platforms" },
  { icon: "▶", value: "Short-form", label: "Mobile-first content" },
];

const featuredVideos = [
  {
    label: "Community Interview",
    title: "What was your first crypto?",
    text: "A direct question designed for an authentic, concise answer.",
    visual: "featured-real-visual",
    image: "/images/work/media.jpg",
  },
  {
    label: "Builder Story",
    title: "People Behind Web3",
    text: "Short conversations introducing builders and their perspectives.",
    visual: "featured-builder-visual",
  },
  {
    label: "Ecosystem Voice",
    title: "Inside the Community",
    text: "Community perspectives that make ecosystems easier to understand.",
    visual: "featured-ecosystem-visual",
  },
  {
    label: "Founder Interview",
    title: "Building in Web3",
    text: "Personal experiences from people developing products and communities.",
    visual: "featured-founder-visual",
  },
];

const interviewSeries = [
  {
    label: "Builders",
    title: "Builder Stories",
    text: "Personal perspectives from people building products and communities.",
  },
  {
    label: "Ecosystems",
    title: "Community Voices",
    text: "Short conversations with participants across Web3 ecosystems.",
  },
  {
    label: "Events",
    title: "Event Conversations",
    text: "On-site questions and real-time perspectives from conferences.",
  },
  {
    label: "Culture",
    title: "Beyond the Product",
    text: "Ideas, experiences, and culture behind the technology.",
  },
];

const conferenceCoverage = [
  { label: "Europe", title: "ETHCC", text: "Community interviews and builder perspectives." },
  { label: "Asia", title: "Devcon", text: "On-site conversations across the ecosystem." },
  { label: "Seoul", title: "Korea Blockchain Week", text: "Event moments and community-facing content." },
  { label: "Global", title: "Token2049", text: "Conversations with projects, partners, and builders." },
];

const platforms = [
  { number: "01", title: "TikTok", text: "Short-form interviews" },
  { number: "02", title: "YouTube Shorts", text: "Mobile video stories" },
  { number: "03", title: "Instagram", text: "Reels & visual content" },
  { number: "04", title: "X", text: "Conversation & distribution" },
];

type FeaturedItem = {
  label: string;
  title: string;
  text: string;
  visual: string;
  image?: string;
};

function FeaturedCard({ item }: { item: FeaturedItem }) {
  return (
    <article className="reference-media-card featured-video-card">
      <div className={`reference-media-visual ${item.visual}`}>
        {item.image ? <img src={item.image} alt="Real Homies Club crypto interview" /> : null}
        <span>{item.label}</span>
        <strong>{item.title}</strong>
      </div>
      <div className="reference-media-copy">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </article>
  );
}

export function MediaWork() {
  return (
    <div className="media-work media-reference-layout">
      <section className="work-hero media-hero">
        <div className="work-hero-copy">
          <p className="work-kicker"><span>04</span> / Media</p>
          <h1>Real<br />Homies Club</h1>
          <p className="media-subtitle">Independent crypto media project</p>
          <p className="work-intro">
            Sharing builder stories and community perspectives through
            interviews, short-form video, and on-site conference content.
          </p>
        </div>

        <div className="media-highlight-grid" aria-label="Media formats and reach">
          {mediaHighlights.map((item) => (
            <div className="media-highlight" key={item.value}>
              <span className="media-highlight-icon" aria-hidden="true">{item.icon}</span>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="work-story-section media-section compact-media-section">
        <div className="work-story-copy media-section-intro">
          <h2>Featured Videos</h2>
          <p>Short-form interviews with builders and community voices in Web3.</p>
        </div>
        <div className="reference-media-grid">
          {featuredVideos.map((item) => <FeaturedCard item={item} key={item.title} />)}
        </div>
      </section>

      <section className="work-story-section media-section compact-media-section">
        <div className="work-story-copy media-section-intro">
          <h2>Interview Series</h2>
          <p>Repeatable content themes for conversations with people across the ecosystem.</p>
        </div>
        <div className="reference-media-grid">
          {interviewSeries.map((item, index) => (
            <article className="media-series-card" key={item.title}>
              <div><span>{item.label}</span><b>0{index + 1}</b></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <small>Explore theme →</small>
            </article>
          ))}
        </div>
      </section>

      <section className="work-story-section media-section compact-media-section">
        <div className="work-story-copy media-section-intro">
          <h2>Conference<br />Coverage</h2>
          <p>On-site conversations and community perspectives from major Web3 events.</p>
        </div>
        <div className="reference-media-grid">
          {conferenceCoverage.map((item, index) => (
            <article className="reference-media-card coverage-media-card" key={item.title}>
              <div className={`reference-media-visual coverage-visual coverage-visual-${index + 1}`}>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
              </div>
              <div className="reference-media-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="platform-reach-section">
        <div className="platform-reach-intro">
          <h2>Platform Reach</h2>
          <p>Content adapted for discovery and distribution across four social platforms.</p>
        </div>
        <div className="platform-reach-grid">
          {platforms.map((platform) => (
            <article key={platform.title}>
              <span>{platform.number}</span>
              <h3>{platform.title}</h3>
              <p>{platform.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

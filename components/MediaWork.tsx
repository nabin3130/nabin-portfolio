const mediaFormats = [
  { number: "01", title: "Interviews", text: "Short conversations with builders and community voices." },
  { number: "02", title: "Short-form", text: "Mobile-first stories shaped for quick discovery." },
  { number: "03", title: "Event Coverage", text: "On-site questions and moments from Web3 conferences." },
  { number: "04", title: "Cross-platform", text: "Content distributed across social video channels." },
];

const interviewSeries = [
  {
    label: "Builders",
    title: "Builder Stories",
    text: "Personal perspectives from people building products and communities in Web3.",
  },
  {
    label: "Ecosystems",
    title: "Community Voices",
    text: "Short conversations that make ecosystems and their participants easier to understand.",
  },
  {
    label: "Culture",
    title: "Beyond the Product",
    text: "Questions that reveal the experiences, ideas, and culture behind the industry.",
  },
];

const platforms = ["TikTok", "YouTube Shorts", "Instagram", "X"];

export function MediaWork() {
  return (
    <div className="media-work">
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

        <div className="media-format-grid" aria-label="Media formats">
          {mediaFormats.map((format) => (
            <article className="media-format" key={format.title}>
              <span>{format.number}</span>
              <strong>{format.title}</strong>
              <p>{format.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-story-section media-section featured-media-section">
        <div className="work-story-copy">
          <p className="work-section-number">04.1</p>
          <h2>Featured<br />Video</h2>
          <p>
            Mobile-first interview content built around concise, direct
            questions and authentic answers from the crypto community.
          </p>
        </div>

        <figure className="featured-media">
          <img src="/images/work/media.jpg" alt="Real Homies Club short-form crypto interview" />
          <figcaption>
            <span>Short-form interview</span>
            <strong>What was your<br />first crypto?</strong>
          </figcaption>
        </figure>
      </section>

      <section className="work-story-section media-section">
        <div className="work-story-copy">
          <p className="work-section-number">04.2</p>
          <h2>Interview &amp;<br />Content</h2>
          <p>
            Content themes designed to introduce the people, communities, and
            ideas shaping Web3 without relying on long-form explanations.
          </p>
        </div>

        <div className="interview-series-grid">
          {interviewSeries.map((series, index) => (
            <article className="interview-series" key={series.title}>
              <div className="interview-series-meta">
                <span>{series.label}</span>
                <b>0{index + 1}</b>
              </div>
              <h3>{series.title}</h3>
              <p>{series.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-story-section media-section coverage-section">
        <div className="work-story-copy">
          <p className="work-section-number">04.3</p>
          <h2>Conference<br />Coverage</h2>
          <p>
            Captured community voices and real-time perspectives while working
            across international Web3 conferences and ecosystem events.
          </p>
        </div>

        <div className="coverage-board">
          <div className="coverage-title">
            <span>On-site content</span>
            <strong>Conversations<br />from the field.</strong>
          </div>
          <div className="coverage-flow">
            <span>Question research</span>
            <span>Guest outreach</span>
            <span>On-site interview</span>
            <span>Edit &amp; distribution</span>
          </div>
        </div>
      </section>

      <section className="media-platforms" aria-label="Real Homies Club platforms">
        <div>
          <span>04.4 / Platform Reach</span>
          <strong>Stories adapted for each channel.</strong>
        </div>
        <ul>
          {platforms.map((platform, index) => (
            <li key={platform}><span>0{index + 1}</span>{platform}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

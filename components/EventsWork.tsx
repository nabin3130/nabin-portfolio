const eventMetrics = [
  { value: "8+", label: "International conferences" },
  { value: "6+", label: "Markets" },
  { value: "End-to-end", label: "Event ownership" },
  { value: "15–20%", label: "Selected venue cost savings" },
];

const conferences = [
  {
    title: "Token2049",
    scope: "Conference support",
    text: "Partner coordination, guest experience, and on-site operations.",
  },
  {
    title: "Korea Blockchain Week",
    scope: "Ecosystem program",
    text: "Event delivery and partner-facing community activation.",
  },
  {
    title: "ETHCC · Devcon",
    scope: "Global conference",
    text: "Cross-market coordination and community-facing execution.",
  },
  {
    title: "Consensus · Blockchain Weeks",
    scope: "Conference support",
    text: "Programs spanning Binance and Taiwan Blockchain Week.",
  },
];

const meetupPrograms = [
  {
    number: "01",
    title: "Bifrost Community Programs",
    text: "Product and ecosystem touchpoints designed for users, partners, and communities.",
  },
  {
    number: "02",
    title: "GOPAX Community Programs",
    text: "Community event support connecting local audiences and blockchain projects.",
  },
  {
    number: "03",
    title: "CaveDAO · Kaia",
    text: "A partner-led activation supported through venue, guest, and on-site coordination.",
  },
];

const activationSteps = [
  "Venue & vendor coordination",
  "Registration & QR check-in",
  "Guest communications",
  "On-site delivery",
  "Photo, video & recap assets",
];

export function EventsWork() {
  return (
    <div className="events-work">
      <section className="work-hero events-hero">
        <div className="work-hero-copy">
          <p className="work-kicker"><span>03</span> / Events</p>
          <h1>Global<br />Events</h1>
          <p className="events-subtitle">Conferences · Meetups · Activations</p>
          <p className="work-intro">
            Planning and operating Web3 programs across markets, from partner
            coordination and registration to on-site delivery and event content.
          </p>
        </div>

        <div className="events-metrics" aria-label="Selected event outcomes">
          {eventMetrics.map((metric, index) => (
            <div className="events-metric" key={metric.label}>
              <span>0{index + 1}</span>
              <strong>{metric.value}</strong>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="work-story-section events-section conferences-section">
        <div className="work-story-copy">
          <p className="work-section-number">03.1</p>
          <h2>Conferences</h2>
          <p>
            Supported international Web3 conferences across Asia, the Middle
            East, and Europe with reliable stakeholder and on-site operations.
          </p>
        </div>

        <div className="conference-presentation">
          <figure className="event-feature-image">
            <img src="/images/work/events.jpg" alt="CaveDAO and Kaia event activation signage" />
            <figcaption>
              <span>Selected field work</span>
              <strong>CaveDAO · Kaia activation</strong>
            </figcaption>
          </figure>
          <div className="conference-list">
            {conferences.map((event, index) => (
              <article className="conference-entry" key={event.title}>
                <span>0{index + 1}</span>
                <div>
                  <p>{event.scope}</p>
                  <h3>{event.title}</h3>
                  <small>{event.text}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-story-section events-section">
        <div className="work-story-copy">
          <p className="work-section-number">03.2</p>
          <h2>Meetups</h2>
          <p>
            Built community touchpoints around products and ecosystems, with
            attention to clear communication and a smooth guest experience.
          </p>
        </div>

        <div className="meetup-grid">
          {meetupPrograms.map((program) => (
            <article className="meetup-program" key={program.title}>
              <span>{program.number}</span>
              <h3>{program.title}</h3>
              <p>{program.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-story-section events-section activation-section">
        <div className="work-story-copy">
          <p className="work-section-number">03.3</p>
          <h2>Activations</h2>
          <p>
            Owned the practical details that turn an event plan into a coherent
            experience for partners, speakers, guests, and communities.
          </p>
        </div>

        <div className="activation-board">
          <div className="activation-heading">
            <span>Event operations</span>
            <strong>From planning<br />to follow-up.</strong>
          </div>
          <ol>
            {activationSteps.map((step, index) => (
              <li key={step}><span>0{index + 1}</span>{step}</li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

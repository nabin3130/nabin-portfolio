const eventMetrics = [
  { icon: "◎", value: "8+", label: "International conferences" },
  { icon: "↗", value: "6+", label: "Markets" },
  { icon: "◆", value: "End-to-end", label: "Event ownership" },
  { icon: "%", value: "15–20%", label: "Selected venue savings" },
];

const conferences = [
  {
    label: "Global Conference",
    title: "Token2049",
    text: "Partner coordination, guest experience, and on-site operations.",
    meta: "Conference support",
    visual: "conference-token-visual",
  },
  {
    label: "Seoul",
    title: "Korea Blockchain Week",
    text: "Event delivery and partner-facing community activation.",
    meta: "Ecosystem program",
    visual: "conference-kbw-visual",
  },
  {
    label: "Europe · Asia",
    title: "ETHCC · Devcon",
    text: "Cross-market coordination and community-facing execution.",
    meta: "Global operations",
    visual: "conference-dev-visual",
  },
  {
    label: "Global Conference",
    title: "Consensus & Blockchain Weeks",
    text: "Conference programs including Binance and Taiwan Blockchain Week.",
    meta: "Program support",
    visual: "conference-global-visual",
  },
];

const meetups = [
  {
    label: "Bifrost",
    title: "Bifrost Community Programs",
    text: "Product and ecosystem touchpoints for users, partners, and communities.",
    meta: "Community · Product",
    visual: "meetup-bifrost-visual",
  },
  {
    label: "GOPAX",
    title: "GOPAX Community Programs",
    text: "Local community event support connecting audiences and blockchain projects.",
    meta: "Community support",
    visual: "meetup-gopax-visual",
  },
  {
    label: "CaveDAO · Kaia",
    title: "Partner Community Event",
    text: "Partner-led community activation with venue, guest, and on-site coordination.",
    meta: "Partner activation",
    visual: "meetup-cave-visual",
    image: "/images/work/events.jpg",
  },
  {
    label: "Ecosystem",
    title: "Community Meetups",
    text: "Programs that connected partners and communities across multiple markets.",
    meta: "Cross-market programs",
    visual: "meetup-community-visual",
  },
];

const activations = [
  {
    label: "Planning",
    title: "Venue & Vendors",
    text: "Venue sourcing, vendor alignment, catering, and transportation planning.",
    meta: "Pre-event operations",
    visual: "activation-venue-visual",
  },
  {
    label: "Arrival",
    title: "Registration",
    text: "Registration flows, QR check-in, and clear guest communication.",
    meta: "Guest operations",
    visual: "activation-register-visual",
  },
  {
    label: "On-site",
    title: "Guest Experience",
    text: "Fast issue resolution and stakeholder coordination during live events.",
    meta: "Event delivery",
    visual: "activation-guest-visual",
  },
  {
    label: "Follow-up",
    title: "Event Content",
    text: "Photography, video, social assets, and community recap coordination.",
    meta: "Content distribution",
    visual: "activation-content-visual",
  },
];

type EventCardItem = {
  label: string;
  title: string;
  text: string;
  meta: string;
  visual: string;
  image?: string;
};

function EventCard({ item }: { item: EventCardItem }) {
  return (
    <article className="reference-event-card">
      <div className={`reference-event-visual ${item.visual}`}>
        {item.image ? <img src={item.image} alt="CaveDAO and Kaia partner community event" /> : null}
        <span>{item.label}</span>
        {!item.image ? <strong>{item.title}</strong> : null}
      </div>
      <div className="reference-event-copy">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <small>{item.meta}</small>
      </div>
    </article>
  );
}

function EventRow({
  number,
  title,
  text,
  items,
}: {
  number: string;
  title: string;
  text: string;
  items: EventCardItem[];
}) {
  return (
    <section className="work-story-section events-section compact-events-section">
      <div className="work-story-copy events-section-intro">
        <p className="work-section-number">{number}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="reference-event-grid">
        {items.map((item) => <EventCard item={item} key={item.title} />)}
      </div>
    </section>
  );
}

export function EventsWork() {
  return (
    <div className="events-work events-reference-layout">
      <section className="work-hero events-hero">
        <div className="work-hero-copy">
          <p className="work-kicker"><span>03</span> / Events</p>
          <h1>Events</h1>
          <p className="events-subtitle">Conferences · Meetups · Activations</p>
          <p className="work-intro">
            Planned and operated global Web3 conferences, community programs,
            and on-site activations across markets.
          </p>
        </div>

        <div className="events-metrics" aria-label="Selected event outcomes">
          {eventMetrics.map((metric) => (
            <div className="events-metric" key={metric.label}>
              <span className="events-metric-icon" aria-hidden="true">{metric.icon}</span>
              <strong>{metric.value}</strong>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <EventRow
        number="03.1"
        title="Conferences"
        text="Supported international Web3 conferences across Asia, the Middle East, and Europe."
        items={conferences}
      />
      <EventRow
        number="03.2"
        title="Meetups"
        text="Organized community touchpoints that connected products, partners, and local audiences."
        items={meetups}
      />
      <EventRow
        number="03.3"
        title="Activations"
        text="Owned the practical details behind coherent partner and guest experiences."
        items={activations}
      />

      <section className="events-capabilities" aria-label="Event capabilities">
        <div><span>01</span><strong>End-to-End Execution</strong><p>Planning through operations and follow-up.</p></div>
        <div><span>02</span><strong>Stakeholder Management</strong><p>Partners, guests, vendors, and communities.</p></div>
        <div><span>03</span><strong>Logistics &amp; Operations</strong><p>Venues, registration, communication, and delivery.</p></div>
        <div><span>04</span><strong>Community Impact</strong><p>Experiences and content that sustain participation.</p></div>
      </section>
    </div>
  );
}

const operations = [
  {
    number: "01",
    title: "Venue Sourcing & Logistics",
    text: "Venue research, negotiation, transportation, catering, equipment, and vendor coordination.",
  },
  {
    number: "02",
    title: "Event Operations & On-site Management",
    text: "Setup, registration, guest relations, check-in, and troubleshooting for seamless execution.",
  },
  {
    number: "03",
    title: "Community Activation & Guest Experience",
    text: "Meetups, onboarding support, attendee engagement, and networking support.",
  },
  {
    number: "04",
    title: "Content & Marketing",
    text: "Coordinated photography and videography, and promoted events across social channels.",
  },
];

const selectedEvents = [
  {
    title: "Binance Blockchain Week 2024",
    city: "Dubai",
    role: "Event Operations",
    text: "Venue sourcing, vendor coordination, guest check-in, content capture, and wrap-up.",
    media: "/images/work/event-binance-week-optimized.jpg",
    mediaType: "image",
  },
  {
    title: "TOKEN2049 Dubai 2025",
    city: "Dubai",
    role: "Event Operations",
    text: "Sourced and prepared venues, coordinated with vendors, and supported smooth guest experience.",
    media: "/images/work/event-token2049-dubai.mp4",
    mediaType: "video",
  },
  {
    title: "DevCon 2024 · Pudgy Carnival",
    city: "Bangkok",
    role: "Event Operations",
    text: "Assisted with venue setup, event goods, attendee guidance, and on-site guest experience.",
    media: "/images/work/event-devcon-optimized.jpg",
    mediaType: "image",
  },
  {
    title: "GOPAX · Stellar Meetup",
    city: "Seoul",
    role: "Meetup Operations",
    text: "Coordinated the event, supported new-user sign-ups, and promoted the meetup through social media.",
    media: "/images/work/event-stellar-meetup.jpg",
    mediaType: "image",
  },
  {
    title: "GOPAX · Fintech Conference",
    city: "Seoul",
    role: "Conference Operations",
    text: "Managed booth setup and operations, supported user onboarding, and coordinated with conference vendors.",
    media: "/images/work/event-fintech-conference.jpg",
    mediaType: "image",
  },
  {
    title: "GOPAX · BTL Marketing",
    city: "Seoul",
    role: "Offline Marketing",
    text: "Planned and executed an offline campaign and coordinated on-site advertising operations.",
    media: "/images/work/event-btl-marketing.jpg",
    mediaType: "image",
  },
];

function SectionHeading({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <header className="events-case-heading">
      <h2><span>{number}</span>{title}</h2>
      <p>{text}</p>
    </header>
  );
}

export function EventsWork() {
  return (
    <div className="events-case-study">
      <aside className="events-case-sidebar">
        <p className="work-kicker"><span>03</span> / Events</p>
        <h1>Events</h1>
        <p>
          Planned and operated crypto meetups and conference activations across
          Asia, Europe, and the Middle East, from venue sourcing to on-site execution.
        </p>
        <nav aria-label="Events case study sections">
          <a href="#event-operations"><span>01</span>Event Operations</a>
          <a href="#selected-events"><span>02</span>Selected Events</a>
          <a href="#more-event-experience"><span>03</span>More Event Experience</a>
        </nav>
      </aside>

      <main className="events-case-content">
        <section className="events-case-section" id="event-operations">
          <SectionHeading
            number="01"
            title="Event Operations"
            text="End-to-end event management and marketing, from planning to on-site execution."
          />
          <div className="event-operation-grid">
            {operations.map((operation) => (
              <article key={operation.title}>
                <span>{operation.number}</span>
                <h3>{operation.title}</h3>
                <p>{operation.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="events-case-section" id="selected-events">
          <SectionHeading
            number="02"
            title="Selected Events"
            text="Key conferences and meetups I organized and supported."
          />
          <div className="selected-event-grid">
            {selectedEvents.map((event) => (
              <article className="selected-event-card" key={event.title}>
                <div className="selected-event-media">
                  {event.mediaType === "video" ? (
                    <video src={event.media} controls muted playsInline preload="metadata" aria-label={`${event.title} event video`} />
                  ) : (
                    <img src={event.media} alt={`${event.title} event`} />
                  )}
                </div>
                <div className="selected-event-copy">
                  <h3>{event.title}</h3>
                  <p className="selected-event-meta"><span>⌖</span>{event.city}<b>·</b>{event.role}</p>
                  <p>{event.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="events-case-section" id="more-event-experience">
          <SectionHeading
            number="03"
            title="More Event Experience"
            text="Additional conferences, meetups, and past event experience."
          />
          <div className="more-events-panel">
            <div className="more-events-list">
              <h3>Additional Events</h3>
              <ul>
                <li><strong>TOKEN2049 Singapore 2025</strong><span>Venue sourcing, contact, pricing, and availability</span></li>
                <li><strong>Korea Blockchain Week 2025</strong><span>Transportation, logistics, bus rental sourcing, and driver communication</span></li>
                <li><strong>ETHCC [8]</strong><span>Event support</span></li>
              </ul>
            </div>
            <div className="more-events-list">
              <h3>Earlier Experience — GOPAX</h3>
              <ul>
                <li><strong>Fintech Conference</strong><span>Booth operations, user onboarding, vendor coordination</span></li>
                <li><strong>BTL Marketing</strong><span>Offline campaigns including subway ads and station branding</span></li>
                <li><strong>Stellar Meetup</strong><span>Event hosting, catering, user onboarding, and social media promotion</span></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

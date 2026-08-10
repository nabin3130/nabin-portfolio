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
  },
  {
    title: "TOKEN2049 Dubai 2025",
    city: "Dubai",
    role: "Event Operations",
    text: "Sourced and prepared venues, coordinated with vendors, and supported smooth guest experience.",
  },
  {
    title: "TOKEN2049 Singapore 2025",
    city: "Singapore",
    role: "Event Support",
    text: "Sourced venues for 50–100 attendees and acted as the primary point of contact for restaurants.",
  },
  {
    title: "Korea Blockchain Week 2025",
    city: "Seoul",
    role: "Event Support",
    text: "Arranged transportation and coordinated with cafés for 100-person gatherings.",
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
                <div className="selected-event-placeholder">
                  <span>Event image to be added</span>
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
            <div className="more-events-years">
              <div><h3>2025</h3><ul><li>ETHCC [8]</li></ul></div>
              <div><h3>2024</h3><ul><li>Devcon 7</li><li>Taiwan Blockchain Week</li></ul></div>
            </div>
            <div className="more-events-earlier">
              <h3>Earlier Experience — GOPAX</h3>
              <ul><li>Stellar Meetup</li><li>Fintech Conference</li></ul>
            </div>
            <div className="more-events-collage" aria-label="Earlier event images awaiting assets">
              {Array.from({ length: 4 }, (_, index) => <div key={index}><span>Image to be added</span></div>)}
            </div>
          </div>
          <div className="events-case-note">
            <span aria-hidden="true">◎</span>
            <div><strong>Creating meaningful connections, on the ground.</strong><p>From venue planning to community engagement and content creation, I focus on delivering real impact at every event.</p></div>
          </div>
        </section>
      </main>
    </div>
  );
}

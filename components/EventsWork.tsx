const operations = [
  {
    number: "01",
    title: "Venue Sourcing & Logistics",
    text: "Venue research, vendor negotiation, catering, equipment setup, vendor coordination",
  },
  {
    number: "02",
    title: "On-site Management",
    text: "Event setup, registration, relationship management, guest check-in",
  },
  {
    number: "03",
    title: "Content & Marketing",
    text: "Content production, social media promotion, merchant sourcing",
  },
];

const selectedEvents = [
  {
    title: "Binance Blockchain Week 2024",
    city: "Dubai",
    role: "Operations",
    text: "Venue sourcing, vendor coordination, attendee registration, guest check-in, content capture",
    media: "/images/work/event-binance-week-optimized.jpg",
    mediaType: "image",
  },
  {
    title: "TOKEN2049 Dubai 2025",
    city: "Dubai",
    role: "On-site Operations",
    text: "Venue sourcing, catering setup, vendor coordination, video editor sourcing, on-site operations",
    media: "/images/work/event-token2049-dubai.mp4",
    mediaType: "video",
  },
  {
    title: "DevCon 2024 · Pudgy Carnival",
    city: "Bangkok",
    role: "Event Support",
    text: "Venue setup, event goods, attendee guidance, guest support",
    media: "/images/work/event-devcon-optimized.jpg",
    mediaType: "image",
  },
  {
    title: "Stellar Meetup",
    city: "Seoul",
    role: "Meetup Operations",
    bullets: ["Event coordination", "New-user sign-ups", "Social media promotion"],
    media: "/images/work/event-stellar-meetup.jpg",
    mediaType: "image",
  },
  {
    title: "Fintech Conference",
    city: "Seoul",
    role: "Conference Operations",
    bullets: ["Booth setup and operations", "User onboarding", "Conference vendor coordination"],
    media: "/images/work/event-fintech-conference.jpg",
    mediaType: "image",
  },
  {
    title: "BTL Marketing",
    city: "Seoul",
    role: "Offline Marketing",
    bullets: ["Offline campaign planning", "Campaign execution", "On-site advertising operations"],
    media: "/images/work/event-btl-marketing.jpg",
    mediaType: "image",
  },
];

const moreEventExperience = [
  {
    number: "01",
    title: "TOKEN2049 Singapore 2025",
    location: "Singapore",
    year: "2025",
    responsibilities: ["Venue sourcing", "Pricing", "Availability"],
  },
  {
    number: "02",
    title: "Korea Blockchain Week 2025",
    location: "Seoul",
    year: "2025",
    responsibilities: ["Transportation logistics", "Bus rental sourcing", "Driver communication"],
  },
  {
    number: "03",
    title: "ETHCC [8]",
    location: "Cannes",
    year: "2025",
    responsibilities: ["Event preparation", "On-site support", "Guest assistance"],
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
          <a href="#event-operations"><span>01</span>What I Do</a>
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
            text="Organized and supported key conferences and meetups"
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
                  {event.bullets ? (
                    <ul className="selected-event-bullets">
                      {event.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  ) : <p>{event.text}</p>}
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
          <div className="more-event-experience-grid">
            {moreEventExperience.map((event) => (
              <article className="more-event-experience-item" key={event.title}>
                <span className="more-event-number">{event.number}</span>
                <h3>{event.title}</h3>
                <p className="more-event-meta">{event.location}<span aria-hidden="true">·</span>{event.year}</p>
                <ul>
                  {event.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

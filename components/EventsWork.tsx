"use client";

import { useEffect, useState } from "react";
import { messages } from "@/data/messages";
import type { Locale } from "@/lib/locale";

function SectionHeading({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <header className="events-case-heading">
      <h2>
        <span>{number}</span>
        {title}
      </h2>
      <p>{text}</p>
    </header>
  );
}

export function EventsWork({ locale }: { locale: Locale }) {
  const t = messages[locale].events;
  const [activeSection, setActiveSection] = useState("event-operations");

  useEffect(() => {
    const sectionIds = t.nav.map((item) => item.id);
    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.35;
      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationLine) currentSection = id;
      });

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [t.nav]);

  return (
    <div className="events-case-study">
      <aside className="events-case-sidebar">
        <p className="work-kicker">
          <span>03</span> / {t.kicker}
        </p>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
        <nav aria-label={t.navLabel}>
          {t.nav.map((item) => (
            <a className={activeSection === item.id ? "active" : ""} href={`#${item.id}`} key={item.id}>
              <span>{item.number}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <main className="events-case-content">
        <section className="events-case-section" id="event-operations">
          <SectionHeading number={t.operations.number} title={t.operations.title} text={t.operations.text} />
          <div className="event-operation-grid">
            {t.operations.items.map((operation) => (
              <article key={operation.number}>
                <span>{operation.number}</span>
                <h3>{operation.title}</h3>
                <p>{operation.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="events-case-section" id="selected-events">
          <SectionHeading number={t.selected.number} title={t.selected.title} text={t.selected.text} />
          <div className="selected-event-grid">
            {t.selectedEvents.map((event) => (
              <article className="selected-event-card" key={event.media}>
                <div className="selected-event-media">
                  {event.mediaType === "video" ? (
                    <video src={event.media} controls muted playsInline preload="metadata" aria-label={`${event.title} ${t.eventVideo}`} />
                  ) : (
                    <img src={event.media} alt={`${event.title} ${t.eventImage}`} />
                  )}
                </div>
                <div className="selected-event-copy">
                  <h3>{event.title}</h3>
                  <p className="selected-event-meta">
                    <span>⌖</span>
                    {event.city}
                    <b>·</b>
                    {event.role}
                  </p>
                  <p className="selected-event-contribution">{event.bullets || event.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="events-case-section" id="more-event-experience">
          <SectionHeading number={t.more.number} title={t.more.title} text={t.more.text} />
          <div className="more-event-experience-grid">
            {t.moreEvents.map((event) => (
              <article className="more-event-experience-item" key={event.number}>
                <span className="more-event-number">{event.number}</span>
                <h3>{event.title}</h3>
                <p className="more-event-meta">
                  {event.location}
                  <span aria-hidden="true">·</span>
                  {event.year}
                </p>
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

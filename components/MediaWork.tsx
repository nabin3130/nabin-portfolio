"use client";

import { useEffect, useState } from "react";
import { messages } from "@/data/messages";
import type { Locale } from "@/lib/locale";

const socialLinks = [
  { label: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@realhomiesclub" },
  { label: "YouTube", icon: "youtube", href: "https://www.youtube.com/@realhomiesclub" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/realhomiesclub" },
  { label: "X", icon: "x", href: "https://x.com/real_BD_2025" },
];

function SocialIcon({ name }: { name: string }) {
  if (name === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3Z" fill="#fff" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" />
      </svg>
    );
  }

  if (name === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4h3.8l3.7 5.1L17 4h2l-5.6 6.6L20 20h-3.8l-4.1-5.7L7 20H5l6.2-7.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.1 3v11.3a4.2 4.2 0 1 1-3.6-4.1v2.5a1.8 1.8 0 1 0 1.2 1.7V3h2.4Zm0 0c.6 2.4 2 3.8 4.4 4.2v2.5a7.2 7.2 0 0 1-4.4-1.8Z" />
    </svg>
  );
}

export function MediaWork({ locale }: { locale: Locale }) {
  const t = messages[locale].media;
  const [activeSection, setActiveSection] = useState("media-interviews");

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
    <div className="media-case-study">
      <aside className="media-case-sidebar">
        <p className="work-kicker">
          <span>04</span> / {t.kicker}
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

      <main className="media-case-content">
        <section className="rhc-summary" aria-labelledby="rhc-title">
          <img className="rhc-logo" src="/images/work/real-homies-club-logo.png" alt={t.logoAlt} />
          <div className="rhc-summary-profile">
            <h2 id="rhc-title">{t.name}</h2>
            <p>{t.summary}</p>
            <div className="rhc-socials">
              {socialLinks.map((social) => (
                <a href={social.href} target="_blank" rel="noreferrer" aria-label={`${t.openOn} ${social.label}`} key={social.label}>
                  <SocialIcon name={social.icon} />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="media-case-section" id="media-interviews">
          <header className="media-case-section-heading">
            <div>
              <h2>
                <span>01</span> {t.interviewsTitle}
              </h2>
              <p>{t.interviewsText}</p>
            </div>
            <a href="https://www.tiktok.com/@realhomiesclub" target="_blank" rel="noreferrer">
              {t.viewAll}
            </a>
          </header>
          <div className="selected-interview-grid">
            {t.interviews.map((interview) => (
              <a className="selected-interview-card has-image" href={interview.href} target="_blank" rel="noreferrer" key={interview.number}>
                <div className="selected-interview-visual">
                  <img src={interview.image} alt={`${interview.title} ${t.thumbnail}`} />
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
              <h2>
                <span>02</span> {t.partnershipTitle}
              </h2>
              <p>{t.partnershipText}</p>
            </div>
          </header>
          <div className="media-partnership-panel">
            <div className="media-partnership-copy">
              <div className="media-partnership-title">
                <span>{t.partnershipName}</span>
              </div>
              <ul className="media-partnership-capabilities" aria-label={t.capabilitiesLabel}>
                {t.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="media-partnership-visual">
              <img src="/images/work/media-partnership.jpg" alt={t.partnershipAlt} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

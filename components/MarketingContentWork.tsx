"use client";

import { useEffect, useState } from "react";
import { messages } from "@/data/messages";
import type { Locale } from "@/lib/locale";

function MarketingHeading({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <header className="marketing-case-heading">
      <h2>
        <span>{number}</span>
        {title}
      </h2>
      <p>{text}</p>
    </header>
  );
}

function VideoCard({ title, href, image, thumbnail }: { title: string; href: string; image: string; thumbnail: string }) {
  return (
    <a className="marketing-video-card" href={href} target="_blank" rel="noreferrer">
      <div>
        <img src={image} alt={`${title} ${thumbnail}`} />
        <span aria-hidden="true">▶</span>
      </div>
      <h3>{title}</h3>
    </a>
  );
}

export function MarketingContentWork({ locale }: { locale: Locale }) {
  const t = messages[locale].marketing;
  const [activeSection, setActiveSection] = useState("content-announcements");

  useEffect(() => {
    const sectionIds = t.nav.map((item) => item.id);
    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.35;
      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationLine) currentSection = id;
      });

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

  const titleLines = t.title.split("\n");

  return (
    <div className="marketing-case-study">
      <aside className="marketing-case-sidebar">
        <p className="work-kicker">
          <span>02</span> / {t.kicker}
        </p>
        <h1>
          {titleLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < titleLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </h1>
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

      <main className="marketing-case-content">
        <section className="marketing-case-section" id="content-announcements">
          <MarketingHeading number={t.announcements.number} title={t.announcements.title} text={t.announcements.text} />
          <div className="marketing-channel-strip">
            <div>
              <span>{t.announcements.channelsLabel}</span>
              <strong>{t.announcements.channels}</strong>
            </div>
            <div>
              <span>{t.announcements.languagesLabel}</span>
              <strong>{t.announcements.languages}</strong>
            </div>
            <div>
              <span>{t.announcements.scopeLabel}</span>
              <strong>{t.announcements.scope}</strong>
            </div>
          </div>
          <div className="content-publishing-layout">
            <div className="published-content-proof">
              <h3>{t.announcements.examplesTitle}</h3>
              <p>{t.announcements.examplesText}</p>
              <div className="published-content-grid">
                {t.published.map((item) => {
                  const content = (
                    <>
                      <span>{item.channel}</span>
                      <div>
                        <img src={item.image} alt={item.alt} />
                      </div>
                    </>
                  );
                  return item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="medium-card" key={item.channel}>
                      {content}
                    </a>
                  ) : (
                    <article key={item.channel}>{content}</article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="marketing-case-section" id="pr-communications">
          <MarketingHeading number={t.pr.number} title={t.pr.title} text={t.pr.text} />
          <div className="communication-highlight-list">
            {t.pr.highlights.map((item) => (
              <div key={item}>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <a
            className="bilingual-pr-feature"
            href="https://medium.com/dsrv/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8%EC%9D%98-%EB%AF%B8%EB%9E%98%EB%A5%BC-%EC%97%AC%EB%8A%94-%EB%B0%94%EC%9D%B4%ED%94%84%EB%A1%9C%EC%8A%A4%ED%8A%B8-btcfi%EB%A1%9C-%EB%94%94%ED%8C%8C%EC%9D%B4%EB%A5%BC-%EC%9E%AC%EB%B0%9C%EA%B2%AC%ED%95%98%EB%8B%A4-builders-vibe-part-2-00bc43f69b3d"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bilingual-pr-image">
              <img src="/images/work/marketing-pr-builders-vibe.webp" alt={t.pr.articleAlt} />
            </div>
            <div>
              <p>{t.pr.eyebrow}</p>
              <h3>{t.pr.articleTitle}</h3>
              <span>{t.pr.read}</span>
            </div>
          </a>
        </section>

        <section className="marketing-case-section" id="influencer-marketing">
          <MarketingHeading number={t.influencer.number} title={t.influencer.title} text={t.influencer.text} />
          <div className="influencer-case-panel">
            <div className="influencer-case-copy">
              <span>{t.influencer.brand}</span>
              <h3>{t.influencer.caseTitle}</h3>
              <ul>
                {t.influencer.points.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="influencer-video-grid">
              {t.influencerVideos.map((video) => (
                <VideoCard {...video} thumbnail={t.videoThumbnail} key={video.href} />
              ))}
            </div>
          </div>
        </section>

        <section className="marketing-case-section" id="education-content">
          <MarketingHeading number={t.education.number} title={t.education.title} text={t.education.text} />
          <div className="education-subsection documentation-section">
            <div className="documentation-layout">
              <div className="documentation-overview">
                <header>
                  <div>
                    <h3>{t.education.docsTitle}</h3>
                    <p>{t.education.docsMeta}</p>
                  </div>
                </header>
                <p className="documentation-description">{t.education.docsText}</p>
                <div className="documentation-image">
                  <img src="/images/work/product-gitbook.jpg" alt={t.education.docsAlt} />
                </div>
              </div>
              <div className="selected-guides">
                <h3>{t.education.guidesTitle}</h3>
                <div className="selected-guide-list">
                  {t.guides.map((guide, index) => (
                    <a href={guide.href} target="_blank" rel="noreferrer" key={guide.href}>
                      <span>0{index + 1}</span>
                      <strong>{guide.title}</strong>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="education-subsection" id="video-tutorials">
            <header>
              <div>
                <h3>{t.education.videosTitle}</h3>
                <p>{t.education.videosMeta}</p>
                <p className="video-production-meta">{t.education.videosProduction}</p>
              </div>
            </header>
            <div className="tutorial-video-layout">
              <div className="tutorial-video-grid">
                {t.tutorials.map((video) => (
                  <VideoCard {...video} thumbnail={t.videoThumbnail} key={video.href} />
                ))}
              </div>
            </div>
          </div>

          <div className="education-subsection content-campaigns">
            <header>
              <div>
                <h3>{t.education.campaignsTitle}</h3>
                <p>{t.education.campaignsText}</p>
              </div>
            </header>
            <div className="content-campaign-grid">
              {t.campaigns.map((campaign, index) => (
                <article key={campaign.number}>
                  <div className={`campaign-visual${index === 0 ? " campaign-education" : ""}${index === 1 ? " campaign-metro" : ""}`}>
                    <img src={campaign.image} alt={campaign.alt} />
                  </div>
                  <span>{campaign.number}</span>
                  <h4>{campaign.title}</h4>
                  <p>{campaign.meta}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

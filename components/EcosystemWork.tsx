"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { messages } from "@/data/messages";
import { publicPath, type Locale } from "@/lib/locale";

export function EcosystemWork({ locale }: { locale: Locale }) {
  const t = messages[locale].ecosystem;
  const [activeMaterial, setActiveMaterial] = useState<number | null>(null);

  useEffect(() => {
    if (activeMaterial === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveMaterial(null);
      if (event.key === "ArrowLeft") {
        setActiveMaterial((current) => (current === null ? null : (current + t.materials.length - 1) % t.materials.length));
      }
      if (event.key === "ArrowRight") {
        setActiveMaterial((current) => (current === null ? null : (current + 1) % t.materials.length));
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMaterial, t.materials.length]);

  const selectedMaterial = activeMaterial === null ? null : t.materials[activeMaterial];
  const selectedIndex = activeMaterial ?? 0;

  return (
    <div className="ecosystem-work ecosystem-reference-layout">
      <section className="work-hero ecosystem-reference-hero">
        <div className="work-hero-copy">
          <p className="work-kicker">
            <span>01</span> / {t.kicker}
          </p>
          <h1 className="ecosystem-company-header">{t.companyHeader}</h1>
          <p className="work-intro">{t.intro}</p>
        </div>
        <div className="ecosystem-reference-metrics" aria-label={t.metricsLabel}>
          {t.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="work-story-section compact-ecosystem-section partnership-ecosystem-section">
        <div className="work-story-copy ecosystem-section-intro">
          <h2>
            {t.partnershipsTitle.split("\n").map((line, index, lines) => (
              <span key={line}>
                {line}
                {index < lines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>
          <p>{t.partnershipsBody}</p>
          <ol className="ecosystem-inline-process">
            {t.partnershipProcess.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="ecosystem-partnership-board">
          <div className="ecosystem-board-heading">
            <span>{t.boardEyebrow}</span>
            <strong>{t.boardTitle}</strong>
            <p>{t.boardText}</p>
          </div>
          <div className="partnership-material-grid">
            {t.materials.map((material, index) => (
              <button
                className="partnership-material-card"
                type="button"
                key={material.number}
                onClick={() => setActiveMaterial(index)}
                aria-label={`${t.openMaterial} ${material.title}`}
              >
                <div className="partnership-material-preview">
                  <img className={material.imageClass} src={material.image} alt={`${material.title} ${t.previewAlt}`} />
                </div>
                <div className="partnership-material-copy">
                  <span>{material.number}</span>
                  <h3>{material.title}</h3>
                  <p>{material.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="work-story-section compact-ecosystem-section community-growth-editorial">
        <div className="work-story-copy ecosystem-section-intro">
          <h2>
            {t.communityTitle.split("\n").map((line, index, lines) => (
              <span key={line}>
                {line}
                {index < lines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>
          <p>{t.communityBody}</p>
        </div>

        <div className="community-editorial-content">
          <div className="community-area-grid">
            {t.communityAreas.map((area) => (
              <Link
                className="community-area"
                href={publicPath(locale, area.href)}
                scroll={area.href.includes("#")}
                key={area.number}
              >
                <div className="community-area-meta">
                  <span>{area.number}</span>
                </div>
                <h3>{area.title}</h3>
                <p className="community-area-description">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="work-story-section compact-ecosystem-section">
        <div className="work-story-copy ecosystem-section-intro">
          <h2>{t.productTitle}</h2>
          <p>{t.productBody}</p>
          <ol className="ecosystem-product-process">
            {t.productSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="ecosystem-product-grid">
          {t.productCards.map((card) => (
            <Link className="ecosystem-product-card" href={publicPath(locale, card.href)} key={card.href}>
              <div className={card.href.includes("video") ? "ecosystem-video-visual" : "ecosystem-docs-visual"}>
                <img src={card.image} alt={card.alt} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="work-story-section compact-ecosystem-section hiring-section">
        <div className="work-story-copy ecosystem-section-intro">
          <h2>{t.hiringTitle}</h2>
        </div>
        <p className="hiring-copy">{t.hiringBody}</p>
      </section>

      {selectedMaterial ? (
        <div
          className="material-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedMaterial.number} / ${selectedMaterial.title}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveMaterial(null);
          }}
        >
          <div className="material-lightbox-panel">
            <header>
              <p>
                <span>{selectedMaterial.number}</span> / {selectedMaterial.title}
              </p>
              <button type="button" onClick={() => setActiveMaterial(null)} aria-label={t.lightboxClose}>
                ×
              </button>
            </header>
            <div className="material-lightbox-scroll">
              <img src={selectedMaterial.image} alt={`${selectedMaterial.title} ${t.fullAlt}`} />
            </div>
            <footer>
              <button type="button" onClick={() => setActiveMaterial((selectedIndex + t.materials.length - 1) % t.materials.length)}>
                {t.lightboxPrevious}
              </button>
              <span>
                {selectedIndex + 1} / {t.materials.length}
              </span>
              <button type="button" onClick={() => setActiveMaterial((selectedIndex + 1) % t.materials.length)}>
                {t.lightboxNext}
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </div>
  );
}

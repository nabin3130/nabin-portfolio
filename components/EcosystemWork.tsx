"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const ecosystemMetrics = [
  { value: "100+", label: "Partners onboarded" },
  { value: "50,000+", label: "Community reach" },
  { value: "10%", label: "Staking participation increase" },
];

const partnershipProcess = [
  "Partner Sourcing",
  "Value Proposition",
  "Enablement Assets",
  "Launch & Growth",
];

const partnershipMaterials = [
  {
    number: "01",
    title: "One-Page Pitch Deck",
    description: "Alliance strategy, service flow, and key benefits overview.",
    image: "/images/work/partnership/kyc-alliance-en.png",
    imageClass: "material-portrait",
  },
  {
    number: "02",
    title: "Localization",
    description: "KYC Alliance & CNS solution overview (Korean version).",
    image: "/images/work/partnership/kyc-alliance-ko.png",
    imageClass: "material-portrait",
  },
  {
    number: "03",
    title: "Validator Deck",
    description: "Technical architecture, rewards model, and node benefits.",
    image: "/images/work/partnership/validator-deck.jpg",
    imageClass: "material-portrait",
  },
  {
    number: "04",
    title: "Conference Pamphlet",
    description: "Bifrost Network introduction material for conferences.",
    image: "/images/work/partnership/conference-pamphlet.png",
    imageClass: "material-landscape",
  },
];

const communityAreas = [
  {
    number: "01",
    category: "Community",
    title: "Discord Community",
    description: "Community operations, member engagement, announcements, and ongoing support across global channels.",
  },
  {
    number: "02",
    category: "Ambassadors",
    title: "Ambassador Programs",
    description: "Recruited and coordinated global ambassadors to support local communities and ecosystem initiatives.",
  },
  {
    number: "03",
    category: "Influencers",
    title: "Influencer Partnerships",
    description: "Sourced and coordinated creators across X, YouTube, and Telegram for product and ecosystem campaigns.",
  },
  {
    number: "04",
    category: "Campaigns",
    title: "Community Campaigns",
    description: "Planned and executed community initiatives around product launches, NFTs, and ecosystem engagement.",
  },
];

const productSteps = [
  "Product Testing & Research",
  "Messaging & Positioning",
  "Documentation & Content",
  "Launch & Community Education",
];

export function EcosystemWork() {
  const [activeMaterial, setActiveMaterial] = useState<number | null>(null);

  useEffect(() => {
    if (activeMaterial === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveMaterial(null);
      if (event.key === "ArrowLeft") {
        setActiveMaterial((current) => current === null ? null : (current + partnershipMaterials.length - 1) % partnershipMaterials.length);
      }
      if (event.key === "ArrowRight") {
        setActiveMaterial((current) => current === null ? null : (current + 1) % partnershipMaterials.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMaterial]);

  const selectedMaterial = activeMaterial === null ? null : partnershipMaterials[activeMaterial];
  const selectedIndex = activeMaterial ?? 0;

  return (
    <div className="ecosystem-work ecosystem-reference-layout">
      <section className="work-hero ecosystem-reference-hero">
        <div className="work-hero-copy">
          <p className="work-kicker"><span>01</span> / Ecosystem Growth</p>
          <h1>Bifrost Network</h1>
          <p className="work-intro">
            Connecting a Web3 infrastructure product with users, partners, and
            communities through education, content, enablement, and ecosystem communication.
          </p>
          <div className="ecosystem-reference-metrics" aria-label="Selected ecosystem outcomes">
            {ecosystemMetrics.map((metric) => (
              <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
            ))}
          </div>
        </div>

      </section>

      <section className="work-story-section compact-ecosystem-section partnership-ecosystem-section">
        <div className="work-story-copy ecosystem-section-intro">
          <h2>Partnerships &amp;<br />Ecosystem</h2>
          <p>Managed partnerships across validators, wallets, infrastructure providers, and ecosystem stakeholders.</p>
          <ol className="ecosystem-inline-process">
            {partnershipProcess.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}
          </ol>
        </div>

        <div className="ecosystem-partnership-board">
          <div className="ecosystem-board-heading">
            <span>Bifrost Network</span>
            <strong>Strategic partnership enablement</strong>
            <p>Technical product value translated into clear, audience-specific materials.</p>
          </div>
          <div className="partnership-material-grid">
            {partnershipMaterials.map((material, index) => (
              <button
                className="partnership-material-card"
                type="button"
                key={material.title}
                onClick={() => setActiveMaterial(index)}
                aria-label={`Open ${material.title}`}
              >
                <div className="partnership-material-preview">
                  <img className={material.imageClass} src={material.image} alt={`${material.title} preview`} />
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
          <h2>Community &amp;<br />Growth</h2>
          <p>
            Built and managed a global community through community operations,
            ambassador programs, influencer partnerships, and ecosystem campaigns.
          </p>
        </div>

        <div className="community-editorial-content">
          <div className="community-area-grid">
            {communityAreas.map((area) => (
              <article className="community-area" key={area.number}>
                <div className="community-area-meta">
                  <span>{area.number}</span>
                  <p>{area.category}</p>
                </div>
                <h3>{area.title}</h3>
                <p className="community-area-description">{area.description}</p>
              </article>
            ))}
          </div>

          <Link className="community-marketing-cta" href="/work?work=marketing" scroll={false}>
            <span className="community-cta-copy">
              <strong>Explore related marketing work</strong>
              <p>See the content, campaigns, and communications behind the work.</p>
            </span>
            <b aria-hidden="true">→</b>
          </Link>
        </div>
      </section>

      <section className="work-story-section compact-ecosystem-section">
        <div className="work-story-copy ecosystem-section-intro">
          <h2>Product &amp; GTM</h2>
          <p>Made bridging, staking, wallets, and validator infrastructure easier to understand and adopt.</p>
          <ol className="ecosystem-product-process">
            {productSteps.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}
          </ol>
        </div>

        <div className="ecosystem-product-grid">
          <article className="ecosystem-product-card">
            <div className="ecosystem-docs-visual">
              <span>Bifrost Documentation</span>
              <strong>Getting Started<br />with Bifrost</strong>
              <i /><i /><i />
            </div>
            <h3>GitBook &amp; Product Docs</h3>
            <p>Bilingual guides, GIF tutorials, and product documentation.</p>
          </article>
          <article className="ecosystem-product-card">
            <div className="ecosystem-video-visual">
              <span>Product Education</span>
              <strong>Wallet &amp; Bridge<br />How-to Videos</strong>
              <b aria-hidden="true">▶</b>
            </div>
            <h3>Product Videos</h3>
            <p>YouTube tutorials for wallet and bridge features.</p>
          </article>
        </div>
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
              <p><span>{selectedMaterial.number}</span> / {selectedMaterial.title}</p>
              <button type="button" onClick={() => setActiveMaterial(null)} aria-label="Close material">×</button>
            </header>
            <div className="material-lightbox-scroll">
              <img src={selectedMaterial.image} alt={`${selectedMaterial.title} full material`} />
            </div>
            <footer>
              <button
                type="button"
                onClick={() => setActiveMaterial((selectedIndex + partnershipMaterials.length - 1) % partnershipMaterials.length)}
              >
                ← Previous
              </button>
              <span>{selectedIndex + 1} / {partnershipMaterials.length}</span>
              <button
                type="button"
                onClick={() => setActiveMaterial((selectedIndex + 1) % partnershipMaterials.length)}
              >
                Next →
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </div>
  );
}

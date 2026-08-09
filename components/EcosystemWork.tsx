"use client";

import { useEffect, useState } from "react";

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

const communityWork = [
  {
    label: "Editorial",
    title: "Medium & PR",
    text: "Product and ecosystem stories in Korean and English.",
    className: "ecosystem-community-editorial",
  },
  {
    label: "Education",
    title: "User Guides",
    text: "Clear explanations for technical product journeys.",
    className: "ecosystem-community-guides",
  },
  {
    label: "Community",
    title: "Social Content",
    text: "Editorial planning and multi-channel communication.",
    className: "ecosystem-community-social",
  },
  {
    label: "Campaigns",
    title: "Creator Partnerships",
    text: "Research, outreach, scripts, negotiation, and delivery.",
    className: "ecosystem-community-creator",
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
          <h1>Bifrost<br />Network</h1>
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

        <div className="ecosystem-reference-map" aria-label="Bifrost ecosystem map">
          <div className="ecosystem-reference-orbits"><i /><i /><i /></div>
          <div className="ecosystem-reference-center">BIFROST</div>
          <div className="reference-map-node map-community">
            <b>01</b><strong>Community</strong><span>Users · Education · Content</span>
          </div>
          <div className="reference-map-node map-partners">
            <b>02</b><strong>Partners</strong><span>Validators · Infrastructure</span>
          </div>
          <div className="reference-map-node map-product">
            <b>03</b><strong>Product</strong><span>Bridge · Staking · Wallet</span>
          </div>
        </div>
      </section>

      <section className="work-story-section compact-ecosystem-section">
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
            <strong>Strategic partnership<br />enablement.</strong>
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
                  <b aria-hidden="true">↗</b>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="work-story-section compact-ecosystem-section">
        <div className="work-story-copy ecosystem-section-intro">
          <h2>Community &amp;<br />Growth</h2>
          <p>Sustained community growth through editorial, education, social content, and creator campaigns.</p>
          <div className="ecosystem-featured-metric"><strong>50,000+</strong><span>community reach</span></div>
        </div>

        <div className="ecosystem-community-grid">
          {communityWork.map((item, index) => (
            <article className="ecosystem-community-card" key={item.title}>
              <div className={`ecosystem-community-visual ${item.className}`}>
                <span>0{index + 1}</span><strong>{item.label}</strong>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
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

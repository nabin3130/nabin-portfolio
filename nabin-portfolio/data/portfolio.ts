export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  challenge: string;
  role: string;
  actions: string[];
  outcomes: string[];
  artifacts: string[];
  takeaway: string;
};

export const metrics = [
  { value: "100+", label: "Partners onboarded" },
  { value: "8+", label: "Global conferences" },
  { value: "KR / EN", label: "Bilingual communication" },
  { value: "End-to-end", label: "GTM execution" },
];

export const expertise = [
  { title: "Product Go-to-Market", text: "Turn product value into coordinated launches, education, messaging, and market-facing programs." },
  { title: "Product Education", text: "Make technical products easier to adopt through guides, tutorials, videos, and self-service content." },
  { title: "Partnership Development", text: "Identify, engage, negotiate with, and support partners from first contact through activation." },
  { title: "Community & Ecosystem Growth", text: "Create programs and touchpoints that bring builders, users, partners, and communities together." },
  { title: "Content & PR", text: "Build editorial systems and multi-channel content that clarify product value and sustain attention." },
  { title: "Global Event Operations", text: "Plan and operate conferences, side events, and meetups across markets with end-to-end ownership." },
];

export const projects: Project[] = [
  {
    slug: "bifrost-gtm",
    index: "01",
    title: "Bifrost Network",
    subtitle: "Go-to-Market Execution",
    summary: "Connected a Web3 infrastructure product with users, partners, and communities through education, content, sales materials, and ecosystem communications.",
    tags: ["Product Education", "Content & PR", "Partner Enablement"],
    challenge: "Bifrost's products involved technical concepts such as bridging, staking, wallets, and validator infrastructure. Different audiences needed different explanations and support to understand the value and take action.",
    role: "BD & Ecosystem, with hands-on responsibility across product communication, partner materials, user education, content planning, and community-facing execution.",
    actions: [
      "Produced bilingual GitBook guides and GIF tutorials for core product journeys.",
      "Planned and created YouTube how-to content for wallet and bridge features.",
      "Developed one-pagers, validator decks, conference pamphlets, and partner-facing materials.",
      "Managed Medium, PR, social content, and editorial planning across Korean and English channels.",
      "Translated technical concepts into audience-specific value propositions for users, validators, and partners."
    ],
    outcomes: ["5,000+ article views", "10% increase in staking participation", "50,000+ community reach", "25% higher engagement"],
    artifacts: ["GitBook user guides", "YouTube tutorials", "One-page pitch deck", "Validator deck", "PR and Medium content", "Conference materials"],
    takeaway: "I can translate a complex technical product into coordinated GTM assets and experiences for multiple stakeholder groups."
  },
  {
    slug: "tomato",
    index: "02",
    title: "Tomato",
    subtitle: "Product Discovery & MVP",
    summary: "Identified event-discovery pain points and shaped an early-stage crypto event curation product from research through design and launch support.",
    tags: ["User Research", "Product Design", "Early-stage GTM"],
    challenge: "Crypto events were fragmented across channels, making it difficult for users to find relevant opportunities based on their interests and location.",
    role: "Co-founder responsible for product discovery, user research, UX direction, event data management, and early-stage marketing.",
    actions: [
      "Interviewed users to understand event discovery habits and pain points.",
      "Structured event information and recommendation concepts.",
      "Designed the MVP experience and core flows in Figma.",
      "Maintained event data and supported launch communication across Telegram and X."
    ],
    outcomes: ["Problem-to-MVP ownership", "Research-led UX decisions", "Launch-ready product concept"],
    artifacts: ["Figma prototype", "User research notes", "Event data structure", "Launch content"],
    takeaway: "I can move from an observed market problem to a testable product concept and early go-to-market execution."
  },
  {
    slug: "global-events",
    index: "03",
    title: "Global Community & Events",
    subtitle: "Ecosystem Programs",
    summary: "Operated Web3 community programs and events across Asia, the Middle East, and Europe, connecting partners and communities in person.",
    tags: ["Event Operations", "Stakeholder Management", "Community Growth"],
    challenge: "International Web3 events require fast coordination across venues, vendors, partners, guests, logistics, and post-event content, often under tight timelines.",
    role: "Event host and marketing operator responsible for planning, vendor coordination, registration, guest experience, on-site delivery, and event content.",
    actions: [
      "Supported events around Token2049, KBW, ETHCC, Devcon, Consensus, Binance Blockchain Week, and Taiwan Blockchain Week.",
      "Managed venues, vendors, catering, transportation, registration, QR check-in, and guest communications.",
      "Coordinated event photography, video, and social assets for post-event distribution.",
      "Resolved on-site issues and aligned multiple stakeholders across countries and time zones."
    ],
    outcomes: ["8+ international conferences", "Programs across 6+ markets", "End-to-end event ownership", "15–20% venue cost savings on selected events"],
    artifacts: ["Event run sheets", "Registration flows", "Venue and vendor plans", "Photo and video assets", "Community recaps"],
    takeaway: "I can turn ecosystem strategy into reliable, high-touch programs that strengthen relationships and community participation."
  }
];

export const supportingWork = [
  { category: "Product Education", title: "Guides that reduce friction", text: "Bilingual GitBook documentation, GIF tutorials, wallet and bridge walkthroughs." },
  { category: "Partner Enablement", title: "Materials that make value clear", text: "One-pagers, validator decks, conference pamphlets, and stakeholder-specific messaging." },
  { category: "Content Marketing", title: "Editorial systems, not one-off posts", text: "Medium, PR, social media, content calendars, competitive analysis, and distribution." },
  { category: "Creator Partnerships", title: "From outreach to execution", text: "KOL research, cold outreach, scripts, negotiation, contracts, payment, and campaigns." },
  { category: "Community Media", title: "Builder stories across platforms", text: "Real Homies Club and realBD content for TikTok, YouTube Shorts, Instagram, and X." }
];

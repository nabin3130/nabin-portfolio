import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContactFooter } from "@/components/ContactFooter";
import { ExternalSitePreview } from "@/components/ExternalSitePreview";

export const metadata: Metadata = {
  title: "Beyond Work | Nabin Kim",
  description: "Small products Nabin Kim builds around problems worth solving.",
  alternates: { canonical: "/beyond" },
  openGraph: {
    title: "Beyond Work | Nabin Kim",
    description: "Small products Nabin Kim builds around problems worth solving.",
    url: "/beyond",
  },
  twitter: {
    title: "Beyond Work | Nabin Kim",
    description: "Small products Nabin Kim builds around problems worth solving.",
  },
};

export default function BeyondWorkPage() {
  return (
    <main className="beyond-page">
      <Header />

      <section className="beyond-page-content">
        <header className="beyond-page-heading">
          <p>Beyond Work</p>
          <h1>
            <span>Projects &amp; Experiments</span>
          </h1>
          <div>Small products I build around problems I find worth solving.</div>
        </header>

        <article className="beyond-project beyond-project-primary">
          <div className="beyond-project-copy">
            <span className="beyond-project-number">01</span>
            <h2>Logout</h2>
            <p>
              A personal project exploring how we manage our digital accounts
              and data after death.
            </p>
            <div className="beyond-project-links">
              <a href="https://digital-legacy-five.vercel.app/" target="_blank" rel="noreferrer">
                Open project
              </a>
              <a href="https://github.com/nabin3130/digital-legacy" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <div className="beyond-project-preview logout-project-preview">
            <div className="beyond-preview-bar" aria-hidden="true">
              <span aria-hidden="true"><i /><i /><i /></span>
            </div>
            <ExternalSitePreview />
          </div>
        </article>

        <article className="beyond-project beyond-project-secondary">
          <div className="beyond-project-copy">
            <span className="beyond-project-number">02</span>
            <h2>YouTube Subtitle Uploader</h2>
            <p>Built to automate the repetitive process of manually uploading subtitles to YouTube.</p>
            <p className="beyond-project-detail">
              A small workflow automation tool created to reduce the time spent uploading multilingual subtitle files manually.
            </p>
            <p className="beyond-project-meta">Automation · YouTube API · JavaScript</p>
            <div className="beyond-project-links">
              <a href="https://github.com/nabin3130/yt-subtitle-tool" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <figure className="beyond-project-preview subtitle-project-preview">
            <img
              src="https://github.com/user-attachments/assets/f8476338-4f26-4ee3-ba77-5419e4dbea00"
              alt="YouTube Subtitle Uploader interface from the project repository"
            />
          </figure>
        </article>
      </section>

      <ContactFooter />
    </main>
  );
}

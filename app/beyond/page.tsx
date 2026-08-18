import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContactFooter } from "@/components/ContactFooter";
import { ExternalSitePreview } from "@/components/ExternalSitePreview";

export const metadata: Metadata = {
  title: "Beyond Work | Nabin Kim",
  description: "Personal projects and ideas explored by Nabin Kim outside of professional work.",
  alternates: { canonical: "/beyond" },
  openGraph: {
    title: "Beyond Work | Nabin Kim",
    description: "Personal projects and ideas explored by Nabin Kim outside of professional work.",
    url: "/beyond",
  },
  twitter: {
    title: "Beyond Work | Nabin Kim",
    description: "Personal projects and ideas explored by Nabin Kim outside of professional work.",
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
            <span>Projects and ideas I explore</span>
            <span>outside of my professional work.</span>
          </h1>
        </header>

        <article className="digital-legacy-project">
          <div className="digital-legacy-copy">
            <span>Personal Project</span>
            <h2>Logout</h2>
            <p>
              A personal project exploring how we manage our digital accounts
              and data after death.
            </p>
            <a
              className="digital-legacy-link"
              href="https://digital-legacy-five.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Open project
            </a>
          </div>
          <div className="digital-legacy-visual">
            <div className="digital-legacy-browser-bar">
              <span aria-hidden="true"><i /><i /><i /></span>
              <a href="https://digital-legacy-five.vercel.app/" target="_blank" rel="noreferrer">
                digital-legacy-five.vercel.app
              </a>
            </div>
            <ExternalSitePreview />
          </div>
        </article>
      </section>

      <ContactFooter />
    </main>
  );
}

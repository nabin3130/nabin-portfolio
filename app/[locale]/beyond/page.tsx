import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { ContactFooter } from "@/components/ContactFooter";
import { ExternalSitePreview } from "@/components/ExternalSitePreview";
import { messages } from "@/data/messages";
import { isLocale, pageMetadata } from "@/lib/locale";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const meta = messages[locale].meta;
  return pageMetadata(locale, {
    title: meta.beyondTitle,
    description: meta.beyondDescription,
    path: "/beyond",
  });
}

export default async function BeyondWorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = messages[locale].beyond;

  return (
    <main className="beyond-page">
      <Header locale={locale} path="/beyond" />

      <section className="beyond-page-content">
        <header className="beyond-page-heading">
          <p>{t.kicker}</p>
          <h1>
            <span>{t.title}</span>
          </h1>
          <div>{t.intro}</div>
        </header>

        <article className="beyond-project beyond-project-primary">
          <div className="beyond-project-copy">
            <span className="beyond-project-number">01</span>
            <h2>{t.logoutTitle}</h2>
            <p>{t.logoutText}</p>
            <div className="beyond-project-links">
              <a href="https://digital-legacy-five.vercel.app/" target="_blank" rel="noreferrer">
                {t.openProject}
              </a>
              <a href="https://github.com/nabin3130/digital-legacy" target="_blank" rel="noreferrer">
                {t.github}
              </a>
            </div>
          </div>
          <div className="beyond-project-preview logout-project-preview">
            <div className="beyond-preview-bar" aria-hidden="true">
              <span aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>
            <ExternalSitePreview locale={locale} />
          </div>
        </article>

        <article className="beyond-project beyond-project-secondary">
          <div className="beyond-project-copy">
            <span className="beyond-project-number">02</span>
            <h2>{t.uploaderTitle}</h2>
            <p>{t.uploaderText}</p>
            <p className="beyond-project-detail">{t.uploaderDetail}</p>
            <p className="beyond-project-meta">{t.uploaderMeta}</p>
            <div className="beyond-project-links">
              <a href="https://github.com/nabin3130/yt-subtitle-tool" target="_blank" rel="noreferrer">
                {t.github}
              </a>
            </div>
          </div>
          <figure className="beyond-project-preview subtitle-project-preview">
            <img
              src="https://github.com/user-attachments/assets/f8476338-4f26-4ee3-ba77-5419e4dbea00"
              alt={t.uploaderAlt}
            />
          </figure>
        </article>
      </section>

      <ContactFooter locale={locale} />
    </main>
  );
}

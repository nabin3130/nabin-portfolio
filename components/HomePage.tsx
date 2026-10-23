import Link from "next/link";
import { ContactFooter } from "@/components/ContactFooter";
import { Header } from "@/components/Header";
import { messages } from "@/data/messages";
import { publicPath, type Locale } from "@/lib/locale";

export function HomePage({ locale }: { locale: Locale }) {
  const t = messages[locale].home;

  return (
    <main className="profile-page">
      <Header locale={locale} path="/" />
      <div className="profile-wrap">
        <section className="profile-hero">
          <p className="profile-kicker">{t.kicker}</p>
          <h1>{t.name}</h1>
          <p className="profile-lede">{t.lede}</p>
          <div className="profile-contact" aria-label={locale === "ko" ? "연락처" : "Contact links"}>
            <a href="mailto:kimnabin01@gmail.com">kimnabin01@gmail.com</a>
            <span aria-hidden="true">|</span>
            <a href="https://t.me/tlsrns10" target="_blank" rel="noreferrer">
              @tlsrns10
            </a>
            <span aria-hidden="true">|</span>
            <a href="https://www.linkedin.com/in/nabinkim" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span aria-hidden="true">|</span>
            <a href="https://github.com/nabin3130" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>

        <section className="profile-section">
          <h2>{t.aboutLabel}</h2>
          <p>{t.about}</p>
        </section>

        <section className="profile-section">
          <div className="profile-section-heading">
            <h2>{t.experienceLabel}</h2>
            <p>{t.experienceRange}</p>
          </div>
          <ol className="timeline">
            {t.roles.map((role) => (
              <li className="timeline-item" key={role.dates + role.company}>
                <p className="timeline-when">{role.dates}</p>
                <div>
                  <h3>
                    <Link href={publicPath(locale, role.href)}>{role.company}</Link>
                  </h3>
                  <p className="timeline-role">{role.role}</p>
                  <p className="timeline-body">{role.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="profile-section profile-split">
          <div>
            <h2>{t.aiLabel}</h2>
            <p>{t.ai}</p>
          </div>
          <div>
            <h2>{t.educationLabel}</h2>
            <p>{t.education}</p>
          </div>
        </section>
      </div>
      <ContactFooter locale={locale} />
    </main>
  );
}

import { ContactFooter } from "@/components/ContactFooter";
import { Header } from "@/components/Header";
import { WorkContent } from "@/components/WorkContent";
import { WorkTabs } from "@/components/WorkTabs";
import { messages } from "@/data/messages";
import type { WorkCategory } from "@/data/work";
import type { Locale } from "@/lib/locale";

export function WorkPageLayout({ activeWork, locale }: { activeWork: WorkCategory; locale: Locale }) {
  const path = `/work/${activeWork}`;

  return (
    <main className="work-page">
      <Header locale={locale} path={path} />
      <section className="work-introduction">
        <div>
          <h1>{messages[locale].workIntro.title}</h1>
          <div className="work-introduction-links" aria-label={locale === "ko" ? "연락처" : "Contact links"}>
            <a href="mailto:kimnabin01@gmail.com" aria-label={locale === "ko" ? "김나빈에게 이메일" : "Email Nabin Kim"}>
              kimnabin01@gmail.com
            </a>
            <span aria-hidden="true">|</span>
            <a href="https://t.me/tlsrns10" target="_blank" rel="noreferrer" aria-label={locale === "ko" ? "텔레그램 @tlsrns10" : "Nabin Kim on Telegram"}>
              @tlsrns10
            </a>
            <span aria-hidden="true">|</span>
            <a href="https://www.linkedin.com/in/nabinkim" target="_blank" rel="noreferrer" aria-label={locale === "ko" ? "김나빈 LinkedIn" : "Nabin Kim on LinkedIn"}>
              LinkedIn
            </a>
            <span aria-hidden="true">|</span>
            <a href="https://github.com/nabin3130" target="_blank" rel="noreferrer" aria-label={locale === "ko" ? "김나빈 GitHub" : "Nabin Kim on GitHub"}>
              GitHub
            </a>
          </div>
        </div>
      </section>
      <div className="work-shell">
        <WorkTabs activeWork={activeWork} locale={locale} />
        <WorkContent activeWork={activeWork} locale={locale} />
      </div>
      <ContactFooter locale={locale} />
    </main>
  );
}

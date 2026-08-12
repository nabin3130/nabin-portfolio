import { Suspense } from "react";
import { Header } from "@/components/Header";
import { ContactFooter } from "@/components/ContactFooter";
import { WorkContent } from "@/components/WorkContent";
import { WorkTabs } from "@/components/WorkTabs";

export default function WorkPage() {
  return (
    <main className="work-page">
      <Header />
      <section className="work-introduction">
        <div>
          <h1>Nabin Kim</h1>
          <div className="work-introduction-links" aria-label="Contact links">
            <a href="mailto:kimnabin01@gmail.com" aria-label="Email Nabin Kim">
              <ContactIcon type="email" />
              <span>kimnabin01@gmail.com</span>
            </a>
            <a href="https://t.me/tlsrns10" target="_blank" rel="noreferrer" aria-label="Nabin Kim on Telegram">
              <ContactIcon type="telegram" />
              <span>@tlsrns10</span>
            </a>
            <a href="https://www.linkedin.com/in/nabinkim" target="_blank" rel="noreferrer" aria-label="Nabin Kim on LinkedIn">
              <ContactIcon type="linkedin" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
      <div className="work-shell">
        <Suspense fallback={<div className="work-tabs-placeholder" />}>
          <WorkTabs />
        </Suspense>
        <Suspense>
          <WorkContent />
        </Suspense>
      </div>
      <ContactFooter />
    </main>
  );
}

function ContactIcon({ type }: { type: "email" | "telegram" | "linkedin" }) {
  if (type === "email") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3zM4 7l8 6 8-6" /></svg>;
  }

  if (type === "telegram") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 17-7-4 16-5-6-4 3 1-5 8-5-10 4z" /></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9v10M5 5.5v.1M10 19v-6c0-2 1.3-4 3.8-4 2.6 0 4.2 1.7 4.2 4.5V19M10 9v10" /></svg>;
}

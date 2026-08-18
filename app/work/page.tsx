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
          <h1>Ecosystem Growth · Partnerships · Marketing</h1>
          <div className="work-introduction-links" aria-label="Contact links">
            <a href="mailto:kimnabin01@gmail.com" aria-label="Email Nabin Kim">
              kimnabin01@gmail.com
            </a>
            <span aria-hidden="true">|</span>
            <a href="https://t.me/tlsrns10" target="_blank" rel="noreferrer" aria-label="Nabin Kim on Telegram">
              @tlsrns10
            </a>
            <span aria-hidden="true">|</span>
            <a href="https://www.linkedin.com/in/nabinkim" target="_blank" rel="noreferrer" aria-label="Nabin Kim on LinkedIn">
              LinkedIn
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

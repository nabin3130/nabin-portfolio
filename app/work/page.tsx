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
          <p>Marketing and ecosystem professional with hands-on experience across product marketing, partnerships, content, community growth, and events.</p>
          <p>I work across strategy and execution, turning products and ideas into communications, campaigns, partnerships, and experiences that connect with users and communities.</p>
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

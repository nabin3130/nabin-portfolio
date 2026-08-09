import { Suspense } from "react";
import { Header } from "@/components/Header";
import { WorkContent } from "@/components/WorkContent";
import { WorkTabs } from "@/components/WorkTabs";

export default function WorkPage() {
  return (
    <main className="work-page">
      <Header />
      <div className="work-shell">
        <Suspense fallback={<div className="work-tabs-placeholder" />}>
          <WorkTabs />
        </Suspense>
        <Suspense>
          <WorkContent />
        </Suspense>
      </div>
    </main>
  );
}

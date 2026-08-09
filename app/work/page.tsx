import { Suspense } from "react";
import { EcosystemWork } from "@/components/EcosystemWork";
import { Header } from "@/components/Header";
import { WorkTabs } from "@/components/WorkTabs";

export default function WorkPage() {
  return (
    <main className="work-page">
      <Header />
      <div className="work-shell">
        <Suspense fallback={<div className="work-tabs-placeholder" />}>
          <WorkTabs />
        </Suspense>
        <EcosystemWork />
      </div>
    </main>
  );
}

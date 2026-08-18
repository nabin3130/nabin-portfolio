"use client";

import { useRouter } from "next/navigation";
import type { WorkCategory } from "@/data/work";

const tabs = [
  { key: "ecosystem", number: "01", label: "Ecosystem Growth", enabled: true },
  { key: "marketing", number: "02", label: "Marketing & Content", enabled: true },
  { key: "events", number: "03", label: "Events", enabled: true },
  { key: "media", number: "04", label: "Media", enabled: true },
] as const;

export function WorkTabs({ activeWork }: { activeWork: WorkCategory }) {
  const router = useRouter();

  function selectWork(key: WorkCategory, enabled: boolean) {
    if (!enabled || key === activeWork) return;
    router.push(`/work/${key}`, { scroll: false });
  }

  return (
    <nav className="work-tabs" aria-label="Work categories">
      {tabs.map((tab) => {
        const isActive = tab.key === activeWork;

        return (
          <button
            className={isActive ? "work-tab is-active" : "work-tab"}
            type="button"
            key={tab.key}
            onClick={() => selectWork(tab.key, tab.enabled)}
            aria-current={isActive ? "page" : undefined}
            aria-disabled={!tab.enabled}
            disabled={!tab.enabled}
          >
            <span>{tab.number}</span>
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}

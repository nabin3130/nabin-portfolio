"use client";

import { useRouter } from "next/navigation";
import { messages } from "@/data/messages";
import type { WorkCategory } from "@/data/work";
import { publicPath, type Locale } from "@/lib/locale";

const tabKeys = [
  { key: "ecosystem", number: "01" },
  { key: "marketing", number: "02" },
  { key: "events", number: "03" },
  { key: "media", number: "04" },
] as const;

export function WorkTabs({ activeWork, locale }: { activeWork: WorkCategory; locale: Locale }) {
  const router = useRouter();
  const labels = messages[locale].tabs;

  function selectWork(key: WorkCategory) {
    if (key === activeWork) return;
    router.push(publicPath(locale, `/work/${key}`), { scroll: false });
  }

  return (
    <nav className="work-tabs" aria-label={labels.label}>
      {tabKeys.map((tab) => {
        const isActive = tab.key === activeWork;
        return (
          <button
            className={isActive ? "work-tab is-active" : "work-tab"}
            type="button"
            key={tab.key}
            onClick={() => selectWork(tab.key)}
            aria-current={isActive ? "page" : undefined}
          >
            <span>{tab.number}</span>
            {labels[tab.key]}
          </button>
        );
      })}
    </nav>
  );
}

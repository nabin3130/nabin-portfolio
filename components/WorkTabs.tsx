"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const tabs = [
  { key: "ecosystem", number: "01", label: "Ecosystem Growth", enabled: true },
  { key: "marketing", number: "02", label: "Marketing & Content", enabled: false },
  { key: "events", number: "03", label: "Events", enabled: false },
  { key: "media", number: "04", label: "Media", enabled: false },
] as const;

export function WorkTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeWork = searchParams.get("work") ?? "ecosystem";

  function selectWork(key: string, enabled: boolean) {
    if (!enabled || key === activeWork) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("work", key);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <nav className="work-tabs" aria-label="Work categories">
      {tabs.map((tab) => {
        const isActive = tab.key === "ecosystem";

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

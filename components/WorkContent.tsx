"use client";

import { useSearchParams } from "next/navigation";
import { EcosystemWork } from "@/components/EcosystemWork";
import { MarketingContentWork } from "@/components/MarketingContentWork";
import { EventsWork } from "@/components/EventsWork";
import { MediaWork } from "@/components/MediaWork";

export function WorkContent() {
  const searchParams = useSearchParams();
  const requestedWork = searchParams.get("work");
  const activeWork = requestedWork === "marketing" || requestedWork === "events" || requestedWork === "media"
    ? requestedWork
    : "ecosystem";

  let content = <EcosystemWork />;

  if (activeWork === "marketing") content = <MarketingContentWork />;
  if (activeWork === "events") content = <EventsWork />;
  if (activeWork === "media") content = <MediaWork />;

  return (
    <div className="work-panel" key={activeWork}>
      {content}
    </div>
  );
}

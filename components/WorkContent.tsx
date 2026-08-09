"use client";

import { useSearchParams } from "next/navigation";
import { EcosystemWork } from "@/components/EcosystemWork";
import { MarketingContentWork } from "@/components/MarketingContentWork";
import { EventsWork } from "@/components/EventsWork";

export function WorkContent() {
  const searchParams = useSearchParams();
  const requestedWork = searchParams.get("work");
  const activeWork = requestedWork === "marketing" || requestedWork === "events"
    ? requestedWork
    : "ecosystem";

  if (activeWork === "marketing") {
    return <MarketingContentWork />;
  }

  if (activeWork === "events") {
    return <EventsWork />;
  }

  return <EcosystemWork />;
}

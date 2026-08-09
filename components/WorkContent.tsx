"use client";

import { useSearchParams } from "next/navigation";
import { EcosystemWork } from "@/components/EcosystemWork";
import { MarketingContentWork } from "@/components/MarketingContentWork";
import { EventsWork } from "@/components/EventsWork";
import { MediaWork } from "@/components/MediaWork";
import { IndependentWork } from "@/components/IndependentWork";

export function WorkContent() {
  const searchParams = useSearchParams();
  const requestedWork = searchParams.get("work");
  const activeWork = requestedWork === "marketing" || requestedWork === "events" || requestedWork === "media" || requestedWork === "independent"
    ? requestedWork
    : "ecosystem";

  if (activeWork === "marketing") {
    return <MarketingContentWork />;
  }

  if (activeWork === "events") {
    return <EventsWork />;
  }

  if (activeWork === "media") {
    return <MediaWork />;
  }

  if (activeWork === "independent") {
    return <IndependentWork />;
  }

  return <EcosystemWork />;
}

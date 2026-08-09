"use client";

import { useSearchParams } from "next/navigation";
import { EcosystemWork } from "@/components/EcosystemWork";
import { MarketingContentWork } from "@/components/MarketingContentWork";

export function WorkContent() {
  const searchParams = useSearchParams();
  const activeWork = searchParams.get("work") === "marketing" ? "marketing" : "ecosystem";

  if (activeWork === "marketing") {
    return <MarketingContentWork />;
  }

  return <EcosystemWork />;
}

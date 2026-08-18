import { EcosystemWork } from "@/components/EcosystemWork";
import { MarketingContentWork } from "@/components/MarketingContentWork";
import { EventsWork } from "@/components/EventsWork";
import { MediaWork } from "@/components/MediaWork";
import type { WorkCategory } from "@/data/work";

export function WorkContent({ activeWork }: { activeWork: WorkCategory }) {
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

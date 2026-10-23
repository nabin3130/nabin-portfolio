import { EcosystemWork } from "@/components/EcosystemWork";
import { MarketingContentWork } from "@/components/MarketingContentWork";
import { EventsWork } from "@/components/EventsWork";
import { MediaWork } from "@/components/MediaWork";
import type { WorkCategory } from "@/data/work";
import type { Locale } from "@/lib/locale";

export function WorkContent({ activeWork, locale }: { activeWork: WorkCategory; locale: Locale }) {
  let content = <EcosystemWork locale={locale} />;

  if (activeWork === "marketing") content = <MarketingContentWork locale={locale} />;
  if (activeWork === "events") content = <EventsWork locale={locale} />;
  if (activeWork === "media") content = <MediaWork locale={locale} />;

  return (
    <div className="work-panel" key={`${locale}-${activeWork}`}>
      {content}
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkPageLayout } from "@/components/WorkPageLayout";
import { messages } from "@/data/messages";
import { isWorkCategory, workCategories, type WorkCategory } from "@/data/work";
import { isLocale, pageMetadata } from "@/lib/locale";

export function generateStaticParams() {
  return (["en", "ko"] as const).flatMap((locale) => workCategories.map((category) => ({ locale, category })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;
  if (!isLocale(locale) || !isWorkCategory(category)) return {};

  const meta = messages[locale].meta;
  const titles: Record<WorkCategory, { title: string; description: string }> = {
    ecosystem: { title: meta.ecosystemTitle, description: meta.ecosystemDescription },
    marketing: { title: meta.marketingTitle, description: meta.marketingDescription },
    events: { title: meta.eventsTitle, description: meta.eventsDescription },
    media: { title: meta.mediaTitle, description: meta.mediaDescription },
  };

  return pageMetadata(locale, { ...titles[category], path: `/work/${category}` });
}

export default async function WorkCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  if (!isLocale(locale) || !isWorkCategory(category)) notFound();
  return <WorkPageLayout activeWork={category} locale={locale} />;
}

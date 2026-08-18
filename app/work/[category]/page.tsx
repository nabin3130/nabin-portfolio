import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkPageLayout } from "@/components/WorkPageLayout";
import { isWorkCategory, workCategories } from "@/data/work";

export function generateStaticParams() {
  return workCategories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!isWorkCategory(category)) return {};

  const url = `/work/${category}`;
  return {
    alternates: { canonical: url },
    openGraph: { url },
  };
}

export default async function WorkCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!isWorkCategory(category)) notFound();

  return <WorkPageLayout activeWork={category} />;
}

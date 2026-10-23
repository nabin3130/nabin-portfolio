import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { isWorkCategory } from "@/data/work";
import { isLocale, pageMetadata, publicPath } from "@/lib/locale";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, {
    title: locale === "ko" ? "작업 | 김나빈" : "Work | Nabin Kim",
    description: locale === "ko" ? "김나빈의 작업." : "Work by Nabin Kim.",
    path: "/work/ecosystem",
  });
}

export default async function WorkPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ work?: string | string[] }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { work } = await searchParams;
  const requestedWork = Array.isArray(work) ? work[0] : work;
  const category = isWorkCategory(requestedWork) ? requestedWork : "ecosystem";
  redirect(publicPath(locale, `/work/${category}`));
}

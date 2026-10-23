import { notFound } from "next/navigation";
import { messages } from "@/data/messages";
import { isLocale, pageMetadata, type Locale } from "@/lib/locale";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ko" }];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = messages[locale].meta;
  return pageMetadata(locale, { title: t.title, description: t.description, path: "/" });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return children;
}

export type { Locale };

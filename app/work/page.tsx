import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isWorkCategory } from "@/data/work";

export const metadata: Metadata = {
  alternates: { canonical: "/work/ecosystem" },
  openGraph: { url: "/work/ecosystem" },
};

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ work?: string | string[] }>;
}) {
  const { work } = await searchParams;
  const requestedWork = Array.isArray(work) ? work[0] : work;
  const category = isWorkCategory(requestedWork) ? requestedWork : "ecosystem";

  redirect(`/work/${category}`);
}

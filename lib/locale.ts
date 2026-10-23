import type { Metadata } from "next";

export const locales = ["en", "ko"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "ko";
}

/** Public URL for a locale. English stays unprefixed; Korean uses /ko. */
export function publicPath(locale: Locale, path: string) {
  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const bare = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const normalized = bare.startsWith("/") ? bare : `/${bare}`;

  if (locale === "en") return `${normalized}${hash}`;
  if (normalized === "/") return `/ko${hash}`;
  return `/ko${normalized}${hash}`;
}

export function pageMetadata(
  locale: Locale,
  { title, description, path }: { title: string; description: string; path: string },
): Metadata {
  const url = publicPath(locale, path);
  const en = path;
  const ko = publicPath("ko", path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en,
        ko,
        "x-default": en,
      },
    },
    openGraph: {
      title,
      description,
      url,
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

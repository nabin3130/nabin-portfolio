"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { publicPath, type Locale } from "@/lib/locale";

const MAX_AGE = 60 * 60 * 24 * 365;

function persistLocale(locale: Locale) {
  document.cookie = `locale=${locale};path=/;max-age=${MAX_AGE};SameSite=Lax`;
  try {
    localStorage.setItem("locale", locale);
  } catch {
    /* Storage can be blocked in private browsing. The cookie still persists. */
  }
}

export function LanguageToggle({ locale, path }: { locale: Locale; path: string }) {
  function onChoose(event: MouseEvent<HTMLAnchorElement>, next: Locale) {
    persistLocale(next);
    const hash = window.location.hash;
    if (!hash) return;
    event.preventDefault();
    window.location.assign(publicPath(next, path) + hash);
  }

  return (
    <div className="lang-toggle" role="group" aria-label={locale === "ko" ? "언어" : "Language"}>
      <Link
        href={publicPath("en", path)}
        hrefLang="en"
        className={locale === "en" ? "is-active" : undefined}
        aria-current={locale === "en" ? "true" : undefined}
        onClick={(event) => onChoose(event, "en")}
      >
        EN
      </Link>
      <span aria-hidden="true">/</span>
      <Link
        href={publicPath("ko", path)}
        hrefLang="ko"
        className={locale === "ko" ? "is-active" : undefined}
        aria-current={locale === "ko" ? "true" : undefined}
        onClick={(event) => onChoose(event, "ko")}
      >
        KR
      </Link>
    </div>
  );
}

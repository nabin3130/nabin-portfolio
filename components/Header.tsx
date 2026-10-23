import Link from "next/link";
import { LanguageToggle } from "@/components/LanguageToggle";
import { messages } from "@/data/messages";
import { publicPath, type Locale } from "@/lib/locale";

export function Header({ locale, path }: { locale: Locale; path: string }) {
  const t = messages[locale];
  const home = publicPath(locale, "/");
  const work = publicPath(locale, "/work/ecosystem");
  const beyond = publicPath(locale, "/beyond");
  const workActive = path.startsWith("/work") || path.startsWith("/projects");

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href={home} className="brand">
          {t.brand}
        </Link>
        <nav className="nav" aria-label={locale === "ko" ? "주요 메뉴" : "Primary"}>
          <Link href={home} aria-current={path === "/" ? "page" : undefined}>
            {t.nav.home}
          </Link>
          <Link href={work} aria-current={workActive ? "page" : undefined}>
            {t.nav.work}
          </Link>
          <Link href={beyond} aria-current={path.startsWith("/beyond") ? "page" : undefined}>
            {t.nav.beyond}
          </Link>
          <LanguageToggle locale={locale} path={path} />
        </nav>
      </div>
    </header>
  );
}

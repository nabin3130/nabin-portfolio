import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isStaticPath(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/videos") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  );
}

function withLocaleHeader(request: NextRequest, locale: "en" | "ko") {
  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);
  return headers;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isStaticPath(pathname)) return NextResponse.next();

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(url);
  }

  const isKorean = pathname === "/ko" || pathname.startsWith("/ko/");
  const preferred = request.cookies.get("locale")?.value;

  if (!isKorean && preferred === "ko") {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/ko" : `/ko${pathname}`;
    return NextResponse.redirect(url);
  }

  if (!isKorean) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
    return NextResponse.rewrite(url, { request: { headers: withLocaleHeader(request, "en") } });
  }

  return NextResponse.next({ request: { headers: withLocaleHeader(request, "ko") } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};

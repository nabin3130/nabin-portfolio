import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nabin.cc"),
  title: "Nabin Kim — Portfolio",
  description: "Portfolio of Nabin Kim, a bilingual Web3 go-to-market and ecosystem professional.",
  openGraph: {
    type: "website",
    siteName: "Nabin Kim",
    title: "Nabin Kim — Portfolio",
    description: "Portfolio of Nabin Kim, a bilingual Web3 go-to-market and ecosystem professional.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Nabin Kim — Portfolio",
    description: "Portfolio of Nabin Kim, a bilingual Web3 go-to-market and ecosystem professional.",
  },
  verification: {
    other: {
      "naver-site-verification": "039a347b8c22588a869ca053f2365cc10fa59c94",
    },
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const headerList = await headers();
  const lang = headerList.get("x-locale") === "ko" ? "ko" : "en";

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

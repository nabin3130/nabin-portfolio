import type { Metadata } from "next";
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
    url: "/work",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

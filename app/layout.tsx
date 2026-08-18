import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nabin.cc"),
  title: "Nabin Kim | Go-to-Market & Ecosystem Growth",
  description: "Portfolio of Nabin Kim, a bilingual Web3 go-to-market and ecosystem professional.",
  openGraph: {
    type: "website",
    siteName: "Nabin Kim",
    title: "Nabin Kim | Go-to-Market & Ecosystem Growth",
    description: "Portfolio of Nabin Kim, a bilingual Web3 go-to-market and ecosystem professional.",
    url: "/work",
  },
  twitter: {
    card: "summary",
    title: "Nabin Kim | Go-to-Market & Ecosystem Growth",
    description: "Portfolio of Nabin Kim, a bilingual Web3 go-to-market and ecosystem professional.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

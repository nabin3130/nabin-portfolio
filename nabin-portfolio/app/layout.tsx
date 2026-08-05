import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nabin Kim | Go-to-Market & Ecosystem Growth",
  description: "Portfolio of Nabin Kim, a bilingual Web3 go-to-market and ecosystem professional.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

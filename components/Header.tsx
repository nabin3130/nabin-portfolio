import Link from "next/link";

export function Header() {
  return (
    <header className="site-header shell">
      <Link href="/" className="brand">Nabin Kim</Link>
      <nav>
        <a href="#work">Work</a>
        <a href="#beyond">Beyond Work</a>
      </nav>
    </header>
  );
}

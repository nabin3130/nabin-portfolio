import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          Nabin Kim
        </Link>

        <nav className="nav">
          <Link href="/work?work=ecosystem">Work</Link>
          <Link href="/#beyond">Beyond Work</Link>
        </nav>
      </div>
    </header>
  );
}

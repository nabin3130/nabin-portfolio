import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          Nabin Kim
        </Link>

        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#beyond">Beyond Work</a>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">NABIN KIM</Link>
      <nav>
        <a href="/#about">About</a>
        <a href="/#expertise">Expertise</a>
        <a href="/#projects">Projects</a>
        <a href="/#work">Work</a>
        <a href="/#contact">Contact</a>
      </nav>
      <a className="resume-link" href="#">Resume ↗</a>
    </header>
  );
}

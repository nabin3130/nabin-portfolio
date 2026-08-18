const contacts = [
  { label: "Email", href: "mailto:kimnabin01@gmail.com", external: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nabinkim", external: true },
  { label: "Telegram", href: "https://t.me/tlsrns10", external: true },
];

export function ContactFooter() {
  return (
    <footer className="contact-footer">
      <div className="contact-footer-inner">
        <div className="contact-links" aria-label="Contact links">
          {contacts.map((contact) => (
            <a
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noreferrer" : undefined}
              key={contact.label}
            >
              {contact.label}
            </a>
          ))}
        </div>
        <p>© 2026 Nabin Kim. All rights reserved.</p>
      </div>
    </footer>
  );
}

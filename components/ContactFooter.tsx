const contacts = [
  { label: "@tlsrns10", type: "telegram", href: "https://t.me/tlsrns10" },
  { label: "LinkedIn", type: "linkedin", href: "https://www.linkedin.com/in/nabinkim" },
];

export function ContactFooter() {
  return (
    <footer className="contact-footer">
      <div className="contact-footer-inner">
        <div className="contact-links" aria-label="Contact links">
          {contacts.map((contact) => (
            <a
              href={contact.href}
              target={contact.type === "email" ? undefined : "_blank"}
              rel={contact.type === "email" ? undefined : "noreferrer"}
              aria-label={contact.type === "telegram" ? "Nabin Kim on Telegram" : "Nabin Kim on LinkedIn"}
              title={contact.type === "telegram" ? "Telegram" : "LinkedIn"}
              key={contact.label}
            >
              <ContactIcon type={contact.type} />
            </a>
          ))}
        </div>
        <p>© 2026 Nabin Kim</p>
      </div>
    </footer>
  );
}

function ContactIcon({ type }: { type: string }) {
  if (type === "telegram") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 17-7-4 16-5-6-4 3 1-5 8-5-10 4z" /></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9v10M5 5.5v.1M10 19v-6c0-2 1.3-4 3.8-4 2.6 0 4.2 1.7 4.2 4.5V19M10 9v10" /></svg>;
}

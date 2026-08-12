const contacts = [
  { label: "Email", href: "" },
  { label: "LinkedIn", href: "" },
  { label: "Telegram", href: "" },
];

export function ContactFooter() {
  return (
    <footer className="contact-footer">
      <div className="contact-footer-inner">
        <h2>Let’s connect.</h2>
        <div className="contact-links" aria-label="Contact links">
          {contacts.map((contact) => contact.href ? (
            <a
              href={contact.href}
              target={contact.label === "Email" ? undefined : "_blank"}
              rel={contact.label === "Email" ? undefined : "noreferrer"}
              key={contact.label}
            >
              {contact.label}
            </a>
          ) : (
            <span aria-disabled="true" key={contact.label}>{contact.label}</span>
          ))}
        </div>
        <p>© 2026 Nabin Kim</p>
      </div>
    </footer>
  );
}

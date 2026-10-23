import { messages } from "@/data/messages";
import type { Locale } from "@/lib/locale";

export function ContactFooter({ locale }: { locale: Locale }) {
  const t = messages[locale].footer;
  const contacts = [
    { label: t.email, href: "mailto:kimnabin01@gmail.com", external: false },
    { label: t.linkedin, href: "https://www.linkedin.com/in/nabinkim", external: true },
    { label: t.telegram, href: "https://t.me/tlsrns10", external: true },
    { label: t.github, href: "https://github.com/nabin3130", external: true },
  ];

  return (
    <footer className="contact-footer">
      <div className="contact-footer-inner">
        <div className="contact-links" aria-label={locale === "ko" ? "연락처" : "Contact links"}>
          {contacts.map((contact) => (
            <a
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noreferrer" : undefined}
              key={contact.href}
            >
              {contact.label}
            </a>
          ))}
        </div>
        <p>{t.rights}</p>
      </div>
    </footer>
  );
}

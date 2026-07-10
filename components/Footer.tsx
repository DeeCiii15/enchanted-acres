import Image from "next/image";
import Link from "next/link";
import { contactInfo, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/images/logo.png" alt="Enchanted Acres" width={140} height={70} />
          <p>Our enclosed barn is perfect for a wedding, business, party, or event.</p>
        </div>
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-links">
          <h4>Visit</h4>
          <address>
            {contactInfo.address[0]}
            <br />
            {contactInfo.address[1]}
          </address>
          <p>
            <Link href={contactInfo.phones[0].href}>{contactInfo.phones[0].label}</Link>
          </p>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; Enchanted Acres. All rights reserved.</p>
        <p className="demo-badge">Homepage design demo — not affiliated with production site</p>
      </div>
    </footer>
  );
}
